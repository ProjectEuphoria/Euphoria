import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getPersonaDiscordTools(): Promise<Tool[]> {
  const personas = ["Helena", "Luna", "Milo", "Kai", "Sophie"];
  
  return personas.map(persona => ({
    name: `${persona}_discord`,
    description: `Send a message as ${persona} to Discord`,
    parameters: {
      type: "object",
      properties: {
        message: { type: "string", description: "Message to send" },
        channel_id: { type: "string", description: "Discord channel ID" }
      },
      required: ["message"]
    },
    handler: async (params: { message: string; channel_id?: string }) => {
      // Placeholder - implement with Discord Bot API
      return `${persona} would send to Discord: "${params.message}"`;
    }
  }));
}
