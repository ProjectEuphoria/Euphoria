import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import type {
  SynthesizeSpeechCommandInput,
  SynthesizeSpeechCommandOutput,
} from "@aws-sdk/client-polly";
import { Readable } from "node:stream";
import { getPersonaSpec, getVoiceConfig } from "./config.js";
import { applyGenerativeEffects, analyzeAudio } from "./processor.js";
import {
  buildCacheKey,
  loadFromCache,
  saveToCache,
} from "./cache.js";
import type {
  PersonaVoiceSpec,
  VoiceGenerativeSpec,
  TtsRequestBody,
  TtsResponseMeta,
} from "./types.js";

const DEFAULT_REGION = process.env.AWS_REGION || "ap-south-1";

let cachedClient: PollyClient | null = null;
let cachedRegion: string | null = null;

async function getPollyClient(region: string): Promise<PollyClient> {
  if (!cachedClient || cachedRegion !== region) {
    cachedClient = new PollyClient({ region });
    cachedRegion = region;
  }
  return cachedClient;
}

async function streamToBuffer(stream?: Buffer | Uint8Array | Readable): Promise<Buffer> {
  if (!stream) return Buffer.alloc(0);
  if (Buffer.isBuffer(stream)) return stream;
  if (stream instanceof Uint8Array) return Buffer.from(stream);

  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

function semitonesToPercent(semitones: number): string {
  const ratio = Math.pow(2, semitones / 12);
  const percent = (ratio - 1) * 100;
  const formatted = percent >= 0 ? `+${percent.toFixed(1)}%` : `${percent.toFixed(1)}%`;
  return formatted;
}

function ratePctToPercent(ratePct: number): string {
  const base = 100 + ratePct;
  return `${base.toFixed(1)}%`;
}

function buildProsodyAttributes(generative: VoiceGenerativeSpec) {
  return {
    pitch: semitonesToPercent(generative.pitchSemitones),
    rate: ratePctToPercent(generative.ratePct),
  };
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildStyledSsml(text: string, persona: PersonaVoiceSpec): string {
  const {
    prosody: { pauseMs },
  } = persona.generative;

  const escaped = escapeXml(text);

  const commaBreak = pauseMs.comma ? `<break time="${pauseMs.comma}ms"/>` : "";
  const periodBreak = pauseMs.period ? `<break time="${pauseMs.period}ms"/>` : "";
  const paragraphBreak = pauseMs.paragraph ? `<break time="${pauseMs.paragraph}ms"/>` : "";

  let enriched = escaped
    .replace(/,\s+/g, (match) => `,${commaBreak} `)
    .replace(/([.!?])\s+/g, (_match, punct) => `${punct}${periodBreak} `)
    .replace(/\n{2,}/g, `${paragraphBreak}`);

  enriched = enriched.replace(/\.\.\./g, `<break time="${pauseMs.period}ms"/>`);

  const prosodyAttr = buildProsodyAttributes(persona.generative);
  const volumeAttr = persona.generative.eq.presenceDb > 1 ? "medium" : "default";

  const inner = `<prosody pitch="${prosodyAttr.pitch}" rate="${prosodyAttr.rate}"${volumeAttr !== "default" ? ` volume="${volumeAttr}"` : ""}>${enriched}</prosody>`;

  return `<speak xmlns="http://www.w3.org/2001/10/synthesis">${inner}</speak>`;
}

function buildPlainSsml(text: string): string {
  return `<speak xmlns="http://www.w3.org/2001/10/synthesis">${escapeXml(text)}</speak>`;
}

function buildSsml(text: string, persona: PersonaVoiceSpec): string {
  return buildStyledSsml(text, persona);
}

export interface PollySynthesisResult {
  buffer: Buffer;
  contentType: string;
  meta: TtsResponseMeta;
}

export async function synthesizePollySpeech(body: TtsRequestBody): Promise<PollySynthesisResult> {
  const { persona, text } = body;
  const [config, personaSpec] = await Promise.all([
    getVoiceConfig(),
    getPersonaSpec(persona),
  ]);

  if (!personaSpec) {
    throw new Error(`Unknown persona voice spec: ${persona}`);
  }

  const cacheKey = buildCacheKey({
    persona,
    text,
    style: body.style ?? null,
    sentiment: body.sentiment ?? null,
    seed: body.seed ?? null,
    spec: personaSpec,
  });

  const cached = await loadFromCache(config, cacheKey);
  if (cached) {
    return {
      buffer: cached.buffer,
      contentType: config.outputFormat === "mp3" ? "audio/mpeg" : `audio/${config.outputFormat}`,
      meta: cached.meta,
    };
  }

  const region = process.env.AWS_REGION || config.region || DEFAULT_REGION;
  const client = await getPollyClient(region);

  const attempts: Array<{
    label: "styled-ssml" | "plain-ssml" | "plain-text" | "plain-text-standard";
    engine: "neural" | "standard";
    textType: "ssml" | "text";
    payload: string;
    allowCache: boolean;
    ssmlProsody: boolean;
  }> = [
    {
      label: "styled-ssml",
      engine: personaSpec.engine,
      textType: "ssml",
      payload: buildSsml(text, personaSpec),
      allowCache: true,
      ssmlProsody: true,
    },
    {
      label: "plain-ssml",
      engine: personaSpec.engine,
      textType: "ssml",
      payload: buildPlainSsml(text),
      allowCache: true,
      ssmlProsody: false,
    },
    {
      label: "plain-text",
      engine: personaSpec.engine,
      textType: "text",
      payload: text,
      allowCache: true,
      ssmlProsody: false,
    },
  ];

  if (personaSpec.engine === "neural") {
    attempts.push({
      label: "plain-text-standard",
      engine: "standard",
      textType: "text",
      payload: text,
      allowCache: true,
      ssmlProsody: false,
    });
  }

  let lastError: unknown = null;

  for (const attempt of attempts) {
    try {
      const params: SynthesizeSpeechCommandInput = {
        OutputFormat: config.outputFormat,
        SampleRate: String(config.sampleRate),
        VoiceId: personaSpec.base,
        TextType: attempt.textType,
        Text: attempt.payload,
        Engine: attempt.engine,
        LanguageCode: personaSpec.lang,
      };

      const response: SynthesizeSpeechCommandOutput = await client.send(
        new SynthesizeSpeechCommand(params),
      );

      const baseBuffer = await streamToBuffer(response.AudioStream);
      if (!baseBuffer.length) {
        throw new Error("Polly returned an empty audio buffer");
      }

      const processedBuffer = await applyGenerativeEffects(baseBuffer, config, personaSpec);
      const analysis = await analyzeAudio(processedBuffer, text, config);

      const meta: TtsResponseMeta = {
        persona,
        baseVoice: personaSpec.base,
        engine: attempt.engine,
        applied: {
          ssmlProsody: attempt.ssmlProsody,
          pollyNeural: attempt.engine === "neural",
          dspPost: processedBuffer !== baseBuffer,
        },
        generative: personaSpec.generative,
        request: {
          style: body.style,
          sentiment: body.sentiment,
          seed: body.seed,
        },
        analysis,
      };

      if (attempt.allowCache) {
        await saveToCache(config, cacheKey, processedBuffer, meta);
        meta.cache = {
          key: cacheKey,
          hit: false,
          expiresAt: Date.now() + config.cache.maxAgeSec * 1000,
        };
      } else {
        meta.cache = undefined;
      }

      return {
        buffer: processedBuffer,
        contentType: response.ContentType ?? "audio/mpeg",
        meta,
      };
    } catch (err: any) {
      lastError = err;
      const isInvalid =
        err?.name === "InvalidSsmlException" || /Unsupported Neural feature/i.test(err?.message ?? "");
      if (!isInvalid) {
        throw err;
      }
      continue;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Polly synthesis failed");
}
