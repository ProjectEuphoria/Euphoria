import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import type { VoiceConfig, TtsResponseMeta } from "./types.js";

type CacheKeyInput = Record<string, unknown>;

const AUDIO_EXT = ".mp3";
const META_EXT = ".json";

function hashKey(data: CacheKeyInput): string {
  const json = JSON.stringify(data, Object.keys(data).sort());
  return crypto.createHash("sha1").update(json).digest("hex");
}

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

export function buildCacheKey(input: CacheKeyInput): string {
  return hashKey(input);
}

function resolvePaths(cacheDir: string, key: string) {
  return {
    audioPath: path.join(cacheDir, `${key}${AUDIO_EXT}`),
    metaPath: path.join(cacheDir, `${key}${META_EXT}`),
  };
}

export async function loadFromCache(
  config: VoiceConfig,
  key: string,
): Promise<{ buffer: Buffer; meta: TtsResponseMeta } | null> {
  const cacheDir = path.resolve(process.cwd(), config.cache.dir);
  try {
    const { audioPath, metaPath } = resolvePaths(cacheDir, key);
    const [audioStat, metaStat] = await Promise.all([
      fs.stat(audioPath),
      fs.stat(metaPath),
    ]);

    const now = Date.now();
    const maxAgeMs = config.cache.maxAgeSec * 1000;
    const newest = Math.max(audioStat.mtimeMs, metaStat.mtimeMs);
    if (now - newest > maxAgeMs) {
      return null;
    }

    const [buffer, metaRaw] = await Promise.all([
      fs.readFile(audioPath),
      fs.readFile(metaPath, "utf8"),
    ]);

    const meta = JSON.parse(metaRaw) as TtsResponseMeta;
    meta.cache = {
      key,
      hit: true,
      expiresAt: newest + maxAgeMs,
    };

    return { buffer, meta };
  } catch {
    return null;
  }
}

export async function saveToCache(
  config: VoiceConfig,
  key: string,
  buffer: Buffer,
  meta: TtsResponseMeta,
) {
  const cacheDir = path.resolve(process.cwd(), config.cache.dir);
  await ensureDir(cacheDir);
  const { audioPath, metaPath } = resolvePaths(cacheDir, key);

  const metaWithCache: TtsResponseMeta = {
    ...meta,
    cache: {
      key,
      hit: false,
      expiresAt: Date.now() + config.cache.maxAgeSec * 1000,
    },
  };

  await Promise.all([
    fs.writeFile(audioPath, buffer),
    fs.writeFile(metaPath, JSON.stringify(metaWithCache, null, 2), "utf8"),
  ]);
}
