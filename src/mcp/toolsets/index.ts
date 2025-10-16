import type { BaseTool, McpToolset } from "@iqai/adk";
import { McpIqWiki } from "@iqai/adk";
import { filesystemToolset, getFilesystemTools } from "./localContext";
import { webSearchToolset, getWebSearchTools } from "./search";
import { wikipediaToolset, getWikipediaTools } from "./knowledge";
import { unsplashToolset, getUnsplashTools } from "./visuals";
import { spotifyToolset, getSpotifyTools } from "./music";
import { emotionToolset, getEmotionTools } from "./emotion";
import { journalingToolset, getJournalingTools } from "./journal";
import { trendsToolset, getTrendsTools } from "./trends";
import { quotesToolset, getQuotesTools } from "./quotes";
import { getSummarizerTools } from "./summarizer";
import { getWellnessTools } from "./wellness";

const iqWikiToolset = McpIqWiki();

export type ToolsetLoader = () => Promise<BaseTool[]>;

export type ToolsetRegistration = {
  name: string;
  loader: ToolsetLoader;
  toolset?: McpToolset;
};

export const TOOLSET_REGISTRY: ToolsetRegistration[] = [
  { name: "local-journal-filesystem", loader: getFilesystemTools, toolset: filesystemToolset },
  { name: "search-discovery", loader: getWebSearchTools, toolset: webSearchToolset },
  { name: "knowledge-wikipedia", loader: getWikipediaTools, toolset: wikipediaToolset },
  {
    name: "knowledge-iqwiki",
    loader: async () => {
      return iqWikiToolset.getTools();
    },
    toolset: iqWikiToolset,
  },
  { name: "visuals-unsplash", loader: getUnsplashTools, toolset: unsplashToolset },
  { name: "music-spotify", loader: getSpotifyTools, toolset: spotifyToolset },
  { name: "emotion-analytics", loader: getEmotionTools, toolset: emotionToolset },
  { name: "journal-reflection", loader: getJournalingTools, toolset: journalingToolset },
  { name: "web-trends", loader: getTrendsTools, toolset: trendsToolset },
  { name: "quotes-feed", loader: getQuotesTools, toolset: quotesToolset },
  {
    name: "ai-summarizer",
    loader: async () => getSummarizerTools(),
  },
  {
    name: "wellness-companion",
    loader: async () => getWellnessTools(),
  },
];

export type { BaseTool } from "@iqai/adk";
