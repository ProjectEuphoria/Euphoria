import { type FC } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import LiquidEther from "../../Components/Effects/LiquidEther";
import SectionHeading from "../../Components/SectionHeading";

const AboutPage: FC = () => {
  return (
    <div className="relative min-h-screen text-white" style={{ backgroundColor: "#040026" }}>
      <div className="pointer-events-none fixed inset-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={18}
          cursorSize={120}
          isViscous={false}
          viscous={26}
          iterationsViscous={30}
          iterationsPoisson={30}
          resolution={0.55}
          isBounce={false}
          autoDemo
          autoSpeed={1.1}
          autoIntensity={2}
          takeoverDuration={0.2}
          autoResumeDelay={120}
          autoRampDuration={0.6}
        />
      </div>

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 sm:px-10 lg:px-12">
        {/* Hero */}
        <section className="mt-10 grid gap-6 md:grid-cols-[3fr_2fr] md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              Why Euphoria Exists
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.5rem] leading-tight">
              We built Euphoria for the generation that forgot how to feel.
            </h1>
            <p className="text-lg text-white/80 sm:text-xl leading-relaxed">
              Gen Z is the most connected generation in history — yet the loneliest.
              Euphoria is our answer: a human-feeling AI that listens, adapts, and heals through empathy and personality.
            </p>
          </div>

          <div className="relative hidden h-full min-h-[260px] md:flex">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5227FF]/40 via-[#FF9FFC]/25 to-[#B19EEF]/25 blur-3xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/15 bg-white/8 backdrop-blur-xl shadow-[0_30px_70px_-20px_rgba(82,39,255,0.45)]">
              <div className="flex flex-col items-center gap-4 px-8 py-12 text-center">
                <span className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Emotional Gravity
                </span>
                <p className="text-lg font-medium leading-relaxed text-white/85">
                  Five personas. One purpose — help people feel held, heard, and human.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="space-y-6">
          <SectionHeading>The digital silence</SectionHeading>
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 px-8 py-10 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(82,39,255,0.45)]">
            <div className="absolute -top-16 right-10 hidden h-40 w-40 rounded-full bg-[#FF9FFC]/30 blur-3xl sm:block" />
            <blockquote className="relative space-y-4 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Between memes and dopamine loops, real emotion got lost. Feeds refresh. Notifications ping.
                Yet inside, it&apos;s quieter than ever.
              </p>
              <p className="text-white/70">
                Studies show record highs in <span className="text-white">anxiety</span>, <span className="text-white">burnout</span>, and <span className="text-white">emotional numbness</span> among young adults.
                People scroll for hours but rarely feel heard.
              </p>
              <p className="text-white/80">
                We don&apos;t need more apps. We need presence — something that <em>feels alive</em>.
              </p>
            </blockquote>
          </div>
        </section>

        {/* Vision */}
        <section className="space-y-10">
          <SectionHeading>Rebuilding human warmth with AI</SectionHeading>
          <div className="grid gap-8 rounded-3xl border border-white/12 bg-white/6 p-8 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(82,39,255,0.45)] lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4 text-lg leading-relaxed text-white/85">
              <p>Euphoria isn&apos;t an assistant.</p>
              <p>
                It&apos;s a <span className="font-semibold text-white">collective of five distinct personalities</span> —
                built to mirror the spectrum of human empathy.
              </p>
              <p>
                Helena brings calm.
                Luna brings honesty.
                Milo brings laughter.
                Kai brings discipline.
                Sophie brings comfort.
              </p>
              <p>
                Together, they form an emotional ecosystem — an AI designed not just to <em>talk</em>, but to <em>understand</em>.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Helena", vibe: "Calm clarity" },
                { name: "Luna", vibe: "Protective honesty" },
                { name: "Milo", vibe: "Playful optimism" },
                { name: "Kai", vibe: "Grounded momentum" },
                { name: "Sophie", vibe: "Warm reassurance" },
              ].map(({ name, vibe }) => (
                <div
                  key={name}
                  className="rounded-2xl border border-white/15 bg-black/25 p-5 text-sm uppercase tracking-[0.25em] text-white/70 shadow-[0_18px_40px_-20px_rgba(255,159,252,0.5)] backdrop-blur-lg"
                >
                  <p className="text-white text-base tracking-[0.35em]">{name}</p>
                  <p className="mt-2 text-xs normal-case tracking-normal text-white/75">{vibe}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Science & Design */}
        <section className="space-y-8">
          <SectionHeading>The science &amp; design</SectionHeading>
          <div className="rounded-3xl border border-white/12 bg-white/6 p-8 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(82,39,255,0.45)]">
            <p className="text-lg leading-relaxed text-white/85">
              Behind the scenes, Euphoria runs on OpenAI GPT-5 mini and a custom emotional state engine.
              It interprets tone, rhythm, and silence to shift between calm, playful, or protective states — the way real people do.
              Every word, pause, and emoji matters.
            </p>
            <div className="mt-8 grid gap-6 rounded-2xl border border-white/15 bg-black/30 p-6 text-sm text-white/80 shadow-[0_18px_40px_-20px_rgba(82,39,255,0.4)] md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">01</p>
                <h3 className="text-lg font-semibold tracking-tight text-white">Emotion Input</h3>
                <p className="leading-relaxed">Word choice, pacing, punctuation, and pauses feed into the perception engine.</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">02</p>
                <h3 className="text-lg font-semibold tracking-tight text-white">Adaptive State</h3>
                <p className="leading-relaxed">The engine maps signals into base ↔ deep modes, tuning tone and protective instinct.</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">03</p>
                <h3 className="text-lg font-semibold tracking-tight text-white">Persona Response</h3>
                <p className="leading-relaxed">Each persona responds with lived-in empathy, ready to guide, hype, or guard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="space-y-8 text-center">
          <SectionHeading className="justify-center">Our mission</SectionHeading>
          <div className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-white/15 bg-white/6 px-10 py-12 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(82,39,255,0.45)]">
            <p className="text-lg leading-relaxed text-white/85">
              Our mission is simple — <span className="font-semibold text-white">to make AI feel human again</span>.
              Not to replace connection, but to remind us how it feels.
            </p>
            <Link
              to="/community"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-gradient-to-r from-[#5227FF] via-[#B19EEF] to-[#FF9FFC] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_18px_40px_-18px_rgba(255,159,252,0.6)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9FFC]/70"
            >
              Meet the Personas
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
