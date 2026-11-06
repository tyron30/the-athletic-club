import { Check } from "lucide-react";
import { Eyebrow, Headline, Hl, Reveal, TiltCard, Button } from "./ui";
import { PLANS, type Plan } from "../config/membership";
import { SITE } from "../config/site";

// Desktop layout: row 1 = 3 cards, row 2 = 2 wider cards (6-col grid)
const COL_SPAN: Record<string, string> = {
  "walk-in": "lg:col-span-2",
  monthly: "lg:col-span-2",
  "3-month": "lg:col-span-2",
  "6-month": "lg:col-span-3",
  "12-month": "lg:col-span-3",
};

function PlanCard({ plan }: { plan: Plan }) {
  const f = plan.featured;
  return (
    <TiltCard className="h-full">
      <article
        className={`cut-corner relative flex h-full flex-col p-7 sm:p-8 ${
          f ? "bg-accent text-black" : "border border-white/10 bg-charcoal text-white"
        }`}
      >
        {f && (
          <span className="absolute right-0 top-0 bg-black px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent">
            Featured
          </span>
        )}
        <h3
          className={`text-xs font-extrabold uppercase tracking-[0.22em] ${
            f ? "text-black/70" : "text-muted"
          }`}
        >
          {plan.name}
        </h3>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-3">
          <span className={`display text-[4.2rem] leading-none sm:text-7xl ${f ? "text-black" : "text-accent"}`}>
            {plan.price}
          </span>
          {plan.priceLabel && (
            <span className="text-sm font-extrabold uppercase tracking-widest">{plan.priceLabel}</span>
          )}
        </div>

        {plan.breakdown && (
          <ul className={`mt-6 divide-y ${f ? "divide-black/20" : "divide-white/10"}`}>
            {plan.breakdown.map((b) => (
              <li key={b.label} className="flex items-baseline justify-between gap-4 py-3 text-sm sm:text-base">
                <span className="font-semibold">{b.label}</span>
                <span className="display whitespace-nowrap text-xl">{b.amount}</span>
              </li>
            ))}
          </ul>
        )}
        {plan.explainer && (
          <p className={`mt-4 text-sm leading-relaxed ${f ? "text-black/80" : "text-muted"}`}>
            {plan.explainer}
          </p>
        )}

        {plan.features.length > 0 && (
          <ul className="mt-6 space-y-3">
            {plan.features.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm sm:text-base">
                <Check
                  aria-hidden
                  className={`mt-0.5 h-5 w-5 shrink-0 ${f ? "text-black" : "text-accent"}`}
                  strokeWidth={3}
                />
                <span className={f ? "" : "text-muted"}>{t}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-8">
          {/* Inquiry buttons open a Messenger chat with the Facebook page (set in config/site.ts) */}
          <Button href={SITE.messengerUrl} external variant={f ? "dark" : "primary"} block>
            {plan.cta}
          </Button>
        </div>
      </article>
    </TiltCard>
  );
}

export default function Membership() {
  return (
    <section id="membership" className="relative bg-charcoal py-24 sm:py-32">
      <div className="container-x">
        <Eyebrow>Membership &amp; Pricing</Eyebrow>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Headline
              className="text-[clamp(2.8rem,8vw,6.5rem)]"
              lines={[
                <>INVEST IN YOURSELF.</>,
                <>
                  <Hl>START TRAINING.</Hl>
                </>,
              ]}
            />
          </div>
          <Reveal className="lg:col-span-4">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Choose a membership that fits your goals, your schedule, and your commitment.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.id}
              delay={(i % 3) * 0.1}
              className={`${COL_SPAN[plan.id] ?? "lg:col-span-2"} ${
                plan.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
