# The Athletic Club — Website

Single-page promotional site for **The Athletic Club** (Tacloban City).
Built with React + TypeScript + Vite, Tailwind CSS, Framer Motion and Lucide icons.
No backend, no database, no logins — just a fast static site.

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev        # opens a live preview at http://localhost:5173
npm run build      # type-checks and creates the production site in /dist
npm run preview    # test the production build locally
```

## 2. Replace the logo

Overwrite **`public/images/logo.png`** with your logo file (keep the name `logo.png`).
It is shown in the navbar and footer and is never stretched (height is fixed, width is automatic).
If your new logo has a very different shape, update the `width`/`height` attributes on the `<img>` in
`src/components/Navbar.tsx` and `src/components/Footer.tsx`.
The untouched original is kept as `public/images/logo-original.png`.
Also replace `public/favicon.png` (the browser-tab icon).

## 3. Upload and replace gym photos

The photos currently in `public/images/` are **generated placeholders, not photos of the gym**.

1. Put your real photos in `public/images/`.
2. Give them the **same file names** as the placeholders (easiest), e.g. `hero-gym.jpg`.
   Or use new file names and update them in `src/config/gallery.ts`.

| File | Where it appears | Best size |
|---|---|---|
| `hero-gym.jpg` | Full-screen hero background | 1920×1080, dark & landscape |
| `gym-interior.jpg` | About section (large) + gallery | 1200×1500, portrait |
| `training-01.jpg` | About section (small) + gallery | 1000×1400, portrait |
| `training-02.jpg` | Free-assessment section | 1200×1500, portrait |
| `cta-bg.jpg` | "Your stronger self" banner | 1920×1000, dark & landscape |
| `og-image.jpg` | Link preview on Facebook/Messenger | 1200×630 |

Tips: keep each file under ~300 KB (use [squoosh.app](https://squoosh.app) to compress; WebP/AVIF
also work — just set the new file name in `src/config/gallery.ts`).

## 4. Add (or remove) gallery images

Open **`src/config/gallery.ts`** and edit the `GALLERY` list. Each entry is one photo:

```ts
{
  src: "/images/my-new-photo.jpg",   // file inside public/images
  alt: "Describe the photo",         // for accessibility + SEO
  caption: "Cardio Area",            // text shown on the tile
  width: 1400, height: 1000,         // real pixel size of the file
  layout: "wide",                    // "feature" | "wide" | "tall" | "small"
  placeholder: false,                // false removes the "Sample image" tag
}
```

Delete an entry to remove a photo. Reorder entries to change the order. Nothing else needs editing.

## 5. Update membership prices

Open **`src/config/membership.ts`**. Change `price`, `features` or the `breakdown` rows of any plan.
The plan with `featured: true` gets the highlighted yellow card (use it on only one plan).

## 6. Change contact information

Open **`src/config/site.ts`** and edit `address`, `email`, `phoneDisplay` and `phoneHref`
(`phoneHref` uses the international format, e.g. `tel:+639396619973`). The navbar, contact section,
footer and map all update automatically.

Also update the same details in the structured data block at the top of `index.html`
(`<script type="application/ld+json">`) so Google shows them correctly.

## 7. Update the Facebook URL

In **`src/config/site.ts`** set `facebookUrl` to the official page, e.g.
`"https://www.facebook.com/yourpagename"`. It is currently set to
`https://www.facebook.com/theathleticclub/`. If it changes, also update `"sameAs"` in `index.html`.

The free-assessment Google Form link is `assessmentFormUrl` in the same file.

## 8. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** → import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output `dist`) — click **Deploy**.
4. No environment variables are needed.
5. After you connect your real domain, replace **`REPLACE-WITH-YOUR-DOMAIN.com`** in:
   `index.html`, `public/sitemap.xml`, `public/robots.txt`.

Every time you push a change to GitHub, Vercel redeploys the site automatically.

---

## Project structure

```
public/
  images/            ← logo + all photos (replace here)
  favicon.png  robots.txt  sitemap.xml
src/
  config/
    site.ts          ← contact info, Facebook, Google Form
    membership.ts    ← prices & plans
    gallery.ts       ← hero/section images + gallery list
  components/        ← Navbar, Hero, About, Gallery, Assessment, Membership, CallToAction, Contact, Footer
index.html           ← SEO meta tags + structured data
```

## Notes

- Animations respect the visitor's "reduce motion" setting.
- Membership "Inquire" buttons scroll to the Contact section (phone, email, Facebook).
- Opening hours and Facebook details are intentionally not included until they are provided.
