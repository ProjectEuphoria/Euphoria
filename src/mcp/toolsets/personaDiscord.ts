import { Tool } from "../../api/adapters/google-ai-adapter.js";
import { fetchWithTimeout, parseJsonBody, sanitizeErrorMessage } from "../utils/http.js";
import { firstEnv, optionalEnv, personaScopedEnv } from "../utils/env.js";

type DiscordMessageResponse = {
  id: string;
  channel_id: string;
  guild_id?: string;
};

function resolveChannelId(persona: string, explicit?: string): string {
  if (explicit?.trim()) return explicit.trim();
  const upper = persona.toUpperCase();
  const personaChannel =
    personaScopedEnv("DISCORD", persona, "CHANNEL_ID") ||
    firstEnv(`${upper}_DISCORD_CHANNEL`, `${upper}_CHANNEL_ID`, `DISCORD_${upper}_CHANNEL_ID`);
  if (personaChannel) return personaChannel;
  const defaultChannel = optionalEnv("DISCORD_DEFAULT_CHANNEL_ID");
  if (defaultChannel) return defaultChannel;
  throw new Error(
    "Missing channel_id: pass channel_id explicitly or set DISCORD_DEFAULT_CHANNEL_ID or persona channel env (e.g. HELENA_DISCORD_CHANNEL)",
  );
}

function resolveDiscordToken(persona: string): string {
  const upper = persona.toUpperCase();
  const candidate = firstEnv(
    "DISCORD_BOT_TOKEN",
    `DISCORD_${upper}_TOKEN`,
    `${upper}_DISCORD_TOKEN`,
    `${upper}_BOT_TOKEN`,
    `${upper}_TOKEN`,
  );
  if (!candidate) {
    throw new Error(
      `Missing Discord bot token: set DISCORD_BOT_TOKEN or persona token (e.g. ${upper}_DISCORD_TOKEN)`,
    );
  }
  return candidate;
}

async function sendDiscordMessage(persona: string, message: string, channelId?: string) {
  const token = resolveDiscordToken(persona);
  const resolvedChannelId = resolveChannelId(persona, channelId);

  const response = await fetchWithTimeout(
    `https://discord.com/api/v10/channels/${resolvedChannelId}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${token}`,
      },
      body: JSON.stringify({ content: message }),
      timeoutMs: 10000,
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Discord API error (status ${response.status}): ${errorBody.slice(0, 200) || "unknown error"}`,
    );
  }

  const payload = await parseJsonBody<DiscordMessageResponse>(
    response,
    "Discord create message",
  );

  return {
    channelId: resolvedChannelId,
    messageId: payload.id,
    status: "sent",
    url: `https://discord.com/channels/${payload.guild_id ?? "@me"}/${payload.channel_id}/${payload.id}`,
  };
}

export async function getPersonaDiscordTools(): Promise<Tool[]> {
  const personas = ["Helena", "Luna", "Milo", "Kai", "Sophie"];

  return personas.map((persona) => ({
    name: `${persona}_discord`,
    description: `Send a message as ${persona} to Discord`,
    parameters: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description: "Message content (Discord hard limit: 2000 characters)",
        },
        channel_id: {
          type: "string",
          description: "Discord channel ID (optional, overrides env defaults)",
        },
      },
      required: ["message"],
    },
    handler: async (params: { message: string; channel_id?: string }) => {
      const text = params.message?.trim();
      if (!text) throw new Error("Discord tool requires a non-empty 'message'");
      if (text.length > 2000) {
        throw new Error("Discord message exceeds 2000 character limit");
      }

      try {
        return await sendDiscordMessage(persona, text, params.channel_id);
      } catch (error) {
        return {
          ok: false,
          warning: `Discord send failed: ${sanitizeErrorMessage(error)}`,
        };
      }
    },
  }));
}
