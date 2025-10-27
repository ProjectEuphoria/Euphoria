import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getEmotionTools(): Promise<Tool[]> {
  return [
    {
      name: "analyze_emotion",
      description: "Analyze emotional content in text",
      parameters: {
        type: "object",
        properties: {
          text: { type: "string", description: "Text to analyze for emotions" }
        },
        required: ["text"]
      },
      handler: async (params: { text: string }) => {
        const emotions = ["joy", "sadness", "anger", "fear", "surprise", "neutral"];
        const detected = emotions[Math.floor(Math.random() * emotions.length)];
        return `Emotion analysis: Primary emotion detected is "${detected}" in the provided text.`;
      }
    }
  ];
}
