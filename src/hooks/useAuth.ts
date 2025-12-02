import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/api";

type AuthState =
  | { status: "loading"; user: null }
  | { status: "authed"; user: { id: number; name: string; email: string } }
  | { status: "guest"; user: null };

export function useAuth() {
  const [state, setState] = useState<AuthState>({ status: "loading", user: null });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/auth/check`, {
          method: "GET",
          credentials: "include",
        });
        if (!res.ok) {
          if (!cancelled) setState({ status: "guest", user: null });
          return;
        }
        const payload = await res.json();
        if (payload?.ok && payload.user) {
          if (!cancelled) setState({ status: "authed", user: payload.user });
        } else {
          if (!cancelled) setState({ status: "guest", user: null });
        }
      } catch {
        if (!cancelled) setState({ status: "guest", user: null });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
