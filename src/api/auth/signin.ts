import type { FastifyInstance } from "fastify";
import bcrypt from "bcryptjs";
import { pool } from "../../db";
import { z } from "zod";
import { randomBytes } from "crypto";

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default async function signinRoute(app: FastifyInstance) {
  app.post("/auth/signin", async (req, reply) => {
    try {
      // 1️⃣ Validate payload
      const parsed = SignInSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({
          ok: false,
          error: "Invalid input",
          details: parsed.error.flatten(),
        });
      }

      const { email, password } = parsed.data;

      // 2️⃣ Check user exists
      const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
      const users = rows as any[];
      if (!users.length) return reply.code(404).send({ ok: false, error: "User not found" });
      const user = users[0];

      // 3️⃣ Verify password
      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) return reply.code(401).send({ ok: false, error: "Invalid credentials" });

      // 4️⃣ Check if an active session exists
      const [existing] = await pool.query(
        "SELECT id FROM sessions WHERE email = ? AND expire_at > NOW() LIMIT 1",
        [email]
      );
      const sessions = existing as any[];
      let sid: string;

      if (sessions.length) {
        sid = sessions[0].id;
        // Optional: extend session lifetime on reuse
        await pool.execute("UPDATE sessions SET expire_at = NOW() + INTERVAL 30 DAY WHERE id = ?", [sid]);
      } else {
        // Create new session
        sid = randomBytes(32).toString("hex");
        await pool.execute(
          `INSERT INTO sessions (id, user_id, name, email, expire_at)
           VALUES (?, ?, ?, ?, NOW() + INTERVAL 30 DAY)`,
          [sid, user.id, user.name, user.email]
        );
      }

      // 5️⃣ Set secure cookie so frontend auto-stays logged in
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
          user: { id: user.id, name: user.name, email: user.email },
        });
    } catch (err: any) {
      console.error("Signin error:", err);
      return reply.code(500).send({ ok: false, error: "Server error during signin" });
    }
  });
}
