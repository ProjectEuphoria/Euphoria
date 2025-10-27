import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getSpotifyTools(): Promise<Tool[]> {
  return [
    {
      name: "search_music",
      description: "Search for music on Spotify",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query for music" },
          type: { type: "string", enum: ["track", "artist", "album"], description: "Type of search" }
        },
        required: ["query"]
      },
      handler: async (params: { query: string; type?: string }) => {
        return `Music search for "${params.query}" (${params.type || 'track'}) - implement with Spotify API`;
      }
    }
  ];
}
