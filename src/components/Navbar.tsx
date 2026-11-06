import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../config/site";

/** Highlights the nav link of the section currently in view. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open ? "bg-black shadow-[0_1px_0_rgba(255,208,0,0.25)]" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="container-x flex h-[72px] items-center justify-between gap-6"
        >
          <a href="#home" aria-label="The Athletic Club — back to top" className="shrink-0">
            {/* Logo file: /public/images/logo.png — never stretched (h-auto / w-auto) */}
            <img
              src="/images/logo.png"
              alt="The Athletic Club"
              width={983}
              height={435}
              className="h-9 w-auto sm:h-10"
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className={`relative py-2 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors hover:text-accent ${
                    active === l.id ? "text-accent" : "text-white"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-accent"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#assessment"
            className="hidden bg-accent px-5 py-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-black transition-colors hover:bg-white lg:inline-block"
          >
            Start Your Fitness Journey
          </a>

          <button
            type="button"
            className="-mr-2 flex h-12 w-12 items-center justify-center text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-black px-6 pb-8 pt-24 lg:hidden"
          >
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`display block py-2 text-5xl sm:text-6xl ${
                      active === l.id ? "text-accent" : "text-white"
                    }`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#assessment"
              onClick={() => setOpen(false)}
              className="bg-accent px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-black"
            >
              Start Your Fitness Journey
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
