import {
  PERSONA_TOOLKIT_VERSION
} from "./chunk-N4G4RHHX.js";

// src/api/http.server.ts
import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// src/api/adapters/runner-adapter.ts
var cache = {};
async function makeRunnerByName(name) {
  const cacheKey = `${name}@${PERSONA_TOOLKIT_VERSION}`;
  if (cache[cacheKey]) return cache[cacheKey];
  switch (name) {
    case "Helena": {
      const { Helena } = await import("./agent-W5FZIELE.js");
      const built = await Helena();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Milo": {
      const { Milo } = await import("./agent-NI5L3GQS.js");
      const built = await Milo();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Kai": {
      const { Kai } = await import("./agent-UFV2VCO2.js");
      const built = await Kai();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Sophie": {
      const { Sophie } = await import("./agent-PJL547UX.js");
      const built = await Sophie();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Luna": {
      const { Luna } = await import("./agent-EVEICU37.js");
      const built = await Luna();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    default:
      throw new Error(`Unknown agent: ${name}`);
  }
}
async function prewarmRunners(names) {
  await Promise.all(names.map((n) => makeRunnerByName(n).catch(() => {
  })));
}

// src/api/auth/signup.ts
import bcrypt from "bcryptjs";

// src/db.ts
import "dotenv/config";
import mysql from "mysql2/promise";
if (typeof window !== "undefined") {
  throw new Error("Do not import server-only db module in the browser");
}
var pool = mysql.createPool({
  host: process.env.DB_HOST ?? "127.0.0.1",
  port: Number(process.env.DB_PORT ?? "3306"),
  user: process.env.DB_USER ?? "Anurag",
  password: process.env.DB_PASSWORD ?? "apppass",
  database: process.env.DB_NAME ?? "Euphoria",
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONN_LIMIT ?? "10")
});

// src/api/auth/signup.ts
import { z } from "zod";
import { randomBytes } from "crypto";
var SignUpSchema = z.object({
  displayName: z.string().min(2).max(32),
  email: z.string().email(),
  password: z.string().min(8)
});
async function signupRoute(app2) {
  app2.post("/auth/signup", async (req, reply) => {
    const parsed = SignUpSchema.safeParse(req.body);
    console.log(parsed);
    if (!parsed.success) {
      return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
    }
    const { displayName, email, password } = parsed.data;
    const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
    if (rows.length) return reply.code(409).send({ ok: false, error: "Email already registered" });
    const hash = await bcrypt.hash(password, 10);
    const [res] = await pool.execute(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [displayName, email, hash]
    );
    const sid = randomBytes(32).toString("hex");
    const userId = res.insertId;
    await pool.execute(
      `INSERT INTO sessions (id, user_id, name, email, expire_at)
   VALUES (?, ?, ?, ?, NOW() + INTERVAL 30 DAY)`,
      [sid, userId, displayName, email]
    );
    reply.setCookie("sid", sid, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      // true in production w/ HTTPS
      path: "/",
      maxAge: 60 * 60 * 24 * 30
      // 30 days
    }).send({
      ok: true,
      user: { id: userId, name: displayName, email }
    });
  });
}

// src/api/auth/signin.ts
import bcrypt2 from "bcryptjs";
import { z as z2 } from "zod";
import { randomBytes as randomBytes2 } from "crypto";
var SignInSchema = z2.object({
  email: z2.string().email(),
  password: z2.string().min(8)
});
async function signinRoute(app2) {
  app2.post("/auth/signin", async (req, reply) => {
    try {
      const parsed = SignInSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({
          ok: false,
          error: "Invalid input",
          details: parsed.error.flatten()
        });
      }
      const { email, password } = parsed.data;
      const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
      const users = rows;
      if (!users.length) return reply.code(404).send({ ok: false, error: "User not found" });
      const user = users[0];
      const isMatch = await bcrypt2.compare(password, user.password_hash);
      if (!isMatch) return reply.code(401).send({ ok: false, error: "Invalid credentials" });
      const [existing] = await pool.query(
        "SELECT id FROM sessions WHERE email = ? AND expire_at > NOW() LIMIT 1",
        [email]
      );
      const sessions = existing;
      let sid;
      if (sessions.length) {
        sid = sessions[0].id;
        await pool.execute("UPDATE sessions SET expire_at = NOW() + INTERVAL 30 DAY WHERE id = ?", [sid]);
      } else {
        sid = randomBytes2(32).toString("hex");
        await pool.execute(
          `INSERT INTO sessions (id, user_id, name, email, expire_at)
           VALUES (?, ?, ?, ?, NOW() + INTERVAL 30 DAY)`,
          [sid, user.id, user.name, user.email]
        );
      }
      reply.setCookie("sid", sid, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        // true in production w/ HTTPS
        path: "/",
        maxAge: 60 * 60 * 24 * 30
        // 30 days
      }).send({
        ok: true,
        user: { id: user.id, name: user.name, email: user.email }
      });
    } catch (err) {
      console.error("Signin error:", err);
      return reply.code(500).send({ ok: false, error: "Server error during signin" });
    }
  });
}

// src/api/auth/check.ts
async function authCheckRoute(app2) {
  app2.get("/auth/check", async (req, reply) => {
    var _a;
    const sid = (_a = req.cookies) == null ? void 0 : _a.sid;
    if (!sid) {
      return reply.code(401).send({ ok: false });
    }
    return reply.send({ ok: true });
  });
}

// src/api/auth/logout.ts
async function logoutRoute(app2) {
  app2.post("/auth/logout", async (req, reply) => {
    reply.clearCookie("sid", {
      path: "/",
      // must match the same path as setCookie()
      httpOnly: true,
      sameSite: "lax",
      secure: false
      // true in production
    });
    return reply.send({ ok: true, message: "Logged out successfully" });
  });
}

// src/api/http.server.ts
dotenv.config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = Fastify({ logger: true });
app.addHook("onRoute", (route) => {
  app.log.info(`\u{1F4E1} Registered route: [${route.method}] ${route.url}`);
});
await app.register(cors, {
  origin: "http://localhost:5173",
  // your Vite frontend
  credentials: true
  // enables cookies
});
await app.register(cookie, {
  secret: "supersecretvalue"
  // optional signing secret
});
await app.register(signupRoute, { prefix: "/adk/api" });
await app.register(signinRoute, { prefix: "/adk/api" });
await app.register(authCheckRoute, { prefix: "/adk/api" });
await app.register(logoutRoute, { prefix: "/adk/api" });
app.post("/adk/agents/:name/ask", async (req, reply) => {
  try {
    const { name } = req.params;
    const { input } = req.body ?? {};
    app.log.info(`\u{1F4AC} Chat request to agent "${name}" with input: ${input}`);
    if (!input || typeof input !== "string") {
      return reply.code(400).send({ error: 'Missing "input" string in body' });
    }
    const runner = await makeRunnerByName(name);
    if (!(runner == null ? void 0 : runner.ask)) throw new Error(`Runner for ${name} has no "ask"`);
    const out = await runner.ask(input);
    return { reply: typeof out === "string" ? out : String(out) };
  } catch (err) {
    app.log.error(err);
    return reply.code(500).send({ error: (err == null ? void 0 : err.message) || "Internal error" });
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
app.addHook("onReady", async () => {
  console.log("\u2705 Fastify middleware & routes fully loaded");
  console.log("\u{1F4CD} Routes registered:");
  app.printRoutes();
});
await prewarmRunners(["Helena"]);
var PORT = Number(process.env.API_PORT || 4e3);
var HOST = "0.0.0.0";
app.listen({ port: PORT, host: HOST }).then(() => {
  app.log.info(`\u{1F525} ADK server running on http://127.0.0.1:${PORT}`);
});
