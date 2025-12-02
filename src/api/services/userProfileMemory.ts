import { getSupabaseClient } from "./supabaseClient.js";
import { loadUserMemory } from "./userMemory.js";

export type ProfileRecord = { user_id: string; profile: any; updated_at?: string };
export type SummaryRecord = { user_id: string; persona: string | null; summary: string; updated_at?: string };
export type MemoryEntry = { id: string; title?: string; body?: string; tags?: any; persona?: string | null; updated_at?: string };

const PROFILE_TABLE = "user_profile";
const SUMMARY_TABLE = "user_memory_summary";
const MEMORIES_TABLE = "user_memories";

export async function loadProfile(userId: string) {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.from(PROFILE_TABLE).select("*").eq("user_id", userId).single();
  if (error && error.code !== "PGRST116") throw error;
  return (data as ProfileRecord) || null;
}

export async function saveProfile(userId: string, profile: any) {
  const supabase = getSupabaseClient();
  const { error } = await supabase.from(PROFILE_TABLE).upsert({ user_id: userId, profile });
  if (error) throw error;
  return { ok: true };
}

export async function loadSummary(userId: string, persona?: string) {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from(SUMMARY_TABLE)
    .select("*")
    .eq("user_id", userId)
    .eq("persona", persona ?? null)
    .single();
  if (error && error.code !== "PGRST116") throw error;
  return (data as SummaryRecord) || null;
}

export async function saveSummary(userId: string, persona: string | undefined, summary: string) {
  const supabase = getSupabaseClient();
  const { error } = await supabase
    .from(SUMMARY_TABLE)
    .upsert({ user_id: userId, persona: persona ?? null, summary });
  if (error) throw error;
  return { ok: true };
}

export async function addMemoryEntry(userId: string, persona: string | undefined, entry: { title?: string; body?: string; tags?: any }) {
  const supabase = getSupabaseClient();
  const { error } = await supabase.from(MEMORIES_TABLE).insert({
    user_id: userId,
    persona: persona ?? null,
    title: entry.title ?? null,
    body: entry.body ?? null,
    tags: entry.tags ?? null,
  });
  if (error) throw error;
  return { ok: true };
}

export async function loadRecentMemories(userId: string, persona?: string, limit = 5) {
  const supabase = getSupabaseClient();
  const query = supabase
    .from(MEMORIES_TABLE)
    .select("id,title,body,tags,persona,updated_at")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false })
    .limit(limit);
  if (persona) query.eq("persona", persona);
  const { data, error } = await query;
  if (error) throw error;
  return (data as MemoryEntry[]) || [];
}

export async function loadMemoryBundle(userId: string, persona?: string, limit = 5) {
  const [profile, summary, memories, latestMemory] = await Promise.all([
    loadProfile(userId),
    loadSummary(userId, persona),
    loadRecentMemories(userId, persona, limit),
    loadUserMemory(userId, persona),
  ]);
  return {
    profile: profile?.profile ?? null,
    summary: summary?.summary ?? "",
    memories,
    memory: latestMemory?.data ?? null,
  };
}
