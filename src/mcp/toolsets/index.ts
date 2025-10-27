import type { Tool } from "../../api/adapters/google-ai-adapter.js";
import { getLocalContextTools } from "./localContext.js";
import { getWebSearchTools } from "./search.js";
import { getPersonaTelegramTools } from "./personaTelegram.js";
import { getPersonaDiscordTools } from "./personaDiscord.js";
import { getSpotifyTools } from "./music.js";
import { getWellnessTools } from "./wellness.js";
import { getSummarizerTools } from "./summarizer.js";
import { getQuotesTools } from "./quotes.js";
import { getWikipediaTools } from "./knowledge.js";
import { getUnsplashTools } from "./visuals.js";
import { getJournalingTools } from "./journal.js";
import { getEmotionTools } from "./emotion.js";
import { getTrendsTools } from "./trends.js";

export type ToolsetLoader = () => Promise<Tool[]>;

export type ToolsetRegistration = {
  name: string;
  loader: ToolsetLoader;
  toolset?: any;
};

const baseRegistrations: ToolsetRegistration[] = [
  { name: "local-journal-filesystem", loader: getLocalContextTools },
  { name: "search-discovery", loader: getWebSearchTools },
  { name: "telegram-persona", loader: getPersonaTelegramTools },
  { name: "discord-persona", loader: getPersonaDiscordTools },
  { name: "music-spotify", loader: getSpotifyTools },
  { name: "wellness-companion", loader: getWellnessTools },
  { name: "ai-summarizer", loader: getSummarizerTools },
  { name: "quotes-feed", loader: getQuotesTools },
  { name: "knowledge-wikipedia", loader: getWikipediaTools },
  { name: "visuals-unsplash", loader: getUnsplashTools },
  { name: "journal-reflection", loader: getJournalingTools },
  { name: "emotion-analytics", loader: getEmotionTools },
  { name: "web-trends", loader: getTrendsTools },
];

export const TOOLSET_REGISTRY: ToolsetRegistration[] = baseRegistrations;

export type { Tool };
