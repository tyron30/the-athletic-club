import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Eyebrow, Headline, Hl, Reveal } from "./ui";
import { GALLERY, type GalleryLayout } from "../config/gallery";

// Tile sizes in the masonry-style grid (2 cols on mobile, 4 on desktop)
const SPAN: Record<GalleryLayout, string> = {
  feature: "col-span-2 aspect-[4/5] sm:row-span-2 sm:aspect-auto",
  wide: "col-span-2 aspect-[16/10] sm:aspect-auto",
  tall: "aspect-[3/4] sm:row-span-2 sm:aspect-auto",
  small: "aspect-square sm:aspect-auto",
};

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index !== null ? GALLERY[index] : null;

  return (
    <section id="facilities" className="bg-charcoal py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Eyebrow>Gym Facilities</Eyebrow>
            <Headline
              className="text-[clamp(2.8rem,8vw,6.5rem)]"
              lines={[
                <>THE SPACE.</>,
                <>
                  THE <Hl>EQUIPMENT.</Hl>
                </>,
                <>THE EXPERIENCE.</>,
              ]}
            />
          </div>
          <Reveal className="lg:col-span-4">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Everything you need to train harder, move better, and reach your fitness goals.
            </p>
          </Reveal>
        </div>

        {/* Edit the photos in src/config/gallery.ts */}
        <ul className="mt-14 grid grid-flow-dense grid-cols-2 gap-2 sm:auto-rows-[230px] sm:grid-cols-4 sm:gap-3 lg:auto-rows-[260px]">
          {GALLERY.map((img, i) => (
            <motion.li
              key={img.src + i}
              className={`group relative overflow-hidden bg-black ${SPAN[img.layout]}`}
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open photo: ${img.alt}`}
                className="absolute inset-0 h-full w-full text-left"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 transition-colors duration-500 group-hover:from-black/60"
                />
                <span className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-4">
                  <span className="display text-xl sm:text-2xl">{img.caption}</span>
                  <span
                    aria-hidden
                    className="h-[3px] w-8 bg-accent transition-all duration-500 group-hover:w-16"
                  />
                </span>
                {img.placeholder && (
                  <span className="absolute left-3 top-3 bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-muted">
                   
                  </span>
                )}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center bg-accent text-black"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-white hover:border-accent hover:text-accent sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-white hover:border-accent hover:text-accent sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.figure
              key={current.src}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
              <figcaption className="mt-3 flex items-center justify-between text-sm text-muted">
                <span className="display text-xl text-white">{current.caption}</span>
                {current.placeholder && <span></span>}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
