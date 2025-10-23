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

// trustProxy = true because EB sits behind nginx / ALB
const app = Fastify({ logger: true, trustProxy: true });

// Log route registration (for debugging)
app.addHook("onRoute", (route) => {
  app.log.info(`📡 Registered route: [${route.method}] ${route.url}`);
});

// Normalize CORS origins
const rawOrigins = process.env.CORS_ORIGINS;
let allowedOrigins = (rawOrigins
  ? rawOrigins.split(",").map((o) => o.trim())
  : ["http://localhost:5173", "http://127.0.0.1:5173"]
)
  .map((o) => o.replace(/\/$/, ""))
  .filter(Boolean);

// In production, automatically allow the EB hostname if not explicitly set
if (process.env.NODE_ENV === "production" && !rawOrigins) {
  allowedOrigins = ["*"]; // easiest; or restrict below:
  // const ebHost = process.env.EB_HOSTNAME; // optionally set via env
  // if (ebHost) allowedOrigins.push(`https://${ebHost}`, `http://${ebHost}`);
}

// ----------------------------------------------------------
// 🧩 Plugins
// ----------------------------------------------------------
await app.register(cors, {
  origin(origin, cb) {
    if (!origin) return cb(null, true);
    const normalized = origin.replace(/\/$/, "");
    if (
      allowedOrigins.includes("*") ||
      allowedOrigins.includes(normalized) ||
      /\.elasticbeanstalk\.com$/.test(new URL(normalized).hostname)
    ) {
      return cb(null, true);
    }
    cb(new Error(`Origin ${origin} is not allowed by CORS policy`), false);
  },
  credentials: true,
});

const cookieSecret = process.env.COOKIE_SECRET || "replace-me";
if (!process.env.COOKIE_SECRET) {
  app.log.warn(
    "COOKIE_SECRET is not set; using an insecure default. Set COOKIE_SECRET in production."
  );
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
// 🔐 Auth + TTS routes
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
    app.log.info(`💬 Chat request to agent "${name}" with input: ${input}`);

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
// 🧱 Serve Frontend in Production (Vite build)
// ----------------------------------------------------------
if (process.env.NODE_ENV === "production") {
  // At runtime __dirname === "<project-root>/dist/api"
  // So "../../dist" resolves back to "<project-root>/dist"
  const uiDir = path.resolve(__dirname, "../../dist");

  await app.register(fastifyStatic, {
    root: uiDir,
    prefix: "/",
    index: "index.html",
  });

  // SPA fallback: any GET asking for HTML returns index.html
  app.setNotFoundHandler((req, reply) => {
    const accept = req.headers.accept || "";
    if (req.raw.method === "GET" && accept.includes("text/html")) {
      return reply.sendFile("index.html");
    }
    return reply.code(404).send({ error: "Not found" });
  });
}

// ----------------------------------------------------------
// 🩺 Health
// ----------------------------------------------------------
app.get("/health", async () => ({ ok: true }));

// ----------------------------------------------------------
// ⚡ Warm-up
// ----------------------------------------------------------
await prewarmRunners(["Helena"]);

// ----------------------------------------------------------
// 🚀 Startup (EB-safe: uses EB's injected PORT & 0.0.0.0)
// ----------------------------------------------------------
app.addHook("onReady", async () => {
  console.log("✅ Fastify middleware & routes fully loaded");
  console.log("📍 Routes registered:");
  app.printRoutes();
});

const PORT = Number(process.env.PORT || process.env.API_PORT || 8080);
const HOST = "0.0.0.0";

try {
  await app.listen({ port: PORT, host: HOST });
  app.log.info(
    `🔥 ADK server running on :${PORT} (host=${HOST}, env=${process.env.NODE_ENV})`
  );
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
