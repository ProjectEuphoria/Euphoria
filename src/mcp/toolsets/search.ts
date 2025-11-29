import { Tool } from "../../api/adapters/google-ai-adapter.js";
import { fetchWithTimeout, parseJsonBody, sanitizeErrorMessage } from "../utils/http.js";

const USER_AGENT = "EuphoriaBot/0.1 (+https://euphoria.local)";

async function runDuckDuckGoSearch(query: string, maxResults: number) {
  const searchUrl = new URL("https://api.duckduckgo.com/");
  searchUrl.searchParams.set("q", query);
  searchUrl.searchParams.set("format", "json");
  searchUrl.searchParams.set("no_redirect", "1");
  searchUrl.searchParams.set("no_html", "1");
  searchUrl.searchParams.set("skip_disambig", "1");

  const response = await fetchWithTimeout(searchUrl, {
    headers: { "User-Agent": USER_AGENT },
    timeoutMs: 8000,
  });

  if (!response.ok) {
    return {
      query,
      warning: `DuckDuckGo request failed with status ${response.status}`,
      results: [],
    };
  }

  const payload = await parseJsonBody<any>(response, "DuckDuckGo Instant Answer");

  const related = Array.isArray(payload.RelatedTopics)
    ? payload.RelatedTopics.flatMap((item: any) => (item?.Topics ? item.Topics : item))
    : [];

  const items = related
    .filter((item: any) => item?.FirstURL && typeof item.FirstURL === "string" && item.Text)
    .slice(0, maxResults)
    .map((item: any) => ({
      title: item.Text,
      url: item.FirstURL,
    }));

  return {
    query,
    heading: payload.Heading ?? null,
    abstract: payload.AbstractText ?? null,
    results: items,
    note: items.length === 0 ? "No direct links were available for this query." : undefined,
  };
}

export async function getWebSearchTools(): Promise<Tool[]> {
  return [
    {
      name: "web_search",
      description: "Searches the web for recent information using DuckDuckGo Instant Answer.",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query" },
          num_results: { type: "number", description: "Number of results (default: 5, max: 10)" },
        },
        required: ["query"],
      },
      handler: async (params: { query: string; num_results?: number }) => {
        const query = params.query?.trim();
        if (!query) {
          throw new Error("web_search requires a non-empty 'query' string");
        }
        const max = Math.max(1, Math.min(10, Math.floor(params.num_results ?? 5)));
        try {
          return await runDuckDuckGoSearch(query, max);
        } catch (error) {
          return {
            query,
            warning: `web_search failed: ${sanitizeErrorMessage(error)}`,
            results: [],
          };
        }
      },
    },
  ];
}
