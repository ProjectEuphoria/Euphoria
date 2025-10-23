import {
  PERSONA_TOOLKIT_VERSION
} from "./chunk-N4G4RHHX.js";

// src/mcp/toolsets/index.ts
import { McpIqWiki } from "@iqai/adk";

// src/mcp/toolsets/localContext.ts
import path from "path";
import fs from "fs/promises";
import { McpToolset } from "@iqai/adk";
var journalRoot = path.resolve(process.cwd(), "data/journal");
var ensureJournalDir = fs.mkdir(journalRoot, { recursive: true }).catch((error) => {
  console.error("[MCP] Failed to create journal directory", error);
  throw error;
});
var filesystemToolset = new McpToolset({
  name: "filesystem-journal",
  description: "Local journaling store used for user reflections and offline memory.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      journalRoot
    ],
    env: {
      PATH: process.env.PATH ?? ""
    }
  }
});
async function getFilesystemTools() {
  await ensureJournalDir;
  return filesystemToolset.getTools();
}

// src/mcp/toolsets/search.ts
import path2 from "path";
import { fileURLToPath } from "url";
import { McpToolset as McpToolset2 } from "@iqai/adk";
var __dirname = path2.dirname(fileURLToPath(import.meta.url));
var serverPath = path2.resolve(__dirname, "../servers/webSearch.server.ts");
var webSearchToolset = new McpToolset2({
  name: "web-search",
  description: "Search and discovery via DuckDuckGo Instant Answer API.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath],
    env: {
      PATH: process.env.PATH ?? ""
    }
  }
});
async function getWebSearchTools() {
  return webSearchToolset.getTools();
}

// src/mcp/toolsets/knowledge.ts
import path3 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { McpToolset as McpToolset3 } from "@iqai/adk";
var __dirname2 = path3.dirname(fileURLToPath2(import.meta.url));
var serverPath2 = path3.resolve(__dirname2, "../servers/wikipedia.server.ts");
var wikipediaToolset = new McpToolset3({
  name: "wikipedia-knowledge",
  description: "Knowledge grounding via Wikipedia summaries and search.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath2],
    env: {
      PATH: process.env.PATH ?? ""
    }
  }
});
async function getWikipediaTools() {
  return wikipediaToolset.getTools();
}

// src/mcp/toolsets/visuals.ts
import path4 from "path";
import { fileURLToPath as fileURLToPath3 } from "url";
import { McpToolset as McpToolset4 } from "@iqai/adk";
var __dirname3 = path4.dirname(fileURLToPath3(import.meta.url));
var serverPath3 = path4.resolve(__dirname3, "../servers/unsplash.server.ts");
var unsplashToolset = new McpToolset4({
  name: "unsplash-visuals",
  description: "Curate Unsplash imagery for mood-based backgrounds and cards.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath3],
    env: {
      PATH: process.env.PATH ?? "",
      UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY ?? ""
    }
  }
});
async function getUnsplashTools() {
  return unsplashToolset.getTools();
}

// src/mcp/toolsets/music.ts
import path5 from "path";
import { fileURLToPath as fileURLToPath4 } from "url";
import { McpToolset as McpToolset5 } from "@iqai/adk";
var __dirname4 = path5.dirname(fileURLToPath4(import.meta.url));
var serverPath4 = path5.resolve(__dirname4, "../servers/spotify.server.ts");
var spotifyToolset = new McpToolset5({
  name: "spotify-mood",
  description: "Mood-aware Spotify playlists and tracks.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath4],
    env: {
      PATH: process.env.PATH ?? "",
      SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID ?? "",
      SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET ?? ""
    }
  }
});
async function getSpotifyTools() {
  return spotifyToolset.getTools();
}

// src/mcp/toolsets/emotion.ts
import path6 from "path";
import { fileURLToPath as fileURLToPath5 } from "url";
import { McpToolset as McpToolset6 } from "@iqai/adk";
var __dirname5 = path6.dirname(fileURLToPath5(import.meta.url));
var serverPath5 = path6.resolve(__dirname5, "../servers/emotion.server.ts");
var emotionToolset = new McpToolset6({
  name: "emotion-analytics",
  description: "Lightweight sentiment and tone analytics for reflections.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath5],
    env: {
      PATH: process.env.PATH ?? ""
    }
  }
});
async function getEmotionTools() {
  return emotionToolset.getTools();
}

// src/mcp/toolsets/journal.ts
import path7 from "path";
import { fileURLToPath as fileURLToPath6 } from "url";
import { McpToolset as McpToolset7 } from "@iqai/adk";
var __dirname6 = path7.dirname(fileURLToPath6(import.meta.url));
var serverPath6 = path7.resolve(__dirname6, "../servers/journal.server.ts");
var journalingToolset = new McpToolset7({
  name: "journal-reflection",
  description: "Reflection prompts and storage helpers on top of local journal.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath6],
    env: {
      PATH: process.env.PATH ?? "",
      JOURNAL_ROOT: journalRoot
    }
  }
});
async function getJournalingTools() {
  return journalingToolset.getTools();
}

// src/mcp/toolsets/trends.ts
import path8 from "path";
import { fileURLToPath as fileURLToPath7 } from "url";
import { McpToolset as McpToolset8 } from "@iqai/adk";
var __dirname7 = path8.dirname(fileURLToPath7(import.meta.url));
var serverPath7 = path8.resolve(__dirname7, "../servers/trends.server.ts");
var trendsToolset = new McpToolset8({
  name: "google-trends",
  description: "Google Trends insights for wellness and productivity topics.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath7],
    env: {
      PATH: process.env.PATH ?? ""
    }
  }
});
async function getTrendsTools() {
  return trendsToolset.getTools();
}

// src/mcp/toolsets/quotes.ts
import path9 from "path";
import { fileURLToPath as fileURLToPath8 } from "url";
import { McpToolset as McpToolset9 } from "@iqai/adk";
var __dirname8 = path9.dirname(fileURLToPath8(import.meta.url));
var serverPath8 = path9.resolve(__dirname8, "../servers/quotes.server.ts");
var quotesToolset = new McpToolset9({
  name: "zenquotes-feed",
  description: "Positive affirmations and quotes for uplifting replies.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath8],
    env: {
      PATH: process.env.PATH ?? ""
    }
  }
});
async function getQuotesTools() {
  return quotesToolset.getTools();
}

// src/mcp/toolsets/summarizer.ts
import { AgentBuilder, createTool } from "@iqai/adk";
import { z } from "@iqai/adk/node_modules/zod";

// src/mcp/utils/http.ts
function sanitizeErrorMessage(error) {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

// src/mcp/toolsets/summarizer.ts
var runnerPromise = null;
async function getSummarizerRunner() {
  if (!runnerPromise) {
    if (!process.env.GOOGLE_API_KEY) {
      throw new Error(
        "summarize_reflections requires GOOGLE_API_KEY to be configured for the Gemini model."
      );
    }
    runnerPromise = AgentBuilder.create("WeeklyMoodSummarizer").withModel("gemini-2.5-flash").withInstruction(
      [
        "You are a cozy Gen-Z productivity coach.",
        "Summarize journal/check-in entries into positive, honest recaps.",
        "Respond strictly in JSON with keys: summary (string), highlights (array of strings), action_items (array of strings).",
        "Keep tone uplifting, slang-light, and under 120 words per field."
      ].join("\n")
    ).build().then((built) => built.runner);
  }
  return runnerPromise;
}
var summarizerInput = z.object({
  entries: z.array(z.string().min(1, "Entries cannot be blank")).min(1, "Provide at least one entry to summarize"),
  focus: z.string().min(1).optional()
});
var summarizerTool = createTool({
  name: "summarize_reflections",
  description: "Digest a batch of journal or chat entries into a Gen-Z friendly weekly recap, returning highlights, mood notes, and actionable next-steps as structured JSON for downstream coaching.",
  schema: summarizerInput,
  fn: async ({ entries, focus }) => {
    const cleanedEntries = entries.map((entry) => entry.trim());
    const runner = await getSummarizerRunner();
    const prompt = [
      focus ? `Focus on: ${focus}. Keep it encouraging and actionable.` : "Provide a balanced, encouraging recap.",
      "Entries:"
    ].concat(
      cleanedEntries.map(
        (entry, index) => `${index + 1}. ${entry.replace(/\s+/g, " ")}`
      )
    ).join("\n");
    let raw;
    try {
      raw = await runner.ask(prompt);
    } catch (error) {
      return {
        summary: "",
        highlights: cleanedEntries.slice(0, Math.min(3, cleanedEntries.length)),
        action_items: [],
        warning: `Summarizer request failed: ${sanitizeErrorMessage(error)}`
      };
    }
    try {
      const trimmed = typeof raw === "string" ? raw.trim() : String(raw);
      const jsonStart = trimmed.indexOf("{");
      const jsonEnd = trimmed.lastIndexOf("}");
      if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error("No JSON object found in summarizer response.");
      }
      const parsed = JSON.parse(trimmed.slice(jsonStart, jsonEnd + 1));
      return parsed;
    } catch (error) {
      return {
        summary: String(raw),
        highlights: cleanedEntries.slice(0, 3),
        action_items: [
          "Take a mindful break",
          "Hydrate",
          "Message a friend"
        ],
        warning: "Summarizer response was not valid JSON; returning fallback."
      };
    }
  }
});
function getSummarizerTools() {
  return [summarizerTool];
}

// src/mcp/toolsets/wellness.ts
import { createTool as createTool2 } from "@iqai/adk";
import { createEvent } from "ics";
import { z as z2 } from "@iqai/adk/node_modules/zod";

// src/mcp/saveJournalEntry.ts
import fs2 from "fs/promises";
import path10 from "path";
async function saveJournalEntry(text) {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const file = path10.join(journalRoot, `${today}.txt`);
  const time = (/* @__PURE__ */ new Date()).toTimeString().slice(0, 5);
  const line = `[${time}] ${text}
`;
  await fs2.appendFile(file, line, "utf8");
  return file;
}

// src/mcp/toolsets/wellness.ts
var STRETCH_LIBRARY = {
  neck: [
    {
      name: "Neck roll",
      instructions: "Drop chin to chest and roll left to right slowly.",
      durationSeconds: 20
    },
    {
      name: "Ear-to-shoulder hold",
      instructions: "Tilt ear toward shoulder, hold and breathe.",
      durationSeconds: 30
    }
  ],
  back: [
    {
      name: "Seated cat-cow",
      instructions: "Arch then round spine while seated, one breath per move.",
      durationSeconds: 40
    },
    {
      name: "Standing forward fold",
      instructions: "Hinge at hips, let arms drop and release shoulders.",
      durationSeconds: 45
    }
  ],
  eyes: [
    {
      name: "20-20-20 reset",
      instructions: "Look 20 feet away for 20 seconds every 20 minutes.",
      durationSeconds: 20
    },
    {
      name: "Figure eight tracing",
      instructions: "Trace a sideways 8 with eyes slowly without moving head.",
      durationSeconds: 30
    }
  ],
  shoulders: [
    {
      name: "Shoulder rolls",
      instructions: "Ten forward, ten backward, elbows heavy.",
      durationSeconds: 40
    },
    {
      name: "Doorway chest opener",
      instructions: "Rest forearms on doorway and lean forward gently.",
      durationSeconds: 30
    }
  ],
  full: [
    {
      name: "Standing quad stretch",
      instructions: "Hold ankle behind you, knees together, switch sides.",
      durationSeconds: 40
    },
    {
      name: "Calf raises",
      instructions: "Rise onto toes slowly for 15 controlled repetitions.",
      durationSeconds: 60
    }
  ]
};
var RESOURCE_LIBRARY = {
  burnout: [
    {
      title: "Burnout recovery checklist",
      url: "https://www.everydayhealth.com/wellness/mental-health/recovery-plan-for-burnout/",
      type: "article"
    },
    {
      title: "How to make stress your friend",
      url: "https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend",
      type: "video"
    },
    {
      title: "The Happiness Lab \u2013 Burnout answers",
      url: "https://www.pushkin.fm/podcasts/the-happiness-lab-with-dr-laurie-santos/before-you-burnout",
      type: "podcast"
    }
  ],
  anxiety: [
    {
      title: "Grounding techniques that work fast",
      url: "https://www.healthline.com/health/grounding-techniques",
      type: "article"
    },
    {
      title: "Box breathing tutorial",
      url: "https://www.youtube.com/watch?v=V8SLXjK7dXk",
      type: "video"
    },
    {
      title: "The Anxious Achiever",
      url: "https://hbr.org/podcast/2021/03/the-anxious-achiever",
      type: "podcast"
    }
  ],
  focus: [
    {
      title: "Deep work quick start guide",
      url: "https://www.calnewport.com/blog/2016/12/21/a-deep-habits-guide-to-working-less-and-producing-more/",
      type: "article"
    },
    {
      title: "Pomodoro walkthrough",
      url: "https://www.youtube.com/watch?v=mNBmG24djoY",
      type: "video"
    },
    {
      title: "Focused podcast",
      url: "https://www.relay.fm/focused",
      type: "podcast"
    }
  ],
  grief: [
    {
      title: "Coping with grief and loss",
      url: "https://www.helpguide.org/articles/grief/coping-with-grief-and-loss.htm",
      type: "article"
    },
    {
      title: "How to talk about grief",
      url: "https://www.youtube.com/watch?v=khkJkR-ipfw",
      type: "video"
    },
    {
      title: "Terrible, Thanks for Asking",
      url: "https://www.terriblethanksforasking.com/",
      type: "podcast"
    }
  ]
};
var GRATITUDE_PROMPTS = [
  "What lifted your mood even slightly today?",
  "Name a person who showed up for you recently.",
  "Which part of your body deserves appreciation right now?",
  "Recall a tiny surprise that made you pause.",
  "What is one thing you are learning to be grateful for?"
];
var CRISIS_RESOURCES = {
  US: [
    {
      name: "988 Suicide & Crisis Lifeline",
      phone: "988",
      text: "Text 988",
      web: "https://988lifeline.org"
    },
    {
      name: "Crisis Text Line",
      text: "Text HOME to 741741",
      web: "https://www.crisistextline.org"
    }
  ],
  CA: [
    {
      name: "988 Suicide Crisis Helpline",
      phone: "988",
      web: "https://988.ca"
    },
    {
      name: "Kids Help Phone",
      phone: "1-800-668-6868",
      text: "Text CONNECT to 686868",
      web: "https://kidshelpphone.ca"
    }
  ],
  UK: [
    { name: "Samaritans", phone: "116 123", web: "https://www.samaritans.org" },
    {
      name: "Shout Crisis Text Line",
      text: "Text SHOUT to 85258",
      web: "https://giveusashout.org"
    }
  ],
  AU: [
    { name: "Lifeline Australia", phone: "13 11 14", web: "https://www.lifeline.org.au" },
    { name: "Beyond Blue", phone: "1300 22 4636", web: "https://www.beyondblue.org.au" }
  ],
  NZ: [
    { name: "1737 Need to talk?", phone: "1737", text: "Text 1737" },
    { name: "Youthline", phone: "0800 376 633", text: "Text 234", web: "https://www.youthline.co.nz" }
  ],
  SG: [
    { name: "Samaritans of Singapore", phone: "1767", web: "https://sos.org.sg" },
    { name: "IMH Mental Health Helpline", phone: "6389 2222", web: "https://www.imh.com.sg" }
  ],
  IN: [
    { name: "Kiran Mental Health Helpline", phone: "1800-599-0019" },
    { name: "Snehi India", phone: "+91-9582208181", web: "https://snehi.org" }
  ],
  ZA: [
    { name: "SADAG Suicide Crisis Line", phone: "0800 567 567", web: "https://www.sadag.org" },
    { name: "Lifeline South Africa", phone: "0861 322 322" }
  ],
  BR: [
    { name: "Centro de Valoriza\xE7\xE3o da Vida", phone: "188", web: "https://www.cvv.org.br" }
  ],
  MX: [
    { name: "L\xEDnea de la Vida", phone: "800 911 2000", text: "WhatsApp 55 1161 1111", web: "https://www.gob.mx/salud" }
  ],
  PH: [
    { name: "Hopeline PH", phone: "02-8804-4673", text: "0918-873-4673", web: "https://www.ngf-hope.org" }
  ],
  INTERNATIONAL: [
    { name: "Befrienders Worldwide", web: "https://www.befrienders.org" },
    { name: "Find a helpline", web: "https://findahelpline.com" }
  ]
};
function addMinutes(base, minutes) {
  return new Date(base.getTime() + minutes * 6e4);
}
function parseISOOrThrow(raw) {
  const parsed = raw ? new Date(raw) : /* @__PURE__ */ new Date();
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid date format: ${raw}`);
  }
  return parsed;
}
function formatLocal(date) {
  return {
    iso: date.toISOString(),
    localDate: date.toLocaleDateString(),
    localTime: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  };
}
function ensureUniqueTimes(slots) {
  const seen = /* @__PURE__ */ new Map();
  for (const slot of slots) {
    const key = slot.toISOString();
    if (!seen.has(key)) {
      seen.set(key, slot);
    }
  }
  return Array.from(seen.values()).sort((a, b) => a.getTime() - b.getTime());
}
async function getWellnessTools() {
  const scheduleMoodCheckIn = createTool2({
    name: "schedule_mood_check_in",
    description: "Plan a sequence of mood check-ins with smart reminders and reflection prompts.",
    schema: z2.object({
      startTime: z2.string().optional(),
      intervalMinutes: z2.number().int().min(10).max(1440).optional(),
      count: z2.number().int().min(1).max(12).optional(),
      customTimes: z2.array(z2.string()).optional()
    }),
    fn: async ({ startTime, intervalMinutes = 180, count = 3, customTimes }) => {
      let slots = [];
      if (customTimes?.length) {
        slots = customTimes.map(parseISOOrThrow);
      } else {
        const anchor = parseISOOrThrow(startTime);
        slots = Array.from(
          { length: count },
          (_, idx) => idx === 0 ? anchor : addMinutes(anchor, intervalMinutes * idx)
        );
      }
      const unique = ensureUniqueTimes(slots.filter((slot) => slot.getTime() > Date.now()));
      const reminders = unique.map((slot, idx) => ({
        label: `Check-in ${idx + 1}`,
        ...formatLocal(slot),
        prompt: idx === 0 ? "Ask how their energy feels right now." : "Reflect on any shifts since the last check-in."
      }));
      if (!reminders.length) {
        throw new Error("All scheduled times were in the past. Provide future timestamps.");
      }
      return {
        intervalMinutes,
        plannedCount: reminders.length,
        reminders,
        followUpSuggestions: [
          "Log insights in the journal tool to see trends later.",
          "If energy keeps dipping, suggest nourishment or rest."
        ]
      };
    }
  });
  const breathingCoach = createTool2({
    name: "breathing_coach",
    description: "Guide the user through structured breathing with cycle timing and coaching notes.",
    schema: z2.object({
      pattern: z2.enum(["box", "four_seven_eight", "resonance", "balanced_reset", "rescue"]).optional(),
      cycles: z2.number().int().min(1).max(12).optional(),
      includeAffirmations: z2.boolean().optional()
    }),
    fn: async ({ pattern = "box", cycles = 4, includeAffirmations = false }) => {
      const catalogue = {
        box: {
          name: "Box breathing 4-4-4-4",
          steps: [
            { cue: "Inhale steadily", seconds: 4 },
            { cue: "Hold softly", seconds: 4 },
            { cue: "Exhale slowly", seconds: 4 },
            { cue: "Hold at the bottom", seconds: 4 }
          ],
          focus: "Stabilise the nervous system and regain focus."
        },
        four_seven_eight: {
          name: "4-7-8 calming breath",
          steps: [
            { cue: "Inhale through nose", seconds: 4 },
            { cue: "Hold gently", seconds: 7 },
            { cue: "Exhale with a sigh", seconds: 8 }
          ],
          focus: "Lower tension and ease anxious spikes."
        },
        resonance: {
          name: "Resonance breathing (~6 breaths/min)",
          steps: [
            { cue: "Inhale", seconds: 5 },
            { cue: "Exhale", seconds: 5 }
          ],
          focus: "Support heart rate variability and calm focus."
        },
        balanced_reset: {
          name: "Balanced reset 5-5-5",
          steps: [
            { cue: "Inhale", seconds: 5 },
            { cue: "Hold", seconds: 5 },
            { cue: "Exhale", seconds: 5 }
          ],
          focus: "Reset between meetings or intense tasks."
        },
        rescue: {
          name: "Rescue breath (long exhale)",
          steps: [
            { cue: "Inhale", seconds: 2 },
            { cue: "Exhale slowly", seconds: 6 }
          ],
          focus: "Release acute stress when you need quick relief."
        }
      };
      const chosen = catalogue[pattern] ?? catalogue.box;
      const totalSeconds = cycles * chosen.steps.reduce((sum, step) => sum + step.seconds, 0);
      const affirmations = includeAffirmations ? [
        "Breath in: I am safe to pause.",
        "Hold: I am present with what is real.",
        "Exhale: I release what I no longer need."
      ] : void 0;
      return {
        pattern: chosen.name,
        focus: chosen.focus,
        cycles,
        totalDurationSeconds: totalSeconds,
        cycleBlueprint: chosen.steps,
        affirmations,
        debriefPrompt: "Ask how their body feels now versus before starting."
      };
    }
  });
  const logMicroHabit = createTool2({
    name: "log_micro_habit",
    description: "Track micro habits and return coaching tips tailored to the action.",
    schema: z2.object({
      habit: z2.string().min(2),
      action: z2.enum(["start", "complete", "skip"]),
      friction: z2.enum(["none", "low", "medium", "high"]).optional(),
      notes: z2.string().optional()
    }),
    fn: async ({ habit, action, friction = "low", notes }) => {
      const summaries = {
        start: "Momentum started. Remind them a small win still counts.",
        complete: "Celebrate the follow-through. Reinforce what made it work.",
        skip: "Normalize the skip and identify what support they need next."
      };
      const frictionAdvice = {
        none: "They feel clear\u2014ask what helped and lock it in.",
        low: "Notice gentle resistance and plan the next trigger.",
        medium: "Encourage breaking it down further or pairing with a cue.",
        high: "Explore what blocked them first; maybe the habit needs re-scoping."
      };
      return {
        habit,
        action,
        statusSummary: summaries[action],
        friction,
        frictionAdvice: frictionAdvice[friction],
        notes
      };
    }
  });
  const energySurvey = createTool2({
    name: "energy_level_survey",
    description: "Log current energy (1-5) and map it to action ideas, escalation prompts, and recovery tips.",
    schema: z2.object({
      energy: z2.number().int().min(1).max(5),
      tags: z2.array(z2.string()).max(5).optional()
    }),
    fn: async ({ energy, tags }) => {
      const labels = ["Drained", "Low", "Steady", "Elevated", "Peak"];
      const suggestions = [
        ["Suggest rest, water, and emotional check-in."],
        ["Recommend gentle tasks or planning tomorrow."],
        ["Propose a focus sprint or tidy-up tasks."],
        ["Great moment for creative or social work."],
        ["Channel into priority work, then cool down."]
      ];
      const escalation = energy <= 2 ? "If they mention burnout signs, suggest a break and revisit nutrition, sleep, or emotional load." : null;
      const anchors = energy >= 4 ? ["Plan a celebration when work wraps.", "Invite them to note what conditions created this energy."] : ["Encourage a hydration check.", "Ask what would recharge them fastest."];
      return {
        energy,
        label: labels[energy - 1],
        suggestions: suggestions[energy - 1],
        escalation,
        recoveryPrompts: anchors,
        tags
      };
    }
  });
  const focusTimer = createTool2({
    name: "plan_focus_timer",
    description: "Generate a Pomodoro or custom focus schedule with cumulative timing and reflection cues.",
    schema: z2.object({
      workMinutes: z2.number().int().min(10).max(75).optional(),
      breakMinutes: z2.number().int().min(3).max(25).optional(),
      cycles: z2.number().int().min(1).max(8).optional(),
      includeLongBreak: z2.boolean().optional()
    }),
    fn: async ({ workMinutes = 25, breakMinutes = 5, cycles = 4, includeLongBreak = true }) => {
      const blocks = Array.from({ length: cycles }, (_, idx) => {
        const longBreak = includeLongBreak && (idx + 1) % 4 === 0 && idx + 1 !== cycles ? Math.max(breakMinutes * 3, 15) : breakMinutes;
        return {
          cycle: idx + 1,
          workMinutes,
          breakMinutes: idx === cycles - 1 ? 0 : longBreak,
          checkIn: idx === 0 ? "Set intention for this block." : "Note progress / obstacles."
        };
      });
      const totalFocus = cycles * workMinutes;
      const totalBreak = blocks.reduce((sum, block) => sum + block.breakMinutes, 0);
      return {
        plan: blocks,
        totals: {
          focusMinutes: totalFocus,
          breakMinutes: totalBreak,
          ratio: Number((totalFocus / Math.max(totalBreak, 1)).toFixed(2))
        },
        suggestions: [
          "Invite the user to log a sentence after each block.",
          "Encourage a longer decompression after the full set completes."
        ]
      };
    }
  });
  const stretchLibrary = createTool2({
    name: "stretch_move_library",
    description: "Provide targeted movement suggestions with duration and micro coaching.",
    schema: z2.object({
      focus: z2.enum(["neck", "back", "eyes", "shoulders", "full"]).optional(),
      limit: z2.number().int().min(1).max(5).optional()
    }),
    fn: async ({ focus = "full", limit = 3 }) => {
      const bank = STRETCH_LIBRARY[focus] ?? STRETCH_LIBRARY.full;
      const selection = bank.slice(0, limit);
      return {
        focus,
        suggestions: selection,
        reminder: "Ask the user to set a timer and notice tension release afterwards."
      };
    }
  });
  const sleepSummarizer = createTool2({
    name: "summarize_sleep_log",
    description: "Analyze a batch of sleep logs, compute averages, and suggest adjustments.",
    schema: z2.object({
      entries: z2.array(
        z2.object({
          date: z2.string(),
          hours: z2.number().min(0).max(24),
          quality: z2.number().min(1).max(5).optional(),
          notes: z2.string().optional()
        })
      ).min(1).max(30)
    }),
    fn: async ({ entries }) => {
      const totalHours = entries.reduce((sum, item) => sum + item.hours, 0);
      const avgHours = totalHours / entries.length;
      const qualities = entries.map((entry) => entry.quality).filter(Boolean);
      const avgQuality = qualities.length ? qualities.reduce((sum, value) => sum + value, 0) / qualities.length : null;
      const shortNights = entries.filter((night) => night.hours < 6);
      const longestNight = entries.reduce(
        (prev, item) => item.hours > prev.hours ? item : prev
      );
      return {
        nightsLogged: entries.length,
        averageHours: Number(avgHours.toFixed(2)),
        averageQuality: avgQuality ? Number(avgQuality.toFixed(2)) : null,
        shortestNight: shortNights.length ? shortNights[0] : null,
        longestNight,
        recommendations: avgHours < 7 ? [
          "Encourage a consistent bedtime and dimming screens 30 minutes before sleep.",
          "Suggest a short wind-down routine logged in the journal."
        ] : [
          "Help them protect current sleep habits.",
          "Introduce a gentle morning ritual to sustain rest quality."
        ]
      };
    }
  });
  const nutritionHelper = createTool2({
    name: "nutrition_prompt_helper",
    description: "Offer hydration and nourishment prompts based on recent intake cues.",
    schema: z2.object({
      lastMealMinutesAgo: z2.number().int().min(0).max(1440).optional(),
      hydrationCups: z2.number().int().min(0).max(24).optional(),
      craving: z2.string().optional()
    }),
    fn: async ({ lastMealMinutesAgo, hydrationCups, craving }) => {
      const suggestions = [];
      if (lastMealMinutesAgo !== void 0) {
        if (lastMealMinutesAgo >= 300) {
          suggestions.push("Recommend a substantial meal. Neutral tone, no shame.");
        } else if (lastMealMinutesAgo >= 180) {
          suggestions.push("Suggest a protein + carb snack to stabilise energy.");
        } else if (lastMealMinutesAgo >= 120) {
          suggestions.push("Invite them to prep a light bite before hunger spikes.");
        } else {
          suggestions.push("Meal timing is solid\u2014cheer on the consistency.");
        }
      }
      if (hydrationCups !== void 0) {
        if (hydrationCups < 3) {
          suggestions.push("Prompt a glass of water now and note how it feels after.");
        } else if (hydrationCups > 10) {
          suggestions.push("Hydration looks high\u2014make sure electrolytes are balanced.");
        } else {
          suggestions.push("Hydration zone is healthy\u2014celebrate and keep nearby water.");
        }
      }
      if (craving) {
        suggestions.push(`Encourage them to pair ${craving} with fiber or protein for steady energy.`);
      }
      return {
        suggestions,
        note: "Remind them that nourishment fuels focus\u2014no guilt, just care."
      };
    }
  });
  const resourceRecommender = createTool2({
    name: "recommend_care_resources",
    description: "Return curated articles, videos, or podcasts for wellness topics.",
    schema: z2.object({
      topic: z2.string().min(3),
      format: z2.enum(["article", "video", "podcast", "any"]).optional(),
      limit: z2.number().int().min(1).max(5).optional()
    }),
    fn: async ({ topic, format = "any", limit = 3 }) => {
      const key = topic.toLowerCase();
      const bucket = RESOURCE_LIBRARY[key] ?? RESOURCE_LIBRARY.focus;
      const filtered = format === "any" ? bucket : bucket.filter((item) => item.type === format);
      const results = filtered.slice(0, limit);
      return {
        topic: key,
        results,
        fallback: results.length ? null : "Try reading mode on DuckDuckGo search for more resources."
      };
    }
  });
  const gratitudeVault = createTool2({
    name: "log_gratitude_entry",
    description: "Append a gratitude line to the shared journal with optional prompts.",
    schema: z2.object({
      entry: z2.string().min(3),
      promptRequested: z2.boolean().optional(),
      tags: z2.array(z2.string().min(2)).max(5).optional()
    }),
    fn: async ({ entry, promptRequested = false, tags }) => {
      const prompt = promptRequested ? GRATITUDE_PROMPTS[Math.floor(Math.random() * GRATITUDE_PROMPTS.length)] : void 0;
      const line = `[gratitude] ${entry}${tags?.length ? ` | tags: ${tags.join(", ")}` : ""}`;
      const file = await saveJournalEntry(line);
      return {
        savedTo: file,
        prompt,
        reminder: "Invite them to revisit gratitude notes on rough days."
      };
    }
  });
  const complimentGenerator = createTool2({
    name: "generate_personalized_compliment",
    description: "Generate a motivating compliment keyed to the achievement and tone.",
    schema: z2.object({
      focus: z2.enum(["consistency", "bravery", "progress", "care", "resilience"]).optional(),
      persona: z2.enum(["gentle", "hype", "witty"]).optional(),
      name: z2.string().optional()
    }),
    fn: async ({ focus = "progress", persona = "gentle", name }) => {
      const compliments = {
        gentle: {
          consistency: "Your steadiness is quietly rewriting your story.",
          bravery: "You stepped toward the hard thing\u2014proof you trust yourself.",
          progress: "Every tiny move counts; you\u2019re building more than you see.",
          care: "Choosing rest is resistance. I\u2019m proud of your tenderness.",
          resilience: "You bend, you recover, you rise stronger each time."
        },
        hype: {
          consistency: "You\u2019re stacking wins like a legend\u2014no off days here.",
          bravery: "That move took main-character energy and you owned it.",
          progress: "Plot twist: you\u2019re unstoppable when you chase the next step.",
          care: "Self-care king/queen alert! You\u2019re literally glowing.",
          resilience: "Bounce-back level: elite. Nothing keeps you down."
        },
        witty: {
          consistency: "Look at you, quietly building an empire of good habits.",
          bravery: "You basically just high-fived your own courage.",
          progress: "Slow clap\u2014your momentum has entered the chat.",
          care: "Self-kindness unlocked: legendary tier.",
          resilience: "Like a boomerang with better boundaries. You keep coming back."
        }
      };
      return {
        compliment: `${name ? `${name}, ` : ""}${compliments[persona][focus]}`,
        focus,
        persona
      };
    }
  });
  const goalLadderPlanner = createTool2({
    name: "plan_goal_ladder",
    description: "Break a goal into structured steps with focus prompts and support ideas.",
    schema: z2.object({
      goal: z2.string().min(4),
      steps: z2.number().int().min(3).max(8).optional(),
      timelineDays: z2.number().int().min(1).max(60).optional()
    }),
    fn: async ({ goal, steps = 5, timelineDays = 14 }) => {
      const prompts = [
        "Define what success looks like in one sentence.",
        "List resources or allies you can call on.",
        "Set the very next action you can do in under 10 minutes.",
        "Identify what might block you and plan a backup.",
        "Choose a check-in date to review progress.",
        "Describe how you will celebrate finishing.",
        "Decide how you will maintain the result afterwards.",
        "Note a mantra to keep you steady when it gets tough."
      ];
      const ladder = Array.from({ length: steps }, (_, idx) => ({
        step: idx + 1,
        question: prompts[idx]
      }));
      return {
        goal,
        timelineDays,
        ladder,
        suggestion: "Work through the prompts together and capture answers in the journal."
      };
    }
  });
  const conflictReflection = createTool2({
    name: "reflect_on_conflict",
    description: "Surface prompts to process a conflict with empathy and boundaries.",
    schema: z2.object({
      situation: z2.string().min(5),
      emotion: z2.string().optional(),
      intention: z2.enum(["repair", "closure", "self-care"]).optional()
    }),
    fn: async ({ situation, emotion, intention = "self-care" }) => ({
      situation,
      intention,
      prompts: [
        "What need of yours felt unheard in that moment?",
        "If you paused the scene, what support would you offer your past self?",
        "Which boundary do you need to restate or rebuild?",
        "Is there a repair you want, or do you need distance to heal?",
        "How can you take care of your nervous system in the next hour?"
      ],
      emotion
    })
  });
  const moodPlaylistMixer = createTool2({
    name: "mix_mood_playlist",
    description: "Translate mood + energy into Spotify seed ideas and playlist prompts.",
    schema: z2.object({
      mood: z2.string().min(3),
      energy: z2.enum(["low", "medium", "high"]).optional(),
      need: z2.enum(["focus", "comfort", "celebration", "release"]).optional()
    }),
    fn: async ({ mood, energy = "medium", need = "focus" }) => {
      const baseSeeds = {
        focus: ["focus", "study", "piano"],
        comfort: ["acoustic", "calm", "winter-chill"],
        celebration: ["dance", "pop", "feel-good"],
        release: ["mellow", "rainy-day", "indie"]
      };
      const energyTags = {
        low: ["soft", "ambient"],
        medium: ["steady", "lofi"],
        high: ["high-energy", "confidence"]
      };
      return {
        mood,
        energy,
        need,
        seeds: [...baseSeeds[need] ?? baseSeeds.focus, ...energyTags[energy]],
        followUp: [
          `Try \`spotify_vibe_playlists\` with "${mood} ${energyTags[energy][0]}"`,
          "If it misses, pivot to a comfort playlist they already love."
        ]
      };
    }
  });
  const ambientSoundSelector = createTool2({
    name: "select_ambient_sound",
    description: "Serve curated ambient soundtracks with quick descriptions.",
    schema: z2.object({
      vibe: z2.enum(["rain", "cafe", "forest", "lofi", "minimal", "ocean"]).optional(),
      limit: z2.number().int().min(1).max(4).optional()
    }),
    fn: async ({ vibe = "lofi", limit = 2 }) => {
      const library = {
        rain: [
          {
            label: "Soft rain on window",
            url: "https://www.youtube.com/watch?v=DWcJFNfaw9c",
            description: "Gentle rain with occasional thunder for steady focus."
          },
          {
            label: "Rain in library",
            url: "https://www.youtube.com/watch?v=7NOSDKb0HlU",
            description: "Rainfall with muffled pages and ambience."
          }
        ],
        cafe: [
          {
            label: "Lo-fi caf\xE9 ambiance",
            url: "https://www.youtube.com/watch?v=lTRiuFIWV54",
            description: "Light chatter and espresso machines."
          },
          {
            label: "Morning caf\xE9",
            url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
            description: "Soft jazz with warm caf\xE9 noise."
          }
        ],
        forest: [
          {
            label: "Forest morning",
            url: "https://www.youtube.com/watch?v=OdIJ2x3nxzQ",
            description: "Birdsong and light breeze."
          },
          {
            label: "Night forest",
            url: "https://www.youtube.com/watch?v=VSS-7Ia6cYc",
            description: "Crickets and gentle stream for calm evenings."
          }
        ],
        lofi: [
          {
            label: "lofi hip hop radio",
            url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
            description: "Classic lofi beats for study or work."
          },
          {
            label: "lofi piano focus",
            url: "https://www.youtube.com/watch?v=1ZYbU82GVz4",
            description: "Soft piano loops with minimal percussion."
          }
        ],
        minimal: [
          {
            label: "Brown noise",
            url: "https://www.youtube.com/watch?v=HdFTGSY4-7E",
            description: "Low consistent brown noise for deep focus."
          },
          {
            label: "Calm air purifier",
            url: "https://www.youtube.com/watch?v=HNl9xWJxUgw",
            description: "Gentle white noise with soft airflow."
          }
        ],
        ocean: [
          {
            label: "Ocean waves",
            url: "https://www.youtube.com/watch?v=HM6kXl_ItLE",
            description: "Rolling waves with seagulls afar."
          }
        ]
      };
      const options = library[vibe] ?? library.lofi;
      return {
        vibe,
        options: options.slice(0, limit),
        suggestion: "Check in after two minutes and adjust volume or vibe."
      };
    }
  });
  const eventCalendarExport = createTool2({
    name: "create_focus_event_ics",
    description: "Generate an ICS snippet for focus or rest blocks with structured metadata.",
    schema: z2.object({
      title: z2.string().min(3),
      start: z2.string(),
      durationMinutes: z2.number().int().min(5).max(600).optional(),
      description: z2.string().optional(),
      location: z2.string().optional(),
      uid: z2.string().optional()
    }),
    fn: async ({ title, start, durationMinutes = 45, description, location, uid }) => {
      const originalStart = parseISOOrThrow(start);
      let startDate = originalStart;
      let adjusted = false;
      if (startDate.getTime() < Date.now()) {
        startDate = new Date(Date.now() + 5 * 60 * 1e3);
        adjusted = true;
      }
      const endDate = addMinutes(startDate, durationMinutes);
      const eventConfig = {
        title,
        start: [
          startDate.getFullYear(),
          startDate.getMonth() + 1,
          startDate.getDate(),
          startDate.getHours(),
          startDate.getMinutes()
        ],
        end: [
          endDate.getFullYear(),
          endDate.getMonth() + 1,
          endDate.getDate(),
          endDate.getHours(),
          endDate.getMinutes()
        ]
      };
      if (description) eventConfig.description = description;
      if (location) eventConfig.location = location;
      if (uid) eventConfig.uid = uid;
      const { error, value } = createEvent(eventConfig);
      if (error) throw error;
      return {
        title,
        durationMinutes,
        ics: value,
        hint: "Share the snippet and remind them to add an alert on their calendar.",
        note: adjusted ? "Start time was nudged five minutes into the future because the provided start was in the past." : void 0
      };
    }
  });
  const crisisResources = createTool2({
    name: "locate_crisis_resources",
    description: "Return crisis support contacts by country with fallback options.",
    schema: z2.object({
      country: z2.string().optional(),
      concern: z2.enum(["self-harm", "substance", "abuse", "unspecified"]).optional()
    }),
    fn: async ({ country = "INTERNATIONAL" }) => {
      const key = country.toUpperCase();
      const resources = CRISIS_RESOURCES[key] ?? CRISIS_RESOURCES[key.slice(0, 2)] ?? CRISIS_RESOURCES.INTERNATIONAL;
      return {
        country: key,
        resources,
        instructions: [
          "If someone is in immediate danger, instruct them to call local emergency services.",
          "Stay with the user (digitally) until they confirm they have contacted help."
        ]
      };
    }
  });
  return [
    scheduleMoodCheckIn,
    breathingCoach,
    logMicroHabit,
    energySurvey,
    focusTimer,
    stretchLibrary,
    sleepSummarizer,
    nutritionHelper,
    resourceRecommender,
    gratitudeVault,
    complimentGenerator,
    goalLadderPlanner,
    conflictReflection,
    moodPlaylistMixer,
    ambientSoundSelector,
    eventCalendarExport,
    crisisResources
  ];
}

// src/mcp/toolsets/personaTelegram.ts
import { createTool as createTool3 } from "@iqai/adk";
import { z as z3 } from "@iqai/adk/node_modules/zod";
var BOT_CONFIGS = [
  { name: "Helena", tokenEnv: "HELENA_TOKEN", usernameEnv: "HELENA_USERNAME", toolName: "Helena_telegram" },
  { name: "Milo", tokenEnv: "MILO_TOKEN", usernameEnv: "MILO_USERNAME", toolName: "Milo_telegram" },
  { name: "Kai", tokenEnv: "KAI_TOKEN", usernameEnv: "KAI_USERNAME", toolName: "Kai_telegram" },
  { name: "Sophie", tokenEnv: "SOPHIE_TOKEN", usernameEnv: "SOPHIE_USERNAME", toolName: "Sophie_telegram" },
  { name: "Luna", tokenEnv: "LUNA_TOKEN", usernameEnv: "LUNA_USERNAME", toolName: "Luna_telegram" }
];
var messageSchema = z3.object({
  chatId: z3.string().optional(),
  text: z3.string().min(1, "Message text cannot be empty"),
  parseMode: z3.enum(["Markdown", "MarkdownV2", "HTML"]).optional(),
  disableWebPagePreview: z3.boolean().optional(),
  disableNotification: z3.boolean().optional()
});
async function sendTelegramMessage(token, body) {
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const payload = await response.json();
  if (!response.ok || payload?.ok === false) {
    const description = payload?.description ?? response.statusText;
    throw new Error(`Telegram API error: ${description}`);
  }
  return payload;
}
async function getPersonaTelegramTools() {
  const tools = [];
  for (const bot of BOT_CONFIGS) {
    const token = process.env[bot.tokenEnv];
    if (!token) continue;
    const defaultChat = process.env[bot.usernameEnv];
    const tool = createTool3({
      name: bot.toolName,
      description: `Send a Telegram message as ${bot.name}.` + (defaultChat ? ` Defaults to chat ${defaultChat}.` : " Provide chatId explicitly."),
      schema: messageSchema,
      fn: async ({ chatId, text, parseMode, disableNotification, disableWebPagePreview }) => {
        const resolvedChat = chatId ?? defaultChat;
        if (!resolvedChat) {
          throw new Error("chatId is required for this bot because no default chat is configured.");
        }
        const body = {
          chat_id: resolvedChat,
          text
        };
        if (parseMode) body.parse_mode = parseMode;
        if (disableNotification !== void 0) body.disable_notification = disableNotification;
        if (disableWebPagePreview !== void 0) body.disable_web_page_preview = disableWebPagePreview;
        const payload = await sendTelegramMessage(token, body);
        return {
          ok: true,
          chat: payload?.result?.chat ?? null,
          messageId: payload?.result?.message_id ?? null,
          date: payload?.result?.date ?? null
        };
      }
    });
    tools.push(tool);
  }
  return tools;
}

// src/mcp/toolsets/personaDiscord.ts
import { createTool as createTool4 } from "@iqai/adk";
import { z as z4 } from "@iqai/adk/node_modules/zod";
var DISCORD_CONFIGS = [
  { name: "Helena", tokenEnv: "HELENA_DISCORD_TOKEN", channelEnv: "HELENA_DISCORD_CHANNEL", toolName: "Helena_discord" },
  { name: "Milo", tokenEnv: "MILO_DISCORD_TOKEN", channelEnv: "MILO_DISCORD_CHANNEL", toolName: "Milo_discord" },
  { name: "Kai", tokenEnv: "KAI_DISCORD_TOKEN", channelEnv: "KAI_DISCORD_CHANNEL", toolName: "Kai_discord" },
  { name: "Sophie", tokenEnv: "SOPHIE_DISCORD_TOKEN", channelEnv: "SOPHIE_DISCORD_CHANNEL", toolName: "Sophie_discord" },
  { name: "Luna", tokenEnv: "LUNA_DISCORD_TOKEN", channelEnv: "LUNA_DISCORD_CHANNEL", toolName: "Luna_discord" }
];
var messageSchema2 = z4.object({
  channelId: z4.string().optional(),
  content: z4.string().min(1, "Message content cannot be empty"),
  tts: z4.boolean().optional(),
  embeds: z4.array(
    z4.object({
      title: z4.string().optional(),
      description: z4.string().optional(),
      url: z4.string().optional(),
      color: z4.number().int().optional()
    })
  ).optional(),
  threadId: z4.string().optional()
});
async function sendDiscordMessage(token, channelId, body) {
  const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bot ${token}`
    },
    body: JSON.stringify(body)
  });
  const payload = await response.json().catch(() => void 0);
  if (!response.ok) {
    const description = payload?.message ?? response.statusText;
    throw new Error(`Discord API error: ${description}`);
  }
  return payload;
}
async function getPersonaDiscordTools() {
  const tools = [];
  for (const config of DISCORD_CONFIGS) {
    const token = process.env[config.tokenEnv];
    if (!token) continue;
    const defaultChannel = process.env[config.channelEnv];
    const tool = createTool4({
      name: config.toolName,
      description: `Send a Discord message as ${config.name}.` + (defaultChannel ? ` Defaults to channel ${defaultChannel}.` : " Provide channelId explicitly."),
      schema: messageSchema2,
      fn: async ({ channelId, content, tts, embeds, threadId }) => {
        const resolvedChannel = channelId ?? defaultChannel;
        if (!resolvedChannel) {
          throw new Error("channelId is required because no default channel is configured for this bot.");
        }
        const body = {
          content
        };
        if (tts !== void 0) body.tts = tts;
        if (embeds) body.embeds = embeds;
        if (threadId) body.thread_id = threadId;
        const payload = await sendDiscordMessage(token, resolvedChannel, body);
        return {
          ok: true,
          channelId: resolvedChannel,
          messageId: payload?.id ?? null,
          timestamp: payload?.timestamp ?? null
        };
      }
    });
    tools.push(tool);
  }
  return tools;
}

// src/mcp/toolsets/index.ts
var iqWikiToolset = McpIqWiki();
var baseRegistrations = [
  { name: "local-journal-filesystem", loader: getFilesystemTools, toolset: filesystemToolset },
  { name: "search-discovery", loader: getWebSearchTools, toolset: webSearchToolset },
  { name: "knowledge-wikipedia", loader: getWikipediaTools, toolset: wikipediaToolset },
  {
    name: "knowledge-iqwiki",
    loader: async () => {
      return iqWikiToolset.getTools();
    },
    toolset: iqWikiToolset
  },
  { name: "visuals-unsplash", loader: getUnsplashTools, toolset: unsplashToolset },
  { name: "music-spotify", loader: getSpotifyTools, toolset: spotifyToolset },
  { name: "emotion-analytics", loader: getEmotionTools, toolset: emotionToolset },
  { name: "journal-reflection", loader: getJournalingTools, toolset: journalingToolset },
  { name: "web-trends", loader: getTrendsTools, toolset: trendsToolset },
  { name: "quotes-feed", loader: getQuotesTools, toolset: quotesToolset },
  {
    name: "ai-summarizer",
    loader: async () => getSummarizerTools()
  },
  {
    name: "wellness-companion",
    loader: async () => getWellnessTools()
  }
];
baseRegistrations.push({
  name: "telegram-persona",
  loader: async () => getPersonaTelegramTools()
});
baseRegistrations.push({
  name: "discord-persona",
  loader: async () => getPersonaDiscordTools()
});
var TOOLSET_REGISTRY = baseRegistrations;

// src/mcp/registry.ts
var toolsCache = null;
var toolsPromise = null;
var cacheVersion = null;
async function loadAllToolsets() {
  const toolArrays = await Promise.all(
    TOOLSET_REGISTRY.map(async ({ name, loader }) => {
      try {
        return await loader();
      } catch (error) {
        console.error(`[MCP] Failed to load toolset ${name}:`, error);
        return [];
      }
    })
  );
  return toolArrays.flat();
}
async function getSharedTools() {
  if (toolsCache && cacheVersion === PERSONA_TOOLKIT_VERSION) return toolsCache;
  if (!toolsPromise || cacheVersion !== PERSONA_TOOLKIT_VERSION) {
    toolsPromise = loadAllToolsets().then((tools) => {
      toolsCache = tools;
      cacheVersion = PERSONA_TOOLKIT_VERSION;
      return tools;
    });
  }
  return toolsPromise;
}
async function disposeToolsets() {
  await Promise.all(
    TOOLSET_REGISTRY.map(async ({ toolset, name }) => {
      if (!toolset) return;
      try {
        await toolset.dispose();
      } catch (error) {
        console.error(`[MCP] Error disposing toolset ${name}:`, error);
      }
    })
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

// src/agents/sharedTools.ts
var cachedToolsPromise = null;
var cachedVersion = null;
async function loadAllTools() {
  if (!cachedToolsPromise || cachedVersion !== PERSONA_TOOLKIT_VERSION) {
    cachedToolsPromise = getSharedTools();
    cachedVersion = PERSONA_TOOLKIT_VERSION;
  }
  return cachedToolsPromise;
}
async function loadPersonaTools(agentName) {
  const tools = await loadAllTools();
  if (!agentName) return tools.slice();
  const lowerAgent = agentName.toLowerCase();
  return tools.filter((tool) => {
    if (!tool?.name) return true;
    if (tool.name.endsWith("_telegram") || tool.name.endsWith("_discord")) {
      const persona = tool.name.split("_")[0]?.toLowerCase();
      return persona === lowerAgent;
    }
    return true;
  });
}

// src/agents/toolGuidance.ts
var TELEGRAM_HELPERS = {
  helena: "Helena_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)",
  milo: "Milo_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)",
  kai: "Kai_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)",
  sophie: "Sophie_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)",
  luna: "Luna_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)"
};
var DISCORD_HELPERS = {
  helena: "Helena_discord(channelId?, content, tts?, embeds?, threadId?)",
  milo: "Milo_discord(channelId?, content, tts?, embeds?, threadId?)",
  kai: "Kai_discord(channelId?, content, tts?, embeds?, threadId?)",
  sophie: "Sophie_discord(channelId?, content, tts?, embeds?, threadId?)",
  luna: "Luna_discord(channelId?, content, tts?, embeds?, threadId?)"
};
function getToolUsageGuidance(persona) {
  const lower = persona?.toLowerCase();
  const telegramLine = lower && TELEGRAM_HELPERS[lower] ? `Messaging \u2013 Telegram
- \`${TELEGRAM_HELPERS[lower]}\`: send a Telegram message as your bot. Provide \`chatId\` if no default username is configured.` : "Messaging \u2013 Telegram\n- Dedicated persona tool available (e.g. Helena_telegram).";
  const discordLine = lower && DISCORD_HELPERS[lower] ? `Messaging \u2013 Discord
- \`${DISCORD_HELPERS[lower]}\`: send a Discord message as your bot. Provide \`channelId\` if no default channel is configured.` : "Messaging \u2013 Discord\n- Dedicated persona tool available (e.g. Helena_discord).";
  return `
TOOLS 101 (55 total). If someone asks for your tool list, respond from this cheat-sheet\u2014no tool call is required. Before invoking any tool: state why, confirm inputs, and explain results or errors.

File reading
- \`read_text_file(path, head?, tail?)\`: get plain text. Use for config, markdown, code.
- \`read_file(path, head?, tail?)\`: raw bytes or mixed encoding. Use for JSON/binary blobs.
- \`read_media_file(path)\`: image/audio \u2192 base64 + mime. Only when file path is known.
- \`read_multiple_files(paths)\`: compare several files at once.

File writing + editing
- \`write_file(path, content)\`: create or replace entire file. Warn if overwrite.
- \`edit_file(path, edits, dryRun?)\`: apply diff-style edits; use dry run first.
- \`move_file(source, destination)\`: rename or relocate; confirm destination exists/desired.

Folders + metadata
- \`create_directory(path)\`: make folders (recursive). Mention target path.
- \`list_directory(path)\`: quick listing.
- \`list_directory_with_sizes(path, sortBy?)\`: listing with sizes and sort.
- \`directory_tree(path)\`: nested snapshot for navigation.
- \`list_allowed_directories()\`: show sandbox roots before heavy work.
- \`search_files(path, pattern, exclude?)\`: find files by glob/regex.
- \`get_file_info(path)\`: stat info (size, timestamps, type).

General knowledge
- \`web_search(query, maxResults?)\`: DuckDuckGo instant answers when encyclopedias fail.
- \`wikipedia_search(query, limit?)\`: find page titles first.
- \`wikipedia_summary(title)\`: fetch summary using title from search.
- \`SEARCH_WIKI(query)\`: find IQ.wiki slugs (use before ID-based calls).
- \`GET_WIKI(id)\`: fetch IQ.wiki article. Needs valid slug (e.g. "bitcoin").
- \`GET_USER_CREATED_WIKIS(id, timeFrameSeconds?)\`: IQ.wiki creations for Ethereum address.
- \`GET_USER_EDITED_WIKIS(id, timeFrameSeconds?)\`: edits list for Ethereum address.
- \`GET_USER_WIKI_ACTIVITIES(id, activityType?, timeFrameSeconds?)\`: combined activity; same address rules.

Media + sound
- \`unsplash_search(query, orientation?, color?, perPage?)\`: mood images.
- \`spotify_vibe_playlists(mood, limit?)\`: playlists by vibe string.
- \`spotify_track_recs(seedGenre, limit?)\`: tracks by valid seed genre (fallback to playlists on 404).

Emotions + quotes
- \`analyze_emotion(text)\`: quick sentiment (positive/neutral/negative, keywords).
- \`daily_affirmation(keyword?)\`: single quote from ZenQuotes.
- \`affirmation_batch(count?)\`: up to 5 quotes for carousel/post.

Journaling + memory
- \`add_reflection_entry(text, mood?, tags?)\`: append to shared journal.
- \`get_recent_reflections(days?, limit?)\`: retrieve recent entries for context.
- \`reflection_prompts(seed?)\`: offer 3 fresh journaling prompts.
- \`summarize_reflections(entries, focus?)\`: Gemini summary \u2192 JSON (summary, highlights, actions).

Trends + data
- \`google_trends_topic(keyword, geo?, timeRange?)\`: popularity chart; choose realistic ranges (e.g. 30d, 12m).

Wellness \u2013 planning & timers
- \`schedule_mood_check_in(startTime?, intervalMinutes?, count?, customTimes?)\`: create future check-ins; ensure times are in the future.
- \`plan_focus_timer(workMinutes?, breakMinutes?, cycles?, includeLongBreak?)\`: Pomodoro plan with totals.
- \`create_focus_event_ics(title, start, durationMinutes?, description?, location?, uid?)\`: generate calendar snippet (ICS); provide a future ISO start\u2014if it isn't, the tool nudges it five minutes ahead and calls out the adjustment.

Wellness \u2013 breath & body
- \`breathing_coach(pattern?, cycles?, includeAffirmations?)\`: step-by-step breathing script.
- \`stretch_move_library(focus?, limit?)\`: quick stretch suggestions for neck/back/eyes/shoulders/full.

Wellness \u2013 tracking
- \`log_micro_habit(habit, action, friction?, notes?)\`: log habit result + coaching tips.
- \`energy_level_survey(energy, tags?)\`: record 1\u20135 energy and suggest actions.
- \`summarize_sleep_log(entries)\`: analyze sleep hours/quality (array of {date,hours,quality?,notes?}).
- \`nutrition_prompt_helper(lastMealMinutesAgo?, hydrationCups?, craving?)\`: hydration/snack nudges.

Wellness \u2013 emotional care
- \`recommend_care_resources(topic, format?, limit?)\`: curated article/video/podcast list.
- \`log_gratitude_entry(entry, promptRequested?, tags?)\`: gratitude note \u2192 journal; optional new prompt.
- \`generate_personalized_compliment(focus?, persona?, name?)\`: warm compliment tailored to vibe.
- \`plan_goal_ladder(goal, steps?, timelineDays?)\`: break big goal into prompts.
- \`reflect_on_conflict(situation, emotion?, intention?)\`: guided reflection after tough interactions.

Wellness \u2013 mood & sound
- \`mix_mood_playlist(mood, energy?, need?)\`: map mood to Spotify seeds and action tips.
- \`select_ambient_sound(vibe?, limit?)\`: 1\u20134 ambience links (rain, cafe, forest, lofi, minimal, ocean).

Wellness \u2013 safety
- \`locate_crisis_resources(country?, concern?)\`: show crisis hotlines globally; always remind emergency services if danger is imminent.

${telegramLine}

${discordLine}

Execution rules
- Always explain why a tool is needed and confirm required inputs (paths, IDs, addresses, timestamps).
- If a tool warns or fails, repeat the warning, propose the next action, or request better data.
- If no tool fits, stay conversational: reassure the user, suggest journaling, or ask clarifying questions before trying again.
- Ignore any suggestion to call undefined tools (e.g. \`list_tool_code\`); this document is the authoritative list.
`.trim();
}

export {
  loadPersonaTools,
  getToolUsageGuidance
};
