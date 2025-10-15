import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpToolset } from "@iqai/adk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, "../servers/spotify.server.ts");

export const spotifyToolset = new McpToolset({
  name: "spotify-mood",
  description: "Mood-aware Spotify playlists and tracks.",
  debug: false,
  transport: {
    mode: "stdio",
    command: "npx",
    args: ["-y", "tsx", serverPath],
    env: {
      PATH: process.env.PATH ?? "",
      SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID ?? "",
      SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET ?? "",
    },
  },
});

export async function getSpotifyTools() {
  return spotifyToolset.getTools();
}
