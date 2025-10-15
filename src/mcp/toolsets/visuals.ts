import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpToolset } from "@iqai/adk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, "../servers/unsplash.server.ts");

export const unsplashToolset = new McpToolset({
  name: "unsplash-visuals",
  description: "Curate Unsplash imagery for mood-based backgrounds and cards.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath],
    env: {
      PATH: process.env.PATH ?? "",
      UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY ?? "",
    },
  },
});

export async function getUnsplashTools() {
  return unsplashToolset.getTools();
}
