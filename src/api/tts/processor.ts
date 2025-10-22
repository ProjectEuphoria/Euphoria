import fs from "node:fs/promises";
import path from "node:path";
import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
import { file as tmpFile } from "tmp-promise";
import type { PersonaVoiceSpec, VoiceConfig } from "./types.js";

if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic);
}

const MIN_ATEMPO = 0.5;
const MAX_ATEMPO = 2.0;

function splitAtempo(factor: number): number[] {
  const factors: number[] = [];
  let remaining = factor;

  const clamp = (val: number) => Math.min(MAX_ATEMPO, Math.max(MIN_ATEMPO, val));

  if (remaining === 1) return factors;

  while (remaining > MAX_ATEMPO || remaining < MIN_ATEMPO) {
    if (remaining > MAX_ATEMPO) {
      factors.push(MAX_ATEMPO);
      remaining /= MAX_ATEMPO;
    } else if (remaining < MIN_ATEMPO) {
      factors.push(MIN_ATEMPO);
      remaining /= MIN_ATEMPO;
    }
  }

  factors.push(clamp(remaining));
  return factors;
}

function buildFilterChain(spec: PersonaVoiceSpec, config: VoiceConfig) {
  const filters: string[] = [];
  const generative = spec.generative;
  const sampleRate = config.sampleRate;

  const pitchRatio = Math.pow(2, generative.pitchSemitones / 12);
  const targetRate = 1 + generative.ratePct / 100;

  // pitch shift via asetrate + atempo compensation
  if (Math.abs(generative.pitchSemitones) > 0.01) {
    filters.push(`asetrate=${(sampleRate * pitchRatio).toFixed(0)}`);
    const compensation = 1 / pitchRatio;
    for (const tempo of splitAtempo(compensation)) {
      filters.push(`atempo=${tempo.toFixed(4)}`);
    }
  }

  if (Math.abs(targetRate - 1) > 0.01) {
    for (const tempo of splitAtempo(targetRate)) {
      filters.push(`atempo=${tempo.toFixed(4)}`);
    }
  }

  if (generative.eq.lowShelfDb) {
    filters.push(
      `equalizer=f=120:t=l:s=1.0:g=${generative.eq.lowShelfDb.toFixed(2)}`,
    );
  }
  if (generative.eq.presenceDb) {
    filters.push(
      `equalizer=f=3200:t=h:s=0.5:g=${generative.eq.presenceDb.toFixed(2)}`,
    );
  }
  if (generative.eq.airDb) {
    filters.push(
      `equalizer=f=8000:t=h:s=0.7:g=${generative.eq.airDb.toFixed(2)}`,
    );
  }

  if (generative.reverb.mix > 0) {
    const mix = Math.min(0.9, Math.max(0, generative.reverb.mix));
    const echoGainOut = (0.6 + mix * 0.3).toFixed(2);
    const echoGainIn = (0.6 + mix * 0.2).toFixed(2);
    const delay = Math.max(1, generative.reverb.predelayMs);
    const decay = (0.2 + mix * 0.6).toFixed(2);
    filters.push(`aecho=${echoGainIn}:${echoGainOut}:${delay}:${decay}`);
  }

  return filters;
}

async function runFfmpeg(
  inputPath: string,
  outputPath: string,
  config: VoiceConfig,
  filterChain: string[],
): Promise<void> {
  return new Promise((resolve, reject) => {
    const command = ffmpeg(inputPath)
      .audioFrequency(config.sampleRate)
      .audioCodec("libmp3lame")
      .outputOptions("-b:a", "192k")
      .output(outputPath);

    if (filterChain.length) {
      command.audioFilters(filterChain);
    }

    command.on("end", resolve).on("error", reject).run();
  });
}

export async function applyGenerativeEffects(
  buffer: Buffer,
  config: VoiceConfig,
  spec: PersonaVoiceSpec,
): Promise<Buffer> {
  try {
    const filterChain = buildFilterChain(spec, config);
    if (!filterChain.length) {
      return buffer;
    }

    const inputTmp = await tmpFile({ postfix: ".mp3" });
    const outputTmp = await tmpFile({ postfix: ".mp3" });
    try {
      await fs.writeFile(inputTmp.path, buffer);
      await runFfmpeg(inputTmp.path, outputTmp.path, config, filterChain);
      return await fs.readFile(outputTmp.path);
    } finally {
      await Promise.allSettled([fs.unlink(inputTmp.path), fs.unlink(outputTmp.path)]);
    }
  } catch (error) {
    console.warn("[TTS] Generative DSP failed; using base audio", error);
    return buffer;
  }
}

export interface AudioAnalysis {
  durationMs: number;
  approxSpeechRate: number;
  meanVolumeDb?: number;
}

async function probeDuration(filePath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (err, data) => {
      if (err) return reject(err);
      resolve((data.format.duration ?? 0) * 1000);
    });
  });
}

async function detectVolume(filePath: string): Promise<number | undefined> {
  return new Promise((resolve) => {
    let meanVolume: number | undefined;
    const command = ffmpeg(filePath)
      .audioFilters("volumedetect")
      .format("null")
      .output("-")
      .on("stderr", (line: string) => {
        const match = line.match(/mean_volume:\s*(-?\d+(?:\.\d+)?)/);
        if (match) {
          meanVolume = Number.parseFloat(match[1]);
        }
      })
      .on("end", () => resolve(meanVolume))
      .on("error", () => resolve(undefined));
    command.run();
  });
}

export async function analyzeAudio(
  buffer: Buffer,
  text: string,
  config: VoiceConfig,
): Promise<AudioAnalysis> {
  try {
    const tmp = await tmpFile({ postfix: ".mp3" });
    try {
      await fs.writeFile(tmp.path, buffer);
      const [durationMs, meanVolumeDb] = await Promise.all([
        probeDuration(tmp.path),
        detectVolume(tmp.path),
      ]);

      const words = text.trim().split(/\s+/).length || 1;
      const seconds = durationMs / 1000 || 1;
      const approxSpeechRate = words / seconds;

      return {
        durationMs,
        approxSpeechRate,
        meanVolumeDb,
      };
    } finally {
      await fs.unlink(tmp.path).catch(() => {});
    }
  } catch (error) {
    console.warn("[TTS] Audio analysis failed; skipping metrics", error);
    return {
      durationMs: 0,
      approxSpeechRate: 0,
    };
  }
}
