import type { BaseTool } from "@iqai/adk";
import { getSharedTools } from "../mcp";
import { PERSONA_TOOLKIT_VERSION } from "./version";

let cachedToolsPromise: Promise<BaseTool[]> | null = null;
let cachedVersion: string | null = null;

export async function loadPersonaTools(): Promise<BaseTool[]> {
  if (!cachedToolsPromise || cachedVersion !== PERSONA_TOOLKIT_VERSION) {
    cachedToolsPromise = getSharedTools();
    cachedVersion = PERSONA_TOOLKIT_VERSION;
  }
  return cachedToolsPromise;
}

export { PERSONA_TOOLKIT_VERSION };
