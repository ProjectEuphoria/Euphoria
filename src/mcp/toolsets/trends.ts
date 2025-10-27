import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getTrendsTools(): Promise<Tool[]> {
  return [
    {
      name: "get_trending_topics",
      description: "Get current trending topics",
      parameters: {
        type: "object",
        properties: {
          category: { type: "string", description: "Trend category (tech, news, social, etc.)" },
          region: { type: "string", default: "US", description: "Region code" }
        }
      },
      handler: async (params: { category?: string; region?: string }) => {
        return `Trending topics in ${params.category || 'general'} for ${params.region || 'US'} - implement with Google Trends API`;
      }
    }
  ];
}
