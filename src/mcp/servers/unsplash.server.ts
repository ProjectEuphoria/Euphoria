#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const accessKey = process.env.UNSPLASH_ACCESS_KEY ?? "";

const server = new Server(
  {
    name: "unsplash-curator",
    version: "0.1.0",
  },
  {
    capabilities: { tools: {} },
    instructions:
      "Fetches calming, aesthetic Unsplash imagery to match the user's vibe and mood.",
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "unsplash_search",
      description:
        "Search Unsplash for mood-based imagery. Requires UNSPLASH_ACCESS_KEY environment variable.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["query"],
        properties: {
          query: {
            type: "string",
            description:
              "Theme to search for (e.g. 'calming neon', 'sunset chill vibes').",
          },
          orientation: {
            type: "string",
            enum: ["landscape", "portrait", "squarish"],
            description: "Optional preferred orientation.",
          },
          color: {
            type: "string",
            description:
              "Optional hex color without # to bias results (e.g. 'ffc0cb').",
          },
          perPage: {
            type: "integer",
            minimum: 1,
            maximum: 15,
            default: 6,
            description: "Number of images to return (default 6).",
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  if (params.name !== "unsplash_search") {
    throw new Error(`Unknown tool: ${params.name}`);
  }
  if (!accessKey) {
    throw new Error(
      "Unsplash search requires UNSPLASH_ACCESS_KEY environment variable.",
    );
  }
  const args = (params.arguments ?? {}) as Record<string, unknown>;
  const query = typeof args.query === "string" ? args.query.trim() : "";
  if (!query) {
    throw new Error("unsplash_search requires a 'query' string");
  }
  const perPageRaw =
    typeof args.perPage === "number" ? Math.floor(args.perPage) : 6;
  const perPage = Math.max(1, Math.min(15, perPageRaw));
  const orientation =
    typeof args.orientation === "string" ? args.orientation : undefined;
  const color =
    typeof args.color === "string" ? args.color.replace("#", "") : undefined;

  const apiUrl = new URL("https://api.unsplash.com/search/photos");
  apiUrl.searchParams.set("query", query);
  apiUrl.searchParams.set("per_page", String(perPage));
  if (orientation) apiUrl.searchParams.set("orientation", orientation);
  if (color) apiUrl.searchParams.set("color", color);

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
      "Accept-Version": "v1",
    },
  });
  if (!response.ok) {
    throw new Error(`Unsplash API request failed: ${response.status}`);
  }
  const data = await response.json();
  const results = Array.isArray(data.results)
    ? data.results.map((item: any) => ({
        id: item.id,
        description: item.description ?? item.alt_description ?? "",
        photographer: item.user?.name ?? null,
        urls: item.urls,
        color: item.color ?? null,
      }))
    : [];

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            query,
            orientation: orientation ?? null,
            color: color ?? null,
            images: results,
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
  console.error("[unsplash-mcp] fatal error", error);
  process.exit(1);
});
