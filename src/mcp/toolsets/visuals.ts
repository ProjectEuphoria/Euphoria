import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getUnsplashTools(): Promise<Tool[]> {
  return [
    {
      name: "search_images",
      description: "Search for images on Unsplash",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Image search query" },
          count: { type: "number", default: 5, description: "Number of images" }
        },
        required: ["query"]
      },
      handler: async (params: { query: string; count?: number }) => {
        return `Image search for "${params.query}" (${params.count || 5} results) - implement with Unsplash API`;
      }
    }
  ];
}
