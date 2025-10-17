// src/Pages/ChattingPage.tsx
import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

type AskResponse = { reply?: string; error?: string };

export default function ChattingPage() {
  const { name = "" } = useParams<{ name: string }>();
  const [sp] = useSearchParams();
  const bgImg = sp.get("bg") ?? sp.get("image") ?? undefined;

  const [input, setInput] = useState("");
  const [userLocked, setUserLocked] = useState<string>("");
  const [aiReply, setAiReply] = useState<string>("");
  const [sending, setSending] = useState(false);

  const recognitionRef = useRef<any>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Optional voice input
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


  // Keep the scroll pinned to the bottom of the messages div
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [userLocked, aiReply]);

  function startVoice() {
    if (!recognitionRef.current) {
      alert("Voice input not supported in this browser.");
      return;
    }
    try { recognitionRef.current.start(); } catch {}
  }

  async function handleSend(raw?: string) {
    if (sending) return;
    const msg = (raw ?? input).trim();
    if (!msg) return;

    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

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
      if (e?.name !== "AbortError") setAiReply(`⚠️ ${e?.message ?? String(e)}`);
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
      className="min-h-screen w-full relative"
      style={bgImg ? { backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      {/* legibility overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered header */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="px-5 py-2 rounded-2xl border border-white/20 bg-black/45 backdrop-blur-xl text-white shadow-lg">
          <span className="opacity-80">Chatting with</span>{" "}
          <span className="font-semibold">“{name || "AI"}”</span>
        </div>
      </div>

      {/* ===== Messages Area (only this scrolls) ===== */}
      <main className="relative z-0 flex justify-center ">
        <div className="w-full max-w-3xl px-4 sm:px-6">
          {/* Reserve space for header (mt), and for fixed bottom bar (pb) */}
          <div
            className="
              
     mt-20 h-[calc(100vh-168px)]
    overflow-y-auto pr-1 pb-4
    no-scrollbar
  
            "
          >
            {/* User bubble (top) */}
            {userLocked && (
              <div className="flex justify-end mb-3">
                <div className="max-w-[50%] rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl shadow-xl text-white px-4 py-3">
                  <div className="text-[11px] opacity-70 mb-1 text-right">You</div>
                  <p className="whitespace-pre-wrap leading-relaxed text-right">{userLocked}</p>
                </div>
              </div>
            )}

            {/* AI bubble (below) */}
            {aiReply && (
              <div className="flex justify-start">
                <div className="max-w-[50%] rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl text-white px-6 py-4 bg-gradient-to-br from-white/20 via-white/10 to-transparent">
                  <div className="text-xs opacity-70 mb-2">AI — {name || "Assistant"}</div>
                  <p className="whitespace-pre-wrap leading-relaxed">{aiReply}</p>
                </div>
              </div>
            )}

            {/* scroll anchor */}
            <div ref={endRef} />
          </div>
        </div>
      </main>

      {/* ===== Fixed Bottom Bar (input + voice + send + new turn) ===== */}
      <form
        onSubmit={onSubmit}
        className="fixed bottom-3 left-0 right-0 z-10 px-4 sm:px-6"
      >
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
              placeholder={`Message ${name || "AI"}…`}
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
