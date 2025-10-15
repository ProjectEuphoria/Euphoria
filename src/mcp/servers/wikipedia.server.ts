#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "wikipedia-bridge",
    version: "0.1.0",
  },
  {
    capabilities: { tools: {} },
    instructions:
      "Provides quick access to Wikipedia summaries and topic extracts for grounding knowledge.",
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "wikipedia_summary",
      description:
        "Fetches a concise summary and metadata for a given Wikipedia page title.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["title"],
        properties: {
          title: {
            type: "string",
            description:
              "Canonical title or search phrase for the topic (e.g. 'mindfulness', 'Taylor Swift').",
          },
        },
      },
    },
    {
      name: "wikipedia_search",
      description:
        "Searches Wikipedia and returns the top matching page titles with snippets.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["query"],
        properties: {
          query: {
            type: "string",
            description:
              "Search phrase to look up on Wikipedia (e.g. 'burnout recovery').",
          },
          limit: {
            type: "integer",
            minimum: 1,
            maximum: 10,
            default: 5,
            description: "Maximum number of results to return.",
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  const args = (params.arguments ?? {}) as Record<string, unknown>;
  switch (params.name) {
    case "wikipedia_summary": {
      const title = typeof args.title === "string" ? args.title.trim() : "";
      if (!title) {
        throw new Error("wikipedia_summary requires a 'title' string");
      }
      const summaryUrl = new URL(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          title,
        )}`,
      );
      const response = await fetch(summaryUrl, {
        headers: { "User-Agent": "EuphoriaBot/0.1 (contact: support@euphoria)" },
      });
      if (!response.ok) {
        throw new Error(
          `Wikipedia summary request failed: ${response.status}`,
        );
      }
      const data = await response.json();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                title: data.title,
                extract: data.extract,
                description: data.description ?? null,
                url: data.content_urls?.desktop?.page ?? null,
              },
              null,
              2,
            ),
          },
        ],
      };
    }
    case "wikipedia_search": {
      const query = typeof args.query === "string" ? args.query.trim() : "";
      if (!query) {
        throw new Error("wikipedia_search requires a 'query' string");
      }
      const limitRaw =
        typeof args.limit === "number" ? Math.floor(args.limit) : 5;
      const limit = Math.max(1, Math.min(10, limitRaw));
      const searchUrl = new URL("https://en.wikipedia.org/w/api.php");
      searchUrl.searchParams.set("action", "query");
      searchUrl.searchParams.set("list", "search");
      searchUrl.searchParams.set("format", "json");
      searchUrl.searchParams.set("srsearch", query);
      searchUrl.searchParams.set("srlimit", String(limit));

      const response = await fetch(searchUrl, {
        headers: { "User-Agent": "EuphoriaBot/0.1 (contact: support@euphoria)" },
      });
      if (!response.ok) {
        throw new Error(`Wikipedia search failed: ${response.status}`);
      }
      const data = await response.json();
      const results = Array.isArray(data.query?.search)
        ? data.query.search.map((item: any) => ({
            title: item.title,
            snippet: item.snippet?.replace(/<\/?span[^>]*>/g, "") ?? "",
            pageId: item.pageid,
            url: `https://en.wikipedia.org/?curid=${item.pageid}`,
          }))
        : [];
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ query, results }, null, 2),
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
  console.error("[wikipedia-mcp] fatal error", error);
  process.exit(1);
});
