# Gladius Law — Litigation Chambers, Mumbai

Premium single-page marketing site built with Next.js (App Router), Tailwind CSS, Framer Motion, and React Three Fiber.

**Defending Ambitions. Resolving Disputes.**

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3 with brand tokens |
| Animation | Framer Motion 11 (scroll reveals, count-ups, AnimatePresence) |
| 3D | React Three Fiber 8 + Three.js (hero wireframe scene) |
| Icons | lucide-react |
| Fonts | Playfair Display + Inter via `next/font` (self-hosted, zero CLS) |

## Brand tokens

Defined in `tailwind.config.js` and `app/globals.css`:

- `#245F61` — Deep Teal (primary headings, authoritative UI)
- `#A99A78` — Muted Gold/Bronze (borders, dividers, hover accents)
- `#EBE6DC` — Warm Alabaster/Parchment (canvas background)

## Architecture

```
app/
  layout.jsx        # fonts, metadata, body shell
  page.jsx          # section composition
  globals.css       # tokens, .btn/.glass/.eyebrow primitives, ticker
components/
  Nav.jsx           # glassmorphism nav + animated mobile drawer
  Hero.jsx          # parallax typography, masked line reveal, 3D mount logic
  canvas/
    StructuralScene.jsx  # R3F intersecting-rectangle wireframe (brand motif)
  About.jsx         # asymmetric slide reveals
  PracticeAreas.jsx # 3D tilt cards + metric expansion on hover
  Impact.jsx        # count-up stats via framer-motion animate()
  Judgments.jsx     # seamless infinite results ticker
  Counsel.jsx       # partner grid with monogram plates
  Footprint.jsx     # interactive SVG node map (BHC / NCLT / SC)
  Contact.jsx       # privileged briefing form with gold focus states
  Footer.jsx        # BCI-compliant disclaimer
lib/
  data.js           # all mock content in one place
  motion.js         # shared Framer Motion variants
```

## Performance & accessibility

- The WebGL scene is loaded with `next/dynamic` (`ssr: false`) inside `Suspense`, and only mounts on screens ≥ 768px — mobile gets a lightweight static SVG fallback.
- `prefers-reduced-motion` is respected everywhere: canvas drift, tilt, count-ups, reveals, and the ticker all degrade gracefully.
- Keyboard: focus-visible gold outlines, the footprint map nodes are focusable buttons, practice card metrics open on focus-within.
- Fonts are self-hosted through `next/font` (no render-blocking Google Fonts request).

## Wiring the briefing form

`components/Contact.jsx` currently sets a local success state. To go live, post `form` to an App Router route handler (`app/api/brief/route.js`) and forward to your CRM or email provider.

---

Per Bar Council of India rules, ensure final copy remains informational and non-solicitous before publishing.
