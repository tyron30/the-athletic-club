import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Eyebrow, Headline, Hl, Reveal } from "./ui";
import { IMAGES } from "../config/gallery";

const HIGHLIGHTS = [
  {
    n: "01",
    title: "BUILD STRENGTH",
    text: "Train with purpose and progressively improve your physical performance.",
  },
  {
    n: "02",
    title: "STAY CONSISTENT",
    text: "Develop discipline and establish healthier habits.",
  },
  {
    n: "03",
    title: "REACH YOUR GOALS",
    text: "Work toward your personal fitness goals with the right environment and guidance.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mainY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const subY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 60]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div
        aria-hidden
        className="display outline-text pointer-events-none absolute -left-6 top-10 select-none text-[9rem] leading-none sm:text-[16rem]"
      >
        CLUB
      </div>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow>About The Athletic Club</Eyebrow>
          <Headline
            className="text-[clamp(2.8rem,8vw,6.5rem)]"
            lines={[
              <>YOUR TRAINING.</>,
              <>
                YOUR <Hl>JOURNEY.</Hl>
              </>,
              <>YOUR POTENTIAL.</>,
            ]}
          />
          <Reveal delay={0.1} className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              At The Athletic Club, we believe fitness is more than lifting weights. It's about
              building <span className="font-semibold text-white">discipline</span>, developing{" "}
              <span className="font-semibold text-white">strength</span>, improving your health, and
              becoming better every day.
            </p>
            <p>
              Whether you're just starting your fitness journey or looking to take your training to
              the next level, we're here to help you move forward.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric overlapping images (replace in /public/images) */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <motion.div style={{ y: mainY }} className="relative ml-auto w-[82%]">
            <img
              src={IMAGES.aboutMain}
              alt="Gym interior at The Athletic Club"
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 border-r-4 border-t-4 border-accent" />
          </motion.div>
          <motion.div
            style={{ y: subY }}
            className="absolute -bottom-10 left-0 w-[46%] border-4 border-black"
          >
            <img
              src={IMAGES.aboutSecondary}
              alt="Training session"
              width={1000}
              height={1400}
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="container-x relative mt-28 grid gap-px bg-white/10 sm:mt-32 md:grid-cols-3">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.n} delay={i * 0.12} className="group relative bg-black p-8 sm:p-10">
            <div className="display text-7xl text-accent/90 transition-transform duration-500 group-hover:-translate-y-1">
              {h.n}
            </div>
            <h3 className="display mt-5 text-3xl">{h.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{h.text}</p>
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
