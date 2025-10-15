import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpToolset } from "@iqai/adk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, "../servers/trends.server.ts");

export const trendsToolset = new McpToolset({
  name: "google-trends",
  description: "Google Trends insights for wellness and productivity topics.",
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

export async function getTrendsTools() {
  return trendsToolset.getTools();
}
