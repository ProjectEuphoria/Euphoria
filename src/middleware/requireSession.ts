import type { FastifyReply, FastifyRequest } from "fastify";
import { getSupabaseClient, isSupabaseConfigured } from "../api/services/supabaseClient.js";

export async function requireSession(req: FastifyRequest, reply: FastifyReply) {
  const sid = (req.cookies as any)?.sid;
  if (!sid) {
    reply.code(401).send({ ok: false, error: "Not authenticated" });
    return false;
  }

  if (!isSupabaseConfigured()) {
    reply.code(503).send({
      ok: false,
      error: "Auth unavailable",
      detail: "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY on the server.",
    });
    return false;
  }

  const supabase = getSupabaseClient();
  const nowIso = new Date().toISOString();
  const { data: session, error } = await supabase
    .from("sessions")
    .select("user_id,name,email,expire_at")
    .eq("id", sid)
    .gt("expire_at", nowIso)
    .maybeSingle();

  if (error && error.code !== "PGRST116") {
    reply.code(500).send({ ok: false, error: "Session lookup failed" });
    return false;
  }

  if (!session) {
    reply.code(401).send({ ok: false, error: "Session expired or invalid" });
    return false;
  }

  (req as any).user = {
    id: session.user_id,
    name: session.name,
    email: session.email,
  };
  return true;
}
