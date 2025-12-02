import type { FastifyInstance } from "fastify";
import { getSupabaseClient, isSupabaseConfigured } from "../services/supabaseClient.js";

// keep this exact path; prefix adds /adk/api automatically
export async function authCheckRoute(app: FastifyInstance) {
  app.get("/auth/check", async (req, reply) => {
    const sid = req.cookies?.sid;
    if (!sid) return reply.code(401).send({ ok: false });

    if (!isSupabaseConfigured()) {
      return reply.code(503).send({
        ok: false,
        error: "Auth temporarily unavailable",
        detail: "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY on the server.",
      });
    }

    const supabase = getSupabaseClient();
    try {
      const nowIso = new Date().toISOString();
      const { data: session, error } = await supabase
        .from("sessions")
        .select("user_id,name,email,expire_at")
        .eq("id", sid)
        .gt("expire_at", nowIso)
        .maybeSingle();
      if (error && error.code !== "PGRST116") throw error;
      if (!session) return reply.code(401).send({ ok: false });
      return reply.send({
        ok: true,
        user: { id: session.user_id, name: session.name, email: session.email },
        expireAt: session.expire_at,
      });
    } catch (err: any) {
      req.log.error({ err }, "auth/check db error");
      return reply.code(500).send({ ok: false, error: "auth check failed" });
    }
  });
}
