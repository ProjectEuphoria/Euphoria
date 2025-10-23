import {
  PERSONA_TOOLKIT_VERSION
} from "./chunk-N4G4RHHX.js";

// src/api/http.server.ts
import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import fastifyStatic from "@fastify/static";
import path3 from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// src/api/adapters/runner-adapter.ts
var cache = {};
async function makeRunnerByName(name) {
  const cacheKey = `${name}@${PERSONA_TOOLKIT_VERSION}`;
  if (cache[cacheKey]) return cache[cacheKey];
  switch (name) {
    case "Helena": {
      const { Helena } = await import("./agent-CW72JOCF.js");
      const built = await Helena();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Milo": {
      const { Milo } = await import("./agent-44VCPB65.js");
      const built = await Milo();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Kai": {
      const { Kai } = await import("./agent-SMGOVCNE.js");
      const built = await Kai();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Sophie": {
      const { Sophie } = await import("./agent-AIRJHBPM.js");
      const built = await Sophie();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Luna": {
      const { Luna } = await import("./agent-V4YXHV4R.js");
      const built = await Luna();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    default:
      throw new Error(`Unknown agent: ${name}`);
  }
}
async function prewarmRunners(names) {
  await Promise.all(names.map((n) => makeRunnerByName(n).catch(() => {
  })));
}

// src/api/auth/signup.ts
import bcrypt from "bcryptjs";

// src/db.ts
import "dotenv/config";
import mysql from "mysql2/promise";
if (typeof window !== "undefined") {
  throw new Error("Do not import server-only db module in the browser");
}
var pool = mysql.createPool({
  host: process.env.DB_HOST ?? "127.0.0.1",
  port: Number(process.env.DB_PORT ?? "3306"),
  user: process.env.DB_USER ?? "Anurag",
  password: process.env.DB_PASSWORD ?? "apppass",
  database: process.env.DB_NAME ?? "Euphoria",
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONN_LIMIT ?? "10")
});

// src/api/auth/signup.ts
import { z } from "zod";
import { randomBytes } from "crypto";
var SignUpSchema = z.object({
  displayName: z.string().min(2).max(32),
  email: z.string().email(),
  password: z.string().min(8)
});
async function signupRoute(app2) {
  app2.post("/auth/signup", async (req, reply) => {
    const parsed = SignUpSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
    }
    const { displayName, email, password } = parsed.data;
    const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
    if (rows.length) return reply.code(409).send({ ok: false, error: "Email already registered" });
    const hash = await bcrypt.hash(password, 10);
    const [res] = await pool.execute(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [displayName, email, hash]
    );
    const sid = randomBytes(32).toString("hex");
    const userId = res.insertId;
    await pool.execute(
      `INSERT INTO sessions (id, user_id, name, email, expire_at)
   VALUES (?, ?, ?, ?, NOW() + INTERVAL 30 DAY)`,
      [sid, userId, displayName, email]
    );
    reply.setCookie("sid", sid, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      // true in production w/ HTTPS
      path: "/",
      maxAge: 60 * 60 * 24 * 30
      // 30 days
    }).send({
      ok: true,
      user: { id: userId, name: displayName, email }
    });
  });
}

// src/api/auth/signin.ts
import bcrypt2 from "bcryptjs";
import { z as z2 } from "zod";
import { randomBytes as randomBytes2 } from "crypto";
var SignInSchema = z2.object({
  email: z2.string().email(),
  password: z2.string().min(8)
});
async function signinRoute(app2) {
  app2.post("/auth/signin", async (req, reply) => {
    try {
      const parsed = SignInSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({
          ok: false,
          error: "Invalid input",
          details: parsed.error.flatten()
        });
      }
      const { email, password } = parsed.data;
      const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
      const users = rows;
      if (!users.length) return reply.code(404).send({ ok: false, error: "User not found" });
      const user = users[0];
      const isMatch = await bcrypt2.compare(password, user.password_hash);
      if (!isMatch) return reply.code(401).send({ ok: false, error: "Invalid credentials" });
      const [existing] = await pool.query(
        "SELECT id FROM sessions WHERE email = ? AND expire_at > NOW() LIMIT 1",
        [email]
      );
      const sessions = existing;
      let sid;
      if (sessions.length) {
        sid = sessions[0].id;
        await pool.execute("UPDATE sessions SET expire_at = NOW() + INTERVAL 30 DAY WHERE id = ?", [sid]);
      } else {
        sid = randomBytes2(32).toString("hex");
        await pool.execute(
          `INSERT INTO sessions (id, user_id, name, email, expire_at)
           VALUES (?, ?, ?, ?, NOW() + INTERVAL 30 DAY)`,
          [sid, user.id, user.name, user.email]
        );
      }
      reply.setCookie("sid", sid, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        // true in production w/ HTTPS
        path: "/",
        maxAge: 60 * 60 * 24 * 30
        // 30 days
      }).send({
        ok: true,
        user: { id: user.id, name: user.name, email: user.email }
      });
    } catch (err) {
      console.error("Signin error:", err);
      return reply.code(500).send({ ok: false, error: "Server error during signin" });
    }
  });
}

// src/api/auth/check.ts
async function authCheckRoute(app2) {
  app2.get("/auth/check", async (req, reply) => {
    const sid = req.cookies?.sid;
    if (!sid) {
      return reply.code(401).send({ ok: false });
    }
    return reply.send({ ok: true });
  });
}

// src/api/auth/logout.ts
async function logoutRoute(app2) {
  app2.post("/auth/logout", async (req, reply) => {
    reply.clearCookie("sid", {
      path: "/",
      // must match the same path as setCookie()
      httpOnly: true,
      sameSite: "lax",
      secure: false
      // true in production
    });
    return reply.send({ ok: true, message: "Logged out successfully" });
  });
}

// src/api/tts/route.ts
import { z as z3 } from "zod";

// src/api/tts/polly.ts
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";

// src/api/tts/config.ts
import fs from "fs/promises";
import path from "path";
var DEFAULT_CONFIG_PATH = path.resolve(process.cwd(), "config/voices.euphoria.json");
var cachedConfig = null;
var loadPromise = null;
async function readConfigFile(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}
async function getVoiceConfig(configPath = DEFAULT_CONFIG_PATH) {
  if (cachedConfig) return cachedConfig;
  if (!loadPromise) {
    loadPromise = readConfigFile(configPath).then((cfg) => {
      cachedConfig = cfg;
      return cfg;
    });
  }
  return loadPromise;
}
async function getPersonaSpec(persona) {
  const config = await getVoiceConfig();
  return config.personas[persona] ?? null;
}

// src/api/tts/processor.ts
import fs2 from "fs/promises";
import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
import { file as tmpFile } from "tmp-promise";
if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic);
}
var MIN_ATEMPO = 0.5;
var MAX_ATEMPO = 2;
function splitAtempo(factor) {
  const factors = [];
  let remaining = factor;
  const clamp2 = (val) => Math.min(MAX_ATEMPO, Math.max(MIN_ATEMPO, val));
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
  factors.push(clamp2(remaining));
  return factors;
}
function buildFilterChain(spec, config) {
  const filters = [];
  const generative = spec.generative;
  const sampleRate = config.sampleRate;
  const pitchRatio = Math.pow(2, generative.pitchSemitones / 12);
  const targetRate = 1 + generative.ratePct / 100;
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
      `equalizer=f=120:t=l:s=1.0:g=${generative.eq.lowShelfDb.toFixed(2)}`
    );
  }
  if (generative.eq.presenceDb) {
    filters.push(
      `equalizer=f=3200:t=h:s=0.5:g=${generative.eq.presenceDb.toFixed(2)}`
    );
  }
  if (generative.eq.airDb) {
    filters.push(
      `equalizer=f=8000:t=h:s=0.7:g=${generative.eq.airDb.toFixed(2)}`
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
async function runFfmpeg(inputPath, outputPath, config, filterChain) {
  return new Promise((resolve, reject) => {
    const command = ffmpeg(inputPath).audioFrequency(config.sampleRate).audioCodec("libmp3lame").outputOptions("-b:a", "192k").output(outputPath);
    if (filterChain.length) {
      command.audioFilters(filterChain);
    }
    command.on("end", resolve).on("error", reject).run();
  });
}
async function applyGenerativeEffects(buffer, config, spec) {
  try {
    const filterChain = buildFilterChain(spec, config);
    if (!filterChain.length) {
      return buffer;
    }
    const inputTmp = await tmpFile({ postfix: ".mp3" });
    const outputTmp = await tmpFile({ postfix: ".mp3" });
    try {
      await fs2.writeFile(inputTmp.path, buffer);
      await runFfmpeg(inputTmp.path, outputTmp.path, config, filterChain);
      return await fs2.readFile(outputTmp.path);
    } finally {
      await Promise.allSettled([fs2.unlink(inputTmp.path), fs2.unlink(outputTmp.path)]);
    }
  } catch (error) {
    console.warn("[TTS] Generative DSP failed; using base audio", error);
    return buffer;
  }
}
async function probeDuration(filePath) {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (err, data) => {
      if (err) return reject(err);
      resolve((data.format.duration ?? 0) * 1e3);
    });
  });
}
async function detectVolume(filePath) {
  return new Promise((resolve) => {
    let meanVolume;
    const command = ffmpeg(filePath).audioFilters("volumedetect").format("null").output("-").on("stderr", (line) => {
      const match = line.match(/mean_volume:\s*(-?\d+(?:\.\d+)?)/);
      if (match) {
        meanVolume = Number.parseFloat(match[1]);
      }
    }).on("end", () => resolve(meanVolume)).on("error", () => resolve(void 0));
    command.run();
  });
}
async function analyzeAudio(buffer, text, config) {
  try {
    const tmp = await tmpFile({ postfix: ".mp3" });
    try {
      await fs2.writeFile(tmp.path, buffer);
      const [durationMs, meanVolumeDb] = await Promise.all([
        probeDuration(tmp.path),
        detectVolume(tmp.path)
      ]);
      const words = text.trim().split(/\s+/).length || 1;
      const seconds = durationMs / 1e3 || 1;
      const approxSpeechRate = words / seconds;
      return {
        durationMs,
        approxSpeechRate,
        meanVolumeDb
      };
    } finally {
      await fs2.unlink(tmp.path).catch(() => {
      });
    }
  } catch (error) {
    console.warn("[TTS] Audio analysis failed; skipping metrics", error);
    return {
      durationMs: 0,
      approxSpeechRate: 0
    };
  }
}

// src/api/tts/cache.ts
import crypto from "crypto";
import fs3 from "fs/promises";
import path2 from "path";
var AUDIO_EXT = ".mp3";
var META_EXT = ".json";
function hashKey(data) {
  const json = JSON.stringify(data, Object.keys(data).sort());
  return crypto.createHash("sha1").update(json).digest("hex");
}
async function ensureDir(dir) {
  await fs3.mkdir(dir, { recursive: true });
}
function buildCacheKey(input) {
  return hashKey(input);
}
function resolvePaths(cacheDir, key) {
  return {
    audioPath: path2.join(cacheDir, `${key}${AUDIO_EXT}`),
    metaPath: path2.join(cacheDir, `${key}${META_EXT}`)
  };
}
async function loadFromCache(config, key) {
  const cacheDir = path2.resolve(process.cwd(), config.cache.dir);
  try {
    const { audioPath, metaPath } = resolvePaths(cacheDir, key);
    const [audioStat, metaStat] = await Promise.all([
      fs3.stat(audioPath),
      fs3.stat(metaPath)
    ]);
    const now = Date.now();
    const maxAgeMs = config.cache.maxAgeSec * 1e3;
    const newest = Math.max(audioStat.mtimeMs, metaStat.mtimeMs);
    if (now - newest > maxAgeMs) {
      return null;
    }
    const [buffer, metaRaw] = await Promise.all([
      fs3.readFile(audioPath),
      fs3.readFile(metaPath, "utf8")
    ]);
    const meta = JSON.parse(metaRaw);
    meta.cache = {
      key,
      hit: true,
      expiresAt: newest + maxAgeMs
    };
    return { buffer, meta };
  } catch {
    return null;
  }
}
async function saveToCache(config, key, buffer, meta) {
  const cacheDir = path2.resolve(process.cwd(), config.cache.dir);
  await ensureDir(cacheDir);
  const { audioPath, metaPath } = resolvePaths(cacheDir, key);
  const metaWithCache = {
    ...meta,
    cache: {
      key,
      hit: false,
      expiresAt: Date.now() + config.cache.maxAgeSec * 1e3
    }
  };
  await Promise.all([
    fs3.writeFile(audioPath, buffer),
    fs3.writeFile(metaPath, JSON.stringify(metaWithCache, null, 2), "utf8")
  ]);
}

// src/api/tts/polly.ts
var DEFAULT_REGION = process.env.AWS_REGION || "ap-south-1";
var cachedClient = null;
var cachedRegion = null;
async function getPollyClient(region) {
  if (!cachedClient || cachedRegion !== region) {
    cachedClient = new PollyClient({ region });
    cachedRegion = region;
  }
  return cachedClient;
}
async function streamToBuffer(stream) {
  if (!stream) return Buffer.alloc(0);
  if (Buffer.isBuffer(stream)) return stream;
  if (stream instanceof Uint8Array) return Buffer.from(stream);
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}
function semitonesToPercent(semitones) {
  const ratio = Math.pow(2, semitones / 12);
  const percent = (ratio - 1) * 100;
  const formatted = percent >= 0 ? `+${percent.toFixed(1)}%` : `${percent.toFixed(1)}%`;
  return formatted;
}
function ratePctToPercent(ratePct) {
  const base = 100 + ratePct;
  return `${base.toFixed(1)}%`;
}
function buildProsodyAttributes(generative) {
  return {
    pitch: semitonesToPercent(generative.pitchSemitones),
    rate: ratePctToPercent(generative.ratePct)
  };
}
function escapeXml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function sanitizeText(text) {
  return text.replace(new RegExp("\\p{Extended_Pictographic}", "gu"), "").replace(/[\uFE0F\u200D]/g, "").replace(/\s+/g, " ").trim();
}
function buildStyledSsml(text, persona) {
  const {
    prosody: { pauseMs }
  } = persona.generative;
  const escaped = escapeXml(text);
  const commaBreak = pauseMs.comma ? `<break time="${pauseMs.comma}ms"/>` : "";
  const periodBreak = pauseMs.period ? `<break time="${pauseMs.period}ms"/>` : "";
  const paragraphBreak = pauseMs.paragraph ? `<break time="${pauseMs.paragraph}ms"/>` : "";
  let enriched = escaped.replace(/,\s+/g, (match) => `,${commaBreak} `).replace(/([.!?])\s+/g, (_match, punct) => `${punct}${periodBreak} `).replace(/\n{2,}/g, `${paragraphBreak}`);
  enriched = enriched.replace(/\.\.\./g, `<break time="${pauseMs.period}ms"/>`);
  const prosodyAttr = buildProsodyAttributes(persona.generative);
  const volumeAttr = persona.generative.eq.presenceDb > 1 ? "medium" : "default";
  const inner = `<prosody pitch="${prosodyAttr.pitch}" rate="${prosodyAttr.rate}"${volumeAttr !== "default" ? ` volume="${volumeAttr}"` : ""}>${enriched}</prosody>`;
  return `<speak xmlns="http://www.w3.org/2001/10/synthesis">${inner}</speak>`;
}
function buildPlainSsml(text) {
  return `<speak xmlns="http://www.w3.org/2001/10/synthesis">${escapeXml(text)}</speak>`;
}
function buildSsml(text, persona) {
  return buildStyledSsml(text, persona);
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function cloneGenerative(spec) {
  return JSON.parse(JSON.stringify(spec));
}
async function fetchSpeechMarks(client, baseParams) {
  try {
    const params = {
      VoiceId: baseParams.VoiceId,
      Text: baseParams.Text,
      TextType: baseParams.TextType,
      Engine: baseParams.Engine,
      LanguageCode: baseParams.LanguageCode,
      OutputFormat: "json",
      SpeechMarkTypes: ["word"]
    };
    const response = await client.send(new SynthesizeSpeechCommand(params));
    const buffer = await streamToBuffer(response.AudioStream);
    const raw = buffer.toString("utf8").trim();
    if (!raw) return [];
    const marks = raw.split(/\r?\n/).map((line) => {
      try {
        const parsed = JSON.parse(line);
        if (parsed?.type !== "word" || typeof parsed.value !== "string") {
          return null;
        }
        const time = Number(parsed.time ?? 0);
        if (Number.isNaN(time)) return null;
        const start = typeof parsed.start === "number" ? Math.max(0, parsed.start) : void 0;
        const end = typeof parsed.end === "number" ? Math.max(0, parsed.end) : void 0;
        return {
          time,
          type: "word",
          value: parsed.value,
          start,
          end
        };
      } catch {
        return null;
      }
    }).filter((mark) => Boolean(mark));
    return marks;
  } catch (error) {
    console.warn("[Polly] Failed to fetch speech marks:", error);
    return [];
  }
}
function deriveDynamicSpec(personaSpec, body) {
  const generated = cloneGenerative(personaSpec.generative);
  const apply = (updates) => {
    if (updates.pitchSemitones !== void 0) {
      generated.pitchSemitones = clamp(
        generated.pitchSemitones + updates.pitchSemitones,
        -6,
        6
      );
    }
    if (updates.ratePct !== void 0) {
      generated.ratePct = clamp(generated.ratePct + updates.ratePct, -20, 20);
    }
    if (updates.eq) {
      generated.eq.lowShelfDb = clamp(
        generated.eq.lowShelfDb + (updates.eq.lowShelfDb ?? 0),
        -6,
        6
      );
      generated.eq.presenceDb = clamp(
        generated.eq.presenceDb + (updates.eq.presenceDb ?? 0),
        -6,
        6
      );
      generated.eq.airDb = clamp(
        generated.eq.airDb + (updates.eq.airDb ?? 0),
        -6,
        6
      );
    }
    if (updates.reverb) {
      generated.reverb.mix = clamp(
        generated.reverb.mix + (updates.reverb.mix ?? 0),
        0,
        0.5
      );
      generated.reverb.predelayMs = clamp(
        generated.reverb.predelayMs + (updates.reverb.predelayMs ?? 0),
        0,
        50
      );
    }
    if (updates.breath) {
      generated.breath.prob = clamp(
        generated.breath.prob + (updates.breath.prob ?? 0),
        0,
        0.3
      );
    }
  };
  switch (body.sentiment) {
    case "excited":
      apply({
        pitchSemitones: 0.8,
        ratePct: 8,
        eq: { presenceDb: 0.6, airDb: 0.5 },
        breath: { prob: 0.03 }
      });
      break;
    case "pos":
      apply({ pitchSemitones: 0.4, ratePct: 3 });
      break;
    case "neg":
      apply({
        pitchSemitones: -0.4,
        ratePct: -4,
        eq: { lowShelfDb: -0.3, presenceDb: -0.2 }
      });
      break;
    case "calm":
      apply({
        pitchSemitones: -0.5,
        ratePct: -6,
        reverb: { mix: 0.04 }
      });
      break;
    case "serious":
      apply({
        pitchSemitones: -0.3,
        ratePct: -4,
        eq: { presenceDb: -0.3 }
      });
      break;
    default:
      break;
  }
  switch (body.style) {
    case "dynamic":
      apply({ pitchSemitones: 0.3, ratePct: 4, breath: { prob: 0.02 } });
      break;
    case "encouraging":
      apply({ pitchSemitones: 0.2, ratePct: 2 });
      break;
    case "serene":
      apply({
        pitchSemitones: -0.2,
        ratePct: -4,
        reverb: { mix: 0.03 }
      });
      break;
    case "composed":
      apply({ ratePct: -2, eq: { presenceDb: -0.2 } });
      break;
    case "grounded":
      apply({ ratePct: -1, eq: { lowShelfDb: 0.4 } });
      break;
    default:
      break;
  }
  return {
    ...personaSpec,
    generative: generated
  };
}
async function synthesizePollySpeech(body) {
  const { persona, text } = body;
  const cleanedText = sanitizeText(text);
  const effectiveText = cleanedText.length ? cleanedText : text;
  const [config, personaSpec] = await Promise.all([
    getVoiceConfig(),
    getPersonaSpec(persona)
  ]);
  if (!personaSpec) {
    throw new Error(`Unknown persona voice spec: ${persona}`);
  }
  const effectiveSpec = deriveDynamicSpec(personaSpec, body);
  const cacheKey = buildCacheKey({
    persona,
    text: effectiveText,
    style: body.style ?? null,
    sentiment: body.sentiment ?? null,
    seed: body.seed ?? null,
    spec: effectiveSpec.generative
  });
  const cached = await loadFromCache(config, cacheKey);
  if (cached) {
    return {
      buffer: cached.buffer,
      contentType: config.outputFormat === "mp3" ? "audio/mpeg" : `audio/${config.outputFormat}`,
      meta: cached.meta
    };
  }
  const region = process.env.AWS_REGION || config.region || DEFAULT_REGION;
  const client = await getPollyClient(region);
  const attempts = [
    {
      label: "styled-ssml",
      engine: personaSpec.engine,
      textType: "ssml",
      payload: buildSsml(effectiveText, effectiveSpec),
      allowCache: true,
      ssmlProsody: true
    },
    {
      label: "plain-ssml",
      engine: personaSpec.engine,
      textType: "ssml",
      payload: buildPlainSsml(effectiveText),
      allowCache: true,
      ssmlProsody: false
    },
    {
      label: "plain-text",
      engine: personaSpec.engine,
      textType: "text",
      payload: effectiveText,
      allowCache: true,
      ssmlProsody: false
    }
  ];
  if (personaSpec.engine === "neural") {
    attempts.push({
      label: "plain-text-standard",
      engine: "standard",
      textType: "text",
      payload: effectiveText,
      allowCache: true,
      ssmlProsody: false
    });
  }
  let lastError = null;
  for (const attempt of attempts) {
    try {
      const params = {
        OutputFormat: config.outputFormat,
        SampleRate: String(config.sampleRate),
        VoiceId: personaSpec.base,
        TextType: attempt.textType,
        Text: attempt.payload,
        Engine: attempt.engine,
        LanguageCode: personaSpec.lang
      };
      const response = await client.send(
        new SynthesizeSpeechCommand(params)
      );
      const baseBuffer = await streamToBuffer(response.AudioStream);
      if (!baseBuffer.length) {
        throw new Error("Polly returned an empty audio buffer");
      }
      const processedBuffer = await applyGenerativeEffects(baseBuffer, config, effectiveSpec);
      const speechMarks = await fetchSpeechMarks(client, params);
      const analysis = await analyzeAudio(processedBuffer, effectiveText, config);
      const meta = {
        persona,
        baseVoice: effectiveSpec.base,
        engine: attempt.engine,
        applied: {
          ssmlProsody: attempt.ssmlProsody,
          pollyNeural: attempt.engine === "neural",
          dspPost: processedBuffer !== baseBuffer
        },
        generative: effectiveSpec.generative,
        request: {
          style: body.style,
          sentiment: body.sentiment,
          seed: body.seed
        },
        analysis,
        speechMarks
      };
      if (attempt.allowCache) {
        await saveToCache(config, cacheKey, processedBuffer, meta);
        meta.cache = {
          key: cacheKey,
          hit: false,
          expiresAt: Date.now() + config.cache.maxAgeSec * 1e3
        };
      } else {
        meta.cache = void 0;
      }
      return {
        buffer: processedBuffer,
        contentType: response.ContentType ?? "audio/mpeg",
        meta
      };
    } catch (err) {
      lastError = err;
      const isInvalid = err?.name === "InvalidSsmlException" || /Unsupported Neural feature/i.test(err?.message ?? "");
      if (!isInvalid) {
        throw err;
      }
      continue;
    }
  }
  throw lastError instanceof Error ? lastError : new Error("Polly synthesis failed");
}

// src/api/tts/route.ts
var personaValues = ["Sophie", "Luna", "Helena", "Kai", "Milo"];
var contourValues = ["encouraging", "serene", "composed", "dynamic", "grounded", "neutral"];
var sentimentValues = ["pos", "neg", "excited", "calm", "serious"];
var RequestSchema = z3.object({
  persona: z3.enum(personaValues),
  text: z3.string().min(1).max(1500),
  style: z3.enum(contourValues).optional(),
  sentiment: z3.enum(sentimentValues).optional(),
  seed: z3.number().int().optional()
});
async function ttsRoute(app2) {
  app2.post("/tts", async (req, reply) => {
    try {
      const parsed = RequestSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({
          ok: false,
          error: "Invalid input",
          details: parsed.error.flatten()
        });
      }
      const result = await synthesizePollySpeech(parsed.data);
      reply.type("application/json").send({
        ok: true,
        contentType: result.contentType,
        audio: result.buffer.toString("base64"),
        meta: result.meta
      });
    } catch (error) {
      req.log.error({ err: error }, "Polly TTS failed");
      return reply.code(500).send({
        ok: false,
        error: error?.message ?? "Polly synthesis failed"
      });
    }
  });
}

// src/api/http.server.ts
dotenv.config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path3.dirname(__filename);
var app = Fastify({ logger: true });
app.addHook("onRoute", (route) => {
  app.log.info(`\u{1F4E1} Registered route: [${route.method}] ${route.url}`);
});
var rawOrigins = process.env.CORS_ORIGINS;
var allowedOrigins = (rawOrigins ? rawOrigins.split(",").map((origin) => origin.trim()) : ["http://localhost:5173", "http://127.0.0.1:5173"]).map((origin) => origin.replace(/\/$/, "")).filter(Boolean);
await app.register(cors, {
  origin(origin, cb) {
    if (!origin) return cb(null, true);
    const normalized = origin.replace(/\/$/, "");
    if (allowedOrigins.includes("*") || allowedOrigins.includes(normalized)) {
      return cb(null, true);
    }
    cb(new Error(`Origin ${origin} is not allowed by CORS policy`), false);
  },
  credentials: true
});
var cookieSecret = process.env.COOKIE_SECRET || "replace-me";
if (!process.env.COOKIE_SECRET) {
  app.log.warn(
    "COOKIE_SECRET is not set; using an insecure default. Set COOKIE_SECRET in production."
  );
}
await app.register(cookie, {
  secret: cookieSecret
});
var edgeSecret = process.env.EDGE_SECRET?.trim();
if (edgeSecret) {
  app.addHook("onRequest", async (req, reply) => {
    if (!req.url.startsWith("/adk/")) return;
    const provided = req.headers["x-edge-auth"];
    if (provided !== edgeSecret) {
      return reply.code(403).send({ error: "Forbidden" });
    }
  });
}
await app.register(signupRoute, { prefix: "/adk/api" });
await app.register(signinRoute, { prefix: "/adk/api" });
await app.register(authCheckRoute, { prefix: "/adk/api" });
await app.register(logoutRoute, { prefix: "/adk/api" });
await app.register(ttsRoute, { prefix: "/adk/api" });
app.post("/adk/agents/:name/ask", async (req, reply) => {
  try {
    const { name } = req.params;
    const { input } = req.body ?? {};
    app.log.info(`\u{1F4AC} Chat request to agent "${name}" with input: ${input}`);
    if (!input || typeof input !== "string") {
      return reply.code(400).send({ error: 'Missing "input" string in body' });
    }
    const runner = await makeRunnerByName(name);
    if (!runner?.ask) throw new Error(`Runner for ${name} has no "ask"`);
    const out = await runner.ask(input);
    return { reply: typeof out === "string" ? out : String(out) };
  } catch (err) {
    app.log.error(err);
    return reply.code(500).send({ error: err?.message || "Internal error" });
  }
});
if (process.env.NODE_ENV === "production") {
  const uiDir = path3.resolve(__dirname, "../../dist");
  await app.register(fastifyStatic, {
    root: uiDir,
    prefix: "/",
    // serve at /
    wildcard: true,
    // allow nested paths
    index: "index.html"
  });
  app.setNotFoundHandler((req, reply) => {
    const accept = req.headers.accept || "";
    if (req.raw.method === "GET" && accept.includes("text/html")) {
      return reply.sendFile("index.html");
    }
    return reply.code(404).send({ error: "Not found" });
  });
}
app.get("/health", async () => ({ ok: true }));
await prewarmRunners(["Helena"]);
app.addHook("onReady", async () => {
  console.log("\u2705 Fastify middleware & routes fully loaded");
  console.log("\u{1F4CD} Routes registered:");
  app.printRoutes();
});
var PORT = Number(process.env.PORT || process.env.API_PORT || 8080);
var HOST = "0.0.0.0";
try {
  await app.listen({ port: PORT, host: HOST });
  app.log.info(`\u{1F525} ADK server running on :${PORT} (host=${HOST}, env=${process.env.NODE_ENV})`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
