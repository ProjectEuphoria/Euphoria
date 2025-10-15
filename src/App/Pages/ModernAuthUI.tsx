import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Shield, UserPlus, LogIn } from "lucide-react";
import LiquidEther from "../../Components/Effects/LiquidEther";

const panelVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.82, 0.27, 1] as any } },
    exit: { opacity: 0, y: -24, transition: { duration: 0.35 } },
};

export default function ModernAuthUI() {
    const [mode, setMode] = useState<"signin" | "signup">("signin");
    const [showPass, setShowPass] = useState(false);
    const isSignIn = mode === "signin";

    return (
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ backgroundColor: "#040026" }}>
            {/* 🌌 Background - Euphoria liquid gradient */}
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

            {/* Auth Card */}
            <motion.div
                className="w-[90%] max-w-lg rounded-2xl border border-[rgba(255,255,255,0.15)] 
                   bg-[rgba(255,255,255,0.06)] backdrop-blur-xl shadow-[0_0_25px_rgba(150,0,255,0.3)] p-8"
                variants={panelVariants}
                initial="initial"
                animate="animate"
            >
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-semibold mb-2 flex justify-center gap-2 items-center">
                        <Shield className="h-6 w-6 text-[#b026ff]" /> Euphoria
                    </h1>
                    <p className="text-sm text-white/70">
                        {isSignIn
                            ? "Welcome back — ready to sync your vibes?"
                            : "Let’s create your account and join the flow."}
                    </p>
                </div>

                {/* Toggle Buttons */}
                <div className="mb-6 flex rounded-xl overflow-hidden border border-white/20 backdrop-blur-sm">
                    <button
                        className={`flex-1 py-2 text-sm font-medium transition-all ${isSignIn
                                ? "bg-white/20 text-white"
                                : "hover:bg-white/10 text-white/70"
                            }`}
                        onClick={() => setMode("signin")}
                    >
                        <LogIn className="inline h-4 w-4 mr-1" /> Sign in
                    </button>
                    <button
                        className={`flex-1 py-2 text-sm font-medium transition-all ${!isSignIn
                                ? "bg-white/20 text-white"
                                : "hover:bg-white/10 text-white/70"
                            }`}
                        onClick={() => setMode("signup")}
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
                    >
                        {!isSignIn && (
                            <div>
                                <label className="text-xs text-white/70">Display name</label>
                                <input
                                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#b026ff]/50"
                                    placeholder="Ayush"
                                />
                            </div>
                        )}
                        <div>
                            <label className="text-xs text-white/70">Email</label>
                            <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2">
                                <Mail className="h-4 w-4 text-white/60" />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-white/70">Password</label>
                            <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2">
                                <Lock className="h-4 w-4 text-white/60" />
                                <input
                                    type={showPass ? "text" : "password"}
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
                        </div>

                        {/* 💜 Glowing gradient button */}
                        <button
                            type="submit"
                            className="group relative w-full overflow-hidden rounded-xl 
                         bg-gradient-to-r from-[#6100ff] via-[#b026ff] to-[#ff3de6] 
                         py-2 text-sm font-medium text-white shadow-[0_0_25px_rgba(160,0,255,0.5)] 
                         transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,0,255,0.6)] active:scale-[0.98]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {isSignIn ? "Continue" : "Create Account"}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(255,255,255,0.08)]" />
                        </button>

                        {/* Footer Switch */}
                        <div className="text-center text-xs text-white/60">
                            {isSignIn ? (
                                <>
                                    New here?{" "}
                                    <button
                                        onClick={() => setMode("signup")}
                                        className="text-[#b026ff] underline hover:text-[#ff3de6]"
                                    >
                                        Create one
                                    </button>
                                </>
                            ) : (
                                <>
                                    Already a member?{" "}
                                    <button
                                        onClick={() => setMode("signin")}
                                        className="text-[#b026ff] underline hover:text-[#ff3de6]"
                                    >
                                        Sign in
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.form>
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
