import { Tool } from "../../api/adapters/google-ai-adapter.js";
import { fetchWithTimeout, parseJsonBody, sanitizeErrorMessage } from "../utils/http.js";
import { requireEnv } from "../utils/env.js";

type SpotifyToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type SpotifySearchResponse = {
  tracks?: { items: any[] };
  artists?: { items: any[] };
  albums?: { items: any[] };
};

const tokenCache: { value?: string; expiresAt?: number } = {};

async function getSpotifyToken(): Promise<string> {
  const cached = tokenCache.value && tokenCache.expiresAt && Date.now() < tokenCache.expiresAt;
  if (cached) return tokenCache.value!;

  const clientId = requireEnv("SPOTIFY_CLIENT_ID", "Create a client in Spotify Developer Dashboard");
  const clientSecret = requireEnv(
    "SPOTIFY_CLIENT_SECRET",
    "Use the Client Secret from Spotify Developer Dashboard",
  );

  const body = new URLSearchParams();
  body.set("grant_type", "client_credentials");

  const response = await fetchWithTimeout("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    timeoutMs: 8000,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Spotify token request failed (${response.status}): ${errorBody.slice(0, 200) || "Unknown error"}`,
    );
  }

  const payload = await parseJsonBody<SpotifyToken>(response, "Spotify token response");
  tokenCache.value = payload.access_token;
  tokenCache.expiresAt = Date.now() + Math.max(0, (payload.expires_in - 30) * 1000);
  return payload.access_token;
}

async function searchSpotify(query: string, type: "track" | "artist" | "album") {
  const token = await getSpotifyToken();
  const searchUrl = new URL("https://api.spotify.com/v1/search");
  searchUrl.searchParams.set("q", query);
  searchUrl.searchParams.set("type", type);
  searchUrl.searchParams.set("limit", "5");

  const response = await fetchWithTimeout(searchUrl, {
    headers: { Authorization: `Bearer ${token}` },
    timeoutMs: 8000,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Spotify search failed (${response.status}): ${errorBody.slice(0, 200) || "Unknown error"}`,
    );
  }

  const payload = await parseJsonBody<SpotifySearchResponse>(response, "Spotify search");

  const mapper = {
    track: () =>
      (payload.tracks?.items ?? []).map((item: any) => ({
        name: item.name,
        artists: item.artists?.map((a: any) => a.name).filter(Boolean) ?? [],
        album: item.album?.name,
        url: item.external_urls?.spotify,
      })),
    artist: () =>
      (payload.artists?.items ?? []).map((item: any) => ({
        name: item.name,
        genres: item.genres ?? [],
        followers: item.followers?.total,
        url: item.external_urls?.spotify,
      })),
    album: () =>
      (payload.albums?.items ?? []).map((item: any) => ({
        name: item.name,
        artists: item.artists?.map((a: any) => a.name).filter(Boolean) ?? [],
        releaseDate: item.release_date,
        url: item.external_urls?.spotify,
      })),
  } as const;

  const extractor = mapper[type] ?? mapper.track;
  return {
    query,
    type,
    results: extractor(),
  };
}

export async function getSpotifyTools(): Promise<Tool[]> {
  return [
    {
      name: "search_music",
      description: "Search for tracks, artists, or albums on Spotify (requires client credentials).",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query for music" },
          type: {
            type: "string",
            enum: ["track", "artist", "album"],
            description: "Type of search (default: track)",
          },
        },
        required: ["query"],
      },
      handler: async (params: { query: string; type?: string }) => {
        const query = params.query?.trim();
        if (!query) throw new Error("search_music requires a non-empty 'query'");
        const type = (params.type as "track" | "artist" | "album") ?? "track";

        try {
          return await searchSpotify(query, type);
        } catch (error) {
          return {
            query,
            type,
            warning: `Spotify search failed: ${sanitizeErrorMessage(error)}`,
            results: [],
          };
        }
      },
    },
  ];
}
