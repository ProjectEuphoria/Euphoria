import { PERSONA_TOOLKIT_VERSION } from "../../agents/version.js";

const cache: Record<string, any> = {};

export async function makeRunnerByName(name: string) {
  const cacheKey = `${name}@${PERSONA_TOOLKIT_VERSION}`;
  if (cache[cacheKey]) return cache[cacheKey];

  switch (name) {
    case "Helena": {
      const { Helena } = await import("../../agents/Helena/agent.js");
      const built = await Helena();       // must return { runner }
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Milo": {
      const { Milo } = await import("../../agents/Milo/agent.js");
      const built = await Milo();       // must return { runner }
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Kai": {
      const { Kai } = await import("../../agents/Kai/agent.js");
      const built = await Kai();       // must return { runner }
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Sophie": {
      const { Sophie } = await import("../../agents/Sophie/agent.js");
      const built = await Sophie();       // must return { runner }
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Luna": {
      const { Luna } = await import("../../agents/Luna/agent.js");
      const built = await Luna();       // must return { runner }
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    default:
      throw new Error(`Unknown agent: ${name}`);
  }
}

export async function prewarmRunners(names: string[]) {
  await Promise.all(names.map((n) => makeRunnerByName(n).catch(() => {})));
}
