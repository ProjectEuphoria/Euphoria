import type { BaseTool } from "@iqai/adk";
import { getSharedTools } from "../mcp";
import { PERSONA_TOOLKIT_VERSION } from "./version";

let cachedToolsPromise: Promise<BaseTool[]> | null = null;
let cachedVersion: string | null = null;

async function loadAllTools(): Promise<BaseTool[]> {
  if (!cachedToolsPromise || cachedVersion !== PERSONA_TOOLKIT_VERSION) {
    cachedToolsPromise = getSharedTools();
    cachedVersion = PERSONA_TOOLKIT_VERSION;
  }
  return cachedToolsPromise;
}

export async function loadPersonaTools(agentName?: string): Promise<BaseTool[]> {
  const tools = await loadAllTools();
  if (!agentName) return tools.slice();

  const lowerAgent = agentName.toLowerCase();
  return tools.filter((tool) => {
    if (!tool?.name) return true;
    if (tool.name.endsWith("_telegram") || tool.name.endsWith("_discord")) {
      const persona = tool.name.split("_")[0]?.toLowerCase();
      return persona === lowerAgent;
    }
    return true;
  });
}

export { PERSONA_TOOLKIT_VERSION };
