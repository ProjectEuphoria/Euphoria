import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Shield, UserPlus, LogIn } from "lucide-react";
import LiquidEther from "../../Components/Effects/LiquidEther";
import {useNavigate } from "react-router-dom";
import BacktoHomeBtn from "../../Components/BacktoHomeBtn";


const panelVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.82, 0.27, 1] as any } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.35 } },
};

// --- simple validators (no deps) ---
const isEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v.trim());
const pwIssues = (v: string) => {
  const issues: string[] = [];
  if (v.length < 8) issues.push("min 8 chars");
  if (!/[A-Z]/.test(v)) issues.push("1 uppercase");
  if (!/[a-z]/.test(v)) issues.push("1 lowercase");
  if (!/[0-9]/.test(v)) issues.push("1 number");
  return issues;
};
const nameIssue = (v: string) => {
  if (v.trim().length < 2) return "min 2 chars";
  if (v.trim().length > 32) return "max 32 chars";
  if (!/^[\p{L}\p{N}\s._-]+$/u.test(v)) return "letters/numbers/._- only";
  return "";
};

export default function ModernAuthUI() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // errors+touched
  const [errors, setErrors] = useState<{ email?: string; password?: string; displayName?: string }>({});
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean; displayName?: boolean }>({});

  const isSignIn = mode === "signin";

  // validate current fields
  const validate = () => {
    const next: typeof errors = {};
    if (!email.trim()) next.email = "Email is required";
    else if (!isEmail(email)) next.email = "Enter a valid email";

    if (!password) next.password = "Password is required";
    else {
      const issues = pwIssues(password);
      if (issues.length) next.password = `Weak password: ${issues.join(", ")}`;
    }

    if (!isSignIn) {
      const ni = nameIssue(displayName);
      if (ni) next.displayName = ni;
    }

    setErrors(next);
    return next;
  };

  const blurField = (key: keyof typeof touched) => {
    setTouched((t) => ({ ...t, [key]: true }));
    // validate only that field
    setErrors((prev) => {
      const next = { ...prev };
      if (key === "email") {
        next.email = !email.trim() ? "Email is required" : !isEmail(email) ? "Enter a valid email" : undefined;
      }
      if (key === "password") {
        next.password = !password
          ? "Password is required"
          : pwIssues(password).length
            ? `Weak password: ${pwIssues(password).join(", ")}`
            : undefined;
      }
      if (key === "displayName") {
        next.displayName = isSignIn ? undefined : (nameIssue(displayName) || undefined);
      }
      return next;
    });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    setTouched({ email: true, password: true, displayName: !isSignIn || undefined });

    const problems = validate();
    if (Object.keys(problems).length) return; // block submit

    try {
      setLoading(true);
      const payload = isSignIn ? { email, password } : { email, password, displayName };

      const res = isSignIn ? await fetch("/adk/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload)
      }) : await fetch("/adk/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json()
      console.log(data)
      if (data.error) {
        setMessage(`${data.error}`);
      } else if (data.user) {
        // ✅ Always go to homepage
          navigate("/", { replace: true });
          return;
      }




      // TODO: redirect after success (e.g., to /chat)
    } catch (err: any) {
      setMessage(`❌ ${err.message || "Something went wrong"}`);
    } finally {
      setLoading(false);
    }
  }

  // dynamic classes for error state
  const fieldWrap = (hasErr?: boolean) =>
    `flex items-center gap-2 rounded-lg border px-3 py-2 bg-white/10 ${hasErr ? "border-red-400/70 ring-1 ring-red-400/40" : "border-white/20"
    }`;

  const help = (msg?: string) =>
    msg ? <p className="mt-1 text-[11px] text-red-300">{msg}</p> : null;

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ backgroundColor: "#040026" }}>
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 ">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={1}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={100}
          autoRampDuration={0.6}
        />
      </div>
      <BacktoHomeBtn/>
      
      {/* Card */}
      <motion.div
        className="w-[90%] max-w-lg rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.06)] backdrop-blur-xl shadow-[0_0_25px_rgba(150,0,255,0.3)] p-8"
        variants={panelVariants}
        initial="initial"
        animate="animate"
      >
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-semibold mb-2 flex justify-center gap-2 items-center">
            <Shield className="h-6 w-6 text-[#b026ff]" /> Euphoria
          </h1>
          <p className="text-sm text-white/70">
            {mode === "signin" ? "Welcome back — ready to sync your vibes?" : "Let’s create your account and join the flow."}
          </p>
        </div>

        {/* Toggle */}
        <div className="mb-6 flex rounded-xl overflow-hidden border border-white/20 backdrop-blur-sm">
          <button
            className={`flex-1 py-2 text-sm font-medium transition-all ${mode === "signin" ? "bg-white/20 text-white" : "hover:bg-white/10 text-white/70"}`}
            onClick={() => setMode("signin")}
            type="button"
          >
            <LogIn className="inline h-4 w-4 mr-1" /> Sign in
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium transition-all ${mode === "signup" ? "bg-white/20 text-white" : "hover:bg-white/10 text-white/70"}`}
            onClick={() => setMode("signup")}
            type="button"
          >
            <UserPlus className="inline h-4 w-4 mr-1" /> Create
          </button>
        </div>

        {/* Form */}
        <AnimatePresence mode="wait">
          <motion.form
            key={mode}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
            onSubmit={onSubmit}
            noValidate
          >
            {/* Display name (signup only) */}
            {mode === "signup" && (
              <div>
                <label className="text-xs text-white/70">Display name</label>
                <div className={fieldWrap(touched.displayName && !!errors.displayName)}>
                  <input
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    onBlur={() => blurField("displayName")}
                    className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
                    placeholder="Ayush"
                  />
                </div>
                {touched.displayName && help(errors.displayName)}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-xs text-white/70">Email</label>
              <div className={fieldWrap(touched.email && !!errors.email)}>
                <Mail className="h-4 w-4 text-white/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => blurField("email")}
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
                />
              </div>
              {touched.email && help(errors.email)}
            </div>

            {/* Password */}
            <div>
              <label className="text-xs text-white/70">Password</label>
              <div className={fieldWrap(touched.password && !!errors.password)}>
                <Lock className="h-4 w-4 text-white/60" />
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => blurField("password")}
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="text-white/60 hover:text-white"
                >
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {touched.password && help(errors.password)}
              {/* tiny strength hint */}
              {!errors.password && password.length > 0 && (
                <p className="mt-1 text-[11px] text-white/60">
                  Strength: {["weak", "okay", "good", "great"][Math.min(3, Math.floor(password.length / 4))]}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full overflow-hidden rounded-xl 
                bg-gradient-to-r from-[#6100ff] via-[#b026ff] to-[#ff3de6] 
                py-2 text-sm font-medium text-white shadow-[0_0_25px_rgba(160,0,255,0.5)] 
                transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,0,255,0.6)] active:scale-[0.98]
                ${loading ? "opacity-70 pointer-events-none" : ""}`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "Processing..." : mode === "signin" ? "Continue" : "Create Account"}
                {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(255,255,255,0.08)]" />
            </button>

            {/* Server message */}
            {message && <p className="text-center text-sm text-white/80 mt-2">{message}</p>}
          </motion.form>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
