// src/api/http.server.ts
import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import fastifyStatic from "@fastify/static";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import dotenv from "dotenv";

import { makeRunnerByName, prewarmRunners } from "./adapters/runner-adapter.js";
import signupRoute from "./auth/signup.js";
import signinRoute from "./auth/signin.js";
import { authCheckRoute } from "./auth/check.js";
import { logoutRoute } from "./auth/logout.js";
import ttsRoute from "./tts/route.js";
import memoryRoutes from "./memory.js";
import { requireSession } from "../middleware/requireSession.js";
import { z } from "zod";
import { ensureSupabaseSchema } from "./services/supabaseSchema.js";

// Only load .env in development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// Simple fixed-window rate limiter per key (ip)
type RateLimiter = (req: any, reply: any) => boolean;
function createRateLimiter(windowMs: number, max: number): RateLimiter {
  const buckets = new Map<string, { count: number; reset: number }>();
  return (req, reply) => {
    const key = req.ip || req.headers["x-forwarded-for"] || "unknown";
    const now = Date.now();
    const bucket = buckets.get(key);
    if (!bucket || bucket.reset <= now) {
      buckets.set(key, { count: 1, reset: now + windowMs });
      return true;
    }
    if (bucket.count >= max) {
      const retryAfter = Math.max(1, Math.ceil((bucket.reset - now) / 1000));
      reply.code(429).send({ error: "Too many requests", retryAfter });
      return false;
    }
    bucket.count += 1;
    return true;
  };
}

const authLimiter = createRateLimiter(60_000, 30); // 30 req/min per ip for auth
const agentLimiter = createRateLimiter(60_000, 120); // 120 req/min per ip for chat

// ----------------------------------------------------------
// 🔧 Setup
// ----------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loggerTransport = process.env.NODE_ENV === "development"
  ? (() => {
      try {
        return {
          target: "pino-pretty",
          options: { translateTime: "SYS:standard", ignore: "pid,hostname" },
        };
      } catch {
        return undefined;
      }
    })()
  : undefined;

const app = Fastify({ 
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    transport: loggerTransport
  },
  genReqId: () => randomUUID(),
  trustProxy: true,
  disableRequestLogging: process.env.NODE_ENV === 'production'
});

// Production error handling
process.on("unhandledRejection", (err: any) => {
  app.log.error({ err }, "unhandledRejection");
});
process.on("uncaughtException", (err: any) => {
  app.log.error({ err }, "uncaughtException");
  process.exit(1);
});

// ----------------------------------------------------------
// 🧩 CORS & Security
// ----------------------------------------------------------
const allowedOrigins = process.env.CORS_ORIGINS 
  ? process.env.CORS_ORIGINS.split(",").map(o => o.trim())
  : [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "http://euphoria-frontend-2025.s3-website.ap-south-1.amazonaws.com"
    ];

await app.register(cors, {
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
      return cb(null, true);
    }
    cb(new Error(`Origin ${origin} not allowed by CORS`), false);
  },
  credentials: true,
});

const cookieSecret = process.env.COOKIE_SECRET || "euphoria-default-secret-change-in-production";
await app.register(cookie, { secret: cookieSecret });

// Ensure Supabase tables exist when credentials allow a direct Postgres connection
await ensureSupabaseSchema();

// Lightweight rate limiting for auth + agent endpoints
app.addHook("onRequest", async (req, reply) => {
  const url = req.url || "";
  reply.header("x-request-id", req.id);
  if (url.startsWith("/adk/api/auth/")) {
    if (!authLimiter(req, reply)) return reply; // limiter already sent response
  } else if (url.startsWith("/adk/agents/")) {
    if (!agentLimiter(req, reply)) return reply;
  }
});

// Enforce HTTPS in production via simple redirect + HSTS
if (process.env.NODE_ENV === "production") {
  app.addHook("onRequest", async (req, reply) => {
    const proto = req.headers["x-forwarded-proto"] || req.protocol;
    if (proto !== "https") {
      const host = req.headers.host;
      if (host) {
        return reply.redirect(301, `https://${host}${req.raw.url}`);
      }
    }
  });

  app.addHook("onSend", async (_req, reply, payload) => {
    reply.header("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    return payload;
  });
}

const askBodySchema = z.object({
  input: z.string().min(1).max(4000),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      })
    )
    .optional(),
  memory: z.string().max(6000).optional(),
  userId: z.string().optional(),
});

// ----------------------------------------------------------
// 🔐 API Routes
// ----------------------------------------------------------
await app.register(signupRoute, { prefix: "/adk/api" });
await app.register(signinRoute, { prefix: "/adk/api" });
await app.register(authCheckRoute, { prefix: "/adk/api" });
await app.register(logoutRoute, { prefix: "/adk/api" });
await app.register(ttsRoute, { prefix: "/adk/api" });
await app.register(async (instance) => {
  instance.addHook("preHandler", requireSession);
  await memoryRoutes(instance);
}, { prefix: "/adk/api" });

// ----------------------------------------------------------
// 🤖 Agent Chat Route
// ----------------------------------------------------------
app.post<{
  Params: { name: string };
  Body: { input: string; history?: Array<{ role: string; content: string }>; memory?: string; userId?: string };
}>("/adk/agents/:name/ask", async (req, reply) => {
  try {
    const { name } = req.params;
    const parsed = askBodySchema.safeParse(req.body ?? {});
    if (!parsed.success) {
      return reply.code(400).send({ error: "Invalid input", details: parsed.error.flatten() });
    }
    const { input, history, memory } = parsed.data;

    const runner = await makeRunnerByName(name);
    if (!runner?.ask) {
      return reply.code(404).send({ error: `Agent ${name} not found` });
    }

    const result = await runner.ask(
      input,
      Array.isArray(history) ? history : undefined,
      typeof memory === "string" ? memory : undefined
    );
    return { 
      reply: typeof result === "string" ? result : String(result),
      persona: name,
      timestamp: new Date().toISOString()
    };
  } catch (err: any) {
    app.log.error({ err, params: req.params }, "Agent chat error");
    return reply.code(500).send({ 
      error: process.env.NODE_ENV === 'production' 
        ? "Internal server error" 
        : err?.message || "Unknown error"
    });
  }
});

// ----------------------------------------------------------
// 🩺 Health & Status Routes
// ----------------------------------------------------------
app.get("/health", async () => ({ 
  status: "healthy",
  timestamp: new Date().toISOString(),
  uptime: process.uptime(),
  memory: process.memoryUsage(),
  version: process.env.npm_package_version || "1.0.0"
}));

app.get("/adk/api/health", async () => ({ 
  status: "healthy",
  service: "EUPHORIA API",
  timestamp: new Date().toISOString(),
  personas: ["Helena", "Luna", "Milo", "Kai", "Sophie"]
}));

app.get("/version", async () => ({
  version: process.env.npm_package_version || "1.0.0",
  node: process.version,
  env: process.env.NODE_ENV || "development"
}));

// Debug endpoint to check file system
app.get("/debug/files", async () => {
  const fs = await import('fs');
  const uiDir = path.resolve(__dirname, "../../dist");
  
  try {
    const exists = fs.existsSync(uiDir);
    const files = exists ? fs.readdirSync(uiDir) : [];
    const assetsExists = fs.existsSync(path.join(uiDir, 'assets'));
    const assetsFiles = assetsExists ? fs.readdirSync(path.join(uiDir, 'assets')) : [];
    
    return {
      uiDir,
      exists,
      files,
      assetsExists,
      assetsFiles, // Show all files
      __dirname,
      cwd: process.cwd()
    };
  } catch (error) {
    return { error: error.message, uiDir, __dirname };
  }
});

// Explicit route to serve index.html
app.get("/", async (req, reply) => {
  const fs = await import('fs');
  const indexPath = path.resolve(__dirname, "../../dist/index.html");
  
  try {
    const html = fs.readFileSync(indexPath, 'utf-8');
    return reply.type('text/html').send(html);
  } catch (error) {
    app.log.error({ error, indexPath }, "Failed to serve index.html");
    return reply.code(500).send({ error: "Failed to load page" });
  }
});

// Serve static assets
app.get("/assets/*", async (req, reply) => {
  const fs = await import('fs');
  const assetPath = path.resolve(__dirname, "../../dist", req.url.substring(1));
  
  try {
    if (!fs.existsSync(assetPath)) {
      return reply.code(404).send({ error: "Asset not found" });
    }
    
    const content = fs.readFileSync(assetPath);
    const ext = path.extname(assetPath).toLowerCase();
    
    // Set appropriate content type
    if (ext === '.css') {
      reply.type('text/css');
    } else if (ext === '.js') {
      reply.type('application/javascript');
    } else if (ext === '.png') {
      reply.type('image/png');
    } else if (ext === '.svg') {
      reply.type('image/svg+xml');
    }
    
    return reply.send(content);
  } catch (error) {
    app.log.error({ error, assetPath }, "Failed to serve asset");
    return reply.code(500).send({ error: "Failed to load asset" });
  }
});

// ----------------------------------------------------------
// ⚡ Warm-up
// ----------------------------------------------------------
if (process.env.NODE_ENV === "production") {
  prewarmRunners(["Helena", "Luna"])
    .then(() => app.log.info("✅ Runners prewarmed"))
    .catch((e) => app.log.warn({ err: e }, "⚠️ Prewarm failed"));
}

// ----------------------------------------------------------
// 🚀 Server Startup
// ----------------------------------------------------------
const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "0.0.0.0";

app.addHook("onReady", async () => {
  app.log.info(`🚀 EUPHORIA API ready on ${HOST}:${PORT}`);
  if (process.env.NODE_ENV === 'development') {
    app.printRoutes();
  }
});

try {
  await app.listen({ port: PORT, host: HOST });
  app.log.info(`✅ Server running on http://${HOST}:${PORT}`);
} catch (err) {
  app.log.error({ err }, "❌ Failed to start server");
  process.exit(1);
}

// ----------------------------------------------------------
// 🧹 Graceful Shutdown
// ----------------------------------------------------------
const gracefulShutdown = async (signal: string) => {
  app.log.info(`📴 Received ${signal}, shutting down gracefully...`);
  try {
    await app.close();
    app.log.info("✅ Server closed successfully");
    process.exit(0);
  } catch (err) {
    app.log.error({ err }, "❌ Error during shutdown");
    process.exit(1);
  }
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

// Export for Lambda compatibility
export { app };
