import { type FC } from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import LiquidEther from "../../Components/Effects/LiquidEther";
import SectionHeading from "../../Components/SectionHeading";

const CommunityPage: FC = () => {
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

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-12 sm:px-10 lg:px-12">
        <section className="space-y-6 text-center md:space-y-8">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">
            Community of the Curious
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.5rem] leading-tight">
            Community of the Curious.
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Where users, creators, and developers build Euphoria together.
            We&apos;re crafting an AI movement rooted in empathy, storytelling, and collective healing.
          </p>
        </section>

        <section className="space-y-10">
          <SectionHeading>The Euphoria Circle</SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Explorers",
                body: "Everyday users who talk with the personas, share journeys, and teach us how it feels on the other side of the chat.",
              },
              {
                title: "Creators",
                body: "Artists, writers, animators, and voice designers shaping the way Euphoria moves, sounds, and comforts.",
              },
              {
                title: "Builders",
                body: "Developers extending MCP tools, APIs, and integrations to push emotional AI into daily rituals.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/15 bg-white/6 p-8 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(82,39,255,0.45)]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-white/65">{title}</p>
                <p className="mt-4 text-base leading-relaxed text-white/85">{body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://discord.gg/"
              className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/25 bg-black/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_18px_40px_-18px_rgba(176,38,255,0.6)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9FFC]/70"
            >
              Join Discord
            </a>
            <a
              href="https://t.me/"
              className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/25 bg-black/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_18px_40px_-18px_rgba(176,38,255,0.6)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9FFC]/70"
            >
              Join Telegram
            </a>
            <a
              href="https://github.com/ProjectEuphoria/Euphoria"
              className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/25 bg-black/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_18px_40px_-18px_rgba(176,38,255,0.6)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9FFC]/70"
            >
              GitHub
            </a>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>Our shared goal</SectionHeading>
          <div className="rounded-3xl border border-white/12 bg-white/6 px-8 py-10 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(82,39,255,0.45)]">
            <p className="text-lg leading-relaxed text-white/85">
              To make mental wellness approachable — through design, dialogue, and empathy.
              Euphoria&apos;s community works on open research around <span className="font-semibold text-white">AI-emotion alignment</span>,{" "}
              <span className="font-semibold text-white">voice synthesis</span>, and <span className="font-semibold text-white">creative AI therapy</span>.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>Contribute or collaborate</SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "🌸 Submit new journal prompts or music integrations.",
                href: "https://discord.gg/",
              },
              {
                label: "💬 Host Euphoria-based group sessions or co-create emotional AI research.",
                href: "https://discord.gg/",
              },
              {
                label: "🧠 Help build new toolsets — Spotify, wellness, journaling, and beyond.",
                href: "https://github.com/ProjectEuphoria/Euphoria/issues",
              },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="group rounded-3xl border border-white/15 bg-white/6 p-6 text-base leading-relaxed text-white/85 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(82,39,255,0.45)] transition hover:border-white/30 hover:shadow-[0_35px_80px_-35px_rgba(255,159,252,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9FFC]/70"
              >
                <span className="block text-white/90 group-hover:text-white">{label}</span>
                <span className="mt-4 inline-block text-xs uppercase tracking-[0.35em] text-white/60 group-hover:text-white/90">
                  Contribute
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="text-center">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-white/6 px-10 py-12 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(82,39,255,0.45)]">
            <p className="text-lg leading-relaxed text-white/85">
              “If connection is medicine, then Euphoria is the reminder that we still deserve to heal.”
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityPage;
