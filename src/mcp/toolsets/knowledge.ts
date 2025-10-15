import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpToolset } from "@iqai/adk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, "../servers/wikipedia.server.ts");

export const wikipediaToolset = new McpToolset({
  name: "wikipedia-knowledge",
  description: "Knowledge grounding via Wikipedia summaries and search.",
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

export async function getWikipediaTools() {
  return wikipediaToolset.getTools();
}
