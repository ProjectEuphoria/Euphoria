import { useState, type FC } from "react";
import { Globe, Menu, X } from "lucide-react";
import Logo from "../Brand/Logo";
import LogoutBtn from "../LogoutBtn";

type NavLink = { href: string; label: string };
const LINKS: NavLink[] = [
    { href: "#about", label: "About Us" },
    { href: "#community", label: "Community" },
    { href: "https://github.com/ProjectEuphoria/Euphoria", label: "Github" },
    { href: "#help", label: "Help" },
];

const Navbar: FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="top-0 w-full">
            <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8" style={{height:"150px"}}>
                {/* Left: Logo */}
                <div className=" h-full" style={{width:"190px"}}>
                <a className="flex"
                    href="#home"
                    style={{height:"100%",width:"100%"}}

                >
                    {/* Your Logo component renders the round E mark */}
                    <Logo size="md" />
                </a></div>

                {/* Center: Links (desktop) */}
                <div>
                <ul
                    className="
    pointer-events-auto
     left-1/2 hidden  sm:flex
    items-center gap-10 text-white font-serif text-xl
  "
                >
                    {LINKS.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="transition-colors hover:text-white/90">
                                {l.label}
                            </a>
                        </li>
                    ))}
                    <li>
                            <LogoutBtn/>
                        </li>
                </ul></div>

                {/* Mobile toggle */}
                <button
                    className="
    sm:hidden inline-flex items-center justify-center
    rounded-xl border border-white/20 bg-black/30 p-2 text-white
    focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
  "
                    aria-label="Toggle menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            {/* Mobile drawer */}
            {open && (
                <div className="md:hidden border-t border-white/10 bg-[#130015]/95 backdrop-blur">
                    <ul className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-1 text-white font-serif text-lg">
                        {LINKS.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    className="block rounded-lg px-3 py-2 hover:bg-white/5"
                                    onClick={() => setOpen(false)}
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <LogoutBtn/>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
