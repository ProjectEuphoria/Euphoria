const DEFAULT_TIMEOUT_MS = 8000;
const BODY_SNIPPET_LENGTH = 140;

export type FetchWithTimeoutOptions = RequestInit & {
  timeoutMs?: number;
};

/**
 * Wraps the native fetch with an AbortController-based timeout.
 * Provides consistent error messaging for production use.
 */
export async function fetchWithTimeout(
  input: string | URL | Request,
  { timeoutMs = DEFAULT_TIMEOUT_MS, signal, ...rest }: FetchWithTimeoutOptions = {},
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  if (signal) {
    if (signal.aborted) {
      controller.abort();
    } else {
      const abortHandler = () => controller.abort();
      signal.addEventListener("abort", abortHandler, { once: true });
      controller.signal.addEventListener(
        "abort",
        () => signal.removeEventListener("abort", abortHandler),
        { once: true },
      );
    }
  }

  try {
    return await fetch(input, {
      ...rest,
      signal: controller.signal,
    });
  } catch (error: any) {
    if (error?.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Parses a JSON response body and throws an informative error when the payload
 * is not valid JSON (e.g. HTML error pages).
 */
export async function parseJsonBody<T = any>(
  response: Response,
  context: string,
): Promise<T> {
  const text = await response.text();
  try {
    return JSON.parse(text) as T;
  } catch {
    const snippet = text
      .replace(/\s+/g, " ")
      .slice(0, BODY_SNIPPET_LENGTH)
      .trim();
    throw new Error(
      `${context}: expected JSON but received "${snippet || "non-JSON response"}"`,
    );
  }
}

export function sanitizeErrorMessage(error: unknown): string {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}
