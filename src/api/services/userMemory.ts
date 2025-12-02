import { getSupabaseClient } from "./supabaseClient.js";

export type PersonaMemory = {
  user_id: string;
  persona?: string | null;
  data: any;
  updated_at?: string;
};

const TABLE = "user_memory";

export async function loadUserMemory(userId: string, persona?: string) {
  const supabase = getSupabaseClient();
  const query = supabase.from(TABLE).select("*").eq("user_id", userId).order("updated_at", { ascending: false }).limit(1);
  if (persona) query.eq("persona", persona);
  const { data, error } = await query;
  if (error) throw error;
  return (data?.[0] as PersonaMemory | null) ?? null;
}

export async function saveUserMemory(userId: string, persona: string | undefined, data: any) {
  const supabase = getSupabaseClient();
  const payload: PersonaMemory = { user_id: userId, persona: persona ?? null, data };
  const { error } = await supabase.from(TABLE).upsert(payload, { onConflict: "user_id,persona" });
  if (error) throw error;
  return { ok: true };
}
