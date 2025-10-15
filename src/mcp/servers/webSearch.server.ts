#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "genz-web-search",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
    instructions:
      "Provides lightweight web search via DuckDuckGo Instant Answer API. Use for quick trend checks or definitions.",
  },
);

const WebSearchArgsSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    query: {
      type: "string",
      description:
        "Plain language query to search the web for (e.g. 'self-care trends 2025').",
    },
    maxResults: {
      type: "integer",
      minimum: 1,
      maximum: 10,
      default: 5,
      description: "Maximum number of related links to return.",
    },
  },
  required: ["query"],
};

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "web_search",
      description:
        "Searches the web for the latest info or resources using DuckDuckGo Instant Answer.",
      inputSchema: WebSearchArgsSchema,
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  if (params.name !== "web_search") {
    throw new Error(`Unknown tool: ${params.name}`);
  }
  const args = (params.arguments ?? {}) as Record<string, unknown>;
  const query = typeof args.query === "string" ? args.query.trim() : "";
  if (!query) {
    throw new Error("web_search requires a non-empty 'query' string");
  }
  const maxResultsRaw =
    typeof args.maxResults === "number" ? args.maxResults : undefined;
  const maxResults =
    maxResultsRaw && Number.isFinite(maxResultsRaw)
      ? Math.max(1, Math.min(10, Math.floor(maxResultsRaw)))
      : 5;

  const searchUrl = new URL("https://api.duckduckgo.com/");
  searchUrl.searchParams.set("q", query);
  searchUrl.searchParams.set("format", "json");
  searchUrl.searchParams.set("no_redirect", "1");
  searchUrl.searchParams.set("no_html", "1");
  searchUrl.searchParams.set("skip_disambig", "1");

  const response = await fetch(searchUrl);
  if (!response.ok) {
    throw new Error(
      `DuckDuckGo request failed with status ${response.status}`,
    );
  }
  const payload = await response.json();

  const related = Array.isArray(payload.RelatedTopics)
    ? payload.RelatedTopics.flatMap((item: any) => {
        if (item.Topics) {
          return item.Topics;
        }
        return item;
      })
    : [];

  const items = related
    .filter(
      (item: any) =>
        item?.FirstURL && typeof item.FirstURL === "string" && item.Text,
    )
    .slice(0, maxResults)
    .map((item: any) => ({
      title: item.Text,
      url: item.FirstURL,
    }));

  const result = {
    query,
    heading: payload.Heading ?? null,
    abstract: payload.AbstractText ?? null,
    image: payload.Image ?? null,
    results: items,
  };

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("[web-search-mcp] fatal error", err);
  process.exit(1);
});
