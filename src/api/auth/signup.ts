import type { FastifyInstance } from "fastify";
import bcrypt from "bcryptjs";
import { pool } from "../../db"; // from src/api/auth → ../../db
import { z } from "zod";
import { randomBytes } from "node:crypto";

const SignUpSchema = z.object({
  displayName: z.string().min(2).max(32),
  email: z.string().email(),
  password: z.string().min(8),
});

export default async function signupRoute(app: FastifyInstance) {
  // NOTE: NO /adk here. The prefix will be added where we register the plugin.
  app.post("/auth/signup", async (req, reply) => {
    const parsed = SignUpSchema.safeParse(req.body);
    console.log(parsed)
    if (!parsed.success) {
      return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
    }
    const { displayName, email, password } = parsed.data;

    const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
    if ((rows as any[]).length) return reply.code(409).send({ ok: false, error: "Email already registered" });

    const hash = await bcrypt.hash(password, 10);
    const [res] = await pool.execute(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [displayName, email, hash]
    );



    const sid = randomBytes(32).toString("hex");
    const userId = (res as any).insertId;

    // Then safely insert the session
    await pool.execute(
      `INSERT INTO sessions (id, user_id, name, email, expire_at)
   VALUES (?, ?, ?, ?, NOW() + INTERVAL 30 DAY)`,
      [sid, userId, displayName, email]
    );
    reply
      .setCookie("sid", sid, {
        httpOnly: true,
        sameSite: "lax",
        secure: false, // true in production w/ HTTPS
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      })
      .send({
        ok: true,
        user: { id: userId, name: displayName, email: email },
      });
  });
}
