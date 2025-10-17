#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import {
  fetchWithTimeout,
  parseJsonBody,
  sanitizeErrorMessage,
} from "../utils/http";

const USER_AGENT = "EuphoriaBot/0.1 (+https://euphoria.local)";

const server = new Server(
  {
    name: "quotes-feeder",
    version: "0.1.0",
  },
  {
    capabilities: { tools: {} },
    instructions:
      "Fetches positive affirmations and inspo quotes from ZenQuotes for Gen-Z pep talks.",
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "daily_affirmation",
      description:
        "Grab a daily affirmation or quote from ZenQuotes with an optional vibe filter.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        properties: {
          keyword: {
            type: "string",
            description:
              "Optional keyword to bias the quote selection (e.g. 'anxiety', 'motivation').",
          },
        },
      },
    },
    {
      name: "affirmation_batch",
      description:
        "Pull a batch of positive quotes (max 5) for carousel or message drip.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        properties: {
          count: {
            type: "integer",
            minimum: 1,
            maximum: 5,
            default: 3,
            description: "Number of quotes to return (default 3).",
          },
        },
      },
    },
  ],
}));

async function fetchQuote(keyword?: string) {
  const endpoint = keyword
    ? `https://zenquotes.io/api/quotes/${encodeURIComponent(keyword)}`
    : "https://zenquotes.io/api/random";
  const response = await fetchWithTimeout(endpoint, {
    headers: { "User-Agent": USER_AGENT },
    timeoutMs: 7000,
  });
  if (!response.ok) {
    if (response.status === 429) {
      throw new Error(
        "ZenQuotes request failed: 429 (rate limited). Try again in a minute or reduce frequency.",
      );
    }
    throw new Error(`ZenQuotes request failed: ${response.status}`);
  }
  const data = await parseJsonBody<any[]>(response, "ZenQuotes response");
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("ZenQuotes response was empty");
  }
  const entry = data[Math.floor(Math.random() * data.length)];
  return {
    quote: entry.q,
    author: entry.a,
    tags: entry.h ? entry.h.replace(/<\/?[^>]+(>|$)/g, "").split(",") : [],
  };
}

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  const args = (params.arguments ?? {}) as Record<string, unknown>;
  switch (params.name) {
    case "daily_affirmation": {
      const keyword =
        typeof args.keyword === "string" ? args.keyword.trim() : undefined;
      try {
        const quote = await fetchQuote(keyword);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ keyword: keyword ?? null, quote }, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  keyword: keyword ?? null,
                  warning: `ZenQuotes request failed: ${sanitizeErrorMessage(error)}`,
                },
                null,
                2,
              ),
            },
          ],
        };
      }
    }
    case "affirmation_batch": {
      const countRaw =
        typeof args.count === "number" ? Math.floor(args.count) : 3;
      const count = Math.max(1, Math.min(5, countRaw));
      const quotes = [] as Array<{ quote: string; author: string; tags: string[] }>;
      let warning: string | undefined;
      for (let i = 0; i < count; i++) {
        try {
          await new Promise((resolve) => setTimeout(resolve, 250));
          quotes.push(await fetchQuote());
        } catch (error) {
          warning = `ZenQuotes request failed: ${sanitizeErrorMessage(error)}`;
          break;
        }
      }
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                requestedCount: count,
                deliveredCount: quotes.length,
                quotes,
                warning,
              },
              null,
              2,
            ),
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
  console.error("[quotes-mcp] fatal error", error);
  process.exit(1);
});
