import "dotenv/config";

/**
 * Returns a trimmed environment variable or undefined when missing/blank.
 */
export function optionalEnv(name: string): string | undefined {
  const value = process.env[name];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
}

export function firstEnv(...names: string[]): string | undefined {
  for (const name of names) {
    const value = optionalEnv(name);
    if (value) return value;
  }
  return undefined;
}

/**
 * Returns a trimmed environment variable or throws a clear error.
 */
export function requireEnv(name: string, hint?: string): string {
  const value = optionalEnv(name);
  if (!value) {
    const extra = hint ? ` (${hint})` : "";
    throw new Error(`Missing required environment variable: ${name}${extra}`);
  }
  return value;
}

/**
 * Looks up a persona-scoped env var like PREFIX_<PERSONA>[_SUFFIX].
 * Example: personaScopedEnv("TELEGRAM", "Helena", "CHAT_ID") => TELEGRAM_HELENA_CHAT_ID
 */
export function personaScopedEnv(
  prefix: string,
  persona: string,
  suffix?: string,
): string | undefined {
  const safePersona = persona.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  const key = suffix ? `${prefix}_${safePersona}_${suffix}` : `${prefix}_${safePersona}`;
  return optionalEnv(key);
}

export function requireOneOf(names: string[], hint?: string): string {
  const value = firstEnv(...names);
  if (!value) {
    const joined = names.join(" or ");
    const extra = hint ? ` (${hint})` : "";
    throw new Error(`Missing required environment variable: ${joined}${extra}`);
  }
  return value;
}
