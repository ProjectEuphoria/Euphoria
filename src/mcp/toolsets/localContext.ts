import path from "node:path";
import fs from "node:fs/promises";
import { Tool } from "../../api/adapters/google-ai-adapter.js";

export const journalRoot = path.resolve(process.cwd(), "data/journal");
const ensureJournalDir = fs
  .mkdir(journalRoot, { recursive: true })
  .catch((error) => {
    console.error("[MCP] Failed to create journal directory", error);
    throw error;
  });

export async function getLocalContextTools(): Promise<Tool[]> {
  await ensureJournalDir;
  
  return [
    {
      name: "save_journal_entry",
      description: "Save a journal entry for the user",
      parameters: {
        type: "object",
        properties: {
          content: { type: "string", description: "Journal entry content" },
          title: { type: "string", description: "Optional title" }
        },
        required: ["content"]
      },
      handler: async (params: { content: string; title?: string }) => {
        const timestamp = new Date().toISOString();
        const filename = `${timestamp.split('T')[0]}-${Date.now()}.md`;
        const filepath = path.join(journalRoot, filename);
        const entry = `# ${params.title || 'Journal Entry'}\n\n${params.content}\n\n---\n*Saved: ${timestamp}*`;
        await fs.writeFile(filepath, entry);
        return `Journal entry saved: ${filename}`;
      }
    }
  ];
}
