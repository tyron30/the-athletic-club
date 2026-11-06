/**
 * ============================================================
 *  SITE SETTINGS  —  edit contact info and links here
 * ============================================================
 * Everything on the website that shows contact details, the
 * Facebook link, the Google Form or the map reads from this file.
 */

export const SITE = {
  name: "The Athletic Club",

  // --- Contact information -------------------------------------------------
  address: "The Athletic Club, Uytinkoc Bldg., Avenida Veteranos, Tacloban City, Philippines, 6500",
  email: "theathleticclubph@gmail.com",
  phoneDisplay: "0939 661 9973",
  phoneHref: "tel:+639396619973",

  // --- Facebook ------------------------------------------------------------
  // Official Facebook page. Change it here if the page URL ever changes.
  facebookUrl: "https://www.facebook.com/theathleticclub/",
  // Opens a Messenger chat with the page (uses the page username from the URL above).
  // Used by the "Get in touch" / "Inquire now" buttons.
  messengerUrl: "https://m.me/theathleticclub",

  // --- Free fitness assessment registration (Google Form) -----------------
  assessmentFormUrl: "https://forms.gle/DHnKbQZY3NkFdTP18",
} as const;

/** Google Maps embed (no API key needed) built from the address above. */
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.address,
)}&output=embed`;

/** Section ids used for navigation + smooth scrolling. */
export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "facilities", label: "Facilities" },
  { id: "membership", label: "Membership" },
  { id: "assessment", label: "Free Assessment" },
  { id: "contact", label: "Contact" },
] as const;
