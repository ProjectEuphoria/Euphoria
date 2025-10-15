import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpToolset } from "@iqai/adk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, "../servers/webSearch.server.ts");

export const webSearchToolset = new McpToolset({
  name: "web-search",
  description: "Search and discovery via DuckDuckGo Instant Answer API.",
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

export async function getWebSearchTools() {
  return webSearchToolset.getTools();
}
