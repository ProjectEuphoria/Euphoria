#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import googleTrends from "google-trends-api";

function parseTimeRange(range?: string) {
  if (!range) return undefined;
  const normalized = range.trim().toLowerCase();
  const match = normalized.match(/^(\d+)(d|m|y)$/);
  if (!match) return undefined;
  const amount = Number(match[1]);
  if (!Number.isFinite(amount) || amount <= 0) return undefined;
  const unit = match[2];
  const end = new Date();
  const start = new Date(end);
  switch (unit) {
    case "d":
      start.setDate(end.getDate() - amount);
      break;
    case "m":
      start.setMonth(end.getMonth() - amount);
      break;
    case "y":
      start.setFullYear(end.getFullYear() - amount);
      break;
    default:
      return undefined;
  }
  return { start, end };
}

const server = new Server(
  {
    name: "web-trends",
    version: "0.1.0",
  },
  {
    capabilities: { tools: {} },
    instructions:
      "Fetches Google Trends data to spot what's rising for mental health, motivation, or pop culture.",
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "google_trends_topic",
      description:
        "Retrieves Google Trends interest over time for a topic. Great for spotting trending self-care themes.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["keyword"],
        properties: {
          keyword: {
            type: "string",
            description: "Keyword or phrase to analyze (e.g. 'burnout tips').",
          },
          geo: {
            type: "string",
            description:
              "ISO country code (e.g. 'US', 'GB'). Leave empty for worldwide.",
          },
          timeRange: {
            type: "string",
            description:
              "Range like '7d', '30d', '12m'. Defaults to 30 days if omitted.",
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  if (params.name !== "google_trends_topic") {
    throw new Error(`Unknown tool: ${params.name}`);
  }
  const args = (params.arguments ?? {}) as Record<string, unknown>;
  const keyword =
    typeof args.keyword === "string" ? args.keyword.trim() : "";
  if (!keyword) {
    throw new Error("google_trends_topic requires 'keyword'");
  }
  const geo = typeof args.geo === "string" ? args.geo.trim().toUpperCase() : "";
  const timeRange = typeof args.timeRange === "string" ? args.timeRange : "";

  const parsedRange = parseTimeRange(timeRange) ?? parseTimeRange("30d");
  try {
    const trendArgs: googleTrends.InterestOverTimeRequest = {
      keyword,
      startTime: parsedRange?.start,
      endTime: parsedRange?.end,
    };
    if (geo) trendArgs.geo = geo;

    const raw = await googleTrends.interestOverTime(trendArgs);
    const data = JSON.parse(raw);
    const timelineData = data.default?.timelineData ?? [];
    const points = timelineData.map((row: any) => ({
      date: row.formattedTime,
      value: row.value?.[0] ?? 0,
      formattedValue: row.formattedValue?.[0] ?? "0",
    }));

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              keyword,
              geo: geo || "GLOBAL",
              from: parsedRange?.start?.toISOString() ?? null,
              to: parsedRange?.end?.toISOString() ?? null,
              points,
            },
            null,
            2,
          ),
        },
      ],
    };
  } catch (error: any) {
    const message = typeof error?.message === "string" ? error.message : String(error);
    if (typeof message === "string" && message.includes("Response code 429")) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              keyword,
              geo: geo || "GLOBAL",
              warning: "Google Trends rate limited the request (429). Try again later or narrow the timeframe.",
            }, null, 2),
          },
        ],
      };
    }
    if (typeof message === "string" && message.includes("Unexpected token")) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              keyword,
              geo: geo || "GLOBAL",
              warning: "Google Trends returned an unexpected response (HTML). The service might require additional authentication or changed its API. Try again later.",
            }, null, 2),
          },
        ],
      };
    }
    throw error;
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("[trends-mcp] fatal error", error);
  process.exit(1);
});
