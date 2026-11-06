import { ArrowUp, Facebook } from "lucide-react";
import { NAV_LINKS, SITE } from "../config/site";

export default function Footer() {
  return (
    <footer className="relative border-t-[3px] border-accent bg-black pt-16">
      <div className="container-x grid gap-12 pb-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src="/images/logo.png"
            alt="The Athletic Club"
            width={983}
            height={435}
            loading="lazy"
            className="h-14 w-auto"
          />
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            A premium fitness gym in Tacloban City. Train with purpose, build discipline, and keep
            making progress.
          </p>
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Athletic Club on Facebook"
            className="mt-6 inline-flex h-12 w-12 items-center justify-center border border-white/30 transition-colors hover:border-accent hover:bg-accent hover:text-black"
          >
            <Facebook aria-hidden className="h-5 w-5" />
          </a>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-accent">Quick Links</h2>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="font-semibold uppercase tracking-wide transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-accent">Contact</h2>
          <address className="space-y-3 not-italic text-muted">
            <p>{SITE.address}</p>
            <p>
              <a href={SITE.phoneHref} className="font-semibold text-white transition-colors hover:text-accent">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SITE.email}`}
                className="break-all font-semibold text-white transition-colors hover:text-accent"
              >
                {SITE.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="text-xs font-semibold tracking-[0.15em] text-muted">
            © 2026 THE ATHLETIC CLUB. ALL RIGHTS RESERVED.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 bg-accent px-4 py-3 text-xs font-extrabold uppercase tracking-[0.15em] text-black transition-colors hover:bg-white"
          >
            <ArrowUp aria-hidden className="h-4 w-4" /> Back to top
          </a>
        </div>
        <div className="container-x pb-5">
          <p className="text-xs tracking-wide text-muted">
            Developed by{" "}
            <a
              href="https://tyrondelvalle.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline decoration-accent/50 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Tyron Del Valle
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
