import { Helena } from "./Helena/agent";
import { Kai } from "./Kai/agent";
import { Luna } from "./Luna/agent";
import { Milo } from "./Milo/agent";
import { Sophie } from "./Sophie/agent";

const agents = { Milo, Luna, Kai, Helena, Sophie } as const;
export default agents;

export type AgentName = keyof typeof agents; // "Milo" | "Luna" | ...