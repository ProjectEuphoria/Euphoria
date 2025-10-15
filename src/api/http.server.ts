import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { makeRunnerByName, prewarmRunners } from "./adapters/runner-adapter.js";
import dotenv from "dotenv";
import { registerLoginRoute } from "./auth/login.js";
import { registerSignupRoute } from "./auth/signup.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });

await registerLoginRoute(app);
await registerSignupRoute(app);

// Health
app.get("/adk/status", async () => ({ ok: true }));

// Chat route
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
  } catch (e: any) {
    req.log.error(e);
    return reply.code(500).send({ error: e?.message || String(e) });
  }
});

// In production, serve Vite build
if (process.env.NODE_ENV === "production") {
  const uiDir = path.resolve(__dirname, "../../dist/ui");
  await app.register(fastifyStatic, { root: uiDir, prefix: "/" });

  // SPA fallback
  app.setNotFoundHandler((req, reply) => {
    if (req.raw.method === "GET" && req.headers.accept?.includes("text/html")) {
      return reply.sendFile("index.html");
    }
    reply.code(404).send({ error: "Not found" });
  });
}

// Prewarm agents for zero-lag first response
await prewarmRunners(["Helena"]);

const PORT = Number(process.env.API_PORT || 4000);
const HOST = "0.0.0.0";
app.listen({ port: PORT, host: HOST }).then(() => {
  app.log.info(`ADK server on http://127.0.0.1:${PORT}`);
});
