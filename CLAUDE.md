# CLAUDE.md — project context

Personal portfolio for **Yaswanth Daruvuri** (Python Full-Stack Developer).
React 19 + Vite 8 + optional Claude-API chatbot. **This is the IDE-themed, memoji-
chatbot variant** — intentionally different from the two sister projects
`portfolio` and `portfolio-aws` (which are a sleek Linear/Vercel style).

## Design direction (do not blur the identity)
- **IDE / code-editor aesthetic** — fixed file-tree sidebar nav, tab bar with the
  three "traffic light" window dots, syntax-highlighted "code window" cards for
  sections, a `git log` style experience view, a bento grid for skills, GitHub
  README-style project cards, emerald status bar at the bottom.
- **Palette:** GitHub dark (`#0d1117`), **emerald + cyan** accents, lots of per-tile
  secondary colors (violet/amber/pink/sky/orange/lime/rose) in the bento.
- **Type:** JetBrains Mono everywhere; Inter only for long-form body copy inside
  cards.
- **Chatbot = memoji** — an SVG character that **drops in from the top of the
  screen** on a thin green rope, with a bouncy spring. Mouth animates while loading
  / typing (`.memoji.speaking .mouth` keyframe). Speech bubble appears beside it;
  past turns go into a compact history below.

## Commands
- `npm run dev` — serves the site AND `/api/chat` (wired in `vite.config.js`).
- `npm run build` / `npm run preview`.
- After editing `.env`, **restart** the dev server.

## Where things live
- **All visible content:** `src/data/content.js` (profile, about, skills, experience,
  projects, certifications, education, chatbot).
- **Chatbot knowledge:** `api/_resume-context.js` — separate server-side copy of the
  résumé. Keep in sync with `content.js`.
- **Styles/theme:** `src/index.css` — CSS variables at the top drive everything.
- **Memoji character:** `src/components/Memoji.jsx` — inline SVG. Edit hair/skin/
  shirt directly in the gradients + path data.

## Chatbot API notes (same as sister projects)
- Needs a **personal** `sk-ant-api03-…` key with API billing. A `sk-ant-usr-…`
  account token or corporate-org key (network-policy 403) will NOT work.
- Model is **hardcoded** to `claude-haiku-5-5` in `api/_handler.js` so a stray
  `ANTHROPIC_MODEL` env var can't break it with a dotted/invalid id.

## Deploy
Vercel (free Hobby) — auto-detects Vite, runs `/api/chat` as a function. Add
`ANTHROPIC_API_KEY` in Vercel env. GitHub Pages can't run the chatbot backend.

## Still placeholder (owner to fill)
Résumé PDF in `public/`, LinkedIn URL (not yet in `socials` — the sidebar instead
uses GitHub from `profile.github`). The memoji is a generic cartoon — if you want
to style it to look more like Yaswanth, tweak the SVG in `Memoji.jsx`.
