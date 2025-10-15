// src/mcp/filesystem.ts
import path from "node:path";
import fs from "node:fs/promises";
import { McpToolset } from "@iqai/adk";

// ---------- SETUP ----------
export const journalRoot = path.resolve(process.cwd(), "data/journal");
await fs.mkdir(journalRoot, { recursive: true });

// ---------- MCP TOOLSET ----------
export const filesystemMcp = new McpToolset({
  name: "Filesystem MCP (Journal)",
  description: "Local journaling store",
  debug: true,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-filesystem", journalRoot],
    env: { PATH: process.env.PATH ?? "" },
  },
});
