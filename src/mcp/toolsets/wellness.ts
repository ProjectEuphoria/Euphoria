import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getWellnessTools(): Promise<Tool[]> {
  return [
    {
      name: "mood_check",
      description: "Check user's current mood and provide wellness suggestions",
      parameters: {
        type: "object",
        properties: {
          mood: { type: "string", description: "Current mood description" },
          energy_level: { type: "number", minimum: 1, maximum: 10, description: "Energy level 1-10" }
        },
        required: ["mood"]
      },
      handler: async (params: { mood: string; energy_level?: number }) => {
        return `Wellness check: Mood "${params.mood}", Energy: ${params.energy_level || 'not specified'}. Providing personalized wellness suggestions.`;
      }
    }
  ];
}
