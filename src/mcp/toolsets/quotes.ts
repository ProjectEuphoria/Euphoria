import { Tool } from "../../api/adapters/google-ai-adapter.js";
import { fetchWithTimeout, parseJsonBody, sanitizeErrorMessage } from "../utils/http.js";

type ZenQuote = { q: string; a: string; h?: string };

async function fetchZenQuote(): Promise<{ quote: string; author: string }> {
  const response = await fetchWithTimeout("https://zenquotes.io/api/random", { timeoutMs: 6000 });
  if (!response.ok) {
    throw new Error(`ZenQuotes request failed: ${response.status}`);
  }
  const data = await parseJsonBody<ZenQuote[]>(response, "ZenQuotes");
  const item = Array.isArray(data) ? data[0] : null;
  if (!item?.q) throw new Error("ZenQuotes response missing quote");
  return { quote: item.q, author: item.a ?? "Unknown" };
}

export async function getQuotesTools(): Promise<Tool[]> {
  return [
    {
      name: "daily_affirmation",
      description: "Fetch a short inspirational quote (ZenQuotes API).",
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: "Optional keyword; ignored by ZenQuotes but can guide framing." },
        },
      },
      handler: async (_params: { keyword?: string }) => {
        try {
          const { quote, author } = await fetchZenQuote();
          return { quote, author, source: "ZenQuotes" };
        } catch (error) {
          return { warning: `Quote fetch failed: ${sanitizeErrorMessage(error)}` };
        }
      },
    },
    {
      name: "affirmation_batch",
      description: "Fetch up to 3 quotes for carousels or multi-card layouts.",
      parameters: {
        type: "object",
        properties: {
          count: { type: "number", description: "Number of quotes (1-3, default 3)" },
        },
      },
      handler: async (params: { count?: number }) => {
        const count = Math.max(1, Math.min(3, Math.floor(params.count ?? 3)));
        const quotes = [];
        for (let i = 0; i < count; i++) {
          try {
            const { quote, author } = await fetchZenQuote();
            quotes.push({ quote, author, source: "ZenQuotes" });
          } catch (error) {
            quotes.push({ warning: sanitizeErrorMessage(error) });
            break;
          }
        }
        return { quotes };
      },
    },
  ];
}
