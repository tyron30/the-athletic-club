import { motion } from "framer-motion";
import { Eyebrow, Headline, Hl, Reveal, Button } from "./ui";
import { IMAGES } from "../config/gallery";
import { SITE } from "../config/site";

const BENEFITS = [
  {
    n: "01",
    title: "DISCOVER YOUR STARTING POINT",
    text: "Find out where you currently stand in terms of fitness, strength, and movement.",
  },
  {
    n: "02",
    title: "TALK ABOUT YOUR GOALS",
    text: "We'll take the time to understand what you want to achieve.",
  },
  {
    n: "03",
    title: "EXPERIENCE PERSONAL TRAINING",
    text: "Work with a coach who will guide you through a training session.",
  },
  {
    n: "04",
    title: "GET A PERSONALIZED GAME PLAN",
    text: "Know what steps to take to start working toward your goals.",
  },
];

export default function Assessment() {
  return (
    <section id="assessment" className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-1.5 bg-accent sm:w-2"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Free Fitness Assessment</Eyebrow>
            <Headline
              className="text-[clamp(2.6rem,7.2vw,5.8rem)]"
              lines={[
                <>WANT TO GET FIT</>,
                <>
                  BUT DON'T KNOW
                </>,
                <>
                  WHERE TO <Hl>START?</Hl>
                </>,
              ]}
            />
            <Reveal delay={0.1} className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Maybe you've been wanting to work out for a while, but you're not sure what exercises
                to do, how to train properly, or what actually works for your goals.
              </p>
              <p className="font-semibold text-white">You don't have to figure it out alone.</p>
              <p>
                At The Athletic Club, we're offering a{" "}
                <span className="font-bold text-accent">FREE Fitness Assessment + Personal Training Session</span>{" "}
                to help you start your fitness journey with confidence and direction.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <img
                src={IMAGES.assessment}
                alt="Personal training session"
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              {/* 100% FREE banner */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="cut-corner absolute -bottom-6 -left-4 right-4 overflow-hidden bg-accent p-6 text-black sm:-left-10 sm:right-auto sm:w-[420px] sm:p-7"
              >
                <span
                  aria-hidden
                  className="animate-shimmer absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-sm"
                />
                <div className="display relative text-6xl sm:text-7xl">100% FREE</div>
                <p className="relative mt-2 text-sm font-bold uppercase tracking-wide">
                  No membership required. No pressure. No commitment.
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Benefits */}
        <ol className="mt-24 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <li key={b.n} className="list-none bg-charcoal">
              <Reveal delay={i * 0.1} className="group relative h-full p-7 sm:p-8">
                <div className="display text-6xl text-accent">{b.n}</div>
                <h3 className="display mt-4 text-2xl leading-tight">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{b.text}</p>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Final CTA */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="space-y-4 text-base leading-relaxed text-muted sm:text-lg lg:col-span-7">
            <p>
              Whether you're completely new to fitness or looking to get back on track, we'd love to
              help you get started.
            </p>
            <p>
              Slots are limited. Sign up for our waitlist, and once a slot becomes available, our team
              will contact you to schedule your session.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <Button href={SITE.assessmentFormUrl} external block className="py-6 text-base">
              CLAIM YOUR FREE SESSION
            </Button>
            <p className="mt-4 text-sm text-muted">
              Limited slots available. Registration does not guarantee an immediate appointment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
