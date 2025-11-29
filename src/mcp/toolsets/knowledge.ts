import { Tool } from "../../api/adapters/google-ai-adapter.js";
import { fetchWithTimeout, parseJsonBody, sanitizeErrorMessage } from "../utils/http.js";

const USER_AGENT = "EuphoriaBot/0.1 (+https://euphoria.local)";

async function wikipediaSearch(query: string, limit: number) {
  const searchUrl = new URL("https://en.wikipedia.org/w/api.php");
  searchUrl.searchParams.set("action", "query");
  searchUrl.searchParams.set("list", "search");
  searchUrl.searchParams.set("format", "json");
  searchUrl.searchParams.set("srsearch", query);
  searchUrl.searchParams.set("srlimit", String(limit));

  const response = await fetchWithTimeout(searchUrl, {
    headers: { "User-Agent": USER_AGENT },
  });

  if (!response.ok) {
    return { query, warning: `Wikipedia search failed: ${response.status}`, results: [] };
  }

  const data = await parseJsonBody<any>(response, "Wikipedia search");
  const results = Array.isArray(data.query?.search)
    ? data.query.search.map((item: any) => ({
        title: item.title,
        snippet: item.snippet?.replace(/<\/?span[^>]*>/g, "") ?? "",
        pageId: item.pageid,
      }))
    : [];

  return { query, results };
}

async function wikipediaSummary(title: string) {
  const summaryUrl = new URL(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
  );

  const response = await fetchWithTimeout(summaryUrl, {
    headers: { "User-Agent": USER_AGENT },
  });

  if (response.status === 404) {
    return { title, warning: "No Wikipedia page found for that title." };
  }

  if (!response.ok) {
    return { title, warning: `Wikipedia summary request failed: ${response.status}` };
  }

  const data = await parseJsonBody<any>(response, "Wikipedia summary");
  return {
    title: data.title,
    extract: data.extract,
    description: data.description ?? null,
    url: data.content_urls?.desktop?.page ?? null,
  };
}

export async function getWikipediaTools(): Promise<Tool[]> {
  return [
    {
      name: "wikipedia_search",
      description: "Search Wikipedia and return top matching page titles with snippets.",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Wikipedia search query" },
          limit: { type: "number", description: "Maximum results (default 5, max 10)" },
        },
        required: ["query"],
      },
      handler: async (params: { query: string; limit?: number }) => {
        const query = params.query?.trim();
        if (!query) throw new Error("wikipedia_search requires a 'query' string");
        const limit = Math.max(1, Math.min(10, Math.floor(params.limit ?? 5)));
        try {
          return await wikipediaSearch(query, limit);
        } catch (error) {
          return { query, warning: `Wikipedia search failed: ${sanitizeErrorMessage(error)}`, results: [] };
        }
      },
    },
    {
      name: "wikipedia_summary",
      description: "Fetch a concise summary for a given Wikipedia page title.",
      parameters: {
        type: "object",
        properties: {
          title: { type: "string", description: "Page title (e.g. 'mindfulness', 'Taylor Swift')" },
        },
        required: ["title"],
      },
      handler: async (params: { title: string }) => {
        const title = params.title?.trim();
        if (!title) throw new Error("wikipedia_summary requires a 'title' string");
        try {
          return await wikipediaSummary(title);
        } catch (error) {
          return { title, warning: `Wikipedia summary failed: ${sanitizeErrorMessage(error)}` };
        }
      },
    },
  ];
}
