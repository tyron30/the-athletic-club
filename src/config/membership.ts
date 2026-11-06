/**
 * ============================================================
 *  MEMBERSHIP & PRICING  —  edit prices here
 * ============================================================
 * Each plan renders as one pricing card. Change `price`, the
 * `features` text or add/remove plans — no other file needs touching.
 * Set `featured: true` on ONE plan to give it the highlighted style.
 */

export interface Plan {
  id: string;
  name: string;
  price: string;
  priceLabel?: string; // small text next to the price
  features: string[];
  breakdown?: { amount: string; label: string }[];
  explainer?: string;
  cta: string;
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "walk-in",
    name: "Walk-In",
    price: "₱350",
    features: ["Single gym visit", "No monthly commitment", "Ideal for occasional training"],
    cta: "GET IN TOUCH",
  },
  {
    id: "monthly",
    name: "Monthly Membership",
    price: "₱3,400",
    priceLabel: "FIRST MONTH",
    breakdown: [
      { amount: "₱1,500", label: "One-time key access fob" },
      { amount: "₱1,900", label: "First month membership" },
      { amount: "₱1,900", label: "Monthly succeeding membership fee" },
    ],
    explainer:
      "Your first-month payment is ₱3,400: the ₱1,500 one-time key access fob plus ₱1,900 for your first month of membership. Each succeeding month is ₱1,900.",
    features: [],
    cta: "INQUIRE NOW",
    featured: true,
  },
  {
    id: "3-month",
    name: "3-Month Membership",
    price: "₱5,400",
    features: ["Three-month membership", "Great for building consistency"],
    cta: "INQUIRE NOW",
  },
  {
    id: "6-month",
    name: "6-Month Membership",
    price: "₱10,500",
    features: ["Six-month membership", "Ideal for long-term fitness commitment"],
    cta: "INQUIRE NOW",
  },
  {
    id: "12-month",
    name: "12-Month Membership",
    price: "₱20,000",
    features: ["Twelve-month membership", "Long-term training commitment"],
    cta: "INQUIRE NOW",
  },
];
