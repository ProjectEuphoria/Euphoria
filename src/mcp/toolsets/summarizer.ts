import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getSummarizerTools(): Promise<Tool[]> {
  return [
    {
      name: "summarize_text",
      description: "Summarize long text content",
      parameters: {
        type: "object",
        properties: {
          text: { type: "string", description: "Text to summarize" },
          length: { type: "string", enum: ["short", "medium", "long"], description: "Summary length" }
        },
        required: ["text"]
      },
      handler: async (params: { text: string; length?: string }) => {
        const maxLength = params.length === "short" ? 100 : params.length === "long" ? 500 : 250;
        return `Summary (${params.length || 'medium'}): ${params.text.substring(0, maxLength)}...`;
      }
    }
  ];
}
