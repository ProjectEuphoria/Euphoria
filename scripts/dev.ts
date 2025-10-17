import { spawn, type ChildProcess } from "node:child_process";
import process from "node:process";
import dotenv from "dotenv";

dotenv.config();

const BASE_PORT = Number(process.env.API_PORT_BASE ?? "4000");

const AGENT_CONFIG = [
  { name: "Helena", tokenEnv: "HELENA_TOKEN" },
  { name: "Milo", tokenEnv: "MILO_TOKEN" },
  { name: "Kai", tokenEnv: "KAI_TOKEN" },
  { name: "Sophie", tokenEnv: "SOPHIE_TOKEN" },
  { name: "Luna", tokenEnv: "LUNA_TOKEN" },
] as const;

type AgentConfig = (typeof AGENT_CONFIG)[number];

const children: ChildProcess[] = [];
let shuttingDown = false;

function startProcess(label: string, command: string, extraEnv: Record<string, string | undefined> = {}) {
  const env = { ...process.env, ...extraEnv } as NodeJS.ProcessEnv;
  const child = spawn(command, {
    stdio: "inherit",
    shell: true,
    env,
  });

  child.on("exit", (code, signal) => {
    console.log(`[${label}] exited with code ${code ?? "null"}${signal ? ` (signal ${signal})` : ""}`);
    if (!shuttingDown) {
      shuttingDown = true;
      shutdown();
      if (code && code !== 0) {
        process.exitCode = code;
      }
    }
  });

  child.on("error", (error) => {
    console.error(`[${label}] failed to start:`, error);
  });

  children.push(child);
}

function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) {
      child.kill("SIGINT");
    }
  }
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

// Start the Vite UI server
startProcess("vite", "npx vite");

let portOffset = 0;
for (const agent of AGENT_CONFIG) {
  const token = process.env[agent.tokenEnv];
  const port = BASE_PORT + portOffset;
  portOffset += 1;

  const env: Record<string, string> = {
    API_PORT: String(port),
    TELEGRAM_AGENT: agent.name,
  };

  if (token) {
    env.TELEGRAM_BOT_TOKEN = token;
    console.log(`[telegram] ${agent.name} wired to token ${agent.tokenEnv} on port ${port}`);
  } else {
    console.warn(`[telegram] ${agent.tokenEnv} not set. ${agent.name} will run without Telegram connectivity.`);
  }

  startProcess(
    `api-${agent.name.toLowerCase()}`,
    "npx tsx src/api/http.server.ts",
    env,
  );
}

console.log("Development services launched. Press Ctrl+C to stop all.");
