import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getQuotesTools(): Promise<Tool[]> {
  return [
    {
      name: "get_inspirational_quote",
      description: "Get an inspirational quote",
      parameters: {
        type: "object",
        properties: {
          category: { type: "string", description: "Quote category (motivation, wisdom, etc.)" }
        }
      },
      handler: async (params: { category?: string }) => {
        const quotes = [
          "The only way to do great work is to love what you do. - Steve Jobs",
          "Life is what happens to you while you're busy making other plans. - John Lennon",
          "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
      }
    }
  ];
}
