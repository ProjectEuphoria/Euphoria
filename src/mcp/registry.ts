import type { BaseTool } from "@iqai/adk";
import { TOOLSET_REGISTRY } from "./toolsets";

let toolsCache: BaseTool[] | null = null;
let toolsPromise: Promise<BaseTool[]> | null = null;

async function loadAllToolsets(): Promise<BaseTool[]> {
  const toolArrays = await Promise.all(
    TOOLSET_REGISTRY.map(async ({ name, loader }) => {
      try {
        return await loader();
      } catch (error) {
        console.error(`[MCP] Failed to load toolset ${name}:`, error);
        return [];
      }
    }),
  );
  return toolArrays.flat();
}

export async function getSharedTools(): Promise<BaseTool[]> {
  if (toolsCache) return toolsCache;
  if (!toolsPromise) {
    toolsPromise = loadAllToolsets().then((tools) => {
      toolsCache = tools;
      return tools;
    });
  }
  return toolsPromise;
}

export async function disposeToolsets() {
  await Promise.all(
    TOOLSET_REGISTRY.map(async ({ toolset, name }) => {
      if (!toolset) return;
      try {
        await toolset.dispose();
      } catch (error) {
        console.error(`[MCP] Error disposing toolset ${name}:`, error);
      }
    }),
  );
}

if (typeof process !== "undefined") {
  process.once("exit", () => {
    void disposeToolsets();
  });
  process.once("SIGINT", () => {
    void disposeToolsets().finally(() => process.exit(0));
  });
}

export * from "./toolsets";
