#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const journalRoot =
  process.env.JOURNAL_ROOT ?? path.resolve(process.cwd(), "data/journal");
const journalFile = path.join(journalRoot, "reflections.json");

await fs.mkdir(journalRoot, { recursive: true });

async function loadEntries() {
  try {
    const raw = await fs.readFile(journalFile, "utf8");
    return JSON.parse(raw);
  } catch (error: any) {
    if (error.code === "ENOENT") {
      await fs.writeFile(journalFile, "[]", "utf8");
      return [];
    }
    if (error instanceof SyntaxError) {
      console.error("[journal-mcp] Invalid JSON in journal file, resetting", error);
      await fs.writeFile(journalFile, "[]", "utf8");
      return [];
    }
    throw error;
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

const server = new Server(
  {
    name: "journal-reflections",
    version: "0.1.0",
  },
  {
    capabilities: { tools: {} },
    instructions:
      "Stores and retrieves Gen-Z flavored reflection entries using local JSON storage.",
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "add_reflection_entry",
      description:
        "Save a new reflection entry with mood and optional tags to the local journal.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["text"],
        properties: {
          text: {
            type: "string",
            description: "Reflection text from the user.",
          },
          mood: {
            type: "string",
            description:
              "Optional mood label to associate with the entry (e.g. 'vibing', 'meh').",
          },
          tags: {
            type: "array",
            items: { type: "string" },
            description: "Optional list of quick tags like ['school', 'sleep'].",
          },
        },
      },
    },
    {
      name: "get_recent_reflections",
      description:
        "Retrieve the most recent reflection entries for recap or journaling review.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        properties: {
          limit: {
            type: "integer",
            minimum: 1,
            maximum: 30,
            default: 5,
            description: "Number of entries to return (default 5).",
          },
          days: {
            type: "integer",
            minimum: 1,
            maximum: 30,
            description:
              "Restrict results to the last N days (optional). Overrides limit if specified.",
          },
        },
      },
    },
    {
      name: "reflection_prompts",
      description:
        "Suggests cozy prompts to help the user reflect on the last few days.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        properties: {
          seed: {
            type: "integer",
            description:
              "Optional seed to make prompt selection deterministic during tests.",
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  const args = (params.arguments ?? {}) as Record<string, unknown>;
  switch (params.name) {
    case "add_reflection_entry": {
      const text = typeof args.text === "string" ? args.text.trim() : "";
      if (!text) {
        throw new Error("add_reflection_entry requires 'text'");
      }
      const mood = typeof args.mood === "string" ? args.mood.trim() : null;
      const tags = Array.isArray(args.tags)
        ? args.tags
            .map((tag) => (typeof tag === "string" ? tag.trim() : null))
            .filter(Boolean)
        : [];
      const entries = await loadEntries();
      const entry = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        text,
        mood,
        tags,
      };
      entries.push(entry);
      await saveEntries(entries);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ status: "saved", entry }, null, 2),
          },
        ],
      };
    }
    case "get_recent_reflections": {
      const entries = await loadEntries();
      const limitRaw =
        typeof args.limit === "number" ? Math.floor(args.limit) : 5;
      const limit = Math.max(1, Math.min(30, limitRaw));
      const daysRaw =
        typeof args.days === "number" ? Math.floor(args.days) : undefined;
      const days = daysRaw && daysRaw > 0 ? daysRaw : undefined;
      let filtered = entries;
      if (days) {
        const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
        filtered = entries.filter((entry: any) => {
          const ts = Date.parse(entry.timestamp);
          return Number.isFinite(ts) && ts >= cutoff;
        });
      }
      const recent = filtered.slice(-limit).reverse();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ count: recent.length, entries: recent }, null, 2),
          },
        ],
      };
    }
    case "reflection_prompts": {
      const seed =
        typeof args.seed === "number" && Number.isFinite(args.seed)
          ? Math.abs(Math.floor(args.seed))
          : Date.now();
      const prompts = [...PROMPTS];
      prompts.sort((a, b) =>
        Math.sin(seed + a.length) > Math.sin(seed + b.length) ? 1 : -1,
      );
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ prompts: prompts.slice(0, 3) }, null, 2),
          },
        ],
      };
    }
    default:
      throw new Error(`Unknown tool: ${params.name}`);
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("[journal-mcp] fatal error", error);
  process.exit(1);
});
