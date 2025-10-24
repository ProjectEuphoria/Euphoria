// src/api/http.server.ts
import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import fastifyStatic from "@fastify/static";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

import { makeRunnerByName, prewarmRunners } from "./adapters/runner-adapter.js";
import signupRoute from "./auth/signup.js";
import signinRoute from "./auth/signin.js";
import { authCheckRoute } from "./auth/check.js";
import { logoutRoute } from "./auth/logout.js";
import ttsRoute from "./tts/route.js";

dotenv.config();

// ----------------------------------------------------------
// 🔧 Setup
// ----------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({ 
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    transport: process.env.NODE_ENV === 'development' ? {
      target: 'pino-pretty'
    } : undefined
  },
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
      "https://euphoria-frontend-2025.s3-website.ap-south-1.amazonaws.com"
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

// ----------------------------------------------------------
// 🔐 API Routes
// ----------------------------------------------------------
await app.register(signupRoute, { prefix: "/adk/api" });
await app.register(signinRoute, { prefix: "/adk/api" });
await app.register(authCheckRoute, { prefix: "/adk/api" });
await app.register(logoutRoute, { prefix: "/adk/api" });
await app.register(ttsRoute, { prefix: "/adk/api" });

// ----------------------------------------------------------
// 🤖 Agent Chat Route
// ----------------------------------------------------------
app.post<{
  Params: { name: string };
  Body: { input: string; history?: Array<{ role: string; content: string }> };
}>("/adk/agents/:name/ask", async (req, reply) => {
  try {
    const { name } = req.params;
    const { input } = req.body ?? {};
    
    if (!input || typeof input !== "string") {
      return reply.code(400).send({ error: 'Missing "input" string in body' });
    }

    const runner = await makeRunnerByName(name);
    if (!runner?.ask) {
      return reply.code(404).send({ error: `Agent ${name} not found` });
    }

    const result = await runner.ask(input);
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

// ----------------------------------------------------------
// 🧱 Static UI (Production only)
// ----------------------------------------------------------
if (process.env.NODE_ENV === "production") {
  const uiDir = path.resolve(__dirname, "../../dist");
  
  await app.register(fastifyStatic, {
    root: uiDir,
    prefix: "/",
    index: "index.html",
  });

  // SPA fallback
  app.setNotFoundHandler((req, reply) => {
    const accept = req.headers.accept || "";
    if (req.raw.method === "GET" && accept.includes("text/html")) {
      return reply.sendFile("index.html");
    }
    return reply.code(404).send({ error: "Not found" });
  });
}

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
