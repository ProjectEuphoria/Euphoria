import { Tool } from "../../api/adapters/google-ai-adapter.js";

const LEXICON: Record<string, string> = {
  joy: "joy",
  happy: "joy",
  thrilled: "joy",
  excited: "joy",
  love: "joy",
  great: "joy",
  amazing: "joy",
  wonderful: "joy",
  awesome: "joy",
  delighted: "joy",

  sad: "sadness",
  tired: "sadness",
  drained: "sadness",
  depressed: "sadness",
  lonely: "sadness",
  hopeless: "sadness",
  disappointed: "sadness",
  down: "sadness",
  miserable: "sadness",

  angry: "anger",
  mad: "anger",
  annoyed: "anger",
  furious: "anger",
  rage: "anger",
  upset: "anger",
  hate: "anger",

  anxious: "fear",
  scared: "fear",
  afraid: "fear",
  worried: "fear",
  nervous: "fear",
  panic: "fear",

  bored: "neutral",
  meh: "neutral",
  okay: "neutral",
  fine: "neutral",
  calm: "neutral",
};

function analyze(text: string) {
  const normalized = text.toLowerCase();
  const hits: Record<string, number> = {};
  for (const [word, label] of Object.entries(LEXICON)) {
    const regex = new RegExp(`\\b${word}\\b`, "g");
    const matches = normalized.match(regex);
    if (matches?.length) {
      hits[label] = (hits[label] || 0) + matches.length;
    }
  }
  const primary = Object.entries(hits).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "neutral";
  const totalHits = Object.values(hits).reduce((a, b) => a + b, 0);
  const confidence = totalHits === 0 ? 0.35 : Math.min(0.95, 0.4 + totalHits * 0.1);
  const topKeywords = Object.entries(hits)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([label, count]) => ({ label, count }));

  return { primary, confidence, keywords: topKeywords };
}

export async function getEmotionTools(): Promise<Tool[]> {
  return [
    {
      name: "analyze_emotion",
      description: "Rule-based emotion analysis from text (lightweight, no external API).",
      parameters: {
        type: "object",
        properties: {
          text: { type: "string", description: "Text to analyze for emotions" },
        },
        required: ["text"],
      },
      handler: async (params: { text: string }) => {
        const text = params.text?.trim();
        if (!text) throw new Error("analyze_emotion requires 'text'");
        return analyze(text);
      },
    },
  ];
}
