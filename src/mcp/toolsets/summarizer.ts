import { AgentBuilder, createTool } from "@iqai/adk";
import type { Runner } from "@iqai/adk";
import { z } from "@iqai/adk/node_modules/zod";
import { sanitizeErrorMessage } from "../utils/http";

let runnerPromise: Promise<Runner> | null = null;

async function getSummarizerRunner(): Promise<Runner> {
  if (!runnerPromise) {
    if (!process.env.GOOGLE_API_KEY) {
      throw new Error(
        "summarize_reflections requires GOOGLE_API_KEY to be configured for the Gemini model.",
      );
    }
    runnerPromise = AgentBuilder.create("WeeklyMoodSummarizer")
      .withModel("gemini-2.5-flash")
      .withInstruction(
        [
          "You are a cozy Gen-Z productivity coach.",
          "Summarize journal/check-in entries into positive, honest recaps.",
          "Respond strictly in JSON with keys: summary (string), highlights (array of strings), action_items (array of strings).",
          "Keep tone uplifting, slang-light, and under 120 words per field.",
        ].join("\n"),
      )
      .build()
      .then((built) => built.runner);
  }
  return runnerPromise;
}

const summarizerInput = z.object({
  entries: z
    .array(z.string().min(1, "Entries cannot be blank"))
    .min(1, "Provide at least one entry to summarize"),
  focus: z.string().min(1).optional(),
});

export const summarizerTool = createTool({
  name: "summarize_reflections",
  description:
    "Digest a batch of journal or chat entries into a Gen-Z friendly weekly recap, returning highlights, mood notes, and actionable next-steps as structured JSON for downstream coaching.",
  schema: summarizerInput,
  fn: async ({ entries, focus }) => {
    const cleanedEntries = entries.map((entry) => entry.trim());
    const runner = await getSummarizerRunner();
    const prompt = [
      focus
        ? `Focus on: ${focus}. Keep it encouraging and actionable.`
        : "Provide a balanced, encouraging recap.",
      "Entries:",
    ]
      .concat(
        cleanedEntries.map(
          (entry, index) => `${index + 1}. ${entry.replace(/\s+/g, " ")}`,
        ),
      )
      .join("\n");

    let raw: unknown;
    try {
      raw = await runner.ask(prompt);
    } catch (error) {
      return {
        summary: "",
        highlights: cleanedEntries.slice(0, Math.min(3, cleanedEntries.length)),
        action_items: [],
        warning: `Summarizer request failed: ${sanitizeErrorMessage(error)}`,
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
          "Message a friend",
        ],
        warning: "Summarizer response was not valid JSON; returning fallback.",
      };
    }
  },
});

export function getSummarizerTools() {
  return [summarizerTool];
}
