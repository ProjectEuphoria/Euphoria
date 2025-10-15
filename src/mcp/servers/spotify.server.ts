#!/usr/bin/env node
import { Buffer } from "node:buffer";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const clientId = process.env.SPOTIFY_CLIENT_ID ?? "";
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET ?? "";

let cachedToken: { accessToken: string; expiresAt: number } | null = null;
let cachedGenres: string[] | null = null;

const GENRE_SYNONYMS: Record<string, string> = {
  focus: "focus",
  study: "study",
  chill: "chill",
  relax: "chill",
  relaxed: "chill",
  lofi: "lo-fi",
  lofihiphop: "lo-fi",
  mellow: "chill",
  gym: "work-out",
  workout: "work-out",
  hype: "dance",
  sad: "sad",
  upbeat: "dance",
  party: "party",
  anime: "anime",
  gaming: "gaming",
  happy: "happy",
  confident: "confidence",
  confidentvibes: "confidence",
  sleep: "sleep",
  sleepy: "sleep",
  motivation: "motivation",
  motivated: "motivation",
  morning: "morning",
  evening: "evening",
  romance: "romance",
  romantic: "romance",
  throwback: "road-trip",
  throwbackvibes: "road-trip",
};

async function getAccessToken() {
  if (!clientId || !clientSecret) {
    throw new Error(
      "Spotify MCP requires SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET.",
    );
  }
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now + 60_000) {
    return cachedToken.accessToken;
  }
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64",
  );
const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!response.ok) {
    throw new Error(
      `Spotify token request failed with status ${response.status}`,
    );
  }
  const data = await response.json();
  cachedToken = {
    accessToken: data.access_token,
    expiresAt: now + data.expires_in * 1000,
  };
  return cachedToken.accessToken;
}

const server = new Server(
  {
    name: "spotify-mood-curator",
    version: "0.1.0",
  },
  {
    capabilities: { tools: {} },
    instructions:
      "Surfacing mood-aligned Spotify playlists and tracks for Gen-Z productivity and chill sessions.",
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "spotify_vibe_playlists",
      description:
        "Fetches Spotify playlists that match a vibe or activity (e.g. 'focus lofi', 'happy pop').",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["mood"],
        properties: {
          mood: {
            type: "string",
            description:
              "Mood or activity (e.g. 'focus', 'anxious', 'gym hype', 'wind down').",
          },
          limit: {
            type: "integer",
            minimum: 1,
            maximum: 20,
            default: 5,
            description: "Number of playlists to return.",
          },
        },
      },
    },
    {
      name: "spotify_track_recs",
      description:
        "Suggests tracks given a seed genre or vibe using Spotify recommendations.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["seedGenre"],
        properties: {
          seedGenre: {
            type: "string",
            description:
              "Seed genre or descriptor (e.g. 'chill', 'k-pop', 'anime lofi').",
          },
          limit: {
            type: "integer",
            minimum: 1,
            maximum: 20,
            default: 5,
            description: "Number of tracks to return.",
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  const token = await getAccessToken();
  const args = (params.arguments ?? {}) as Record<string, unknown>;

  const ensureGenres = async () => {
    if (cachedGenres) return cachedGenres;
    const res = await fetch(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (res.ok) {
      const data = await res.json();
      cachedGenres = Array.isArray(data.genres) ? data.genres : [];
    } else {
      cachedGenres = [];
    }
    return cachedGenres;
  };

  const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

  const resolveSeedGenre = async (input: string) => {
    const genres = await ensureGenres();
    const normalizedInput = normalize(input);
    const synonym = GENRE_SYNONYMS[normalizedInput];
    if (synonym) return synonym;
    const exact = genres.find((genre) => normalize(genre) === normalizedInput);
    if (exact) return exact;
    const partial = genres.find((genre) =>
      normalize(genre).includes(normalizedInput) ||
      normalizedInput.includes(normalize(genre)),
    );
    return partial ?? null;
  };

  switch (params.name) {
    case "spotify_vibe_playlists": {
      const mood = typeof args.mood === "string" ? args.mood.trim() : "";
      if (!mood) {
        throw new Error("spotify_vibe_playlists requires a 'mood' string");
      }
      const limitRaw =
        typeof args.limit === "number" ? Math.floor(args.limit) : 5;
      const limit = Math.max(1, Math.min(20, limitRaw));
      const url = new URL("https://api.spotify.com/v1/search");
      url.searchParams.set("type", "playlist");
      url.searchParams.set("limit", String(limit));
      url.searchParams.set("q", mood);

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(
          `Spotify playlist search failed: ${response.status}`,
        );
      }
      const data = await response.json();
      const playlists = Array.isArray(data.playlists?.items)
        ? data.playlists.items.map((pl: any) => ({
            id: pl.id,
            name: pl.name,
            description: pl.description,
            url: pl.external_urls?.spotify ?? null,
            owner: pl.owner?.display_name ?? null,
            followers: pl.followers?.total ?? null,
          }))
        : [];
      const payload = {
        mood,
        limit,
        emptyReason: playlists.length === 0 ? "Spotify returned no playlists for this vibe" : undefined,
        playlists,
      };
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(payload, null, 2),
          },
        ],
      };
    }
    case "spotify_track_recs": {
      const seedGenre =
        typeof args.seedGenre === "string" ? args.seedGenre.trim() : "";
      if (!seedGenre) {
        throw new Error("spotify_track_recs requires 'seedGenre'");
      }
      const limitRaw =
        typeof args.limit === "number" ? Math.floor(args.limit) : 5;
      const limit = Math.max(1, Math.min(20, limitRaw));
      const resolved = await resolveSeedGenre(seedGenre);
      const usedGenre = resolved ?? "chill";
      const note = resolved ? undefined : "Requested genre not recognised by Spotify seeds; using 'chill' as a fallback.";
      const url = new URL("https://api.spotify.com/v1/recommendations");
      url.searchParams.set("limit", String(limit));
      url.searchParams.set("seed_genres", usedGenre.replace(/\s+/g, "-"));

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(
          `Spotify recommendations failed: ${response.status}`,
        );
      }
      const data = await response.json();
      const tracks = Array.isArray(data.tracks)
        ? data.tracks.map((track: any) => ({
            id: track.id,
            name: track.name,
            artists: track.artists?.map((artist: any) => artist.name) ?? [],
            previewUrl: track.preview_url,
            url: track.external_urls?.spotify ?? null,
          }))
        : [];
      const payload = {
        requested: seedGenre,
        resolvedGenre: usedGenre,
        note,
        emptyReason: tracks.length === 0 ? "Spotify returned no matches for this vibe" : undefined,
        recommendations: tracks,
      };
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(payload, null, 2),
          },
        ],
      };
    }
    default:
      throw new Error(`Unknown tool: ${params.name}`);
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("[spotify-mcp] fatal error", error);
  process.exit(1);
});
