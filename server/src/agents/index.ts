// src/agents/index.ts
import { Helena } from "./Helena/agent";
import { Kai } from "./Kai/agent";
import { Luna } from "./Luna/agent";
import { Milo } from "./Milo/agent";
import { Sophie } from "./Sophie/agent";

export async function getAgent(name: string) {
  switch (name) {
    case "Milo": return await Milo();
    case "Helena": return await Helena();
    case "Kai":return await Kai();
    case "Sophie": return await Sophie();
    case "Luna":return await Luna();

    default: throw new Error("Unknown agent: " + name);
  }
}
