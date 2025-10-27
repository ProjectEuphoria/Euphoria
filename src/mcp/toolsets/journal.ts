import { Tool } from "../../api/adapters/google-ai-adapter.js";

export async function getJournalingTools(): Promise<Tool[]> {
  return [
    {
      name: "create_journal_entry",
      description: "Create a new journal entry",
      parameters: {
        type: "object",
        properties: {
          title: { type: "string", description: "Journal entry title" },
          content: { type: "string", description: "Journal entry content" },
          tags: { type: "array", items: { type: "string" }, description: "Tags for the entry" }
        },
        required: ["content"]
      },
      handler: async (params: { title?: string; content: string; tags?: string[] }) => {
        return `Journal entry created: "${params.title || 'Untitled'}" with ${params.content.length} characters`;
      }
    }
  ];
}
