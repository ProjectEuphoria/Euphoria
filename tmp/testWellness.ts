import { getWellnessTools } from "../src/mcp/toolsets/wellness";

const nowIso = new Date(Date.now() + 15 * 60 * 1000).toISOString();

const samples: Record<string, Record<string, unknown>> = {
  schedule_mood_check_in: { startTime: nowIso, intervalMinutes: 60, count: 3 },
  plan_focus_timer: { workMinutes: 25, breakMinutes: 5, cycles: 2, includeLongBreak: true },
  create_focus_event_ics: { title: "Focus Session", start: nowIso, durationMinutes: 45 },
  breathing_coach: { pattern: "box", cycles: 3, includeAffirmations: true },
  stretch_move_library: { focus: "neck", limit: 2 },
  log_micro_habit: { habit: "drink water", action: "complete", friction: "low" },
  energy_level_survey: { energy: 3, tags: ["afternoon"] },
  summarize_sleep_log: {
    entries: [
      { date: "2025-02-10", hours: 7.5, quality: 4, notes: "slept well" },
      { date: "2025-02-11", hours: 6, quality: 3 },
      { date: "2025-02-12", hours: 8 },
    ],
  },
  nutrition_prompt_helper: { lastMealMinutesAgo: 200, hydrationCups: 2, craving: "chocolate" },
  recommend_care_resources: { topic: "burnout", format: "article", limit: 2 },
  log_gratitude_entry: { entry: "grateful for supportive friend", promptRequested: true, tags: ["friends"] },
  generate_personalized_compliment: { focus: "resilience", persona: "gentle", name: "Alex" },
  plan_goal_ladder: { goal: "finish portfolio", steps: 4, timelineDays: 14 },
  reflect_on_conflict: { situation: "Tense meeting with manager", emotion: "frustrated", intention: "repair" },
  mix_mood_playlist: { mood: "focused", energy: "medium", need: "focus" },
  select_ambient_sound: { vibe: "rain", limit: 1 },
  locate_crisis_resources: { country: "US", concern: "unspecified" },
};

(async () => {
  const tools = await getWellnessTools();
  const registry = new Map(tools.map((tool) => [tool.name, tool]));
  for (const [name, args] of Object.entries(samples)) {
    const tool = registry.get(name);
    if (!tool) {
      console.log(`${name}: FAIL -> tool not available`);
      continue;
    }
    try {
      const output = await tool.runAsync(args, {} as any);
      console.log(`${name}: PASS`);
    } catch (error) {
      console.log(`${name}: FAIL -> ${(error as Error).message}`);
    }
  }
})();
