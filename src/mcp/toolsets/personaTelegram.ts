import { createTool, type BaseTool } from "@iqai/adk";
import { z } from "@iqai/adk/node_modules/zod";

const BOT_CONFIGS = [
  { name: "Helena", tokenEnv: "HELENA_TOKEN", usernameEnv: "HELENA_USERNAME", toolName: "Helena_telegram" },
  { name: "Milo", tokenEnv: "MILO_TOKEN", usernameEnv: "MILO_USERNAME", toolName: "Milo_telegram" },
  { name: "Kai", tokenEnv: "KAI_TOKEN", usernameEnv: "KAI_USERNAME", toolName: "Kai_telegram" },
  { name: "Sophie", tokenEnv: "SOPHIE_TOKEN", usernameEnv: "SOPHIE_USERNAME", toolName: "Sophie_telegram" },
  { name: "Luna", tokenEnv: "LUNA_TOKEN", usernameEnv: "LUNA_USERNAME", toolName: "Luna_telegram" },
] as const;

const messageSchema = z.object({
  chatId: z.string().optional(),
  text: z.string().min(1, "Message text cannot be empty"),
  parseMode: z.enum(["Markdown", "MarkdownV2", "HTML"]).optional(),
  disableWebPagePreview: z.boolean().optional(),
  disableNotification: z.boolean().optional(),
});

async function sendTelegramMessage(token: string, body: Record<string, unknown>) {
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const payload = await response.json();
  if (!response.ok || payload?.ok === false) {
    const description = payload?.description ?? response.statusText;
    throw new Error(`Telegram API error: ${description}`);
  }
  return payload;
}

export async function getPersonaTelegramTools(): Promise<BaseTool[]> {
  const tools: BaseTool[] = [];

  for (const bot of BOT_CONFIGS) {
    const token = process.env[bot.tokenEnv];
    if (!token) continue;

    const defaultChat = process.env[bot.usernameEnv];

    const tool = createTool({
      name: bot.toolName,
      description: `Send a Telegram message as ${bot.name}.` +
        (defaultChat ? ` Defaults to chat ${defaultChat}.` : " Provide chatId explicitly."),
      schema: messageSchema,
      fn: async ({ chatId, text, parseMode, disableNotification, disableWebPagePreview }) => {
        const resolvedChat = chatId ?? defaultChat;
        if (!resolvedChat) {
          throw new Error("chatId is required for this bot because no default chat is configured.");
        }

        const body: Record<string, unknown> = {
          chat_id: resolvedChat,
          text,
        };
        if (parseMode) body.parse_mode = parseMode;
        if (disableNotification !== undefined) body.disable_notification = disableNotification;
        if (disableWebPagePreview !== undefined) body.disable_web_page_preview = disableWebPagePreview;

        const payload = await sendTelegramMessage(token, body);

        return {
          ok: true,
          chat: payload?.result?.chat ?? null,
          messageId: payload?.result?.message_id ?? null,
          date: payload?.result?.date ?? null,
        };
      },
    });

    tools.push(tool);
  }

  return tools;
}
