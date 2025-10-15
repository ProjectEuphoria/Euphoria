#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// --- Expanded lexicons ---
const POSITIVE = new Set([
  // core positives
  "calm","peace","peaceful","serene","content","contented","satisfied","relaxed","chill",
  "happy","happier","happiest","joy","joyful","cheerful","glad","delighted","thrilled",
  "excited","pumped","stoked","elated","ecstatic","euphoric",
  "confident","assured","secure","certain","grounded","balanced",
  "hopeful","optimistic","positive","sunny","upbeat",
  "energized","energetic","vigorous","fresh","rested",
  "grateful","thankful","gratitude","appreciative",
  "motivated","driven","focused","productive","flow","inspired",
  "proud","accomplished","strong","resilient","capable","brave","courageous",
  "relieved","comforted","soothed",
  "loving","loved","cared","supported","connected","included",
  "curious","interested","engaged","excelling","winning",
  "fun","playful","light","uplifted","optimism","hope",
  // slang/modern
  "hype","vibes","goodvibes","wholesome","cozy","snug","snuggly","lit","fire","pog",
  // recovery/regulation words (often positive context)
  "mindful","present","centered","collected","steady","patient","grace",
]);

const NEGATIVE = new Set([
  // low mood
  "sad","down","blue","gloomy","depressed","low","miserable","melancholy","somber",
  "heartbroken","broken","hurt","pained","sorrow","upset",
  // anxiety/stress
  "anxious","nervous","worried","concerned","uneasy","onedge","tense","panicked","fearful","afraid","scared",
  "stressed","overwhelmed","overloaded","overworked","overstimulated","frazzled","pressured",
  // anger/irritation
  "angry","mad","furious","enraged","irate","resentful","bitter","hostile","annoyed",
  "irritated","frustrated","pissed","salty",
  // fatigue/burnout
  "tired","sleepy","drowsy","fatigued","exhausted","drained","spent","worn","wornout",
  "burned","burnt","burnout","burnedout",
  // loneliness/isolation
  "lonely","isolated","alone","abandoned","neglected","unseen","unheard",
  // shame/guilt/insecurity
  "ashamed","shame","guilty","guilt","regret","regretful","embarrassed","insecure","inadequate","worthless","useless",
  // confusion/hopelessness
  "confused","lost","stuck","paralyzed","numb","empty","hollow","pointless","hopeless","pessimistic","doom","doomed",
  // physical discomfort
  "sick","ill","nauseous","hurting","aching","sore","pain","painful","headache","migraine",
  // misc negatives & slang
  "worst","awful","terrible","horrible","trash","bad","badly","rough","hard","difficult","brutal","chaotic",
  "meh","ugh","yikes","bleh","crushed","wrecked","shattered","devastated",
]);


function tokenize(text: string) {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean);
}

function analyze(text: string) {
  const tokens = tokenize(text);
  let score = 0;
  const hits: Record<string, number> = {};

  for (const token of tokens) {
    if (POSITIVE.has(token)) {
      score += 1;
      hits[token] = (hits[token] ?? 0) + 1;
    } else if (NEGATIVE.has(token)) {
      score -= 1;
      hits[token] = (hits[token] ?? 0) + 1;
    }
  }

  let mood: "positive" | "neutral" | "negative" = "neutral";
  if (score > 1) mood = "positive";
  else if (score < -1) mood = "negative";

  return {
    score,
    mood,
    highlightedWords: Object.entries(hits).map(([word, count]) => ({
      word,
      count,
      polarity: POSITIVE.has(word) ? "positive" : "negative",
    })),
    tokenCount: tokens.length,
  };
}

const server = new Server(
  {
    name: "emotion-analyzer",
    version: "0.1.0",
  },
  {
    capabilities: { tools: {} },
    instructions:
      "Performs lightweight sentiment analysis to detect encouraging vs. stressed tones in text.",
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "analyze_emotion",
      description:
        "Analyzes a text snippet for mood (positive/neutral/negative) and highlights emotion keywords.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["text"],
        properties: {
          text: {
            type: "string",
            description: "User message or journal entry to analyze.",
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  if (params.name !== "analyze_emotion") {
    throw new Error(`Unknown tool: ${params.name}`);
  }
  const args = (params.arguments ?? {}) as Record<string, unknown>;
  const text = typeof args.text === "string" ? args.text.trim() : "";
  if (!text) {
    throw new Error("analyze_emotion requires a non-empty 'text' string");
  }
  const result = analyze(text);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            text,
            ...result,
          },
          null,
          2,
        ),
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("[emotion-mcp] fatal error", error);
  process.exit(1);
});
