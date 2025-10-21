import { type FC, useState } from "react";
import { Github, Twitter, Instagram, Linkedin,ArrowRight } from "lucide-react";
import Logo from "../Brand/Logo";
import { Link } from "react-router-dom";
import helenaImg from "../../assets/give a good anime background which is subjected to no copyright.jpg";
import kaiImg from "../../assets/Kai_bg.jpg";
import lunaImg from "../../assets/Luna_bg.jpg";
import sophieImg from "../../assets/Sophie_bg.jpg";
import miloImg from "../../assets/Milo_bg.jpg";
import { buildChatUrl } from "../../utils/url";
import WeeklyDigest from "../WeeklyDigest";




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
                  <Link className="w-fit" to={buildChatUrl("Helena",helenaImg)}>
                    <a href="" className="hover:text-white ">
                      Helena
                    </a>
                  </Link>
                  <Link className="w-fit" to={buildChatUrl("Milo",miloImg)}>
                    <a href="" className="hover:text-white ">
                      Milo
                    </a>
                  </Link>
                  <Link className="w-fit" to={buildChatUrl("Kai",kaiImg)}>
                    <a href="" className="hover:text-white  ">
                      Kai
                    </a>
                  </Link>
                  <Link className="w-fit" to={buildChatUrl("Sophie",sophieImg)}>
                    <a href="" className="hover:text-white ">
                      Sophie
                    </a>
                  </Link>
                  <Link className="w-fit" to={buildChatUrl("Luna",lunaImg)}>
                    <a href="" className="hover:text-white ">
                      Luna
                    </a>
                  </Link>
                </ul>
              </div>

              {/* Col 3: Weekly Digest */}
              <WeeklyDigest/>
            </div>

            {/* Divider + bottom row */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
