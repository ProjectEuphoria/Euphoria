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

const app = Fastify({ logger: true });

// Log route registration (for debugging)
app.addHook("onRoute", (route) => {
  app.log.info(`📡 Registered route: [${route.method}] ${route.url}`);
});

// ----------------------------------------------------------
// 🧩 Plugins
// ----------------------------------------------------------
await app.register(cors, {
  origin: "http://localhost:5173", // your Vite frontend
  credentials: true,               // enables cookies
});

await app.register(cookie, {
  secret: "supersecretvalue", // optional signing secret
});


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
// 🧱 Serve Frontend in Production
// ----------------------------------------------------------
if (process.env.NODE_ENV === "production") {
  const uiDir = path.resolve(__dirname, "../../dist/ui");
  await app.register(fastifyStatic, { root: uiDir, prefix: "/" });

  app.setNotFoundHandler((req, reply) => {
    if (req.raw.method === "GET" && req.headers.accept?.includes("text/html")) {
      return reply.sendFile("index.html");
    }
    reply.code(404).send({ error: "Not found" });
  });
}

// ----------------------------------------------------------
// 🚀 Startup
// ----------------------------------------------------------
app.addHook("onReady", async () => {
  console.log("✅ Fastify middleware & routes fully loaded");
  console.log("📍 Routes registered:");
  app.printRoutes(); // prints all routes
});

await prewarmRunners(["Helena"]);

const PORT = Number(process.env.API_PORT || 4000);
const HOST = "0.0.0.0";

app.listen({ port: PORT, host: HOST }).then(() => {
  app.log.info(`🔥 ADK server running on http://127.0.0.1:${PORT}`);
});
