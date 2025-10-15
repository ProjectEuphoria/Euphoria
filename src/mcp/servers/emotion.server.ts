#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const POSITIVE = new Set([
  "calm",
  "peace",
  "happy",
  "joy",
  "excited",
  "confident",
  "energized",
  "grateful",
  "motivated",
  "hopeful",
]);

const NEGATIVE = new Set([
  "sad",
  "tired",
  "anxious",
  "overwhelmed",
  "stressed",
  "worried",
  "angry",
  "lonely",
  "burned",
  "exhausted",
  "drained",
  "frustrated",
]);

function tokenize(text: string) {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean);
}

function analyze(text: string) {
  const tokens = tokenize(text);
  let score = 0;
  const hits: Record<string, number> = {};

  for (const token of tokens) {
    if (POSITIVE.has(token)) {
      score += 1;
      hits[token] = (hits[token] ?? 0) + 1;
    } else if (NEGATIVE.has(token)) {
      score -= 1;
      hits[token] = (hits[token] ?? 0) + 1;
    }
  }

  let mood: "positive" | "neutral" | "negative" = "neutral";
  if (score > 1) mood = "positive";
  else if (score < -1) mood = "negative";

  return {
    score,
    mood,
    highlightedWords: Object.entries(hits).map(([word, count]) => ({
      word,
      count,
      polarity: POSITIVE.has(word) ? "positive" : "negative",
    })),
    tokenCount: tokens.length,
  };
}

const server = new Server(
  {
    name: "emotion-analyzer",
    version: "0.1.0",
  },
  {
    capabilities: { tools: {} },
    instructions:
      "Performs lightweight sentiment analysis to detect encouraging vs. stressed tones in text.",
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "analyze_emotion",
      description:
        "Analyzes a text snippet for mood (positive/neutral/negative) and highlights emotion keywords.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["text"],
        properties: {
          text: {
            type: "string",
            description: "User message or journal entry to analyze.",
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  if (params.name !== "analyze_emotion") {
    throw new Error(`Unknown tool: ${params.name}`);
  }
  const args = (params.arguments ?? {}) as Record<string, unknown>;
  const text = typeof args.text === "string" ? args.text.trim() : "";
  if (!text) {
    throw new Error("analyze_emotion requires a non-empty 'text' string");
  }
  const result = analyze(text);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            text,
            ...result,
          },
          null,
          2,
        ),
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("[emotion-mcp] fatal error", error);
  process.exit(1);
});
