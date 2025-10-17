import { createTool, type BaseTool } from "@iqai/adk";
import { createEvent } from "ics";
import { z } from "@iqai/adk/node_modules/zod";
import { saveJournalEntry } from "../saveJournalEntry";

const STRETCH_LIBRARY: Record<
  string,
  Array<{ name: string; instructions: string; durationSeconds: number }>
> = {
  neck: [
    {
      name: "Neck roll",
      instructions: "Drop chin to chest and roll left to right slowly.",
      durationSeconds: 20,
    },
    {
      name: "Ear-to-shoulder hold",
      instructions: "Tilt ear toward shoulder, hold and breathe.",
      durationSeconds: 30,
    },
  ],
  back: [
    {
      name: "Seated cat-cow",
      instructions: "Arch then round spine while seated, one breath per move.",
      durationSeconds: 40,
    },
    {
      name: "Standing forward fold",
      instructions: "Hinge at hips, let arms drop and release shoulders.",
      durationSeconds: 45,
    },
  ],
  eyes: [
    {
      name: "20-20-20 reset",
      instructions: "Look 20 feet away for 20 seconds every 20 minutes.",
      durationSeconds: 20,
    },
    {
      name: "Figure eight tracing",
      instructions: "Trace a sideways 8 with eyes slowly without moving head.",
      durationSeconds: 30,
    },
  ],
  shoulders: [
    {
      name: "Shoulder rolls",
      instructions: "Ten forward, ten backward, elbows heavy.",
      durationSeconds: 40,
    },
    {
      name: "Doorway chest opener",
      instructions: "Rest forearms on doorway and lean forward gently.",
      durationSeconds: 30,
    },
  ],
  full: [
    {
      name: "Standing quad stretch",
      instructions: "Hold ankle behind you, knees together, switch sides.",
      durationSeconds: 40,
    },
    {
      name: "Calf raises",
      instructions: "Rise onto toes slowly for 15 controlled repetitions.",
      durationSeconds: 60,
    },
  ],
};

const RESOURCE_LIBRARY: Record<
  string,
  Array<{ title: string; url: string; type: "article" | "video" | "podcast" }>
> = {
  burnout: [
    {
      title: "Burnout recovery checklist",
      url: "https://www.everydayhealth.com/wellness/mental-health/recovery-plan-for-burnout/",
      type: "article",
    },
    {
      title: "How to make stress your friend",
      url: "https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend",
      type: "video",
    },
    {
      title: "The Happiness Lab – Burnout answers",
      url: "https://www.pushkin.fm/podcasts/the-happiness-lab-with-dr-laurie-santos/before-you-burnout",
      type: "podcast",
    },
  ],
  anxiety: [
    {
      title: "Grounding techniques that work fast",
      url: "https://www.healthline.com/health/grounding-techniques",
      type: "article",
    },
    {
      title: "Box breathing tutorial",
      url: "https://www.youtube.com/watch?v=V8SLXjK7dXk",
      type: "video",
    },
    {
      title: "The Anxious Achiever",
      url: "https://hbr.org/podcast/2021/03/the-anxious-achiever",
      type: "podcast",
    },
  ],
  focus: [
    {
      title: "Deep work quick start guide",
      url: "https://www.calnewport.com/blog/2016/12/21/a-deep-habits-guide-to-working-less-and-producing-more/",
      type: "article",
    },
    {
      title: "Pomodoro walkthrough",
      url: "https://www.youtube.com/watch?v=mNBmG24djoY",
      type: "video",
    },
    {
      title: "Focused podcast",
      url: "https://www.relay.fm/focused",
      type: "podcast",
    },
  ],
  grief: [
    {
      title: "Coping with grief and loss",
      url: "https://www.helpguide.org/articles/grief/coping-with-grief-and-loss.htm",
      type: "article",
    },
    {
      title: "How to talk about grief",
      url: "https://www.youtube.com/watch?v=khkJkR-ipfw",
      type: "video",
    },
    {
      title: "Terrible, Thanks for Asking",
      url: "https://www.terriblethanksforasking.com/",
      type: "podcast",
    },
  ],
};

const GRATITUDE_PROMPTS = [
  "What lifted your mood even slightly today?",
  "Name a person who showed up for you recently.",
  "Which part of your body deserves appreciation right now?",
  "Recall a tiny surprise that made you pause.",
  "What is one thing you are learning to be grateful for?",
];

const CRISIS_RESOURCES: Record<
  string,
  Array<{ name: string; phone?: string; text?: string; web?: string }>
> = {
  US: [
    {
      name: "988 Suicide & Crisis Lifeline",
      phone: "988",
      text: "Text 988",
      web: "https://988lifeline.org",
    },
    {
      name: "Crisis Text Line",
      text: "Text HOME to 741741",
      web: "https://www.crisistextline.org",
    },
  ],
  CA: [
    {
      name: "988 Suicide Crisis Helpline",
      phone: "988",
      web: "https://988.ca",
    },
    {
      name: "Kids Help Phone",
      phone: "1-800-668-6868",
      text: "Text CONNECT to 686868",
      web: "https://kidshelpphone.ca",
    },
  ],
  UK: [
    { name: "Samaritans", phone: "116 123", web: "https://www.samaritans.org" },
    {
      name: "Shout Crisis Text Line",
      text: "Text SHOUT to 85258",
      web: "https://giveusashout.org",
    },
  ],
  AU: [
    { name: "Lifeline Australia", phone: "13 11 14", web: "https://www.lifeline.org.au" },
    { name: "Beyond Blue", phone: "1300 22 4636", web: "https://www.beyondblue.org.au" },
  ],
  NZ: [
    { name: "1737 Need to talk?", phone: "1737", text: "Text 1737" },
    { name: "Youthline", phone: "0800 376 633", text: "Text 234", web: "https://www.youthline.co.nz" },
  ],
  SG: [
    { name: "Samaritans of Singapore", phone: "1767", web: "https://sos.org.sg" },
    { name: "IMH Mental Health Helpline", phone: "6389 2222", web: "https://www.imh.com.sg" },
  ],
  IN: [
    { name: "Kiran Mental Health Helpline", phone: "1800-599-0019" },
    { name: "Snehi India", phone: "+91-9582208181", web: "https://snehi.org" },
  ],
  ZA: [
    { name: "SADAG Suicide Crisis Line", phone: "0800 567 567", web: "https://www.sadag.org" },
    { name: "Lifeline South Africa", phone: "0861 322 322" },
  ],
  BR: [
    { name: "Centro de Valorização da Vida", phone: "188", web: "https://www.cvv.org.br" },
  ],
  MX: [
    { name: "Línea de la Vida", phone: "800 911 2000", text: "WhatsApp 55 1161 1111", web: "https://www.gob.mx/salud" },
  ],
  PH: [
    { name: "Hopeline PH", phone: "02-8804-4673", text: "0918-873-4673", web: "https://www.ngf-hope.org" },
  ],
  INTERNATIONAL: [
    { name: "Befrienders Worldwide", web: "https://www.befrienders.org" },
    { name: "Find a helpline", web: "https://findahelpline.com" },
  ],
};

function addMinutes(base: Date, minutes: number): Date {
  return new Date(base.getTime() + minutes * 60_000);
}

function parseISOOrThrow(raw?: string): Date {
  const parsed = raw ? new Date(raw) : new Date();
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid date format: ${raw}`);
  }
  return parsed;
}

function formatLocal(date: Date) {
  return {
    iso: date.toISOString(),
    localDate: date.toLocaleDateString(),
    localTime: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };
}

function ensureUniqueTimes(slots: Date[]): Date[] {
  const seen = new Map<string, Date>();
  for (const slot of slots) {
    const key = slot.toISOString();
    if (!seen.has(key)) {
      seen.set(key, slot);
    }
  }
  return Array.from(seen.values()).sort((a, b) => a.getTime() - b.getTime());
}

export async function getWellnessTools(): Promise<BaseTool[]> {
  const scheduleMoodCheckIn = createTool({
    name: "schedule_mood_check_in",
    description: "Plan a sequence of mood check-ins with smart reminders and reflection prompts.",
    schema: z.object({
      startTime: z.string().optional(),
      intervalMinutes: z.number().int().min(10).max(1440).optional(),
      count: z.number().int().min(1).max(12).optional(),
      customTimes: z.array(z.string()).optional(),
    }),
    fn: async ({ startTime, intervalMinutes = 180, count = 3, customTimes }) => {
      let slots: Date[] = [];
      if (customTimes?.length) {
        slots = customTimes.map(parseISOOrThrow);
      } else {
        const anchor = parseISOOrThrow(startTime);
        slots = Array.from({ length: count }, (_, idx) =>
          idx === 0 ? anchor : addMinutes(anchor, intervalMinutes * idx),
        );
      }
      const unique = ensureUniqueTimes(slots.filter((slot) => slot.getTime() > Date.now()));
      const reminders = unique.map((slot, idx) => ({
        label: `Check-in ${idx + 1}`,
        ...formatLocal(slot),
        prompt: idx === 0
          ? "Ask how their energy feels right now."
          : "Reflect on any shifts since the last check-in.",
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
          "If energy keeps dipping, suggest nourishment or rest.",
        ],
      };
    },
  });

  const breathingCoach = createTool({
    name: "breathing_coach",
    description: "Guide the user through structured breathing with cycle timing and coaching notes.",
    schema: z.object({
      pattern: z
        .enum(["box", "four_seven_eight", "resonance", "balanced_reset", "rescue"])
        .optional(),
      cycles: z.number().int().min(1).max(12).optional(),
      includeAffirmations: z.boolean().optional(),
    }),
    fn: async ({ pattern = "box", cycles = 4, includeAffirmations = false }) => {
      const catalogue: Record<
        string,
        { name: string; steps: Array<{ cue: string; seconds: number }>; focus: string }
      > = {
        box: {
          name: "Box breathing 4-4-4-4",
          steps: [
            { cue: "Inhale steadily", seconds: 4 },
            { cue: "Hold softly", seconds: 4 },
            { cue: "Exhale slowly", seconds: 4 },
            { cue: "Hold at the bottom", seconds: 4 },
          ],
          focus: "Stabilise the nervous system and regain focus.",
        },
        four_seven_eight: {
          name: "4-7-8 calming breath",
          steps: [
            { cue: "Inhale through nose", seconds: 4 },
            { cue: "Hold gently", seconds: 7 },
            { cue: "Exhale with a sigh", seconds: 8 },
          ],
          focus: "Lower tension and ease anxious spikes.",
        },
        resonance: {
          name: "Resonance breathing (~6 breaths/min)",
          steps: [
            { cue: "Inhale", seconds: 5 },
            { cue: "Exhale", seconds: 5 },
          ],
          focus: "Support heart rate variability and calm focus.",
        },
        balanced_reset: {
          name: "Balanced reset 5-5-5",
          steps: [
            { cue: "Inhale", seconds: 5 },
            { cue: "Hold", seconds: 5 },
            { cue: "Exhale", seconds: 5 },
          ],
          focus: "Reset between meetings or intense tasks.",
        },
        rescue: {
          name: "Rescue breath (long exhale)",
          steps: [
            { cue: "Inhale", seconds: 2 },
            { cue: "Exhale slowly", seconds: 6 },
          ],
          focus: "Release acute stress when you need quick relief.",
        },
      };
      const chosen = catalogue[pattern] ?? catalogue.box;
      const totalSeconds =
        cycles * chosen.steps.reduce((sum, step) => sum + step.seconds, 0);
      const affirmations = includeAffirmations
        ? [
            "Breath in: I am safe to pause.",
            "Hold: I am present with what is real.",
            "Exhale: I release what I no longer need.",
          ]
        : undefined;
      return {
        pattern: chosen.name,
        focus: chosen.focus,
        cycles,
        totalDurationSeconds: totalSeconds,
        cycleBlueprint: chosen.steps,
        affirmations,
        debriefPrompt: "Ask how their body feels now versus before starting.",
      };
    },
  });

  const logMicroHabit = createTool({
    name: "log_micro_habit",
    description: "Track micro habits and return coaching tips tailored to the action.",
    schema: z.object({
      habit: z.string().min(2),
      action: z.enum(["start", "complete", "skip"]),
      friction: z.enum(["none", "low", "medium", "high"]).optional(),
      notes: z.string().optional(),
    }),
    fn: async ({ habit, action, friction = "low", notes }) => {
      const summaries: Record<string, string> = {
        start: "Momentum started. Remind them a small win still counts.",
        complete: "Celebrate the follow-through. Reinforce what made it work.",
        skip: "Normalize the skip and identify what support they need next.",
      };
      const frictionAdvice: Record<string, string> = {
        none: "They feel clear—ask what helped and lock it in.",
        low: "Notice gentle resistance and plan the next trigger.",
        medium: "Encourage breaking it down further or pairing with a cue.",
        high: "Explore what blocked them first; maybe the habit needs re-scoping.",
      };
      return {
        habit,
        action,
        statusSummary: summaries[action],
        friction,
        frictionAdvice: frictionAdvice[friction],
        notes,
      };
    },
  });

  const energySurvey = createTool({
    name: "energy_level_survey",
    description: "Log current energy (1-5) and map it to action ideas, escalation prompts, and recovery tips.",
    schema: z.object({
      energy: z.number().int().min(1).max(5),
      tags: z.array(z.string()).max(5).optional(),
    }),
    fn: async ({ energy, tags }) => {
      const labels = ["Drained", "Low", "Steady", "Elevated", "Peak"];
      const suggestions = [
        ["Suggest rest, water, and emotional check-in."],
        ["Recommend gentle tasks or planning tomorrow."],
        ["Propose a focus sprint or tidy-up tasks."],
        ["Great moment for creative or social work."],
        ["Channel into priority work, then cool down."],
      ];
      const escalation =
        energy <= 2
          ? "If they mention burnout signs, suggest a break and revisit nutrition, sleep, or emotional load."
          : null;
      const anchors = energy >= 4 ? ["Plan a celebration when work wraps.", "Invite them to note what conditions created this energy."] : ["Encourage a hydration check.", "Ask what would recharge them fastest."];
      return {
        energy,
        label: labels[energy - 1],
        suggestions: suggestions[energy - 1],
        escalation,
        recoveryPrompts: anchors,
        tags,
      };
    },
  });

  const focusTimer = createTool({
    name: "plan_focus_timer",
    description: "Generate a Pomodoro or custom focus schedule with cumulative timing and reflection cues.",
    schema: z.object({
      workMinutes: z.number().int().min(10).max(75).optional(),
      breakMinutes: z.number().int().min(3).max(25).optional(),
      cycles: z.number().int().min(1).max(8).optional(),
      includeLongBreak: z.boolean().optional(),
    }),
    fn: async ({ workMinutes = 25, breakMinutes = 5, cycles = 4, includeLongBreak = true }) => {
      const blocks = Array.from({ length: cycles }, (_, idx) => {
        const longBreak = includeLongBreak && (idx + 1) % 4 === 0 && idx + 1 !== cycles
          ? Math.max(breakMinutes * 3, 15)
          : breakMinutes;
        return {
          cycle: idx + 1,
          workMinutes,
          breakMinutes: idx === cycles - 1 ? 0 : longBreak,
          checkIn: idx === 0 ? "Set intention for this block." : "Note progress / obstacles.",
        };
      });
      const totalFocus = cycles * workMinutes;
      const totalBreak = blocks.reduce((sum, block) => sum + block.breakMinutes, 0);
      return {
        plan: blocks,
        totals: {
          focusMinutes: totalFocus,
          breakMinutes: totalBreak,
          ratio: Number((totalFocus / Math.max(totalBreak, 1)).toFixed(2)),
        },
        suggestions: [
          "Invite the user to log a sentence after each block.",
          "Encourage a longer decompression after the full set completes.",
        ],
      };
    },
  });

  const stretchLibrary = createTool({
    name: "stretch_move_library",
    description: "Provide targeted movement suggestions with duration and micro coaching.",
    schema: z.object({
      focus: z.enum(["neck", "back", "eyes", "shoulders", "full"]).optional(),
      limit: z.number().int().min(1).max(5).optional(),
    }),
    fn: async ({ focus = "full", limit = 3 }) => {
      const bank = STRETCH_LIBRARY[focus] ?? STRETCH_LIBRARY.full;
      const selection = bank.slice(0, limit);
      return {
        focus,
        suggestions: selection,
        reminder: "Ask the user to set a timer and notice tension release afterwards.",
      };
    },
  });

  const sleepSummarizer = createTool({
    name: "summarize_sleep_log",
    description: "Analyze a batch of sleep logs, compute averages, and suggest adjustments.",
    schema: z.object({
      entries: z
        .array(
          z.object({
            date: z.string(),
            hours: z.number().min(0).max(24),
            quality: z.number().min(1).max(5).optional(),
            notes: z.string().optional(),
          }),
        )
        .min(1)
        .max(30),
    }),
    fn: async ({ entries }) => {
      const totalHours = entries.reduce((sum, item) => sum + item.hours, 0);
      const avgHours = totalHours / entries.length;
      const qualities = entries.map((entry) => entry.quality).filter(Boolean) as number[];
      const avgQuality = qualities.length
        ? qualities.reduce((sum, value) => sum + value, 0) / qualities.length
        : null;
      const shortNights = entries.filter((night) => night.hours < 6);
      const longestNight = entries.reduce((prev, item) =>
        item.hours > prev.hours ? item : prev,
      );
      return {
        nightsLogged: entries.length,
        averageHours: Number(avgHours.toFixed(2)),
        averageQuality: avgQuality ? Number(avgQuality.toFixed(2)) : null,
        shortestNight: shortNights.length ? shortNights[0] : null,
        longestNight,
        recommendations: avgHours < 7
          ? [
              "Encourage a consistent bedtime and dimming screens 30 minutes before sleep.",
              "Suggest a short wind-down routine logged in the journal.",
            ]
          : [
              "Help them protect current sleep habits.",
              "Introduce a gentle morning ritual to sustain rest quality.",
            ],
      };
    },
  });

  const nutritionHelper = createTool({
    name: "nutrition_prompt_helper",
    description: "Offer hydration and nourishment prompts based on recent intake cues.",
    schema: z.object({
      lastMealMinutesAgo: z.number().int().min(0).max(1440).optional(),
      hydrationCups: z.number().int().min(0).max(24).optional(),
      craving: z.string().optional(),
    }),
    fn: async ({ lastMealMinutesAgo, hydrationCups, craving }) => {
      const suggestions: string[] = [];
      if (lastMealMinutesAgo !== undefined) {
        if (lastMealMinutesAgo >= 300) {
          suggestions.push("Recommend a substantial meal. Neutral tone, no shame.");
        } else if (lastMealMinutesAgo >= 180) {
          suggestions.push("Suggest a protein + carb snack to stabilise energy.");
        } else if (lastMealMinutesAgo >= 120) {
          suggestions.push("Invite them to prep a light bite before hunger spikes.");
        } else {
          suggestions.push("Meal timing is solid—cheer on the consistency.");
        }
      }
      if (hydrationCups !== undefined) {
        if (hydrationCups < 3) {
          suggestions.push("Prompt a glass of water now and note how it feels after.");
        } else if (hydrationCups > 10) {
          suggestions.push("Hydration looks high—make sure electrolytes are balanced.");
        } else {
          suggestions.push("Hydration zone is healthy—celebrate and keep nearby water.");
        }
      }
      if (craving) {
        suggestions.push(`Encourage them to pair ${craving} with fiber or protein for steady energy.`);
      }
      return {
        suggestions,
        note: "Remind them that nourishment fuels focus—no guilt, just care.",
      };
    },
  });

  const resourceRecommender = createTool({
    name: "recommend_care_resources",
    description: "Return curated articles, videos, or podcasts for wellness topics.",
    schema: z.object({
      topic: z.string().min(3),
      format: z.enum(["article", "video", "podcast", "any"]).optional(),
      limit: z.number().int().min(1).max(5).optional(),
    }),
    fn: async ({ topic, format = "any", limit = 3 }) => {
      const key = topic.toLowerCase();
      const bucket = RESOURCE_LIBRARY[key] ?? RESOURCE_LIBRARY.focus;
      const filtered =
        format === "any" ? bucket : bucket.filter((item) => item.type === format);
      const results = filtered.slice(0, limit);
      return {
        topic: key,
        results,
        fallback: results.length ? null : "Try reading mode on DuckDuckGo search for more resources.",
      };
    },
  });

  const gratitudeVault = createTool({
    name: "log_gratitude_entry",
    description: "Append a gratitude line to the shared journal with optional prompts.",
    schema: z.object({
      entry: z.string().min(3),
      promptRequested: z.boolean().optional(),
      tags: z.array(z.string().min(2)).max(5).optional(),
    }),
    fn: async ({ entry, promptRequested = false, tags }) => {
      const prompt = promptRequested
        ? GRATITUDE_PROMPTS[Math.floor(Math.random() * GRATITUDE_PROMPTS.length)]
        : undefined;
      const line = `[gratitude] ${entry}${tags?.length ? ` | tags: ${tags.join(", ")}` : ""}`;
      const file = await saveJournalEntry(line);
      return {
        savedTo: file,
        prompt,
        reminder: "Invite them to revisit gratitude notes on rough days.",
      };
    },
  });

  const complimentGenerator = createTool({
    name: "generate_personalized_compliment",
    description: "Generate a motivating compliment keyed to the achievement and tone.",
    schema: z.object({
      focus: z.enum(["consistency", "bravery", "progress", "care", "resilience"]).optional(),
      persona: z.enum(["gentle", "hype", "witty"]).optional(),
      name: z.string().optional(),
    }),
    fn: async ({ focus = "progress", persona = "gentle", name }) => {
      const compliments: Record<string, Record<string, string>> = {
        gentle: {
          consistency: "Your steadiness is quietly rewriting your story.",
          bravery: "You stepped toward the hard thing—proof you trust yourself.",
          progress: "Every tiny move counts; you’re building more than you see.",
          care: "Choosing rest is resistance. I’m proud of your tenderness.",
          resilience: "You bend, you recover, you rise stronger each time.",
        },
        hype: {
          consistency: "You’re stacking wins like a legend—no off days here.",
          bravery: "That move took main-character energy and you owned it.",
          progress: "Plot twist: you’re unstoppable when you chase the next step.",
          care: "Self-care king/queen alert! You’re literally glowing.",
          resilience: "Bounce-back level: elite. Nothing keeps you down.",
        },
        witty: {
          consistency: "Look at you, quietly building an empire of good habits.",
          bravery: "You basically just high-fived your own courage.",
          progress: "Slow clap—your momentum has entered the chat.",
          care: "Self-kindness unlocked: legendary tier.",
          resilience: "Like a boomerang with better boundaries. You keep coming back.",
        },
      };
      return {
        compliment: `${name ? `${name}, ` : ""}${compliments[persona][focus]}`,
        focus,
        persona,
      };
    },
  });

  const goalLadderPlanner = createTool({
    name: "plan_goal_ladder",
    description: "Break a goal into structured steps with focus prompts and support ideas.",
    schema: z.object({
      goal: z.string().min(4),
      steps: z.number().int().min(3).max(8).optional(),
      timelineDays: z.number().int().min(1).max(60).optional(),
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
        "Note a mantra to keep you steady when it gets tough.",
      ];
      const ladder = Array.from({ length: steps }, (_, idx) => ({
        step: idx + 1,
        question: prompts[idx],
      }));
      return {
        goal,
        timelineDays,
        ladder,
        suggestion: "Work through the prompts together and capture answers in the journal.",
      };
    },
  });

  const conflictReflection = createTool({
    name: "reflect_on_conflict",
    description: "Surface prompts to process a conflict with empathy and boundaries.",
    schema: z.object({
      situation: z.string().min(5),
      emotion: z.string().optional(),
      intention: z.enum(["repair", "closure", "self-care"]).optional(),
    }),
    fn: async ({ situation, emotion, intention = "self-care" }) => ({
      situation,
      intention,
      prompts: [
        "What need of yours felt unheard in that moment?",
        "If you paused the scene, what support would you offer your past self?",
        "Which boundary do you need to restate or rebuild?",
        "Is there a repair you want, or do you need distance to heal?",
        "How can you take care of your nervous system in the next hour?",
      ],
      emotion,
    }),
  });

  const moodPlaylistMixer = createTool({
    name: "mix_mood_playlist",
    description: "Translate mood + energy into Spotify seed ideas and playlist prompts.",
    schema: z.object({
      mood: z.string().min(3),
      energy: z.enum(["low", "medium", "high"]).optional(),
      need: z.enum(["focus", "comfort", "celebration", "release"]).optional(),
    }),
    fn: async ({ mood, energy = "medium", need = "focus" }) => {
      const baseSeeds: Record<string, string[]> = {
        focus: ["focus", "study", "piano"],
        comfort: ["acoustic", "calm", "winter-chill"],
        celebration: ["dance", "pop", "feel-good"],
        release: ["mellow", "rainy-day", "indie"],
      };
      const energyTags: Record<string, string[]> = {
        low: ["soft", "ambient"],
        medium: ["steady", "lofi"],
        high: ["high-energy", "confidence"],
      };
      return {
        mood,
        energy,
        need,
        seeds: [...(baseSeeds[need] ?? baseSeeds.focus), ...energyTags[energy]],
        followUp: [
          `Try \`spotify_vibe_playlists\` with "${mood} ${energyTags[energy][0]}"`,
          "If it misses, pivot to a comfort playlist they already love.",
        ],
      };
    },
  });

  const ambientSoundSelector = createTool({
    name: "select_ambient_sound",
    description: "Serve curated ambient soundtracks with quick descriptions.",
    schema: z.object({
      vibe: z.enum(["rain", "cafe", "forest", "lofi", "minimal", "ocean"]).optional(),
      limit: z.number().int().min(1).max(4).optional(),
    }),
    fn: async ({ vibe = "lofi", limit = 2 }) => {
      const library: Record<
        string,
        Array<{ label: string; url: string; description: string }>
      > = {
        rain: [
          {
            label: "Soft rain on window",
            url: "https://www.youtube.com/watch?v=DWcJFNfaw9c",
            description: "Gentle rain with occasional thunder for steady focus.",
          },
          {
            label: "Rain in library",
            url: "https://www.youtube.com/watch?v=7NOSDKb0HlU",
            description: "Rainfall with muffled pages and ambience.",
          },
        ],
        cafe: [
          {
            label: "Lo-fi café ambiance",
            url: "https://www.youtube.com/watch?v=lTRiuFIWV54",
            description: "Light chatter and espresso machines.",
          },
          {
            label: "Morning café",
            url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
            description: "Soft jazz with warm café noise.",
          },
        ],
        forest: [
          {
            label: "Forest morning",
            url: "https://www.youtube.com/watch?v=OdIJ2x3nxzQ",
            description: "Birdsong and light breeze.",
          },
          {
            label: "Night forest",
            url: "https://www.youtube.com/watch?v=VSS-7Ia6cYc",
            description: "Crickets and gentle stream for calm evenings.",
          },
        ],
        lofi: [
          {
            label: "lofi hip hop radio",
            url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
            description: "Classic lofi beats for study or work.",
          },
          {
            label: "lofi piano focus",
            url: "https://www.youtube.com/watch?v=1ZYbU82GVz4",
            description: "Soft piano loops with minimal percussion.",
          },
        ],
        minimal: [
          {
            label: "Brown noise",
            url: "https://www.youtube.com/watch?v=HdFTGSY4-7E",
            description: "Low consistent brown noise for deep focus.",
          },
          {
            label: "Calm air purifier",
            url: "https://www.youtube.com/watch?v=HNl9xWJxUgw",
            description: "Gentle white noise with soft airflow.",
          },
        ],
        ocean: [
          {
            label: "Ocean waves",
            url: "https://www.youtube.com/watch?v=HM6kXl_ItLE",
            description: "Rolling waves with seagulls afar.",
          },
        ],
      };
      const options = library[vibe] ?? library.lofi;
      return {
        vibe,
        options: options.slice(0, limit),
        suggestion: "Check in after two minutes and adjust volume or vibe.",
      };
    },
  });

  const eventCalendarExport = createTool({
    name: "create_focus_event_ics",
    description: "Generate an ICS snippet for focus or rest blocks with structured metadata.",
    schema: z.object({
      title: z.string().min(3),
      start: z.string(),
      durationMinutes: z.number().int().min(5).max(600).optional(),
      description: z.string().optional(),
      location: z.string().optional(),
      uid: z.string().optional(),
    }),
    fn: async ({ title, start, durationMinutes = 45, description, location, uid }) => {
      const originalStart = parseISOOrThrow(start);
      let startDate = originalStart;
      let adjusted = false;
      if (startDate.getTime() < Date.now()) {
        startDate = new Date(Date.now() + 5 * 60 * 1000);
        adjusted = true;
      }
      const endDate = addMinutes(startDate, durationMinutes);
      const eventConfig: Record<string, unknown> = {
        title,
        start: [
          startDate.getFullYear(),
          startDate.getMonth() + 1,
          startDate.getDate(),
          startDate.getHours(),
          startDate.getMinutes(),
        ],
        end: [
          endDate.getFullYear(),
          endDate.getMonth() + 1,
          endDate.getDate(),
          endDate.getHours(),
          endDate.getMinutes(),
        ],
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
        note: adjusted
          ? "Start time was nudged five minutes into the future because the provided start was in the past."
          : undefined,
      };
    },
  });

  const crisisResources = createTool({
    name: "locate_crisis_resources",
    description: "Return crisis support contacts by country with fallback options.",
    schema: z.object({
      country: z.string().optional(),
      concern: z.enum(["self-harm", "substance", "abuse", "unspecified"]).optional(),
    }),
    fn: async ({ country = "INTERNATIONAL" }) => {
      const key = country.toUpperCase();
      const resources =
        CRISIS_RESOURCES[key] ?? CRISIS_RESOURCES[key.slice(0, 2)] ?? CRISIS_RESOURCES.INTERNATIONAL;
      return {
        country: key,
        resources,
        instructions: [
          "If someone is in immediate danger, instruct them to call local emergency services.",
          "Stay with the user (digitally) until they confirm they have contacted help.",
        ],
      };
    },
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
    crisisResources,
  ];
}
