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

// EB is behind nginx/ALB → trust proxy headers
const app = Fastify({ logger: true, trustProxy: true });

// Crash guards so background errors never kill the process
process.on("unhandledRejection", (err: any) => {
  app.log.error({ err }, "unhandledRejection");
});
process.on("uncaughtException", (err: any) => {
  app.log.error({ err }, "uncaughtException");
});

// Log route registration (handy on EB)
app.addHook("onRoute", (route) => {
  app.log.info(`📡 [${route.method}] ${route.url}`);
});

// ----------------------------------------------------------
// 🧩 CORS & Cookies
// ----------------------------------------------------------
const rawOrigins = process.env.CORS_ORIGINS; // comma-separated
let allowedOrigins = (rawOrigins
  ? rawOrigins.split(",").map((o) => o.trim())
  : ["http://localhost:5173", "http://127.0.0.1:5173"]
)
  .map((o) => o.replace(/\/$/, ""))
  .filter(Boolean);

// In production, if not provided, allow EB hostname(s)
if (process.env.NODE_ENV === "production" && !rawOrigins) {
  // You can restrict instead of wildcard by setting EB_HOSTNAME
  const ebHost = process.env.EB_HOSTNAME; // e.g. euphoria-prod.eba-xxxx.ap-south-1.elasticbeanstalk.com
  if (ebHost) {
    allowedOrigins.push(`https://${ebHost}`, `http://${ebHost}`);
  } else {
    // allow *.elasticbeanstalk.com by default
    allowedOrigins.push("elasticbeanstalk:*");
  }
}

function isAllowedOrigin(origin: string) {
  if (allowedOrigins.includes("*")) return true;
  const normalized = origin.replace(/\/$/, "");
  if (allowedOrigins.includes(normalized)) return true;

  // Safely parse to get hostname (avoid throwing on non-absolute origins)
  try {
    const u = new URL(normalized);
    const host = u.hostname || "";
    if (
      allowedOrigins.includes("elasticbeanstalk:*") &&
      /\.elasticbeanstalk\.com$/i.test(host)
    ) {
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

await app.register(cors, {
  origin(origin, cb) {
    if (!origin) return cb(null, true); // same-origin or non-browser
    if (isAllowedOrigin(origin)) return cb(null, true);
    cb(new Error(`Origin ${origin} is not allowed by CORS policy`), false);
  },
  credentials: true,
});

const cookieSecret = process.env.COOKIE_SECRET || "replace-me";
if (!process.env.COOKIE_SECRET) {
  app.log.warn("COOKIE_SECRET missing; using insecure default. Set it on EB.");
}
await app.register(cookie, { secret: cookieSecret });

// Optional edge auth for /adk/*
const edgeSecret = process.env.EDGE_SECRET?.trim();
if (edgeSecret) {
  app.addHook("onRequest", async (req, reply) => {
    if (!req.url.startsWith("/adk/")) return;
    const provided = req.headers["x-edge-auth"];
    if (provided !== edgeSecret) {
      return reply.code(403).send({ error: "Forbidden" });
    }
  });
}

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
    if (!runner?.ask) throw new Error(`Runner for ${name} has no "ask"`);
    const out = await runner.ask(input);
    return { reply: typeof out === "string" ? out : String(out) };
  } catch (err: any) {
    app.log.error(err);
    return reply.code(500).send({ error: err?.message || "Internal error" });
  }
});

// ----------------------------------------------------------
// 🧱 Static UI (Vite build) — enabled in production
// ----------------------------------------------------------
if (process.env.NODE_ENV === "production") {
  // Runtime __dirname ≈ "<root>/dist/api" → UI at "../../dist"
  const uiDir = path.resolve(__dirname, "../../dist");

  await app.register(fastifyStatic, {
    root: uiDir,
    prefix: "/",
    index: "index.html",
  });

  // SPA fallback: serve index.html for unknown GETs that accept HTML
  app.setNotFoundHandler((req, reply) => {
    const accept = req.headers.accept || "";
    if (req.raw.method === "GET" && accept.includes("text/html")) {
      return reply.sendFile("index.html");
    }
    return reply.code(404).send({ error: "Not found" });
  });
}

// ----------------------------------------------------------
// 🩺 Health & Version
// ----------------------------------------------------------
app.get("/health", async () => ({ ok: true, ts: Date.now() }));
app.get("/version", async () => ({
  version: process.env.APP_VERSION || "unknown",
  node: process.version,
  env: process.env.NODE_ENV,
}));

// ----------------------------------------------------------
// ⚡ Warm-up (non-blocking on EB)
// ----------------------------------------------------------
prewarmRunners(["Helena"])
  .then(() => app.log.info("Runners prewarmed"))
  .catch((e) => app.log.warn({ err: e }, "prewarmRunners failed"));

// ----------------------------------------------------------
// 🚀 Startup (EB injects PORT; bind 0.0.0.0)
// ----------------------------------------------------------
app.addHook("onReady", async () => {
  app.log.info("✅ Fastify ready; routes below");
  app.printRoutes();
});

const PORT = Number(process.env.PORT || process.env.API_PORT || 8080);
const HOST = "0.0.0.0";

try {
  await app.listen({ port: PORT, host: HOST });
  app.log.info(`🔥 Server on :${PORT} (env=${process.env.NODE_ENV})`);
} catch (err) {
  app.log.error({ err }, "Failed to start server");
  process.exit(1);
}

// ----------------------------------------------------------
// 🧹 Graceful shutdown on EB stop
// ----------------------------------------------------------
for (const sig of ["SIGINT", "SIGTERM"] as const) {
  process.on(sig, async () => {
    app.log.info({ sig }, "Shutting down...");
    try {
      await app.close();
      process.exit(0);
    } catch (e) {
      app.log.error({ e }, "Error during shutdown");
      process.exit(1);
    }
  });
}

// Export app for Lambda
export { app };
