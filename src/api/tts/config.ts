import fs from "node:fs/promises";
import path from "node:path";
import type { VoiceConfig, PersonaVoiceSpec, PersonaKey } from "./types.js";

const DEFAULT_CONFIG_PATH = path.resolve(process.cwd(), "config/voices.euphoria.json");

let cachedConfig: VoiceConfig | null = null;
let loadPromise: Promise<VoiceConfig> | null = null;

async function readConfigFile(filePath: string): Promise<VoiceConfig> {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as VoiceConfig;
}

export async function getVoiceConfig(configPath = DEFAULT_CONFIG_PATH): Promise<VoiceConfig> {
  if (cachedConfig) return cachedConfig;
  if (!loadPromise) {
    loadPromise = readConfigFile(configPath).then((cfg) => {
      cachedConfig = cfg;
      return cfg;
    });
  }
  return loadPromise;
}

export async function getPersonaSpec(persona: PersonaKey): Promise<PersonaVoiceSpec | null> {
  const config = await getVoiceConfig();
  return config.personas[persona] ?? null;
}
