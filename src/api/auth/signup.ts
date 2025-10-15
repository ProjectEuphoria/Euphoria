import type { FastifyInstance } from "fastify";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "../services/db.js"; // ESM path with .js

// Zod schema for incoming body
const signupSchema = z.object({
  displayName: z.string().trim().min(2).max(32),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function registerSignupRoute(app: FastifyInstance) {
  app.post("/api/auth/signup", async (req, reply) => {
    try {
      const parsed = signupSchema.safeParse(req.body);
      if (!parsed.success) {
        const msg = parsed.error.errors[0]?.message ?? "Invalid input";
        return reply.code(400).send({ error: msg });
      }

      const { displayName, email, password } = parsed.data;

      // Check duplicate
      const findStmt = db.prepare("SELECT id FROM users WHERE email = ?");
      const existing = findStmt.get(email);
      if (existing) {
        return reply.code(409).send({ error: "Email already registered" });
      }

      // Hash password
      const hash = await bcrypt.hash(password, 10);

      // Insert
      const insert = db.prepare(
        "INSERT INTO users (display_name, email, password) VALUES (?, ?, ?)"
      );
      const info = insert.run(displayName, email, hash);

      // Success
      return reply.code(201).send({
        ok: true,
        userId: Number(info.lastInsertRowid),
        email,
        displayName,
      });
    } catch (err) {
      req.log.error(err);
      return reply.code(500).send({ error: "Internal server error" });
    }
  });
}
