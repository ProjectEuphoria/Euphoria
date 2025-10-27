import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getWikipediaTools(): Promise<Tool[]> {
  return [
    {
      name: "search_wikipedia",
      description: "Search Wikipedia for information",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Wikipedia search query" },
          language: { type: "string", default: "en", description: "Language code" }
        },
        required: ["query"]
      },
      handler: async (params: { query: string; language?: string }) => {
        return `Wikipedia search for "${params.query}" in ${params.language || 'en'} - implement with Wikipedia API`;
      }
    }
  ];
}
