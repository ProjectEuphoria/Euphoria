import { Tool } from "../../api/adapters/google-ai-adapter.js";
import { fetchWithTimeout, parseJsonBody, sanitizeErrorMessage } from "../utils/http.js";
import { firstEnv, optionalEnv, personaScopedEnv } from "../utils/env.js";

const TELEGRAM_API_BASE = "https://api.telegram.org";

type TelegramResponse = {
  ok: boolean;
  result?: { message_id?: number; chat?: { id?: number | string } };
  description?: string;
};

function resolveChatId(persona: string, explicit?: string): string {
  if (explicit?.trim()) return explicit.trim();
  const upper = persona.toUpperCase();
  const personaChat =
    personaScopedEnv("TELEGRAM", persona, "CHAT_ID") ||
    firstEnv(
      `${upper}_CHAT_ID`,
      `${upper}_USERNAME`,
      `TELEGRAM_${upper}_CHAT_ID`,
      `TELEGRAM_${upper}_USERNAME`,
    );
  if (personaChat) {
    const trimmed = personaChat.trim();
    return trimmed.startsWith("@") ? trimmed : `@${trimmed}`;
  }
  const defaultChat = optionalEnv("TELEGRAM_DEFAULT_CHAT_ID");
  if (defaultChat) return defaultChat;
  throw new Error(
    "Missing chat_id: pass chat_id explicitly or set TELEGRAM_DEFAULT_CHAT_ID or persona chat/user env (e.g. HELENA_CHAT_ID or HELENA_USERNAME)",
  );
}

function resolveTelegramToken(persona: string): string {
  const upper = persona.toUpperCase();
  const candidate = firstEnv(
    "TELEGRAM_BOT_TOKEN",
    `TELEGRAM_${upper}_TOKEN`,
    `${upper}_TELEGRAM_TOKEN`,
    `${upper}_BOT_TOKEN`,
    `${upper}_TOKEN`,
  );
  if (!candidate) {
    throw new Error(
      `Missing Telegram bot token: set TELEGRAM_BOT_TOKEN or persona token (e.g. ${upper}_TOKEN)`,
    );
  }
  return candidate;
}

async function sendTelegramMessage(persona: string, message: string, chatId?: string) {
  const token = resolveTelegramToken(persona);
  const resolvedChatId = resolveChatId(persona, chatId);

  const response = await fetchWithTimeout(`${TELEGRAM_API_BASE}/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: resolvedChatId,
      text: message,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
    timeoutMs: 10000,
  });

  const payload = await parseJsonBody<TelegramResponse>(response, "Telegram sendMessage");

  if (!payload.ok) {
    throw new Error(payload.description || `Telegram API error (status ${response.status})`);
  }

  return {
    chatId: resolvedChatId,
    messageId: payload.result?.message_id,
    status: "sent",
  };
}

export async function getPersonaTelegramTools(): Promise<Tool[]> {
  const personas = ["Helena", "Luna", "Milo", "Kai", "Sophie"];

  return personas.map((persona) => ({
    name: `${persona}_telegram`,
    description: `Send a message as ${persona} to Telegram`,
    parameters: {
      type: "object",
      properties: {
        message: { type: "string", description: "Message to send" },
        chat_id: { type: "string", description: "Telegram chat ID or @username (optional, overrides env defaults)" },
      },
      required: ["message"],
    },
    handler: async (params: { message: string; chat_id?: string }) => {
      const text = params.message?.trim();
      if (!text) throw new Error("Telegram tool requires a non-empty 'message'");
      try {
        return await sendTelegramMessage(persona, text, params.chat_id);
      } catch (error) {
        return {
          ok: false,
          warning: `Telegram send failed: ${sanitizeErrorMessage(error)}`,
        };
      }
    },
  }));
}
