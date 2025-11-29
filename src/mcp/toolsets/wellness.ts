import { Tool } from "../../api/adapters/google-ai-adapter.js";

function suggestActions(mood: string, energy?: number) {
  const actions: string[] = [];
  const e = energy ?? 5;
  const lower = mood.toLowerCase();

  if (lower.includes("stress") || lower.includes("overwhelm")) {
    actions.push("2-minute box breathing: inhale 4s, hold 4s, exhale 6s, hold 2s (repeat 6x).");
    actions.push("Write down the top 2 tasks, pick one 10-minute action, and start a timer.");
  } else if (lower.includes("sad") || lower.includes("down")) {
    actions.push("Light body check: stand up, stretch shoulders/neck, walk for 5 minutes.");
    actions.push("Send one message to someone you trust. If not up for it, journal 3 lines instead.");
  } else if (lower.includes("angry") || lower.includes("frustrated")) {
    actions.push("Do 20 slow exhales through the mouth; unclench jaw/shoulders between breaths.");
    actions.push("Channel energy: 5-minute brisk walk or 20 bodyweight squats to discharge tension.");
  } else {
    actions.push("Micro-plan the next 30 minutes: one priority, one small reward.");
  }

  if (e <= 3) actions.push("Hydrate (250–500ml) and have a quick carb+protein snack.");
  if (e >= 7) actions.push("Use the energy: pick a 25-minute focus block and mute distractions.");

  return actions;
}

export async function getWellnessTools(): Promise<Tool[]> {
  return [
    {
      name: "mood_check",
      description: "Assess mood/energy and return quick coping and focus suggestions.",
      parameters: {
        type: "object",
        properties: {
          mood: { type: "string", description: "Current mood description" },
          energy_level: { type: "number", minimum: 1, maximum: 10, description: "Energy level 1-10" },
        },
        required: ["mood"],
      },
      handler: async (params: { mood: string; energy_level?: number }) => {
        const mood = params.mood?.trim();
        if (!mood) throw new Error("mood_check requires 'mood'");
        const energy = params.energy_level && params.energy_level > 0 ? params.energy_level : undefined;
        return {
          mood,
          energy,
          suggestions: suggestActions(mood, energy),
        };
      },
    },
    {
      name: "plan_focus_timer",
      description: "Create a Pomodoro-style focus plan with work/break cycles.",
      parameters: {
        type: "object",
        properties: {
          workMinutes: { type: "number", description: "Work minutes per cycle (default 25)" },
          breakMinutes: { type: "number", description: "Break minutes per cycle (default 5)" },
          cycles: { type: "number", description: "Number of cycles (default 3)" },
          includeLongBreak: { type: "boolean", description: "Include a long break after all cycles (default true)" },
        },
      },
      handler: async (params: { workMinutes?: number; breakMinutes?: number; cycles?: number; includeLongBreak?: boolean }) => {
        const work = Math.max(10, Math.min(60, Math.floor(params.workMinutes ?? 25)));
        const rest = Math.max(3, Math.min(20, Math.floor(params.breakMinutes ?? 5)));
        const cycles = Math.max(1, Math.min(8, Math.floor(params.cycles ?? 3)));
        const includeLongBreak = params.includeLongBreak !== false;
        const longBreak = includeLongBreak ? Math.max(rest + 5, 15) : 0;

        const steps = Array.from({ length: cycles }).map((_, idx) => ({
          cycle: idx + 1,
          workMinutes: work,
          breakMinutes: idx === cycles - 1 ? (includeLongBreak ? longBreak : 0) : rest,
        }));

        const totalMinutes = cycles * work + (cycles - 1) * rest + (includeLongBreak ? longBreak : 0);

        return { workMinutes: work, breakMinutes: rest, cycles, includeLongBreak, totalMinutes, steps };
      },
    },
    {
      name: "breathing_coach",
      description: "Generate a breathing script with timing for each phase.",
      parameters: {
        type: "object",
        properties: {
          pattern: { type: "string", description: "Pattern name (box, 4-7-8, equal)" },
          cycles: { type: "number", description: "Number of breaths (default 6)" },
        },
      },
      handler: async (params: { pattern?: string; cycles?: number }) => {
        const pattern = (params.pattern || "box").toLowerCase();
        const cycles = Math.max(3, Math.min(12, Math.floor(params.cycles ?? 6)));

        const patterns: Record<string, { inhale: number; hold: number; exhale: number; hold2: number }> = {
          box: { inhale: 4, hold: 4, exhale: 4, hold2: 4 },
          "4-7-8": { inhale: 4, hold: 7, exhale: 8, hold2: 0 },
          equal: { inhale: 5, hold: 0, exhale: 5, hold2: 0 },
        };

        const timing = patterns[pattern] || patterns.box;
        const script = Array.from({ length: cycles }).map((_, i) => ({
          breath: i + 1,
          steps: [
            { action: "inhale", seconds: timing.inhale },
            ...(timing.hold ? [{ action: "hold", seconds: timing.hold }] : []),
            { action: "exhale", seconds: timing.exhale },
            ...(timing.hold2 ? [{ action: "hold", seconds: timing.hold2 }] : []),
          ],
        }));

        return { pattern: pattern === "4-7-8" ? "4-7-8" : pattern, cycles, script };
      },
    },
  ];
}
