import type { FC } from "react";
import { Link } from "react-router-dom";
import LiquidEther from "../../Components/Effects/LiquidEther";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
// If you already have this util, feel free to swap the hardcoded links below.
// import { buildChatUrl } from "../../utils/url";
// import helenaImg from "../../assets/Helena_bg.jpg"; // etc.

const About: FC = () => {
  return (
    <div className="min-h-screen text-foreground relative" style={{ backgroundColor: "#040026" }}>
      {/* Fluid background */}
      <div className="pointer-events-none fixed inset-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
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
      <Navbar/>

      {/* Content */}
      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-10 sm:pt-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight " >
            Euphoria —{" "}
            <span className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #B19EEF, #FF9FFC, #5227FF)" }}>
              calm for the modern mind
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-white/80">
            Euphoria is a constellation of empathetic AI companions designed to help you breathe,
            untangle thoughts, and move forward with clarity. We blend gentle conversation with
            practical structure — turning heavy days into lighter, doable steps.
          </p>
        </section>

        {/* Mission + How it helps */}
        <section className="mx-auto max-w-5xl px-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="mt-3 text-white/80 leading-relaxed">
              To make emotional support accessible, stigma-free, and beautifully simple.
              Whether you’re overwhelmed, stuck, or just need a kind nudge, Euphoria meets you
              where you are — without judgment, jargon, or pressure.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-xl font-semibold">How Euphoria Helps</h2>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>• Gentle reframing to calm spirals and reduce noise.</li>
              <li>• Tiny, clear next steps — no overwhelm, just momentum.</li>
              <li>• Check-ins and micro-routines that fit real life.</li>
              <li>• A kinder inner voice, practiced in conversation.</li>
            </ul>
          </div>
        </section>

        {/* Personas */}
        <section className="mx-auto max-w-5xl px-6 mt-10">
          <h2 className="text-xl font-semibold">Meet your companions</h2>
          <p className="mt-2 text-white/75">
            Each persona brings a distinct style of care — choose what feels right, or switch anytime.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PersonaCard
              name="Helena"
              vibe="Calm mentor — clarity, structure, and steady confidence."
              to={"/chat/Helena"}
            />
            <PersonaCard
              name="Luna"
              vibe="Soft, reflective — gentle grounding and slow, deep breaths."
              to={"/chat/Luna"}
            />
            <PersonaCard
              name="Kai"
              vibe="Focused & direct — cuts through noise, sets crisp next steps."
              to={"/chat/Kai"}
            />
            <PersonaCard
              name="Sophie"
              vibe="Cozy & cheerful — light encouragement, bite-sized goals."
              to={"/chat/Sophie"}
            />
            <PersonaCard
              name="Milo"
              vibe="Pragmatic buddy — realistic plans, zero drama, honest care."
              to={"/chat/Milo"}
            />
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-5xl px-6 mt-12 grid gap-6 md:grid-cols-3">
          <ValueCard title="Kindness first">
            We speak to you the way a good friend would — with patience, warmth, and respect.
          </ValueCard>
          <ValueCard title="Practical over perfect">
            Progress beats perfection. We prefer doable steps to grand promises.
          </ValueCard>
          <ValueCard title="Your pace, your path">
            You choose the depth. We match your energy — from quick check-ins to deep dives.
          </ValueCard>
        </section>

        {/* Privacy & Safety */}
        <section className="mx-auto max-w-5xl px-6 mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-xl font-semibold">Privacy & Safety</h2>
            <p className="mt-3 text-white/80 leading-relaxed">
              Your trust matters. Conversations are treated with care and never used to judge you.
              Euphoria is a supportive tool — <span className="text-white">not a substitute for professional care.</span>
              If you’re in immediate danger or experiencing a crisis, please contact local emergency
              services or a trusted helpline in your region.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 mt-10 mb-20">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/chat/Helena"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white 
                         bg-gradient-to-r from-fuchsia-600 to-violet-600
                         hover:from-fuchsia-500 hover:to-violet-500 shadow"
            >
              Start a calming chat
            </Link>
            <Link
              to="/auth"
              className="rounded-xl px-5 py-2.5 text-sm font-medium border border-white/15 bg-white/5 hover:bg-white/10"
            >
              Create your space
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default About;

/* ========== Small presentational helpers ========== */

type PersonaProps = { name: string; vibe: string; to: string };

function PersonaCard({ name, vibe, to }: PersonaProps) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition 
                 hover:bg-white/10 hover:translate-y-[-2px]"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-xs px-2 py-1 rounded-lg border border-white/10 bg-white/5">
          AI Companion
        </span>
      </div>
      <p className="mt-2 text-sm text-white/80">{vibe}</p>
      <div className="mt-4 text-sm font-medium opacity-90 group-hover:opacity-100">
        Start talking →
      </div>
    </Link>
  );
}

type ValueCardProps = { title: string; children: React.ReactNode };

function ValueCard({ title, children }: ValueCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/80 leading-relaxed">{children}</p>
    </div>
  );
}
