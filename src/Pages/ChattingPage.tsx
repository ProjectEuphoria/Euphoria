// ChatPage.tsx
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

type ChatReply = { reply: string };

export default function ChatPage() {
  const { name } = useParams<{ name: string }>(); // agent name from /chat/:name
  const [sp] = useSearchParams();
  const image = sp.get("image") ?? undefined;     // from ?image=
  const agentName = name ?? "Milo";

  const [input, setInput] = useState("");
  const [userMsg, setUserMsg] = useState<string>("");
  const [botMsg, setBotMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const recogRef = useRef<SpeechRecognition | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // --- Microphone (Web Speech API) ---
  useEffect(() => {
    const SR: typeof window.SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SR) {
      const recog = new SR();
      recog.lang = "en-IN";
      recog.interimResults = false;
      recog.maxAlternatives = 1;

      recog.onresult = (e: SpeechRecognitionEvent) => {
        const txt = e.results[0][0].transcript;
        setInput((prev) => (prev ? `${prev} ${txt}` : txt));
        setListening(false);
        // re-focus input after speech
        inputRef.current?.focus();
      };
      recog.onerror = () => setListening(false);
      recog.onend = () => setListening(false);

      recogRef.current = recog as SpeechRecognition;
    }
  }, []);

  function toggleMic() {
    const recog = recogRef.current;
    if (!recog) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }
    if (listening) {
      recog.stop();
      setListening(false);
    } else {
      setListening(true);
      recog.start();
    }
  }

  // --- Send message to backend ---
  async function send() {
    const msg = input.trim();
    if (!msg || loading) return;

    setUserMsg(msg);
    setBotMsg("");
    setLoading(true);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, agentName }),
      });
      const data: ChatReply = await res.json();
      console.log(typeof(data),data)
      setBotMsg(
        typeof data=== "string"
          ? data
          : "…"
      );
    } catch (e) {
      setBotMsg("Error: failed to reach the assistant.");
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send();
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={
        image
          ? { backgroundImage: `url(${image})` }
          : { backgroundColor: "#0d0217" } // fallback
      }
    >
      {/* overlay to improve readability */}
      <div className="min-h-screen w-full backdrop-blur-0 bg-black/20">
        <div className="max-w-3xl mx-auto px-4 pt-10 pb-28">
          {/* Header */}
          <div className="mb-6 text-white/90">
            <div className="text-sm opacity-80">Chatting with</div>
            <h1 className="text-2xl font-semibold">{agentName}</h1>
          </div>

          {/* Message region — shows only two messages (user + bot) */}
          <div className="space-y-3">
            {userMsg ? (
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-black text-white shadow-md">
                  {userMsg}
                </div>
              </div>
            ) : null}

            {loading ? (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-black text-white shadow-md">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/70 animate-bounce"></span>
                    <span className="h-2 w-2 rounded-full bg-white/70 animate-bounce [animation-delay:120ms]"></span>
                    <span className="h-2 w-2 rounded-full bg-white/70 animate-bounce [animation-delay:240ms]"></span>
                    <span className="opacity-80">thinking…</span>
                  </span>
                </div>
              </div>
            ) : botMsg ? (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-black text-white shadow-md">
                  {botMsg}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Composer (fixed bottom) */}
        <div className="fixed inset-x-0 bottom-0">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg p-2 flex items-center gap-2">
              {/* Microphone */}
              <button
                onClick={toggleMic}
                className={`shrink-0 h-10 w-10 rounded-xl flex items-center justify-center border transition
                ${listening ? "bg-red-600 text-white border-red-500" : "bg-white/10 text-white border-white/20 hover:bg-white/15"}`}
                title={listening ? "Stop recording" : "Start recording"}
              >
                {/* mic icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 3.75a2.25 2.25 0 00-2.25 2.25v6a2.25 2.25 0 004.5 0v-6A2.25 2.25 0 0012 3.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 10.5a7.5 7.5 0 01-15 0M12 18v2.25" />
                </svg>
              </button>

              {/* Input */}
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={`Message ${agentName}…`}
                className="flex-1 bg-transparent outline-none text-white placeholder-white/50 px-2 py-2"
              />

              {/* Send */}
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="shrink-0 h-10 px-4 rounded-xl bg-blue-600 text-white font-medium
                           disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition"
                title="Send message"
              >
                Send
              </button>
            </div>

            <div className="text-center text-xs text-white/60 mt-2">
              Tip: Press <kbd className="px-1 py-0.5 bg-white/10 rounded">Enter</kbd> to send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Types for SpeechRecognition (so TS doesn't complain in strict projects)
declare global {
  interface Window {
    webkitSpeechRecognition?: any;
    SpeechRecognition?: any;
  }
  interface SpeechRecognition extends EventTarget {
    lang: string;
    maxAlternatives: number;
    interimResults: boolean;
    start: () => void;
    stop: () => void;
    onresult: (e: SpeechRecognitionEvent) => void;
    onerror: (e: any) => void;
    onend: () => void;
  }
  interface SpeechRecognitionEvent extends Event {
    results: {
      [index: number]: {
        0: { transcript: string };
        isFinal: boolean;
      };
      length: number;
    };
  }
}
