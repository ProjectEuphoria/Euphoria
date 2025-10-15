// src/api/http.server.ts
import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";

// src/api/adapters/runner-adapter.ts
var cache = {};
async function makeRunnerByName(name) {
  if (cache[name]) return cache[name];
  switch (name) {
    case "Helena": {
      const { Helena } = await import("./agent-OPDE57RS.js");
      const built = await Helena();
      cache[name] = built.runner;
      return cache[name];
    }
    case "Milo": {
      const { Milo } = await import("./agent-FMVTK5ZF.js");
      const built = await Milo();
      cache[name] = built.runner;
      return cache[name];
    }
    case "Kai": {
      const { Kai } = await import("./agent-NMW7X73L.js");
      const built = await Kai();
      cache[name] = built.runner;
      return cache[name];
    }
    case "Sophie": {
      const { Sophie } = await import("./agent-ALDEGTVV.js");
      const built = await Sophie();
      cache[name] = built.runner;
      return cache[name];
    }
    case "Luna": {
      const { Luna } = await import("./agent-DXPVP4ER.js");
      const built = await Luna();
      cache[name] = built.runner;
      return cache[name];
    }
    default:
      throw new Error(`Unknown agent: ${name}`);
  }
}
async function prewarmRunners(names) {
  await Promise.all(names.map((n) => makeRunnerByName(n).catch(() => {
  })));
}

// src/api/http.server.ts
import dotenv from "dotenv";
dotenv.config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = Fastify({ logger: true });
await app.register(cors, { origin: true });
app.get("/adk/status", async () => ({ ok: true }));
app.post("/adk/agents/:name/ask", async (req, reply) => {
  try {
    const { name } = req.params;
    const { input } = req.body ?? {};
    if (!input || typeof input !== "string") {
      return reply.code(400).send({ error: 'Missing "input" string in body' });
    }
    const runner = await makeRunnerByName(name);
    if (!(runner == null ? void 0 : runner.ask)) throw new Error(`Runner for ${name} has no "ask"`);
    const out = await runner.ask(input);
    return { reply: typeof out === "string" ? out : String(out) };
  } catch (e) {
    req.log.error(e);
    return reply.code(500).send({ error: (e == null ? void 0 : e.message) || String(e) });
  }
});
if (process.env.NODE_ENV === "production") {
  const uiDir = path.resolve(__dirname, "../../dist/ui");
  await app.register(fastifyStatic, { root: uiDir, prefix: "/" });
  app.setNotFoundHandler((req, reply) => {
    var _a;
    if (req.raw.method === "GET" && ((_a = req.headers.accept) == null ? void 0 : _a.includes("text/html"))) {
      return reply.sendFile("index.html");
    }
    reply.code(404).send({ error: "Not found" });
  });
}
await prewarmRunners(["Helena"]);
var PORT = Number(process.env.API_PORT || 4e3);
var HOST = "0.0.0.0";
app.listen({ port: PORT, host: HOST }).then(() => {
  app.log.info(`ADK server on http://127.0.0.1:${PORT}`);
});
