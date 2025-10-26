// src/Pages/ChattingPage.tsx
import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, Volume2, VolumeX } from "lucide-react";
import { buildChatUrl } from "../../utils/url";
import { API_BASE_URL } from "../../config/api";

type AskResponse = { reply?: string; error?: string };

type SpeechMark = {
  time: number;
  value: string;
  type: string;
  start?: number;
  end?: number;
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

const SPEECH_LEAD_MS = 80;

function base64ToBlob(base64: string, contentType: string) {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: contentType });
}

function sanitizeForSpeech(text: string): string {
  return text
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(/[\uFE0F\u200D]/g, "")
    .replace(/\s+/g, " ")
    .trim();
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
  const [speechMarks, setSpeechMarks] = useState<SpeechMark[]>([]);
  const [ttsPending, setTtsPending] = useState(false);
  const [streaming, setStreaming] = useState(false);

  const recognitionRef = useRef<any>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string>("");
  const ttsAbortRef = useRef<AbortController | null>(null);
  const mutedRef = useRef(muted);
  const [renderedReply, setRenderedReply] = useState("");
  const animationFrameRef = useRef<number | null>(null);

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
          // Don't auto-send, let user review and send manually
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
    if (!muted && audioRef.current.src) {
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
    setSpeechMarks([]);
    setRenderedReply("");
    setStreaming(false);
    setTtsPending(false);
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
  const canonicalPersona = allBots.find((bot) => bot.toLowerCase() === normalizedName) ?? allBots[0];
  const isLoadingReply = ttsPending || (sending && aiReply === "…");

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = "";
    }
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  useEffect(() => {
    if (!aiReply || aiReply === "…" || aiReply.startsWith("⚠️")) {
      setStreaming(false);
      setRenderedReply(aiReply);
      return;
    }

    const audio = audioRef.current;
    if (!audio || ttsPending || !speechMarks.length) {
      setStreaming(false);
      setRenderedReply(aiReply);
      return;
    }

    const marks = speechMarks
      .filter((mark) => mark.type === "word" && typeof mark.value === "string" && mark.value.trim().length)
      .sort((a, b) => a.time - b.time);

    if (!marks.length) {
      setStreaming(false);
      setRenderedReply(aiReply);
      return;
    }

    const original = aiReply;
    const lowerOriginal = original.toLowerCase();
    let searchIndex = 0;
    const chunkEvents: Array<{ time: number; chunk: string }> = [];

    marks.forEach((mark) => {
      const normalized = mark.value.trim();
      if (!normalized) return;

      const lowerValue = normalized.toLowerCase();
      let start = lowerOriginal.indexOf(lowerValue, searchIndex);
      if (start === -1) {
        start = searchIndex;
      }

      if (start < searchIndex) {
        start = searchIndex;
      }

      const end = Math.min(original.length, start + normalized.length);

      if (start > searchIndex) {
        const filler = original.slice(searchIndex, start);
        if (filler) {
          chunkEvents.push({ time: Math.max(0, mark.time - 1), chunk: filler });
        }
      }

      const chunk = original.slice(start, end);
      if (chunk) {
        chunkEvents.push({ time: mark.time, chunk });
      }

      searchIndex = end;
    });

    if (searchIndex < original.length) {
      const tailTime = marks[marks.length - 1]?.time ?? 0;
      chunkEvents.push({ time: tailTime + 50, chunk: original.slice(searchIndex) });
    }

    if (!chunkEvents.length) {
      setStreaming(false);
      setRenderedReply(aiReply);
      return;
    }

    chunkEvents.sort((a, b) => a.time - b.time);

    setStreaming(true);
    setRenderedReply("");

    let currentIdx = 0;

    const applyChunks = (count: number) => {
      const combined = chunkEvents.slice(0, count).map((c) => c.chunk).join("");
      setRenderedReply(count >= chunkEvents.length ? aiReply : combined);
    };

    const updateForTime = (ms: number) => {
      const target = ms + SPEECH_LEAD_MS;
      let nextIdx = currentIdx;
      while (nextIdx < chunkEvents.length && chunkEvents[nextIdx].time <= target) {
        nextIdx += 1;
      }
      if (nextIdx !== currentIdx) {
        currentIdx = nextIdx;
        applyChunks(currentIdx);
      }
    };

    const step = () => {
      if (!audio) return;
      updateForTime(audio.currentTime * 1000);
      if (!audio.paused && currentIdx < chunkEvents.length) {
        animationFrameRef.current = window.requestAnimationFrame(step);
      }
    };

    const handlePlay = () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      updateForTime(audio.currentTime * 1000);
      if (!audio.paused) {
        animationFrameRef.current = window.requestAnimationFrame(step);
      }
    };

    const handlePause = () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      updateForTime(audio.currentTime * 1000);
    };

    const handleSeeked = () => {
      updateForTime(audio.currentTime * 1000);
      if (!audio.paused && animationFrameRef.current === null && currentIdx < chunkEvents.length) {
        animationFrameRef.current = window.requestAnimationFrame(step);
      }
    };

    const handleEnded = () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      applyChunks(chunkEvents.length);
      currentIdx = chunkEvents.length;
      setStreaming(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("seeked", handleSeeked);
    audio.addEventListener("ended", handleEnded);

    handlePause();
    if (!audio.paused) {
      animationFrameRef.current = window.requestAnimationFrame(step);
    }

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("seeked", handleSeeked);
      audio.removeEventListener("ended", handleEnded);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [aiReply, speechMarks, ttsPending]);

  useEffect(() => {
    const audio = audioRef.current;
    const trimmed = aiReply.trim();

    if (!audio || !trimmed || trimmed === "…" || trimmed.startsWith("⚠️") || !isKnownPersona) {
      setTtsPending(false);
      setSpeechMarks([]);
      if (trimmed && trimmed !== "…" && !trimmed.startsWith("⚠️")) {
        setRenderedReply(trimmed);
      }
      setStreaming(false);
      stopAudio();
      return;
    }

    const controller = new AbortController();
    ttsAbortRef.current?.abort();
    ttsAbortRef.current = controller;

    setTtsPending(true);
    setSpeechMarks([]);
    setStreaming(false);
    setRenderedReply("");

    (async () => {
      try {
        const sanitizedText = sanitizeForSpeech(trimmed);
        const payloadText = sanitizedText.length ? sanitizedText : trimmed;
        const res = await fetch(`${API_BASE_URL}/api/tts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ persona: canonicalPersona, text: payloadText }),
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
        const marks = Array.isArray(payload?.meta?.speechMarks)
          ? (payload.meta.speechMarks as SpeechMark[])
          : [];
        setSpeechMarks(marks);

        const blob = base64ToBlob(payload.audio, payload.contentType ?? "audio/mpeg");
        const url = URL.createObjectURL(blob);

        stopAudio();
        audioUrlRef.current = url;
        audio.src = url;
        audio.currentTime = 0;
        if (!mutedRef.current) {
          await audio
            .play()
            .catch(() => {
              /* ignore autoplay errors */
            });
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Polly synthesis failed", error);
          setSpeechMarks([]);
          setRenderedReply(trimmed);
          setStreaming(false);
        }
        stopAudio();
      } finally {
        if (!controller.signal.aborted) {
          setTtsPending(false);
        }
      }
    })();

    return () => {
      controller.abort();
      setTtsPending(false);
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
    try { 
      recognitionRef.current.start(); 
    } catch (error) {
      console.error("Voice recognition error:", error);
    }
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
    setSpeechMarks([]);
    setRenderedReply("");
    setStreaming(false);
    setTtsPending(false);

    try {
      const res = await fetch(`${API_BASE_URL}/agents/${name}/ask`, {
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

      const data = isJson ? await res.json() : { reply: await res.text() };
      setTtsPending(true);
      setSpeechMarks([]);
      setRenderedReply("");
      setStreaming(false);
      setAiReply(String(data.reply ?? ""));
    } catch (e: any) {
      if (e?.name !== "AbortError") {
        const message = `⚠️ ${e?.message ?? String(e)}`;
        setAiReply(message);
        setRenderedReply(message);
      }
      setTtsPending(false);
      setSpeechMarks([]);
      setStreaming(false);
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
    setRenderedReply("");
    setSpeechMarks([]);
    setTtsPending(false);
    setStreaming(false);
  }

  return (
    <div className="min-h-screen w-full relative">
      {/* Background - Video for all personas */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src={`/bgvideo/${normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1)}_BG.mp4`} type="video/mp4" />
      </video>
      
      {/* legibility overlay */}
      <div className="absolute inset-0 bg-black/15" />

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-[16rem] sm:w-[19rem] md:w-[20.5rem] px-4 sm:px-5 py-0 transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${panelOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)] sm:-translate-x-[calc(100%+2.5rem)]"}`}
        aria-hidden={!panelOpen}
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-r-[3.25rem] border border-white/12 bg-white/6 bg-clip-padding backdrop-blur-[34px] shadow-[0_0_50px_rgba(82,39,255,0.36)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5227FF]/30 via-[#b026ff]/18 to-transparent opacity-95" />
            <div className="absolute -left-16 top-1/5 h-40 w-40 rounded-full bg-[#ff9ffc]/40 blur-[90px]" />
            <div className="absolute right-[-3rem] bottom-20 h-36 w-36 rounded-full bg-[#6f35ff]/45 blur-[80px]" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#ff9ffc]/12 via-transparent to-transparent blur-[140px]" />
          </div>
          <div className="relative flex flex-col gap-3 sm:gap-4 px-4 sm:px-7 pt-8 sm:pt-10 pb-4 sm:pb-6">
            <p className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/65">
              <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Currently with
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-[0_4px_20px_rgba(176,38,255,0.6)]">
              {name || "AI"}
            </h2>
            <p className="text-xs leading-relaxed text-white/70">
              Tap anyone below to swap personas on the fly.
            </p>
          </div>
          <nav className="relative flex-1 space-y-3 sm:space-y-4 px-4 sm:px-7 pb-6 sm:pb-8 overflow-y-auto no-scrollbar">
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
                  className="group relative w-full overflow-hidden rounded-[1.4rem] sm:rounded-[1.7rem] border border-white/18 bg-white/16 px-4 sm:px-6 py-2 sm:py-2.5 text-left text-xs sm:text-sm font-semibold text-white/90 shadow-[0_18px_40px_-18px_rgba(82,39,255,0.45)] transition-colors duration-500 hover:border-white/35 hover:bg-white/22 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b026ff]/70"
                >
                  <div
                    className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                    style={{ background: `linear-gradient(135deg, ${detail.accent} 0%, rgba(255,255,255,0.04) 60%, transparent 100%)` }}
                  />
                  <div
                    className="absolute -right-12 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                    style={{ background: detail.glow }}
                  />
                  <div className="relative flex flex-col gap-1 sm:gap-1.5">
                    <span className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-semibold">{bot}</span>
                      <span className="opacity-0 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/80 transition-opacity duration-500 group-hover:opacity-100">
                        Switch
                      </span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-normal text-white/70">
                      {detail.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
          <div className="relative px-4 sm:px-7 pb-8 sm:pb-10 pt-4 sm:pt-6">
            <div className="rounded-xl sm:rounded-2xl border border-white/18 bg-white/12 p-[1px] shadow-[0_12px_28px_-18px_rgba(255,159,252,0.6)]">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex w-full items-center justify-center gap-2 rounded-[0.7rem] sm:rounded-[1.1rem] bg-gradient-to-br from-black/55 via-black/35 to-black/55 px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium text-white/85 transition hover:brightness-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9ffc]/70"
              >
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                Back to home
              </button>
            </div>
          </div>
        </div>
      </aside>

      <button
        type="button"
        onClick={togglePanel}
        className={`fixed top-1/2 left-0 z-40 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-r-xl sm:rounded-r-2xl border border-white/25 bg-gradient-to-br from-[#5227FF]/75 via-[#b026ff]/65 to-[#ff9ffc]/65 text-white backdrop-blur-2xl shadow-[0_0_34px_rgba(176,38,255,0.62)] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:scale-[1.05] ${panelOpen ? "translate-x-[16rem] sm:translate-x-[19rem] md:translate-x-[20.5rem]" : "-translate-x-2 sm:-translate-x-3"}`}
        aria-label={panelOpen ? "Hide persona panel" : "Show persona panel"}
        aria-expanded={panelOpen}
      >
        {panelOpen ? <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      </button>

      {/* Centered header */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="px-5 py-2 rounded-2xl border border-white/20 bg-black/45 backdrop-blur-xl text-white shadow-lg">
          <span className="opacity-80">Chatting with</span>{" "}
          <span className="font-semibold">“{name || "AI"}”</span>
        </div>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <button
          type="button"
          onClick={() => setMuted((prev) => !prev)}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-white/25 bg-black/45 text-white/80 backdrop-blur-xl shadow-lg transition hover:bg-white/10 hover:text-white"
          aria-pressed={!muted}
          aria-label={muted ? "Unmute voice playback" : "Mute voice playback"}
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>

      {/* ===== Messages Area (only this scrolls) ===== */}
      <main className="relative z-0 flex justify-center">
        <div className="w-full max-w-3xl px-3 sm:px-4 md:px-6">
          {/* Reserve space for header (mt), and for fixed bottom bar (pb) */}
          <div className="mt-16 sm:mt-20 h-[calc(100vh-140px)] sm:h-[calc(100vh-168px)] overflow-y-auto pr-1 pb-4 no-scrollbar">
            {/* User bubble (top) */}
            {userLocked && (
              <div className="flex justify-end mb-3">
                <div className="max-w-[85%] sm:max-w-[70%] md:max-w-[50%] rounded-xl sm:rounded-2xl border border-white/20 bg-white/5 shadow-xl text-white px-3 sm:px-4 py-2 sm:py-3">
                  <div className="text-[10px] sm:text-[11px] opacity-70 mb-1 text-right">You</div>
                  <p className="whitespace-pre-wrap leading-relaxed text-right text-sm sm:text-base">{userLocked}</p>
                </div>
              </div>
            )}

            {/* AI bubble (below) */}
            {(aiReply || isLoadingReply) && (
              <div className="flex justify-start">
                <div className="max-w-[85%] sm:max-w-[70%] md:max-w-[50%] rounded-xl sm:rounded-2xl border border-white/20 bg-white/5 shadow-xl text-white px-4 sm:px-6 py-3 sm:py-4">
                  <div className="text-[10px] sm:text-xs opacity-70 mb-2">AI — {name || "Assistant"}</div>
                  {isLoadingReply ? (
                    <div className="flex items-center gap-2">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-white/85 animate-bounce"
                          style={{ animationDelay: `${i * 0.18}s` }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">{streaming ? renderedReply : renderedReply || aiReply}</p>
                  )}
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
        className="fixed bottom-2 sm:bottom-3 left-0 right-0 z-10 px-3 sm:px-4 md:px-6"
      >
        <div className="mx-auto max-w-3xl rounded-xl sm:rounded-2xl border border-white/20 bg-black/55 backdrop-blur-xl shadow-2xl px-2 sm:px-3 py-1.5 sm:py-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={startVoice}
              className="shrink-0 rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 border border-white/25 text-white hover:bg-white/10 transition"
              title="Voice input"
              aria-label="Voice input"
            >
              <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z"></path>
                <path d="M19 11a7 7 0 0 1-14 0M12 18v4"></path>
              </svg>
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Message ${name || "AI"}…`}
              className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-sm sm:text-base px-1 sm:px-2 py-1.5 sm:py-2"
              disabled={sending}
            />

            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="shrink-0 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-white/25 text-white hover:bg-white/10 transition disabled:opacity-50"
              aria-label="Send"
              title="Send"
            >
              <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"></path>
              </svg>
            </button>

            {(userLocked || aiReply) && (
              <button
                type="button"
                onClick={resetTurn}
                className="ml-0.5 sm:ml-1 shrink-0 rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 border border-white/20 text-white/90 hover:bg-white/10 transition text-xs sm:text-sm"
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
