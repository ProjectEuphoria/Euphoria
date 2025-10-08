// src/Pages/ChattingPage.tsx
import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

type AskResponse = { reply?: string; error?: string };

export default function ChattingPage() {
  const { name = "" } = useParams<{ name: string }>();
  const [sp] = useSearchParams();
  const bgImg = sp.get("bg") ?? sp.get("image") ?? undefined;

  // single-turn: lock the message that was sent, separate from the input
  const [input, setInput] = useState("");
  const [userLocked, setUserLocked] = useState<string>("");
  const [aiReply, setAiReply] = useState<string>("");
  const [sending, setSending] = useState(false);

  const recognitionRef = useRef<any>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Web Speech API (optional)
  useEffect(() => {
    // @ts-ignore
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      const recog = new SR();
      recog.lang = "en-US";
      recog.interimResults = false;
      recog.maxAlternatives = 1;
      recog.onresult = (e: any) => {
        const txt = e?.results?.[0]?.[0]?.transcript ?? "";
        if (txt) {
          setInput(txt);
          setTimeout(() => handleSend(txt), 0);
        }
      };
      recognitionRef.current = recog;
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [userLocked, aiReply]);

  function startVoice() {
    if (!recognitionRef.current) return alert("Voice input not supported in this browser.");
    try { recognitionRef.current.start(); } catch {}
  }

  async function handleSend(raw?: string) {
    if (sending) return;
    const msg = (raw ?? input).trim();
    if (!msg) return;

    // cancel any in-flight request if user resends
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    // lock the outgoing message, clear input, show “…” below
    setUserLocked(msg);
    setInput("");
    setAiReply("…");
    setSending(true);

    try {
      const res = await fetch(`/adk/agents/${name}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: msg }),
        signal: controllerRef.current.signal,
      });

      const ct = res.headers.get("content-type") || "";
      const isJson = ct.includes("application/json");

      if (!res.ok) {
        const payload = isJson ? (await res.json()) as AskResponse : undefined;
        const errText = payload?.error ?? (isJson ? JSON.stringify(payload) : await res.text());
        throw new Error(`/${name}/ask ${res.status}: ${errText}`);
      }

      const data: AskResponse = isJson ? await res.json() : { reply: await res.text() };
      setAiReply(String(data.reply ?? ""));
    } catch (e: any) {
      if (e?.name === "AbortError") return; // silently ignore aborted call
      setAiReply(`⚠️ ${e?.message ?? String(e)}`);
      // keep the locked user bubble visible
    } finally {
      setSending(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    void handleSend();
  }

  function resetTurn() {
    setUserLocked("");
    setAiReply("");
    setInput("");
  }

  return (
    <div
      className="min-h-screen w-full relative flex flex-col"
      style={bgImg ? { backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      {/* legibility overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Chat area (centered column) */}
      <main className="relative flex-1 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-3xl">
          {/* Show the pair stacked: YOURS on top, AI under it */}
          {userLocked && (
            <div className="flex justify-end mb-3">
              <div className="max-w-[50%] rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl shadow-xl text-white px-4 py-3">
                <div className="text-[11px] opacity-70 mb-1 text-right">You</div>
                <p className="whitespace-pre-wrap leading-relaxed text-right">{userLocked}</p>
              </div>
            </div>
          )}

          {aiReply && (
            <div className="flex justify-start">
              <div className="max-w-[50%] rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl text-white px-6 py-4
                              bg-gradient-to-br from-white/20 via-white/10 to-transparent">
                <div className="text-xs opacity-70 mb-2">AI — {name}</div>
                <p className="whitespace-pre-wrap leading-relaxed">{aiReply}</p>
              </div>
            </div>
          )}

          {/* spacer to keep bottom bar clear */}
          <div ref={bottomRef} className="h-24" />
        </div>
      </main>

      {/* Bottom bar (voice + input + send + new turn) */}
      <form onSubmit={onSubmit} className="fixed bottom-2 z-10 w-full px-4 sm:px-6 pb-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-black/55 backdrop-blur-xl shadow-2xl px-3 py-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={startVoice}
              className="shrink-0 rounded-xl px-3 py-2 border border-white/25 text-white hover:bg-white/10 transition"
              title="Voice input"
              aria-label="Voice input"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z"></path>
                <path d="M19 11a7 7 0 0 1-14 0M12 18v4"></path>
              </svg>
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Message ${name}…`}
              className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-base px-2 py-2"
              disabled={sending}
            />

            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="shrink-0 rounded-xl px-4 py-2 border border-white/25 text-white hover:bg-white/10 transition disabled:opacity-50"
              aria-label="Send"
              title="Send"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"></path>
              </svg>
            </button>

            {(userLocked || aiReply) && (
              <button
                type="button"
                onClick={resetTurn}
                className="ml-1 shrink-0 rounded-xl px-3 py-2 border border-white/20 text-white/90 hover:bg-white/10 transition"
                title="New turn"
              >
                New
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
