# The Macedonian Call Cancer Foundation — Website

A grassroots NGO website built to bring visibility to community cancer
screening, medical/surgery support, and family relief work in Bende LGA,
Abia State. Built with React, Vite, and Tailwind CSS v4.

> **Status: In progress.** This README reflects what's built so far — several
> sections still use placeholder content, dummy data, or empty image slots.
> See [Current Status](#current-status) below before assuming any section is
> production-ready.

---

## Tech Stack

- **React 19** — component library
- **Vite** — build tool / dev server
- **Tailwind CSS v4** — styling, using the new `@theme` / CSS-variable
  approach (no `tailwind.config.js` needed)
- **React Router DOM v6** — routing
- **ESLint** (flat config) — linting, not oxlint (see note below)

### Why ESLint over oxlint

ESLint was chosen as the primary linter because `eslint-plugin-react-hooks`
(specifically `exhaustive-deps`) has more mature coverage for this codebase's
size than oxlint currently offers. Oxlint can be added later as a fast
first-pass filter alongside ESLint if build times become a concern — not
needed at this project's current scale.

---

## Getting Started

```bash
npm install
npm run dev       # starts the Vite dev server
npm run build      # production build
npm run lint       # run ESLint
```

---

## Folder Structure

```
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx        # sticky nav, lively dropdown, mobile hamburger
│   │   ├── Footer.jsx        # mountain-top footer edge
│   │   └── ThemeToggle.jsx   # light/dark switch (lives in Navbar)
│   ├── home/                 # homepage-only sections
│   │   ├── Hero.jsx
│   │   ├── ApproachChain.jsx
│   │   ├── FocusCards.jsx
│   │   ├── StorySection.jsx
│   │   ├── TeamGrid.jsx
│   │   ├── LeadershipCards.jsx
│   │   └── CtaBanner.jsx
│   └── ui/                   # shared primitives
│       ├── Button.jsx
│       ├── SectionHeading.jsx
│       └── ArrowShape.jsx    # chevron/octagon clip-path wrapper
├── context/
│   └── ThemeContext.jsx      # light/dark state, persisted to localStorage
├── data/
│   ├── navLinks.js           # nav + footer link structure
│   ├── services.js           # focus area cards + "Our Approach" steps
│   └── team.js                # team + leadership names/roles (from flyer)
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── WhatWeDo.jsx
│   ├── Team.jsx
│   ├── Stories.jsx
│   ├── GetInvolved.jsx
│   ├── Donate.jsx
│   └── Contact.jsx
├── App.jsx                   # router + ThemeProvider + layout shell
├── main.jsx
└── index.css                 # Tailwind v4 import + theme tokens
```

---

## Theming (Light / Dark)

Colors are defined as CSS custom properties in `index.css`, wired into
Tailwind v4 via `@theme`. Toggling is a single class swap:

```js
document.documentElement.classList.toggle('dark')
```

`ThemeContext.jsx` handles this automatically — reads system preference on
first load, persists the user's choice to `localStorage`, and exposes
`useTheme()` for any component that needs the current theme or the toggle
function. No external theme package is used or required.

Palette: primary **blue** (`#2563EB` light-mode primary), with coral, amber,
and teal as supporting accent colors.

---

## Images

No image hosting is wired in yet. All image slots across the codebase are
marked with `// IMAGE:` comments describing what should go there (subject,
orientation, minimum dimensions) — for example:

```jsx
{/* IMAGE: headshot, square crop, min 400x400px */}
<img src="" alt="..." />
```

The plan is to host all real assets on **Cloudinary** and fetch by URL — so
every blank `src=""` or `photoUrl: null` in the `data/` files is a direct
swap-in point once assets are uploaded. Several components (`TeamGrid.jsx`,
`Stories.jsx`, `GetInvolved.jsx`) already have conditional fallbacks (initials
avatars, "Image pending" labels) so the UI doesn't show broken-image icons in
the meantime.

---

## Current Status

### ✅ Done
- Full folder scaffold, Tailwind v4 + light/dark theming
- Navbar (desktop dropdown + mobile hamburger menu) and mountain-top Footer
- Homepage fully built: Hero, Our Approach chain, Focus Cards, Story section,
  Team grid, Leadership cards, CTA banner
- All 7 secondary pages scaffolded with real layout and copy (About,
  What We Do, Team, Stories, Get Involved, Donate, Contact)
- Responsive pattern established: 4-item grids collapse to a 2×2 grid on
  mobile instead of trying to force desktop layouts to shrink

### 🚧 Not done yet — do not treat as final
- **Images** — every image slot across the site is a placeholder (`src=""`
  or `photoUrl: null`). Nothing is connected to Cloudinary yet.
- **Team & leadership photos** — names/roles are real (pulled from the
  foundation's own outreach flyer), but photos are initials-avatar
  placeholders. Real headshots need to be matched to the correct person
  manually — do not guess-crop faces from event group photos.
- **Donate page** — currently shows a **dummy bank account** as a stand-in.
  No live payment processor is integrated. Paystack/Flutterwave integration
  (with a small serverless function for transaction verification) is the
  planned next step, not yet started.
- **Contact form** — submits to `console.log` only. No backend or form
  service (Formspree / EmailJS / Web3Forms) is wired up yet.
- **Partners section** (`GetInvolved.jsx`) — 5 placeholder slots with no real
  partner names or logos yet.
- **Site search** — not built. Deferred until there's enough content
  (articles/stories) to make search worthwhile.
- **Stories content** — all 4 story entries are placeholder titles/excerpts,
  not real published stories yet.
- **Full light/dark + mobile QA pass** — individual sections were checked
  as they were built, but a full click-through across every page, in both
  themes, at mobile width, has not been done yet.

---

## Design Notes for Future Contributors

- **Arrow/chevron shapes** (`ArrowShape.jsx`) are used for the Hero's
  decorative elements and the "Our Approach" step chain. On screens below
  `md:`, these switch to plain rounded cards instead of the interlocking
  chevron shape — the clip-path cuts too much usable space out of the box at
  narrow widths, so don't force the chevron shape below `md:`.
- **Data-driven, not hardcoded**: nav links, footer links, service cards,
  team members, and leadership bios all live in `src/data/` and are imported
  by the components that render them. If you're duplicating content instead
  of importing from `data/`, something's been done inconsistently with the
  rest of the codebase — fix the data file, not the component. 