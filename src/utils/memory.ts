export type MemoryRecord = {
  userId: string;
  persona: string;
  memory: string;
  updatedAt: number;
};

const USER_ID_KEY = "empario_user_id";

export function getOrCreateUserId(): string {
  if (typeof window === "undefined") return "";
  const existing = window.localStorage.getItem(USER_ID_KEY);
  if (existing) return existing;
  const id = crypto.randomUUID();
  window.localStorage.setItem(USER_ID_KEY, id);
  return id;
}

function memoryKey(userId: string, persona: string) {
  return `empario_memory_${userId}_${persona.toLowerCase()}`;
}

export function loadLocalMemory(userId: string, persona: string): MemoryRecord | null {
  if (typeof window === "undefined" || !userId) return null;
  const raw = window.localStorage.getItem(memoryKey(userId, persona));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as MemoryRecord;
  } catch {
    return null;
  }
}

export function saveLocalMemory(userId: string, persona: string, memory: string) {
  if (typeof window === "undefined" || !userId) return;
  const record: MemoryRecord = {
    userId,
    persona,
    memory,
    updatedAt: Date.now(),
  };
  window.localStorage.setItem(memoryKey(userId, persona), JSON.stringify(record));
}

export function buildMemorySnapshot(history: Array<{ role: string; content: string }>, maxChars = 1500) {
  const text = history
    .slice(-20)
    .map((h) => `${h.role === "assistant" ? "Companion" : "You"}: ${h.content}`)
    .join("\n");
  return text.slice(0, maxChars);
}

export function buildMemoryString(
  bundle: { profile: any; summary?: string; memories?: Array<{ title?: string; body?: string }>; memory?: any },
  maxChars = 2000,
) {
  const parts: string[] = [];
  if (bundle.profile) {
    const profileJson = JSON.stringify(bundle.profile);
    if (profileJson.length) parts.push(`Profile:\n${profileJson}`);
  }
  if (bundle.summary) {
    parts.push(`Summary:\n${bundle.summary}`);
  }
  if (Array.isArray(bundle.memories) && bundle.memories.length) {
    const memText = bundle.memories
      .slice(0, 5)
      .map((m, i) => `• ${m.title || `Note ${i + 1}`}: ${m.body || ""}`)
      .join("\n");
    parts.push(`Key memories:\n${memText}`);
  }
  if (bundle.memory) {
    // Persisted conversation snapshot stored in user_memory
    const stringified = typeof bundle.memory === "string" ? bundle.memory : JSON.stringify(bundle.memory);
    if (stringified?.length) {
      parts.push(`Recent context:\n${stringified}`);
    }
  }
  const joined = parts.join("\n\n");
  return joined.slice(0, maxChars);
}
