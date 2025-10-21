import { useState } from "react";

export default function WeeklyDigest() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");

    if (!isValidEmail(email)) {
      setStatus("error");
      setMsg("⚠️ Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setMsg("✅ You’ve successfully subscribed to our weekly digest!");
    setEmail("");
  };

  return (
    <div className="mt-10">
      <h4 className="text-sm font-semibold tracking-wide text-white">
        Join Our Weekly Digest
      </h4>
      <p className="mt-4 text-sm text-white/70 max-w-sm">
        Get exclusive promotions & updates straight to your inbox.
      </p>

      <form onSubmit={onSubmit} className="mt-4 flex gap-3 max-w-sm">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
            setMsg("");
          }}
          placeholder="Enter your email here"
          className="
            w-full rounded-xl border border-white/15 bg-white/5
            px-3 py-2 text-sm text-white placeholder-white/50
            outline-none ring-0 focus:border-white/30
          "
        />
        <button
          type="submit"
          className="
            whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold
            text-white shadow
            bg-gradient-to-r from-fuchsia-600 to-violet-600
            hover:from-fuchsia-500 hover:to-violet-500
          "
        >
          Subscribe
        </button>
      </form>

      {msg && (
        <p
          className={`mt-2 text-sm ${
            status === "success" ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {msg}
        </p>
      )}
    </div>
  );
}