/**
 * ============================================================
 *  IMAGES  —  the one place to swap, add or remove photos
 * ============================================================
 * 1. Put your real photos in  /public/images/
 * 2. Either overwrite a file with the SAME NAME (easiest), or
 *    change the `src` below to your new file name.
 * 3. Set `placeholder: false` once a real photo is in place
 *    (this removes the small "SAMPLE IMAGE" tag in the gallery).
 *
 * Current files are generated PLACEHOLDERS, not photos of the gym.
 */

export const IMAGES = {
  // Full-screen hero background (landscape, ~1920x1080, dark photos work best)
  hero: "/images/hero-gym.jpg",
  // About section – large image (portrait) and small overlapping image (portrait)
  aboutMain: "/images/gym-interior.jpg",
  aboutSecondary: "/images/training-01.jpg",
  // Free assessment section image (portrait)
  assessment: "/images/training-02.jpg",
  // Full-width call-to-action background (landscape)
  ctaBackground: "/images/cta-bg.jpg",
} as const;

export type GalleryLayout = "feature" | "wide" | "tall" | "small";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  /** Natural pixel size — keeps the layout stable while loading. */
  width: number;
  height: number;
  /** Controls how big the tile is in the masonry grid. */
  layout: GalleryLayout;
  /** true = temporary stock/placeholder image. Set to false for real photos. */
  placeholder: boolean;
}

/**
 * Add, remove or reorder photos by editing this list.
 * Gallery order = order in this array.
 */
export const GALLERY: GalleryImage[] = [
  {
    src: "/images/gym-interior.jpg",
    alt: "Gym interior",
    caption: "The Space",
    width: 1200,
    height: 1500,
    layout: "feature",
    placeholder: true,
  },
  {
    src: "/images/equipment-01.jpg",
    alt: "Weight training equipment",
    caption: "Weight Training",
    width: 1400,
    height: 1000,
    layout: "wide",
    placeholder: true,
  },
  {
    src: "/images/equipment-02.jpg",
    alt: "Free weights and dumbbells",
    caption: "Free Weights",
    width: 1000,
    height: 1000,
    layout: "small",
    placeholder: true,
  },
  {
    src: "/images/gallery-01.jpg",
    alt: "Strength training machines",
    caption: "Comfort Room",
    width: 1400,
    height: 1000,
    layout: "small",
    placeholder: true,
  },
  {
    src: "/images/gallery-03.jpg",
    alt: "Cardio equipment",
    caption: "Cardio",
    width: 1000,
    height: 1400,
    layout: "tall",
    placeholder: true,
  },
  {
    src: "/images/training-01.jpg",
    alt: "Workout area",
    caption: "Workout Areas",
    width: 1000,
    height: 1400,
    layout: "tall",
    placeholder: true,
  },
  {
    src: "/images/gallery-02.jpg",
    alt: "Training environment",
    caption: "The Atmosphere",
    width: 1000,
    height: 1000,
    layout: "small",
    placeholder: true,
  },
  {
    src: "/images/gallery-04.jpg",
    alt: "Gym atmosphere",
    caption: "The Experience",
    width: 1400,
    height: 1000,
    layout: "wide",
    placeholder: true,
  },
];
