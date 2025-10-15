import type { FastifyInstance } from "fastify";
import { z } from "zod";
import bcrypt from "bcryptjs"; // for password verification
import { db } from "../services/db.js";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function registerLoginRoute(app: FastifyInstance) {
  app.post("/api/auth/login", async (req, reply) => {
    try {
      const parsed = loginSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({ error: parsed.error.errors[0].message });
      }

      const { email, password } = parsed.data;

      // find user
      const stmt = db.prepare("SELECT * FROM users WHERE email = ?");
      const user = stmt.get(email);

      console.log(user,typeof(user))

      if (!user) {
        return reply.code(404).send({ error: "User not found" });
      }

      // compare password hash
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return reply.code(401).send({ error: "Incorrect password" });
      }

      // success
      return { ok: true, message: "Login successful", userId: user.id, email: user.email };
    } catch (err) {
      req.log.error(err);
      return reply.code(500).send({ error: "Internal server error" });
    }
  });
}
