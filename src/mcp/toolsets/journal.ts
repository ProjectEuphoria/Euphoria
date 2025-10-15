import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpToolset } from "@iqai/adk";
import { journalRoot } from "./localContext";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, "../servers/journal.server.ts");

export const journalingToolset = new McpToolset({
  name: "journal-reflection",
  description: "Reflection prompts and storage helpers on top of local journal.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath],
    env: {
      PATH: process.env.PATH ?? "",
      JOURNAL_ROOT: journalRoot,
    },
  },
});

export async function getJournalingTools() {
  return journalingToolset.getTools();
}
