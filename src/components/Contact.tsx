import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Button, Eyebrow, Headline, Hl, Reveal } from "./ui";
import { MAP_EMBED_URL, SITE } from "../config/site";

export default function Contact() {
  const rows = [
    {
      icon: MapPin,
      label: "Address",
      content: <address className="not-italic">{SITE.address}</address>,
    },
    {
      icon: Phone,
      label: "Contact Number",
      content: (
        <a href={SITE.phoneHref} className="transition-colors hover:text-accent">
          {SITE.phoneDisplay}
        </a>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      content: (
        <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-accent">
          {SITE.email}
        </a>
      ),
    },
    {
      icon: Facebook,
      label: "Facebook",
      content: (
        <a
          href={SITE.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          Follow {SITE.name} on Facebook
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-black py-24 sm:py-32">
      <div className="container-x">
        <Eyebrow>Location &amp; Contact</Eyebrow>
        <Headline
          className="text-[clamp(2.8rem,8vw,6.5rem)]"
          lines={[
            <>FIND US.</>,
            <>
              LET'S GET YOU <Hl>STARTED.</Hl>
            </>,
          ]}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="display text-3xl text-accent">{SITE.name}</p>
            <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {rows.map(({ icon: Icon, label, content }) => (
                <li key={label} className="flex items-start gap-4 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent text-black">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{label}</div>
                    <div className="mt-1 text-base font-semibold leading-snug sm:text-lg">{content}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative h-full min-h-[340px] border border-white/10 bg-charcoal">
              <iframe
                title="Map showing The Athletic Club, Uytinkoc Bldg., Avenida Veteranos, Tacloban City"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)]"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 bg-accent p-8 text-black sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <h3 className="display text-4xl sm:text-5xl lg:col-span-6">
              QUESTIONS ABOUT MEMBERSHIP? TALK TO US.
            </h3>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
              <Button href={SITE.phoneHref} variant="dark">
                CALL {SITE.phoneDisplay}
              </Button>
              <Button href={`mailto:${SITE.email}`} variant="dark">
                EMAIL US
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
