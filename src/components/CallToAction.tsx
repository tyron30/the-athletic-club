import { motion } from "framer-motion";
import { Button, Headline, Hl, Reveal } from "./ui";
import { IMAGES } from "../config/gallery";
import { SITE } from "../config/site";

export default function CallToAction() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-black py-24"
    >
      {/* Background image: replace /public/images/cta-bg.jpg */}
      <img
        src={IMAGES.ctaBackground}
        alt=""
        aria-hidden
        width={1920}
        height={1000}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/60 to-black" />

      {/* Animated yellow accents */}
      <motion.div
        aria-hidden
        className="absolute left-0 top-0 h-[3px] w-full origin-left bg-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        aria-hidden
        className="absolute -left-20 bottom-16 h-2 w-72 -skew-x-[30deg] bg-accent"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container-x text-center">
        <h2 id="cta-heading" className="sr-only">
          Your stronger self starts here.
        </h2>
        <Headline
          as="h3"
          className="text-[clamp(3rem,11vw,9rem)]"
          lines={[
            <>YOUR STRONGER</>,
            <>
              SELF <Hl>STARTS HERE.</Hl>
            </>,
          ]}
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted">
            Stop waiting for the perfect time. Start making progress today.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href="#membership">JOIN THE ATHLETIC CLUB</Button>
            <Button href={SITE.assessmentFormUrl} external variant="ghost">
              CLAIM YOUR FREE ASSESSMENT
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
