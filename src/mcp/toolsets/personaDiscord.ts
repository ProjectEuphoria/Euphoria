import { createTool, type BaseTool } from "@iqai/adk";
import { z } from "@iqai/adk/node_modules/zod";

const DISCORD_CONFIGS = [
  { name: "Helena", tokenEnv: "HELENA_DISCORD_TOKEN", channelEnv: "HELENA_DISCORD_CHANNEL", toolName: "Helena_discord" },
  { name: "Milo", tokenEnv: "MILO_DISCORD_TOKEN", channelEnv: "MILO_DISCORD_CHANNEL", toolName: "Milo_discord" },
  { name: "Kai", tokenEnv: "KAI_DISCORD_TOKEN", channelEnv: "KAI_DISCORD_CHANNEL", toolName: "Kai_discord" },
  { name: "Sophie", tokenEnv: "SOPHIE_DISCORD_TOKEN", channelEnv: "SOPHIE_DISCORD_CHANNEL", toolName: "Sophie_discord" },
  { name: "Luna", tokenEnv: "LUNA_DISCORD_TOKEN", channelEnv: "LUNA_DISCORD_CHANNEL", toolName: "Luna_discord" },
] as const;

const messageSchema = z.object({
  channelId: z.string().optional(),
  content: z.string().min(1, "Message content cannot be empty"),
  tts: z.boolean().optional(),
  embeds: z
    .array(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        url: z.string().optional(),
        color: z.number().int().optional(),
      }),
    )
    .optional(),
  threadId: z.string().optional(),
});

async function sendDiscordMessage(token: string, channelId: string, body: Record<string, unknown>) {
  const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bot ${token}`,
    },
    body: JSON.stringify(body),
  });

  const payload = await response.json().catch(() => undefined);
  if (!response.ok) {
    const description = payload?.message ?? response.statusText;
    throw new Error(`Discord API error: ${description}`);
  }
  return payload;
}

export async function getPersonaDiscordTools(): Promise<BaseTool[]> {
  const tools: BaseTool[] = [];

  for (const config of DISCORD_CONFIGS) {
    const token = process.env[config.tokenEnv];
    if (!token) continue;

    const defaultChannel = process.env[config.channelEnv];

    const tool = createTool({
      name: config.toolName,
      description: `Send a Discord message as ${config.name}.` +
        (defaultChannel ? ` Defaults to channel ${defaultChannel}.` : " Provide channelId explicitly."),
      schema: messageSchema,
      fn: async ({ channelId, content, tts, embeds, threadId }) => {
        const resolvedChannel = channelId ?? defaultChannel;
        if (!resolvedChannel) {
          throw new Error("channelId is required because no default channel is configured for this bot.");
        }

        const body: Record<string, unknown> = {
          content,
        };
        if (tts !== undefined) body.tts = tts;
        if (embeds) body.embeds = embeds;
        if (threadId) body.thread_id = threadId;

        const payload = await sendDiscordMessage(token, resolvedChannel, body);

        return {
          ok: true,
          channelId: resolvedChannel,
          messageId: payload?.id ?? null,
          timestamp: payload?.timestamp ?? null,
        };
      },
    });

    tools.push(tool);
  }

  return tools;
}
