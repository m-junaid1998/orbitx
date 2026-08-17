# OrbitX Digital Solutions — Website

A React + Vite + Tailwind CSS site for OrbitX Digital Solutions. Light theme, five sections.

---

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edits appear instantly.

```bash
npm run build     # production build → dist/
npm run preview   # check the production build locally
```

Needs **Node.js 18+**. Check with `node -v`.

---

## Sections

| Section | Component | Anchor |
|---|---|---|
| Home / hero | `Hero.jsx` | `#top` |
| Build → Market → Scale band | `ScaleBand.jsx` | — |
| Services | `Services.jsx` | `#services` |
| About Us | `About.jsx` | `#about` |
| Projects Delivered | `Projects.jsx` | `#work` |
| Contact Us | `Contact.jsx` | `#contact` |

Reorder or remove sections in `src/App.jsx`.

---

## Project structure

```
orbitx-portfolio/
├── index.html                    # fonts and meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js            # colour palette, fonts, shadows
├── postcss.config.js
├── .github/workflows/deploy.yml  # auto-deploys to GitHub Pages
├── public/
│   └── assets/
│       └── OrbitX_logo.png       # logo + project images go here
└── src/
    ├── main.jsx                  # React entry
    ├── index.css                 # Tailwind + custom utilities
    ├── App.jsx                   # section order
    ├── data/
    │   └── site.js               # ← ALL CONTENT LIVES HERE
    ├── lib/motion.js
    └── components/
        ├── Nav.jsx      Hero.jsx       OrbitMark.jsx
        ├── ScaleBand.jsx
        ├── Services.jsx About.jsx
        ├── Projects.jsx ProjectArt.jsx
        ├── Contact.jsx  Footer.jsx
        └── ui/
            ├── Button.jsx  Icon.jsx    Logo.jsx
            ├── Reveal.jsx  Section.jsx Eyebrow.jsx
```

---

## Editing content

Everything lives in **`src/data/site.js`**. You never need to open a component to change copy.

```js
export const site = {
  company: 'OrbitX',                       // short name — nav, footer
  companyFull: 'OrbitX Digital Solutions', // full name — body copy
  founder: 'Muhammad Usman',
  email: 'orbitxdigital8@gmail.com',
  instagram: 'https://www.instagram.com/orbitxdigital8/',
  ...
}
```

**Contact channels** — `email`, `instagram` and `linkedin` each render as a large card in the contact panel. `phone`, `whatsapp` and `facebook` are empty strings by default and stay hidden; fill any of them in and the button appears on its own. For WhatsApp use digits only with country code, e.g. `'923001234567'`. Clear a value and its card disappears — the row re-flows either way.

**Edit the Build → Market → Scale band** — the `scaleSteps` array. Three steps is not fixed; add a fourth and the band re-flows.

**Add a teammate** — add a block to the `team` array. The team renders as a row of cards at the bottom of the About section — there is no separate Team page section and no extra nav item. Put photos in `public/assets/team/` (square, 400×400 or larger) and set `image: './assets/team/name.jpg'`. Leave `image` empty and the person's initials show instead, so the layout works before every photo has arrived.

All five photos share one treatment — square crop, navy duotone, 400×400 — because the originals came from five very different settings and looked unrelated side by side. `public/assets/team/README.txt` has the recipe for matching a new photo to the set.

Only list people who actually work with you, and get their permission before publishing a name or photo.

**Add a service** — add an object to `services`. Add as many as you want: no headline says how many there are, and the grid re-flows on its own.
Icons available: `code`, `phone`, `megaphone`, `search`, `layers`, `shield`, `users`, `refresh`, `clock`, `message`, `trend`, `spark`.

**Add a project** — copy a block in `projects` and change the values.

- `category` is the label on the chip: "E-commerce Solution", "Management System", "Mobile Solution", "Marketing Solution", or anything you like.
- `art` picks the illustration. Eight are available:

  | key | shows |
  |---|---|
  | `ecommerce` | product grid with cart |
  | `storefront` | banner and collection row |
  | `management` | dashboard with sidebar and table |
  | `hr` | people list with status pills |
  | `ordering` | order list with steppers and delivery pin |
  | `weather` | phone with conditions and forecast |
  | `mobile` | generic phone layout |
  | `marketing` | growth chart with trend line |
- `image: './assets/name.jpg'` uses a real screenshot instead — put the file in `public/assets/`. A screenshot always beats the illustration; add them as soon as you have them.
- `result` stays hidden until you fill it in, so a project without a number still looks complete.

Two extra project templates sit commented out at the bottom of the `projects` array — a mobile app and a marketing campaign. Uncomment them **only** once you have real work of that kind to describe.

**Colours and fonts** — `tailwind.config.js` for the palette, `index.html` for the Google Fonts link.

---

## Before going live

In `src/data/site.js`:

- [ ] **Delete or rewrite the two example projects.** The Fashion Accessories Store and Community Operations Management System are your real work. Restaurant Ordering App and Retail Brand Growth Campaign are marked `EXAMPLES` in a comment — they are suggestions of the kind of work that attracts clients, not work you have done. Publishing them as delivered projects would be a false claim.
- [ ] **Add results.** Each project has an empty `result: ''`. Fill in a real number — "2× online orders", "Sales tracked for the first time" — and the Result block appears on that card. Leave it empty and the block stays hidden, so a project without a number still looks complete.
- [ ] **Confirm the WhatsApp country code.** `whatsapp` is set to `'923333310011'`, assuming `0333-3310011` is a Pakistani number. If it should be a Saudi number, change it to the `966…` form.
- [ ] Add project screenshots to `public/assets/` and reference them with `image: './assets/name.jpg'`.

---

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` builds and publishes on every push.

1. Push this project to a GitHub repo, branch `main`.
2. Repo **Settings → Pages → Source → GitHub Actions**.
3. Push anything. It builds and deploys in about a minute.

Live at `https://<username>.github.io/<repo>/`.

**Netlify or Vercel:** import the repo, build command `npm run build`, publish directory `dist`. Both detect Vite automatically.

`vite.config.js` sets `base: './'`, so asset paths work from any sub-path — nothing to change when the repo name changes.

---

## Logo files

Three files in `public/assets/`:

| File | Used for | Notes |
|---|---|---|
| `orbitx-logo.png` | Header and footer | Your logo, cropped to the mark with the white background removed. 500×192, transparent. |
| `orbitx-icon.png` | Browser tab, phone home screen | The X and its orbit ring, square, 256×256. |
| `OrbitX_logo-original.png` | Kept for reference | The full mockup you supplied. Not used by the site. |

`src/components/ui/Logo.jsx` renders `orbitx-logo.png` everywhere the wordmark appears. **To change the logo across the whole site, replace that one file** — keep the same name and roughly the same proportions and nothing else needs touching.

If you get a vector version later, drop the `.svg` into `public/assets/` and change the `src` in `Logo.jsx`. SVG stays sharp at any size and weighs far less.

Size is set by the caller, not the component: `<Logo className="h-9 w-auto" />` in the header, `h-10` in the footer. Change those numbers to resize.

---

## Making the contact form deliver

The form currently opens the visitor's email app pre-filled. The email and Instagram cards above it work regardless, which is why they're the prominent option.

To collect form submissions properly:

1. Create a free form at [formspree.io](https://formspree.io) — you get a form ID.
2. In `src/components/Contact.jsx`, find `handleSubmit` and replace the `mailto` block with:

```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
})
```

3. Change `const handleSubmit = (e) => {` to `const handleSubmit = async (e) => {`.

---

## Design system

| | |
|---|---|
| **Background** | `#E8EFF9` canvas · `#FFFFFF` panels · `#D7E5FA` blue wash |
| **Dark panels** | `#0B1E3B` navy — the scale band and contact panel |
| **Primary** | `#1B57BE` — buttons, links, active states (`#123F91` on hover) |
| **Accent** | `#4A93EE` sky — orbit lines, secondary marks |
| **Text** | `#061223` headings · `#3B4E68` body · `#6B7F9B` captions |
| **Border** | `#CBD9EC` hairline |
| **Display type** | Archivo, 110% width, −0.025em tracking |
| **Body type** | Instrument Sans |
| **Utility type** | JetBrains Mono — eyebrows, tech tags |
| **Radius** | 12px inputs · 20px cards · 28px panels · full on buttons |
| **Shadows** | `soft` at rest, `lift` on hover, `blue` on primary buttons |
| **Spacing** | 4px base scale; sections 80px mobile / 112px desktop |
| **Motion** | 300–500ms on `cubic-bezier(.16,1,.3,1)`, disabled under `prefers-reduced-motion` |

**Motion.** A progress bar fills across the top as you scroll (`ScrollProgress`). Sections fade up as they enter view (`Reveal`). The hero numbers count up on first sight (`Counter`), and "technology" carries a slowly drifting gradient (`animate-flow`). Two blurred washes of colour move behind the hero (`animate-aurora`, 22s and 28s). A faint light sweeps across the dark Build → Market → Scale panel every 7s (`animate-sheen`). Primary buttons catch a sweep of light on hover, service icons tilt, team cards and project cards lift. The orbit mark floats while its satellites trace their paths.

All of it stops under `prefers-reduced-motion` — nothing moves for a visitor who has asked for stillness.

The signature element is the orbital mark in the hero — three tilted elliptical paths with satellites tracing them, taken from the ring around the X in the logo. The same ellipse reappears as project card artwork and, at low opacity, behind the blue contact panel.

The page stays light, but not washed out: a canvas with real depth, white panels lifting off it, and two dark navy-to-blue panels bookending the page — the Build → Market → Scale band under the hero, and the contact panel at the end. Those two carry the message and the call to action, so they are the two places the eye is pulled.

Accessibility: keyboard focus rings, `aria-expanded` on the mobile nav, labelled form fields, reduced-motion respected, WCAG AA contrast on body text.
#   o r b i t x  
 