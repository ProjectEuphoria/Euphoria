import type { FastifyInstance } from "fastify";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { randomBytes } from "crypto";
import { getSupabaseClient, isSupabaseConfigured } from "../services/supabaseClient.js";

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const MAX_DAYS = 30;
const DEFAULT_DAYS = 7;
const sessionDays = Math.min(
  MAX_DAYS,
  Math.max(1, Number(process.env.SESSION_MAX_AGE_DAYS || DEFAULT_DAYS)),
);
const sessionSeconds = sessionDays * 24 * 60 * 60;

export default async function signinRoute(app: FastifyInstance) {
  app.post("/auth/signin", async (req, reply) => {
    if (!isSupabaseConfigured()) {
      return reply.code(503).send({
        ok: false,
        error: "Auth temporarily unavailable",
        detail: "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY on the server.",
      });
    }

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
      const supabase = getSupabaseClient();

      // 2️⃣ Check user exists
      const { data: user, error: userErr } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .maybeSingle();
      if (userErr && userErr.code !== "PGRST116") {
        throw userErr;
      }
      if (!user) return reply.code(404).send({ ok: false, error: "User not found" });

      // 3️⃣ Verify password
      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) return reply.code(401).send({ ok: false, error: "Invalid credentials" });

      // 4️⃣ Check if an active session exists
      const nowIso = new Date().toISOString();
      const { data: existingSession, error: sessionErr } = await supabase
        .from("sessions")
        .select("id")
        .eq("email", email)
        .eq("user_id", user.id)
        .gt("expire_at", nowIso)
        .order("expire_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (sessionErr && sessionErr.code !== "PGRST116") throw sessionErr;

      let sid = existingSession?.id as string | undefined;
      const expireAt = new Date(Date.now() + sessionSeconds * 1000).toISOString();

      if (sid) {
        await supabase.from("sessions").update({ expire_at: expireAt }).eq("id", sid);
      } else {
        sid = randomBytes(32).toString("hex");
        const { error: insertSessionErr } = await supabase.from("sessions").insert({
          id: sid,
          user_id: user.id,
          name: user.name,
          email: user.email,
          expire_at: expireAt,
        });
        if (insertSessionErr) throw insertSessionErr;
      }

      // 5️⃣ Set secure cookie so frontend auto-stays logged in
      reply
        .setCookie("sid", sid, {
          httpOnly: true,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
          path: "/",
          maxAge: sessionSeconds,
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
