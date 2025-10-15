import path from "node:path";
import fs from "node:fs/promises";
import { McpToolset } from "@iqai/adk";

export const journalRoot = path.resolve(process.cwd(), "data/journal");
const ensureJournalDir = fs
  .mkdir(journalRoot, { recursive: true })
  .catch((error) => {
    console.error("[MCP] Failed to create journal directory", error);
    throw error;
  });

export const filesystemToolset = new McpToolset({
  name: "filesystem-journal",
  description: "Local journaling store used for user reflections and offline memory.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      journalRoot,
    ],
    env: {
      PATH: process.env.PATH ?? "",
    },
  },
});

export async function getFilesystemTools() {
  await ensureJournalDir;
  return filesystemToolset.getTools();
}
