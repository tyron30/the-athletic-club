import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button, Hl } from "./ui";
import { IMAGES } from "../config/gallery";
import { SITE } from "../config/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Layered parallax: background drifts slowest, typography/lights move at different speeds
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "18%"]);
  const ghostY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "-25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);

  const lines = [
    <>BUILT FOR</>,
    <>
      <Hl>STRENGTH.</Hl>
    </>,
    <>MADE FOR</>,
    <>
      <Hl>PROGRESS.</Hl>
    </>,
  ];

  return (
    <section
      id="home"
      ref={ref}
      aria-label="Welcome"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-black pb-20 pt-32 sm:items-center sm:pb-24"
    >
      {/* LAYER 1 — cinematic photo (replace /public/images/hero-gym.jpg) */}
      <motion.img
        src={IMAGES.hero}
        alt="Dark, cinematic view of the training floor"
        width={1920}
        height={1080}
        decoding="async"
        style={{ y: bgY }}
        className="absolute inset-0 h-[115%] w-full object-cover opacity-60"
      />
      {/* LAYER 2 — readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      {/* LAYER 3 — subtle yellow lighting accent */}
      <div
        aria-hidden
        className="absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]"
      />
      {/* LAYER 4 — floating outlined typography */}
      <motion.div
        aria-hidden
        style={{ y: ghostY }}
        className="pointer-events-none absolute -right-10 bottom-10 hidden select-none lg:block"
      >
        <div className="animate-drift display outline-text text-[16rem] leading-none">ATHLETIC</div>
      </motion.div>

      {/* Animated accent line */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease }}
      />

      <motion.div style={{ opacity: fade }} className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 border border-accent/40 bg-black/50 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm sm:text-xs"
        >
          <MapPin aria-hidden className="h-3.5 w-3.5 text-accent" />
          UY TINKOC BLDG. • TACLOBAN CITY
        </motion.div>

        <h1 className="display text-[clamp(3.4rem,13.5vw,10.5rem)]">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.05em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          More than just a gym. A place to challenge yourself, build strength, and become the best
          version of yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#membership">EXPLORE MEMBERSHIPS</Button>
          <Button href={SITE.assessmentFormUrl} external variant="ghost">
            GET YOUR FREE ASSESSMENT
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 right-6 z-10 hidden flex-col items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted sm:flex"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/20">
          <span className="animate-scrollcue absolute inset-0 bg-accent" />
        </span>
      </a>
    </section>
  );
}
