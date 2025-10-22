import { type FC, useState } from "react";
import { Github, Twitter, Instagram, Linkedin,ArrowRight } from "lucide-react";
import Logo from "../Brand/Logo";

const Footer: FC = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up your subscribe API
    console.log("subscribe:", email);
  };

  return (
    <footer className="mt-16">
      {/* Glow background */}
      <div className="relative bg-black opacity-70">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <div className="absolute inset-0 bg-gradient-to-b from-[#140018] via-[#0b0012] to-[#08000e]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(600px 180px at 30% 0%, rgba(209, 0, 255, .12), transparent 60%), radial-gradient(600px 180px at 70% 0%, rgba(255, 0, 153, .1), transparent 60%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Card-ish panel */}
          <div className="rounded-2xl backdrop-blur-md p-6 sm:p-8">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Col 1: brand + socials */}
              <div>
                <div className="flex items-center gap-3 h-30 w-30">
                  <Logo size="sm" />
                  <div className="font-semibold text-white">Euphoria</div>
                </div>

                <p className="mt-4 text-sm text-white/70 max-w-xs">
                  Multiple AI ChatBots made for Mental and Emotional Support
                </p>

                <p className="mt-4 text-sm text-white/70">Join our community</p>

                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/ProjectEuphoria/Euphoria"
                    aria-label="Github"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Col 2: Explore */}
              <div className="mt-10">
                <h4 className="text-sm font-semibold tracking-wide text-white">
                  Explore our ChatBots
                   <ArrowRight size={25} className="ml-3 hidden text-white sm:inline-block" />
                </h4>
                <span>
                 
                </span>
                <ul className="mt-4 grid gap-2 text-sm text-white/80 ml-3 ">
                  <li>
                    <a href="#" className="hover:text-white">
                      ChatBot 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      ChatBot 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      ChatBot 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      ChatBot 4
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      ChatBot 5
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Weekly Digest */}
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
                    onChange={(e) => setEmail(e.target.value)}
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
              </div>
            </div>

            {/* Divider + bottom row */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
