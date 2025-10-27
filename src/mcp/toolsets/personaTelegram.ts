import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getPersonaTelegramTools(): Promise<Tool[]> {
  const personas = ["Helena", "Luna", "Milo", "Kai", "Sophie"];
  
  return personas.map(persona => ({
    name: `${persona}_telegram`,
    description: `Send a message as ${persona} to Telegram`,
    parameters: {
      type: "object",
      properties: {
        message: { type: "string", description: "Message to send" },
        chat_id: { type: "string", description: "Telegram chat ID" }
      },
      required: ["message"]
    },
    handler: async (params: { message: string; chat_id?: string }) => {
      // Placeholder - implement with Telegram Bot API
      return `${persona} would send to Telegram: "${params.message}"`;
    }
  }));
}
