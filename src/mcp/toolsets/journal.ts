import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { Tool } from "../../api/adapters/google-ai-adapter.js";
import { sanitizeErrorMessage } from "../utils/http.js";

const journalRoot = path.resolve(process.cwd(), "data/journal");
const journalFile = path.join(journalRoot, "reflections.json");

async function ensureJournalFile() {
  await fs.mkdir(journalRoot, { recursive: true });
  try {
    await fs.access(journalFile);
  } catch (error: any) {
    if (error.code === "ENOENT") {
      await fs.writeFile(journalFile, "[]", "utf8");
    } else {
      throw error;
    }
  }
}

async function loadEntries(): Promise<any[]> {
  await ensureJournalFile();
  const raw = await fs.readFile(journalFile, "utf8");
  try {
    return JSON.parse(raw);
  } catch (error) {
    await fs.writeFile(journalFile, "[]", "utf8");
    return [];
  }
}

async function saveEntries(entries: any[]) {
  await fs.writeFile(journalFile, JSON.stringify(entries, null, 2), "utf8");
}

const PROMPTS = [
  "What tiny win are you proud of from the last 24 hours?",
  "What's one thing that felt overwhelming, and how did you cope?",
  "Who showed up for you recently? Send them a thank-you message.",
  "How would you describe today's vibe in three emojis?",
  "If your life was an anime episode today, what would the title be?",
  "What do you want tomorrow-you to remember from today?",
];

function summarizeEntries(entries: any[]) {
  const count = entries.length;
  const moods = entries
    .map((e) => e.mood)
    .filter(Boolean)
    .map((m: string) => m.toLowerCase());
  const moodCounts = moods.reduce<Record<string, number>>((acc, m) => {
    acc[m] = (acc[m] || 0) + 1;
    return acc;
  }, {});
  const topMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  const tags = entries.flatMap((e) => (Array.isArray(e.tags) ? e.tags : [])).map((t) => t.toLowerCase());
  const tagCounts = tags.reduce<Record<string, number>>((acc, t) => {
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {});
  const topTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag, uses]) => ({ tag, uses }));

  return { count, topMood, topTags };
}

export async function getJournalingTools(): Promise<Tool[]> {
  return [
    {
      name: "add_reflection_entry",
      description: "Save a reflection entry with optional mood/tags to local journal storage.",
      parameters: {
        type: "object",
        properties: {
          text: { type: "string", description: "Reflection text" },
          mood: { type: "string", description: "Mood label (e.g. 'vibing', 'meh')" },
          tags: { type: "array", items: { type: "string" }, description: "Optional tags like ['school','sleep']" },
        },
        required: ["text"],
      },
      handler: async (params: { text: string; mood?: string; tags?: string[] }) => {
        const text = params.text?.trim();
        if (!text) throw new Error("add_reflection_entry requires 'text'");
        try {
          const entries = await loadEntries();
          const entry = {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            text,
            mood: params.mood?.trim() || null,
            tags: Array.isArray(params.tags)
              ? params.tags
                  .map((t) => (typeof t === "string" ? t.trim() : null))
                  .filter(Boolean)
              : [],
          };
          entries.push(entry);
          await saveEntries(entries);
          return { status: "saved", entry };
        } catch (error) {
          return { status: "error", warning: sanitizeErrorMessage(error) };
        }
      },
    },
    {
      name: "get_recent_reflections",
      description: "Retrieve recent reflection entries (optionally limited by days).",
      parameters: {
        type: "object",
        properties: {
          limit: { type: "number", description: "Max entries to return (default 5, max 30)" },
          days: { type: "number", description: "Only include entries from the last N days" },
        },
      },
      handler: async (params: { limit?: number; days?: number }) => {
        try {
          const entries = await loadEntries();
          const limit = Math.max(1, Math.min(30, Math.floor(params.limit ?? 5)));
          const days = params.days && params.days > 0 ? Math.floor(params.days) : undefined;
          const filtered = days
            ? entries.filter((e) => {
                const ts = Date.parse(e.timestamp);
                return Number.isFinite(ts) && ts >= Date.now() - days * 24 * 60 * 60 * 1000;
              })
            : entries;
          const recent = filtered.slice(-limit).reverse();
          return { count: recent.length, entries: recent };
        } catch (error) {
          return { warning: sanitizeErrorMessage(error), entries: [] };
        }
      },
    },
    {
      name: "reflection_prompts",
      description: "Suggest cozy prompts to help the user reflect.",
      parameters: {
        type: "object",
        properties: { seed: { type: "number", description: "Optional seed for deterministic prompts" } },
      },
      handler: async (params: { seed?: number }) => {
        const seed = Number.isFinite(params.seed) ? Math.abs(Math.floor(params.seed!)) : Date.now();
        const prompts = [...PROMPTS];
        prompts.sort((a, b) => (Math.sin(seed + a.length) > Math.sin(seed + b.length) ? 1 : -1));
        return { prompts: prompts.slice(0, 3) };
      },
    },
    {
      name: "summarize_reflections",
      description: "Summarize existing entries, showing top moods/tags and total count.",
      parameters: {
        type: "object",
        properties: {},
      },
      handler: async () => {
        try {
          const entries = await loadEntries();
          const summary = summarizeEntries(entries);
          return { ...summary, entries: entries.slice(-5).reverse() };
        } catch (error) {
          return { warning: sanitizeErrorMessage(error) };
        }
      },
    },
  ];
}
