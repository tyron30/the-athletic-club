import { useRef, type ReactNode, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/** Yellow highlighted word inside a headline. */
export function Hl({ children }: { children: ReactNode }) {
  return <span className="text-accent">{children}</span>;
}

/** Scroll-triggered fade/slide-up reveal. */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered, masked line-by-line headline reveal. */
export function Headline({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
}: {
  lines: ReactNode[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}) {
  return (
    <Tag className={`display ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: delay + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Small yellow label with an animated line. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
      <motion.span
        className="block h-[2px] w-10 origin-left bg-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </div>
  );
}

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  external?: boolean;
  className?: string;
  block?: boolean;
}

/** Link-styled button. `external` opens in a new tab safely. */
export function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
  block,
}: ButtonProps) {
  const styles = {
    primary: "bg-accent text-black hover:bg-white",
    dark: "bg-black text-accent hover:bg-white hover:text-black",
    ghost: "border-2 border-white/70 text-white hover:border-accent hover:text-accent",
  }[variant];
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative inline-flex min-h-[52px] items-center justify-center gap-3 overflow-hidden px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] transition-colors duration-300 ${
        block ? "w-full" : ""
      } ${styles} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <Icon
        aria-hidden
        className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

/** Subtle 3D tilt on hover (disabled for touch + reduced-motion users). */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div style={{ perspective: 1100 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={`h-full will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
