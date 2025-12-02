import type { FastifyInstance } from "fastify";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { randomBytes } from "node:crypto";
import { getSupabaseClient, isSupabaseConfigured } from "../services/supabaseClient.js";

const SignUpSchema = z.object({
  displayName: z.string().min(2).max(32),
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

export default async function signupRoute(app: FastifyInstance) {
  // NOTE: NO /adk here. The prefix will be added where we register the plugin.
  app.post("/auth/signup", async (req, reply) => {
    if (!isSupabaseConfigured()) {
      return reply.code(503).send({
        ok: false,
        error: "Auth temporarily unavailable",
        detail: "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY on the server.",
      });
    }

    const parsed = SignUpSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
    }
    const { displayName, email, password } = parsed.data;
    const supabase = getSupabaseClient();

    const { data: existing, error: existingErr } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .maybeSingle();
    if (existingErr && existingErr.code !== "PGRST116") {
      app.log.error({ err: existingErr }, "Signup lookup failed");
      return reply.code(500).send({ ok: false, error: "Server error during signup" });
    }
    if (existing?.id) return reply.code(409).send({ ok: false, error: "Email already registered" });

    const hash = await bcrypt.hash(password, 10);
    const { data: userRow, error: insertErr } = await supabase
      .from("users")
      .insert({ name: displayName, email, password_hash: hash })
      .select("id,name,email")
      .single();
    if (insertErr || !userRow) {
      app.log.error({ err: insertErr }, "Signup insert failed");
      return reply.code(500).send({ ok: false, error: "Could not create user" });
    }

    const sid = randomBytes(32).toString("hex");
    const expireAt = new Date(Date.now() + sessionSeconds * 1000).toISOString();
    const userId = userRow.id;
    const { error: sessionErr } = await supabase.from("sessions").insert({
      id: sid,
      user_id: userId,
      name: displayName,
      email,
      expire_at: expireAt,
    });
    if (sessionErr) {
      app.log.error({ err: sessionErr }, "Signup session create failed");
      return reply.code(500).send({ ok: false, error: "Could not create session" });
    }

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
        user: { id: userId, name: displayName, email: email },
      });
  });
}
