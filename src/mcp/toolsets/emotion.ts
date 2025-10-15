import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpToolset } from "@iqai/adk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, "../servers/emotion.server.ts");

export const emotionToolset = new McpToolset({
  name: "emotion-analytics",
  description: "Lightweight sentiment and tone analytics for reflections.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath],
    env: {
      PATH: process.env.PATH ?? "",
    },
  },
});

export async function getEmotionTools() {
  return emotionToolset.getTools();
}
