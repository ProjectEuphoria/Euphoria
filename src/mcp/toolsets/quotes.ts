import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpToolset } from "@iqai/adk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, "../servers/quotes.server.ts");

export const quotesToolset = new McpToolset({
  name: "zenquotes-feed",
  description: "Positive affirmations and quotes for uplifting replies.",
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

export async function getQuotesTools() {
  return quotesToolset.getTools();
}
