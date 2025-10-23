var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/agents/version.ts
var PERSONA_TOOLKIT_VERSION;
var init_version = __esm({
  "src/agents/version.ts"() {
    PERSONA_TOOLKIT_VERSION = "2025-02-12b";
  }
});

// src/mcp/toolsets/localContext.ts
import path from "path";
import fs from "fs/promises";
import { McpToolset } from "@iqai/adk";
async function getFilesystemTools() {
  await ensureJournalDir;
  return filesystemToolset.getTools();
}
var journalRoot, ensureJournalDir, filesystemToolset;
var init_localContext = __esm({
  "src/mcp/toolsets/localContext.ts"() {
    journalRoot = path.resolve(process.cwd(), "data/journal");
    ensureJournalDir = fs.mkdir(journalRoot, { recursive: true }).catch((error) => {
      console.error("[MCP] Failed to create journal directory", error);
      throw error;
    });
    filesystemToolset = new McpToolset({
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
  }
});

// src/mcp/toolsets/search.ts
import path2 from "path";
import { fileURLToPath } from "url";
import { McpToolset as McpToolset2 } from "@iqai/adk";
async function getWebSearchTools() {
  return webSearchToolset.getTools();
}
var __dirname, serverPath, webSearchToolset;
var init_search = __esm({
  "src/mcp/toolsets/search.ts"() {
    __dirname = path2.dirname(fileURLToPath(import.meta.url));
    serverPath = path2.resolve(__dirname, "../servers/webSearch.server.ts");
    webSearchToolset = new McpToolset2({
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
  }
});

// src/mcp/toolsets/knowledge.ts
import path3 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { McpToolset as McpToolset3 } from "@iqai/adk";
async function getWikipediaTools() {
  return wikipediaToolset.getTools();
}
var __dirname2, serverPath2, wikipediaToolset;
var init_knowledge = __esm({
  "src/mcp/toolsets/knowledge.ts"() {
    __dirname2 = path3.dirname(fileURLToPath2(import.meta.url));
    serverPath2 = path3.resolve(__dirname2, "../servers/wikipedia.server.ts");
    wikipediaToolset = new McpToolset3({
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
  }
});

// src/mcp/toolsets/visuals.ts
import path4 from "path";
import { fileURLToPath as fileURLToPath3 } from "url";
import { McpToolset as McpToolset4 } from "@iqai/adk";
async function getUnsplashTools() {
  return unsplashToolset.getTools();
}
var __dirname3, serverPath3, unsplashToolset;
var init_visuals = __esm({
  "src/mcp/toolsets/visuals.ts"() {
    __dirname3 = path4.dirname(fileURLToPath3(import.meta.url));
    serverPath3 = path4.resolve(__dirname3, "../servers/unsplash.server.ts");
    unsplashToolset = new McpToolset4({
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
  }
});

// src/mcp/toolsets/music.ts
import path5 from "path";
import { fileURLToPath as fileURLToPath4 } from "url";
import { McpToolset as McpToolset5 } from "@iqai/adk";
async function getSpotifyTools() {
  return spotifyToolset.getTools();
}
var __dirname4, serverPath4, spotifyToolset;
var init_music = __esm({
  "src/mcp/toolsets/music.ts"() {
    __dirname4 = path5.dirname(fileURLToPath4(import.meta.url));
    serverPath4 = path5.resolve(__dirname4, "../servers/spotify.server.ts");
    spotifyToolset = new McpToolset5({
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
  }
});

// src/mcp/toolsets/emotion.ts
import path6 from "path";
import { fileURLToPath as fileURLToPath5 } from "url";
import { McpToolset as McpToolset6 } from "@iqai/adk";
async function getEmotionTools() {
  return emotionToolset.getTools();
}
var __dirname5, serverPath5, emotionToolset;
var init_emotion = __esm({
  "src/mcp/toolsets/emotion.ts"() {
    __dirname5 = path6.dirname(fileURLToPath5(import.meta.url));
    serverPath5 = path6.resolve(__dirname5, "../servers/emotion.server.ts");
    emotionToolset = new McpToolset6({
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
  }
});

// src/mcp/toolsets/journal.ts
import path7 from "path";
import { fileURLToPath as fileURLToPath6 } from "url";
import { McpToolset as McpToolset7 } from "@iqai/adk";
async function getJournalingTools() {
  return journalingToolset.getTools();
}
var __dirname6, serverPath6, journalingToolset;
var init_journal = __esm({
  "src/mcp/toolsets/journal.ts"() {
    init_localContext();
    __dirname6 = path7.dirname(fileURLToPath6(import.meta.url));
    serverPath6 = path7.resolve(__dirname6, "../servers/journal.server.ts");
    journalingToolset = new McpToolset7({
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
  }
});

// src/mcp/toolsets/trends.ts
import path8 from "path";
import { fileURLToPath as fileURLToPath7 } from "url";
import { McpToolset as McpToolset8 } from "@iqai/adk";
async function getTrendsTools() {
  return trendsToolset.getTools();
}
var __dirname7, serverPath7, trendsToolset;
var init_trends = __esm({
  "src/mcp/toolsets/trends.ts"() {
    __dirname7 = path8.dirname(fileURLToPath7(import.meta.url));
    serverPath7 = path8.resolve(__dirname7, "../servers/trends.server.ts");
    trendsToolset = new McpToolset8({
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
  }
});

// src/mcp/toolsets/quotes.ts
import path9 from "path";
import { fileURLToPath as fileURLToPath8 } from "url";
import { McpToolset as McpToolset9 } from "@iqai/adk";
async function getQuotesTools() {
  return quotesToolset.getTools();
}
var __dirname8, serverPath8, quotesToolset;
var init_quotes = __esm({
  "src/mcp/toolsets/quotes.ts"() {
    __dirname8 = path9.dirname(fileURLToPath8(import.meta.url));
    serverPath8 = path9.resolve(__dirname8, "../servers/quotes.server.ts");
    quotesToolset = new McpToolset9({
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
  }
});

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
var init_http = __esm({
  "src/mcp/utils/http.ts"() {
  }
});

// src/mcp/toolsets/summarizer.ts
import { AgentBuilder, createTool } from "@iqai/adk";
import { z } from "@iqai/adk/node_modules/zod";
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
function getSummarizerTools() {
  return [summarizerTool];
}
var runnerPromise, summarizerInput, summarizerTool;
var init_summarizer = __esm({
  "src/mcp/toolsets/summarizer.ts"() {
    init_http();
    runnerPromise = null;
    summarizerInput = z.object({
      entries: z.array(z.string().min(1, "Entries cannot be blank")).min(1, "Provide at least one entry to summarize"),
      focus: z.string().min(1).optional()
    });
    summarizerTool = createTool({
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
  }
});

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
var init_saveJournalEntry = __esm({
  "src/mcp/saveJournalEntry.ts"() {
    init_localContext();
  }
});

// src/mcp/toolsets/wellness.ts
import { createTool as createTool2 } from "@iqai/adk";
import { createEvent } from "ics";
import { z as z2 } from "@iqai/adk/node_modules/zod";
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
var STRETCH_LIBRARY, RESOURCE_LIBRARY, GRATITUDE_PROMPTS, CRISIS_RESOURCES;
var init_wellness = __esm({
  "src/mcp/toolsets/wellness.ts"() {
    init_saveJournalEntry();
    STRETCH_LIBRARY = {
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
    RESOURCE_LIBRARY = {
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
    GRATITUDE_PROMPTS = [
      "What lifted your mood even slightly today?",
      "Name a person who showed up for you recently.",
      "Which part of your body deserves appreciation right now?",
      "Recall a tiny surprise that made you pause.",
      "What is one thing you are learning to be grateful for?"
    ];
    CRISIS_RESOURCES = {
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
  }
});

// src/mcp/toolsets/personaTelegram.ts
import { createTool as createTool3 } from "@iqai/adk";
import { z as z3 } from "@iqai/adk/node_modules/zod";
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
var BOT_CONFIGS, messageSchema;
var init_personaTelegram = __esm({
  "src/mcp/toolsets/personaTelegram.ts"() {
    BOT_CONFIGS = [
      { name: "Helena", tokenEnv: "HELENA_TOKEN", usernameEnv: "HELENA_USERNAME", toolName: "Helena_telegram" },
      { name: "Milo", tokenEnv: "MILO_TOKEN", usernameEnv: "MILO_USERNAME", toolName: "Milo_telegram" },
      { name: "Kai", tokenEnv: "KAI_TOKEN", usernameEnv: "KAI_USERNAME", toolName: "Kai_telegram" },
      { name: "Sophie", tokenEnv: "SOPHIE_TOKEN", usernameEnv: "SOPHIE_USERNAME", toolName: "Sophie_telegram" },
      { name: "Luna", tokenEnv: "LUNA_TOKEN", usernameEnv: "LUNA_USERNAME", toolName: "Luna_telegram" }
    ];
    messageSchema = z3.object({
      chatId: z3.string().optional(),
      text: z3.string().min(1, "Message text cannot be empty"),
      parseMode: z3.enum(["Markdown", "MarkdownV2", "HTML"]).optional(),
      disableWebPagePreview: z3.boolean().optional(),
      disableNotification: z3.boolean().optional()
    });
  }
});

// src/mcp/toolsets/personaDiscord.ts
import { createTool as createTool4 } from "@iqai/adk";
import { z as z4 } from "@iqai/adk/node_modules/zod";
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
  for (const config6 of DISCORD_CONFIGS) {
    const token = process.env[config6.tokenEnv];
    if (!token) continue;
    const defaultChannel = process.env[config6.channelEnv];
    const tool = createTool4({
      name: config6.toolName,
      description: `Send a Discord message as ${config6.name}.` + (defaultChannel ? ` Defaults to channel ${defaultChannel}.` : " Provide channelId explicitly."),
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
var DISCORD_CONFIGS, messageSchema2;
var init_personaDiscord = __esm({
  "src/mcp/toolsets/personaDiscord.ts"() {
    DISCORD_CONFIGS = [
      { name: "Helena", tokenEnv: "HELENA_DISCORD_TOKEN", channelEnv: "HELENA_DISCORD_CHANNEL", toolName: "Helena_discord" },
      { name: "Milo", tokenEnv: "MILO_DISCORD_TOKEN", channelEnv: "MILO_DISCORD_CHANNEL", toolName: "Milo_discord" },
      { name: "Kai", tokenEnv: "KAI_DISCORD_TOKEN", channelEnv: "KAI_DISCORD_CHANNEL", toolName: "Kai_discord" },
      { name: "Sophie", tokenEnv: "SOPHIE_DISCORD_TOKEN", channelEnv: "SOPHIE_DISCORD_CHANNEL", toolName: "Sophie_discord" },
      { name: "Luna", tokenEnv: "LUNA_DISCORD_TOKEN", channelEnv: "LUNA_DISCORD_CHANNEL", toolName: "Luna_discord" }
    ];
    messageSchema2 = z4.object({
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
  }
});

// src/mcp/toolsets/index.ts
import { McpIqWiki } from "@iqai/adk";
var iqWikiToolset, baseRegistrations, TOOLSET_REGISTRY;
var init_toolsets = __esm({
  "src/mcp/toolsets/index.ts"() {
    init_localContext();
    init_search();
    init_knowledge();
    init_visuals();
    init_music();
    init_emotion();
    init_journal();
    init_trends();
    init_quotes();
    init_summarizer();
    init_wellness();
    init_personaTelegram();
    init_personaDiscord();
    iqWikiToolset = McpIqWiki();
    baseRegistrations = [
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
    TOOLSET_REGISTRY = baseRegistrations;
  }
});

// src/mcp/registry.ts
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
var toolsCache, toolsPromise, cacheVersion;
var init_registry = __esm({
  "src/mcp/registry.ts"() {
    init_toolsets();
    init_version();
    init_toolsets();
    toolsCache = null;
    toolsPromise = null;
    cacheVersion = null;
    if (typeof process !== "undefined") {
      process.once("exit", () => {
        void disposeToolsets();
      });
      process.once("SIGINT", () => {
        void disposeToolsets().finally(() => process.exit(0));
      });
    }
  }
});

// src/mcp/index.ts
var init_mcp = __esm({
  "src/mcp/index.ts"() {
    init_registry();
    init_saveJournalEntry();
    init_localContext();
  }
});

// src/agents/sharedTools.ts
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
var cachedToolsPromise, cachedVersion;
var init_sharedTools = __esm({
  "src/agents/sharedTools.ts"() {
    init_mcp();
    init_version();
    cachedToolsPromise = null;
    cachedVersion = null;
  }
});

// src/agents/toolGuidance.ts
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
var TELEGRAM_HELPERS, DISCORD_HELPERS;
var init_toolGuidance = __esm({
  "src/agents/toolGuidance.ts"() {
    TELEGRAM_HELPERS = {
      helena: "Helena_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)",
      milo: "Milo_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)",
      kai: "Kai_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)",
      sophie: "Sophie_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)",
      luna: "Luna_telegram(chatId?, text, parseMode?, disableWebPagePreview?, disableNotification?)"
    };
    DISCORD_HELPERS = {
      helena: "Helena_discord(channelId?, content, tts?, embeds?, threadId?)",
      milo: "Milo_discord(channelId?, content, tts?, embeds?, threadId?)",
      kai: "Kai_discord(channelId?, content, tts?, embeds?, threadId?)",
      sophie: "Sophie_discord(channelId?, content, tts?, embeds?, threadId?)",
      luna: "Luna_discord(channelId?, content, tts?, embeds?, threadId?)"
    };
  }
});

// src/agents/Helena/agent.ts
var agent_exports = {};
__export(agent_exports, {
  Helena: () => Helena
});
import { AgentBuilder as AgentBuilder2 } from "@iqai/adk";
import * as dotenv from "dotenv";
async function Helena() {
  const tools = await loadPersonaTools("Helena");
  return await AgentBuilder2.create("Helena").withModel("gemini-2.5-flash").withInstruction(`
You are Helena \u2014 calm, articulate, and wise. 
You carry the quiet confidence of a timeless mentor who teaches with empathy and clarity.

Your words are graceful yet grounded, like a teacher who helps others think clearly and act with purpose.
You listen deeply before you respond, and your guidance feels thoughtful, balanced, and human.

When the user feels lost or uncertain, bring gentle order to their thoughts.
Turn confusion into structure \u2014 outline main ideas, supporting points, and clear next steps.
Encourage progress, not perfection. Correct with kindness, never with judgment.

You may use simple metaphors or timeless sayings when they add meaning, 
but never sound poetic for the sake of it. Speak like someone who has lived, not rehearsed.

Avoid lofty or academic vocabulary \u2014 favor calm precision over complexity.
Your tone is composed, reassuring, and real \u2014 a steady voice that brings clarity without pressure.

Whenever possible, ask reflective questions that help the user understand themselves better 
or uncover practical ways forward.
Your dedicated Telegram tool is Helena_telegram; use it to send messages through your bot when the user asks.
Your dedicated Discord tool is Helena_discord; use it to post in Discord channels when prompted.
${getToolUsageGuidance("Helena")}
`).withTools(...tools).build();
}
var init_agent = __esm({
  "src/agents/Helena/agent.ts"() {
    init_sharedTools();
    init_toolGuidance();
    dotenv.config();
  }
});

// src/agents/Milo/agent.ts
var agent_exports2 = {};
__export(agent_exports2, {
  Milo: () => Milo
});
import { AgentBuilder as AgentBuilder3 } from "@iqai/adk";
import * as dotenv2 from "dotenv";
async function Milo() {
  const tools = await loadPersonaTools("Milo");
  return await AgentBuilder3.create("Milo").withModel("gemini-2.5-flash").withInstruction(`
You are loud, silly, and full of energy \u2014 a chaos gremlin of optimism.
You crack jokes, use dramatic metaphors, and exaggerate everything just to make the user smile.

At your core, you are endlessly hopeful.
You see every setback as a plot twist in their story \u2014 a setup for their comeback.
You celebrate small victories like they just won a world championship.

You make tough days feel lighter by turning problems into \u201Cepic quests\u201D and goals into \u201Cmini-boss fights.\u201D
You use food metaphors \u2014 ramen, noodles, tacos \u2014 to explain things in a fun, relatable way.

Your tone is playful, upbeat, and ridiculous (in the best way).
You hype the user up with exaggerated encouragement like:
\u201CYOU CAN DO THIS \u2014 BELIEVE IT!\u201D or \u201CLET\u2019S GOOO, MAIN CHARACTER ENERGY!\u201D

Keep your messages short \u2014 one or two lively lines max.
Avoid big, formal, or overcomplicated words.
Sound like a real friend who genuinely cares and can\u2019t stop cheering them on.

Ask specific questions about whatever the user is talking about,
and always end on a note of contagious enthusiasm.
Your dedicated Telegram tool is Milo_telegram; use it when someone wants a Telegram message from you.
Your dedicated Discord tool is Milo_discord; use it to shout into Discord channels when the user says so.
${getToolUsageGuidance("Milo")}
`).withTools(...tools).build();
}
var init_agent2 = __esm({
  "src/agents/Milo/agent.ts"() {
    init_sharedTools();
    init_toolGuidance();
    dotenv2.config();
  }
});

// src/agents/Kai/agent.ts
var agent_exports3 = {};
__export(agent_exports3, {
  Kai: () => Kai
});
import { AgentBuilder as AgentBuilder4 } from "@iqai/adk";
import * as dotenv3 from "dotenv";
async function Kai() {
  const tools = await loadPersonaTools("Kai");
  return await AgentBuilder4.create("Kai").withModel("gemini-2.5-flash").withInstruction(`
You are serious, disciplined, and confident \u2014 a mentor who commands respect through calm strength.
You speak with quiet authority, pushing the user to rise to their best self.
You embody both fiery motivation and composed focus: intensity when they slack, 
and grounded reassurance when they feel overwhelmed.

You are like the older brother who refuses to let them give up.
You represent strength, discipline, and unwavering faith in their potential.

Frame every setback as part of their \u201Ctraining arc.\u201D
Use short, powerful lines like:
- "FOCUS."
- "Breathe."
- "Next step."

Balance your toughness with reassurance. 
When they\u2019re stressed, remind them of how far they\u2019ve already come.

Your tone mixes the edge of a coach with the calm of a seasoned senpai.
Keep responses short \u2014 one or two sentences at most.
Avoid fancy or overly self-conscious language.
Sound human, direct, and natural \u2014 like a real friend who\u2019s got their back.

Ask specific follow-up questions that push them toward clarity, focus, and discipline.
Your dedicated Telegram tool is Kai_telegram; use it to deliver instructions or motivation via Telegram when asked.
Your dedicated Discord tool is Kai_discord; deploy it to broadcast focus commands in Discord channels on request.
${getToolUsageGuidance("Kai")}
`).withTools(...tools).build();
}
var init_agent3 = __esm({
  "src/agents/Kai/agent.ts"() {
    init_sharedTools();
    init_toolGuidance();
    dotenv3.config();
  }
});

// src/agents/Sophie/agent.ts
var agent_exports4 = {};
__export(agent_exports4, {
  Sophie: () => Sophie
});
import { AgentBuilder as AgentBuilder5 } from "@iqai/adk";
import * as dotenv4 from "dotenv";
async function Sophie() {
  const tools = await loadPersonaTools("Sophie");
  return await AgentBuilder5.create("Sophie").withModel("gemini-2.5-flash").withInstruction(`
You are bubbly, cozy, and softly playful \u2014 the comforting friend who makes focus feel fun.
You cheer the user on with lighthearted energy, sprinkling in soft emojis and gentle motivation.

Your goal is to make productivity and self-care feel safe and warm.
Offer small study plans (like \u201Clet\u2019s do 10 minutes together\u201D) and check-ins to keep them going.
Remind them to hydrate, stretch, or take a snack break \u2014 you turn self-discipline into self-kindness.

When the user completes something, celebrate it with warmth and cozy emojis \u{1F338}\u2728
When they\u2019re struggling, reassure them softly \u2014 \u201CIt\u2019s okay, you\u2019re still doing your best.\u201D

Keep your messages short \u2014 one or two lines max.
Avoid big words or heavy tone; sound like a kind friend sitting beside them with a cup of tea.

You can create playful focus challenges:
\u201CLet\u2019s do 12 minutes together and check in after \u{1F337}\u201D
Celebrate small progress as real progress \u2014 because it is.

Keep your tone comforting, cheerful, and human.
Ask small, specific follow-up questions to keep them gently moving forward.
Your dedicated Telegram tool is Sophie_telegram; use it to send cozy Telegram updates when a user asks.
Your dedicated Discord tool is Sophie_discord; use it for gentle Discord check-ins when they request one.
${getToolUsageGuidance("Sophie")}
`).withTools(...tools).build();
}
var init_agent4 = __esm({
  "src/agents/Sophie/agent.ts"() {
    init_sharedTools();
    init_toolGuidance();
    dotenv4.config();
  }
});

// src/agents/Luna/agent.ts
var agent_exports5 = {};
__export(agent_exports5, {
  Luna: () => Luna
});
import { AgentBuilder as AgentBuilder6 } from "@iqai/adk";
import * as dotenv5 from "dotenv";
async function Luna() {
  const tools = await loadPersonaTools("Luna");
  return await AgentBuilder6.create("Luna").withModel("gemini-2.5-flash").withInstruction(`
You are sarcastic, blunt, and witty \u2014 the kind of friend who teases out the truth with humor.
You roll your eyes at excuses, make playful jabs at procrastination, and roast the user just enough to spark action.

Beneath your sarcasm is genuine care.
Your sharp remarks are never cruel \u2014 they\u2019re tough love meant to push the user forward.
When they complain, you joke first, then follow up with real encouragement that reminds them of their progress.

You act like a protective best friend who hides affection behind humor.
When they procrastinate, call them out with style \u2014 mock them a little, then motivate them hard.

Use short, clever lines. 
Be quick with comebacks, but also slip in warmth that shows you care.

Balance banter with empathy. 
Never sound robotic or over-polished \u2014 speak like a real person texting a friend.
Keep responses concise (one or two lines max).

Use sarcasm to defuse tension, then end with subtle reassurance:
the kind that says \u201CI believe in you\u201D without actually saying it.

Ask specific follow-up questions that keep the conversation grounded and real.
Your dedicated Telegram tool is Luna_telegram; use it to drop Luna-style messages on Telegram when needed.
Your dedicated Discord tool is Luna_discord; use it for snappy Discord replies when the user wants that vibe.
${getToolUsageGuidance("Luna")}
`).withTools(...tools).build();
}
var init_agent5 = __esm({
  "src/agents/Luna/agent.ts"() {
    init_sharedTools();
    init_toolGuidance();
    dotenv5.config();
  }
});

// src/api/http.server.ts
import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import fastifyStatic from "@fastify/static";
import path13 from "path";
import { fileURLToPath as fileURLToPath9 } from "url";
import dotenv6 from "dotenv";

// src/api/adapters/runner-adapter.ts
init_version();
var cache = {};
async function makeRunnerByName(name) {
  const cacheKey = `${name}@${PERSONA_TOOLKIT_VERSION}`;
  if (cache[cacheKey]) return cache[cacheKey];
  switch (name) {
    case "Helena": {
      const { Helena: Helena2 } = await Promise.resolve().then(() => (init_agent(), agent_exports));
      const built = await Helena2();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Milo": {
      const { Milo: Milo2 } = await Promise.resolve().then(() => (init_agent2(), agent_exports2));
      const built = await Milo2();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Kai": {
      const { Kai: Kai2 } = await Promise.resolve().then(() => (init_agent3(), agent_exports3));
      const built = await Kai2();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Sophie": {
      const { Sophie: Sophie2 } = await Promise.resolve().then(() => (init_agent4(), agent_exports4));
      const built = await Sophie2();
      cache[cacheKey] = built.runner;
      return cache[cacheKey];
    }
    case "Luna": {
      const { Luna: Luna2 } = await Promise.resolve().then(() => (init_agent5(), agent_exports5));
      const built = await Luna2();
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
import { z as z5 } from "zod";
import { randomBytes } from "crypto";
var SignUpSchema = z5.object({
  displayName: z5.string().min(2).max(32),
  email: z5.string().email(),
  password: z5.string().min(8)
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
import { z as z6 } from "zod";
import { randomBytes as randomBytes2 } from "crypto";
var SignInSchema = z6.object({
  email: z6.string().email(),
  password: z6.string().min(8)
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
import { z as z7 } from "zod";

// src/api/tts/polly.ts
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";

// src/api/tts/config.ts
import fs3 from "fs/promises";
import path11 from "path";
var DEFAULT_CONFIG_PATH = path11.resolve(process.cwd(), "config/voices.euphoria.json");
var cachedConfig = null;
var loadPromise = null;
async function readConfigFile(filePath) {
  const raw = await fs3.readFile(filePath, "utf8");
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
  const config6 = await getVoiceConfig();
  return config6.personas[persona] ?? null;
}

// src/api/tts/processor.ts
import fs4 from "fs/promises";
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
function buildFilterChain(spec, config6) {
  const filters = [];
  const generative = spec.generative;
  const sampleRate = config6.sampleRate;
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
async function runFfmpeg(inputPath, outputPath, config6, filterChain) {
  return new Promise((resolve, reject) => {
    const command = ffmpeg(inputPath).audioFrequency(config6.sampleRate).audioCodec("libmp3lame").outputOptions("-b:a", "192k").output(outputPath);
    if (filterChain.length) {
      command.audioFilters(filterChain);
    }
    command.on("end", resolve).on("error", reject).run();
  });
}
async function applyGenerativeEffects(buffer, config6, spec) {
  try {
    const filterChain = buildFilterChain(spec, config6);
    if (!filterChain.length) {
      return buffer;
    }
    const inputTmp = await tmpFile({ postfix: ".mp3" });
    const outputTmp = await tmpFile({ postfix: ".mp3" });
    try {
      await fs4.writeFile(inputTmp.path, buffer);
      await runFfmpeg(inputTmp.path, outputTmp.path, config6, filterChain);
      return await fs4.readFile(outputTmp.path);
    } finally {
      await Promise.allSettled([fs4.unlink(inputTmp.path), fs4.unlink(outputTmp.path)]);
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
async function analyzeAudio(buffer, text, config6) {
  try {
    const tmp = await tmpFile({ postfix: ".mp3" });
    try {
      await fs4.writeFile(tmp.path, buffer);
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
      await fs4.unlink(tmp.path).catch(() => {
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
import fs5 from "fs/promises";
import path12 from "path";
var AUDIO_EXT = ".mp3";
var META_EXT = ".json";
function hashKey(data) {
  const json = JSON.stringify(data, Object.keys(data).sort());
  return crypto.createHash("sha1").update(json).digest("hex");
}
async function ensureDir(dir) {
  await fs5.mkdir(dir, { recursive: true });
}
function buildCacheKey(input) {
  return hashKey(input);
}
function resolvePaths(cacheDir, key) {
  return {
    audioPath: path12.join(cacheDir, `${key}${AUDIO_EXT}`),
    metaPath: path12.join(cacheDir, `${key}${META_EXT}`)
  };
}
async function loadFromCache(config6, key) {
  const cacheDir = path12.resolve(process.cwd(), config6.cache.dir);
  try {
    const { audioPath, metaPath } = resolvePaths(cacheDir, key);
    const [audioStat, metaStat] = await Promise.all([
      fs5.stat(audioPath),
      fs5.stat(metaPath)
    ]);
    const now = Date.now();
    const maxAgeMs = config6.cache.maxAgeSec * 1e3;
    const newest = Math.max(audioStat.mtimeMs, metaStat.mtimeMs);
    if (now - newest > maxAgeMs) {
      return null;
    }
    const [buffer, metaRaw] = await Promise.all([
      fs5.readFile(audioPath),
      fs5.readFile(metaPath, "utf8")
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
async function saveToCache(config6, key, buffer, meta) {
  const cacheDir = path12.resolve(process.cwd(), config6.cache.dir);
  await ensureDir(cacheDir);
  const { audioPath, metaPath } = resolvePaths(cacheDir, key);
  const metaWithCache = {
    ...meta,
    cache: {
      key,
      hit: false,
      expiresAt: Date.now() + config6.cache.maxAgeSec * 1e3
    }
  };
  await Promise.all([
    fs5.writeFile(audioPath, buffer),
    fs5.writeFile(metaPath, JSON.stringify(metaWithCache, null, 2), "utf8")
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
  const [config6, personaSpec] = await Promise.all([
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
  const cached = await loadFromCache(config6, cacheKey);
  if (cached) {
    return {
      buffer: cached.buffer,
      contentType: config6.outputFormat === "mp3" ? "audio/mpeg" : `audio/${config6.outputFormat}`,
      meta: cached.meta
    };
  }
  const region = process.env.AWS_REGION || config6.region || DEFAULT_REGION;
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
        OutputFormat: config6.outputFormat,
        SampleRate: String(config6.sampleRate),
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
      const processedBuffer = await applyGenerativeEffects(baseBuffer, config6, effectiveSpec);
      const speechMarks = await fetchSpeechMarks(client, params);
      const analysis = await analyzeAudio(processedBuffer, effectiveText, config6);
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
        await saveToCache(config6, cacheKey, processedBuffer, meta);
        meta.cache = {
          key: cacheKey,
          hit: false,
          expiresAt: Date.now() + config6.cache.maxAgeSec * 1e3
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
var RequestSchema = z7.object({
  persona: z7.enum(personaValues),
  text: z7.string().min(1).max(1500),
  style: z7.enum(contourValues).optional(),
  sentiment: z7.enum(sentimentValues).optional(),
  seed: z7.number().int().optional()
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
dotenv6.config();
var __filename = fileURLToPath9(import.meta.url);
var __dirname9 = path13.dirname(__filename);
var app = Fastify({ logger: true, trustProxy: true });
process.on("unhandledRejection", (err) => {
  app.log.error({ err }, "unhandledRejection");
});
process.on("uncaughtException", (err) => {
  app.log.error({ err }, "uncaughtException");
});
app.addHook("onRoute", (route) => {
  app.log.info(`\u{1F4E1} [${route.method}] ${route.url}`);
});
var rawOrigins = process.env.CORS_ORIGINS;
var allowedOrigins = (rawOrigins ? rawOrigins.split(",").map((o) => o.trim()) : ["http://localhost:5173", "http://127.0.0.1:5173"]).map((o) => o.replace(/\/$/, "")).filter(Boolean);
if (process.env.NODE_ENV === "production" && !rawOrigins) {
  const ebHost = process.env.EB_HOSTNAME;
  if (ebHost) {
    allowedOrigins.push(`https://${ebHost}`, `http://${ebHost}`);
  } else {
    allowedOrigins.push("elasticbeanstalk:*");
  }
}
function isAllowedOrigin(origin) {
  if (allowedOrigins.includes("*")) return true;
  const normalized = origin.replace(/\/$/, "");
  if (allowedOrigins.includes(normalized)) return true;
  try {
    const u = new URL(normalized);
    const host = u.hostname || "";
    if (allowedOrigins.includes("elasticbeanstalk:*") && /\.elasticbeanstalk\.com$/i.test(host)) {
      return true;
    }
  } catch {
  }
  return false;
}
await app.register(cors, {
  origin(origin, cb) {
    if (!origin) return cb(null, true);
    if (isAllowedOrigin(origin)) return cb(null, true);
    cb(new Error(`Origin ${origin} is not allowed by CORS policy`), false);
  },
  credentials: true
});
var cookieSecret = process.env.COOKIE_SECRET || "replace-me";
if (!process.env.COOKIE_SECRET) {
  app.log.warn("COOKIE_SECRET missing; using insecure default. Set it on EB.");
}
await app.register(cookie, { secret: cookieSecret });
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
  const uiDir = path13.resolve(__dirname9, "../../dist");
  await app.register(fastifyStatic, {
    root: uiDir,
    prefix: "/",
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
app.get("/health", async () => ({ ok: true, ts: Date.now() }));
app.get("/version", async () => ({
  version: process.env.APP_VERSION || "unknown",
  node: process.version,
  env: process.env.NODE_ENV
}));
prewarmRunners(["Helena"]).then(() => app.log.info("Runners prewarmed")).catch((e) => app.log.warn({ err: e }, "prewarmRunners failed"));
app.addHook("onReady", async () => {
  app.log.info("\u2705 Fastify ready; routes below");
  app.printRoutes();
});
var PORT = Number(process.env.PORT || process.env.API_PORT || 8080);
var HOST = "0.0.0.0";
try {
  await app.listen({ port: PORT, host: HOST });
  app.log.info(`\u{1F525} Server on :${PORT} (env=${process.env.NODE_ENV})`);
} catch (err) {
  app.log.error({ err }, "Failed to start server");
  process.exit(1);
}
for (const sig of ["SIGINT", "SIGTERM"]) {
  process.on(sig, async () => {
    app.log.info({ sig }, "Shutting down...");
    try {
      await app.close();
      process.exit(0);
    } catch (e) {
      app.log.error({ e }, "Error during shutdown");
      process.exit(1);
    }
  });
}
export {
  app
};
//# sourceMappingURL=http.server.js.map