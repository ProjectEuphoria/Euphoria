import type { BaseTool } from "@iqai/adk";
import { getSharedTools } from "../mcp";

let cachedToolsPromise: Promise<BaseTool[]> | null = null;

export async function loadPersonaTools(): Promise<BaseTool[]> {
  if (!cachedToolsPromise) {
    cachedToolsPromise = getSharedTools();
  }
  return cachedToolsPromise;
}
