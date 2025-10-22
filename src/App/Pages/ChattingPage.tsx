// src/Pages/ChattingPage.tsx
import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, Volume2, VolumeX } from "lucide-react";
import { buildChatUrl } from "../../utils/url";
import helenaImg from "../../assets/give a good anime background which is subjected to no copyright.jpg";
import miloImg from "../../assets/Milo_bg.jpg";
import sophieImg from "../../assets/Sophie_bg.jpg";
import kaiImg from "../../assets/Kai_bg.jpg";
import lunaImg from "../../assets/Luna_bg.jpg";

type AskResponse = { reply?: string; error?: string };

const PERSONA_BACKGROUNDS: Record<string, string> = {
  helena: helenaImg,
  milo: miloImg,
  kai: kaiImg,
  sophie: sophieImg,
  luna: lunaImg,
};

const PERSONA_DETAILS: Record<string, { accent: string; glow: string; tagline: string }> = {
  helena: {
    accent: "rgba(255, 159, 252, 0.32)",
    glow: "rgba(82, 39, 255, 0.5)",
    tagline: "Calm clarity with timeless wisdom.",
  },
  milo: {
    accent: "rgba(82, 39, 255, 0.32)",
    glow: "rgba(255, 61, 230, 0.5)",
    tagline: "Energetic insight with playful warmth.",
  },
  kai: {
    accent: "rgba(101, 235, 255, 0.32)",
    glow: "rgba(82, 39, 255, 0.5)",
    tagline: "Adventurous spirit with steady focus.",
  },
  sophie: {
    accent: "rgba(255, 201, 125, 0.32)",
    glow: "rgba(176, 38, 255, 0.45)",
    tagline: "Empathetic muse with creative spark.",
  },
  luna: {
    accent: "rgba(166, 125, 255, 0.32)",
    glow: "rgba(255, 61, 230, 0.45)",
    tagline: "Soft starlight with gentle guidance.",
  },
};

function base64ToBlob(base64: string, contentType: string) {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: contentType });
}

export default function ChattingPage() {
  const { name = "" } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [userLocked, setUserLocked] = useState<string>("");
  const [aiReply, setAiReply] = useState<string>("");
  const [sending, setSending] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  const recognitionRef = useRef<any>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string>("");
  const ttsAbortRef = useRef<AbortController | null>(null);
  const mutedRef = useRef(muted);

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

  useEffect(() => {
    const audio = new Audio();
    audio.muted = muted;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = "";
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = muted;
    if (muted) {
      audioRef.current.pause();
      return;
    }
    if (audioRef.current.src) {
      void audioRef.current
        .play()
        .catch(() => {
          /* ignore autoplay errors */
        });
    }
  }, [muted]);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  // Keep the scroll pinned to the bottom of the messages div
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [userLocked, aiReply]);

  useEffect(() => {
    setPanelOpen(false);
    controllerRef.current?.abort();
    ttsAbortRef.current?.abort();
    setSending(false);
    setUserLocked("");
    setAiReply("");
    setInput("");
    stopAudio();
  }, [name]);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
      ttsAbortRef.current?.abort();
      stopAudio();
    };
  }, []);

  const allBots = ["Helena", "Milo", "Kai", "Sophie", "Luna"] as const;
  const normalizedName = name.toLowerCase();
  const isKnownPersona = allBots.some((bot) => bot.toLowerCase() === normalizedName);
  const otherBots = allBots.filter((bot) => bot.toLowerCase() !== normalizedName);
  const bgImg = PERSONA_BACKGROUNDS[normalizedName];
  const canonicalPersona = allBots.find((bot) => bot.toLowerCase() === normalizedName) ?? allBots[0];

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = "";
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;
    const trimmed = aiReply.trim();
    if (!trimmed || trimmed === "…" || trimmed.startsWith("⚠️") || !isKnownPersona) {
      stopAudio();
      return;
    }

    const controller = new AbortController();
    ttsAbortRef.current?.abort();
    ttsAbortRef.current = controller;

    (async () => {
      try {
        const res = await fetch("/adk/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ persona: canonicalPersona, text: trimmed }),
          signal: controller.signal,
        });
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(errText || `Polly request failed with ${res.status}`);
        }
        const payload = await res.json();
        if (!payload?.audio || typeof payload.audio !== "string") {
          throw new Error("TTS response missing audio data");
        }
        const blob = base64ToBlob(payload.audio, payload.contentType ?? "audio/mpeg");
        const url = URL.createObjectURL(blob);

        stopAudio();
        audioUrlRef.current = url;
        audioRef.current.src = url;
        audioRef.current.currentTime = 0;
        if (!mutedRef.current) {
          await audioRef.current
            .play()
            .catch(() => {
              /* ignore autoplay errors */
            });
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Polly synthesis failed", error);
        }
        stopAudio();
      }
    })();

    return () => {
      controller.abort();
    };
  }, [aiReply, name, isKnownPersona]);

  if (name && !isKnownPersona) {
    return <Navigate to="/" replace />;
  }

  function togglePanel() {
    setPanelOpen((v) => !v);
  }

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
    ttsAbortRef.current?.abort();
    stopAudio();
  }

  return (
    <div
      className="min-h-screen w-full relative"
      style={bgImg ? { backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-[19rem] sm:w-[20.5rem] px-5 py-0 transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${panelOpen ? "translate-x-0" : "-translate-x-[calc(100%+2.5rem)]"}`}
        aria-hidden={!panelOpen}
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-r-[3.25rem] border border-white/12 bg-white/6 bg-clip-padding backdrop-blur-[34px] shadow-[0_0_50px_rgba(82,39,255,0.36)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5227FF]/30 via-[#b026ff]/18 to-transparent opacity-95" />
            <div className="absolute -left-16 top-1/5 h-40 w-40 rounded-full bg-[#ff9ffc]/40 blur-[90px]" />
            <div className="absolute right-[-3rem] bottom-20 h-36 w-36 rounded-full bg-[#6f35ff]/45 blur-[80px]" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#ff9ffc]/12 via-transparent to-transparent blur-[140px]" />
          </div>
          <div className="relative flex flex-col gap-4 px-7 pt-10 pb-6">
            <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-white/65">
              <Sparkles className="h-3 w-3" /> Currently with
            </p>
            <h2 className="text-3xl font-semibold text-white drop-shadow-[0_4px_20px_rgba(176,38,255,0.6)]">
              {name || "AI"}
            </h2>
            <p className="text-xs leading-relaxed text-white/70">
              Tap anyone below to swap personas on the fly.
            </p>
          </div>
          <nav className="relative flex-1 space-y-4 px-7 pb-8 overflow-y-auto no-scrollbar">
            {otherBots.map((bot) => {
              const lower = bot.toLowerCase();
              const detail = PERSONA_DETAILS[lower] ?? PERSONA_DETAILS.helena;
              return (
                <button
                  key={bot}
                  type="button"
                  onClick={() => {
                    navigate(buildChatUrl(bot));
                    setPanelOpen(false);
                  }}
                  className="group relative w-full overflow-hidden rounded-[1.7rem] border border-white/18 bg-white/16 px-6 py-2.5 text-left text-sm font-semibold text-white/90 shadow-[0_18px_40px_-18px_rgba(82,39,255,0.45)] transition-colors duration-500 hover:border-white/35 hover:bg-white/22 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b026ff]/70"
                >
                  <div
                    className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                    style={{ background: `linear-gradient(135deg, ${detail.accent} 0%, rgba(255,255,255,0.04) 60%, transparent 100%)` }}
                  />
                  <div
                    className="absolute -right-12 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                    style={{ background: detail.glow }}
                  />
                  <div className="relative flex flex-col gap-1.5">
                    <span className="flex items-center justify-between">
                      <span className="text-base font-semibold">{bot}</span>
                      <span className="opacity-0 text-[10px] uppercase tracking-[0.35em] text-white/80 transition-opacity duration-500 group-hover:opacity-100">
                        Switch
                      </span>
                    </span>
                    <span className="text-xs font-normal text-white/70">
                      {detail.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
          <div className="relative px-7 pb-10 pt-6">
            <div className="rounded-2xl border border-white/18 bg-white/12 p-[1px] shadow-[0_12px_28px_-18px_rgba(255,159,252,0.6)]">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex w-full items-center justify-center gap-2 rounded-[1.1rem] bg-gradient-to-br from-black/55 via-black/35 to-black/55 px-6 py-3.5 text-sm font-medium text-white/85 transition hover:brightness-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9ffc]/70"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </button>
            </div>
          </div>
        </div>
      </aside>

      <button
        type="button"
        onClick={togglePanel}
        className={`fixed top-1/2 left-0 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-r-2xl border border-white/25 bg-gradient-to-br from-[#5227FF]/75 via-[#b026ff]/65 to-[#ff9ffc]/65 text-white backdrop-blur-2xl shadow-[0_0_34px_rgba(176,38,255,0.62)] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:scale-[1.05] ${panelOpen ? "translate-x-[20.5rem]" : "-translate-x-3"}`}
        aria-label={panelOpen ? "Hide persona panel" : "Show persona panel"}
        aria-expanded={panelOpen}
      >
        {panelOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>

      {/* legibility overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered header */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="px-5 py-2 rounded-2xl border border-white/20 bg-black/45 backdrop-blur-xl text-white shadow-lg">
          <span className="opacity-80">Chatting with</span>{" "}
          <span className="font-semibold">“{name || "AI"}”</span>
        </div>
      </div>
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
        <button
          type="button"
          onClick={() => setMuted((prev) => !prev)}
          className="flex items-center gap-2 rounded-2xl border border-white/25 bg-black/45 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl shadow-lg transition hover:bg-white/10"
          aria-pressed={!muted}
          aria-label={muted ? "Unmute voice playback" : "Mute voice playback"}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          <span>{muted ? "Unmute voice" : "Mute voice"}</span>
        </button>
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
