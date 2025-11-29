import { Tool } from "../../api/adapters/google-ai-adapter.js";
import { fetchWithTimeout, parseJsonBody, sanitizeErrorMessage } from "../utils/http.js";
import { optionalEnv } from "../utils/env.js";

const accessKey = optionalEnv("UNSPLASH_ACCESS_KEY");

export async function getUnsplashTools(): Promise<Tool[]> {
  return [
    {
      name: "unsplash_search",
      description: "Search Unsplash for mood-based imagery. Requires UNSPLASH_ACCESS_KEY.",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Image search query or vibe (e.g. 'neon night city')" },
          orientation: { type: "string", enum: ["landscape", "portrait", "squarish"], description: "Optional orientation bias" },
          color: { type: "string", description: "Optional hex color without # (e.g. 'ffc0cb')" },
          perPage: { type: "number", description: "Number of images (default 6, max 15)" },
        },
        required: ["query"],
      },
      handler: async (params: { query: string; orientation?: string; color?: string; perPage?: number }) => {
        const query = params.query?.trim();
        if (!query) throw new Error("unsplash_search requires a 'query' string");
        if (!accessKey) {
          return { warning: "UNSPLASH_ACCESS_KEY is not set on the server.", images: [] };
        }
        const perPage = Math.max(1, Math.min(15, Math.floor(params.perPage ?? 6)));
        const orientation = typeof params.orientation === "string" ? params.orientation : undefined;
        const color = typeof params.color === "string" ? params.color.replace("#", "") : undefined;

        try {
          const apiUrl = new URL("https://api.unsplash.com/search/photos");
          apiUrl.searchParams.set("query", query);
          apiUrl.searchParams.set("per_page", String(perPage));
          if (orientation) apiUrl.searchParams.set("orientation", orientation);
          if (color) apiUrl.searchParams.set("color", color);

          const response = await fetchWithTimeout(apiUrl, {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
              "Accept-Version": "v1",
            },
            timeoutMs: 8000,
          });

          if (response.status === 401 || response.status === 403) {
            return {
              query,
              warning: "Unsplash rejected the request (401/403). Check UNSPLASH_ACCESS_KEY or rate limits.",
              images: [],
            };
          }
          if (!response.ok) {
            return { query, warning: `Unsplash API request failed: ${response.status}`, images: [] };
          }

          const data = await parseJsonBody<any>(response, "Unsplash search");
          const images = Array.isArray(data.results)
            ? data.results.map((item: any) => ({
                id: item.id,
                description: item.description ?? item.alt_description ?? "",
                photographer: item.user?.name ?? null,
                urls: item.urls,
                color: item.color ?? null,
              }))
            : [];

          return {
            query,
            orientation: orientation ?? null,
            color: color ?? null,
            images,
            note: images.length === 0 ? "Unsplash returned no matches. Try a broader query." : undefined,
          };
        } catch (error) {
          return { query, warning: `Unsplash search failed: ${sanitizeErrorMessage(error)}`, images: [] };
        }
      },
    },
  ];
}
