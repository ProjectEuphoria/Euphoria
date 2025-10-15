// src/mcp/saveJournalEntry.ts
import fs from "node:fs/promises";
import path from "node:path";
import { journalRoot } from "./filesystem";

/**
 * App-level helper that directly writes a journal entry
 * to the same folder used by the Filesystem MCP.
 * This ensures both the agent and backend share the same data.
 */
export async function saveJournalEntry(text: string) {
  const today = new Date().toISOString().slice(0, 10);
  const file = path.join(journalRoot, `${today}.txt`);
  const time = new Date().toTimeString().slice(0, 5);
  const line = `[${time}] ${text}\n`;

  await fs.appendFile(file, line, "utf8"); // creates if missing
  return file;
}
