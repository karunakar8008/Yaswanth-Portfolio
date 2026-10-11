# CLAUDE.md — project context

Personal portfolio for **Karunakar Gudipudi** (Senior .NET Full Stack Developer).
React 19 + Vite 8, plain CSS, with an optional Claude-API recruiter chatbot.

## Commands
- `npm run dev` — serves the site **and** the `/api/chat` endpoint (wired via a Vite
  plugin in `vite.config.js`; no separate backend).
- `npm run build` / `npm run preview` — production build / preview.
- After editing `.env`, **restart the dev server** (Vite reads env at startup).

## Where things live
- **All visible content:** `src/data/content.js` (profile, summary, skills, experience,
  featuredProjects, projects, certifications, education, chatbot). Edit here first.
- **Chatbot knowledge:** `api/_resume-context.js` — a *separate* server-side copy of the
  résumé. **Keep it in sync with `content.js`** when experience changes.
- **Styles/theme:** `src/index.css` (CSS variables at top drive the whole look; accent
  is indigo/violet).
- **Motion:** `src/hooks.js` + `src/components/Motion.jsx` + `HeroCanvas.jsx` +
  `AnimatedText.jsx`. App-level Lenis smooth-scroll is initialised in `App.jsx`.

## Design direction (owner's preference)
- **Sleek premium, Linear/Vercel style, indigo/violet accent.** (Amber/gold was tried
  and rejected.) Cinematic-but-subtle motion. The owner is **performance-sensitive.**

## Important gotchas (learned the hard way)
- **Motion is intentionally NOT gated on `prefers-reduced-motion`.** The owner's
  environment reports `reduce`, which was silently disabling every animation. Do not
  re-add reduced-motion gates that turn the experience off.
- **Frame-driven animations only run when the document is visible/focused.** Embedded
  preview panes report `visibilityState: "hidden"` and throttle rAF + freeze CSS
  transitions — the site looks static there. Verify in a real, focused browser.
- **Performance:** keep scroll-driven work cheap — no React state updates on scroll
  (the progress bar updates a ref directly), the hero canvas is throttled to ~30fps /
  dpr 1 and pauses off-screen, orbs are static. Lenis pauses when `document.hidden`.
- **Chatbot API key:** needs a `sk-ant-api03-…` **personal** key with API billing.
  A `sk-ant-usr-…` account token or a corporate-org key (network-policy 403) will NOT
  work — the latter also fails from any deployed host. Key goes in `.env` locally and
  in host env vars on deploy. Default model `claude-haiku-5-5`.

## Deploy
Vercel (free Hobby plan) — auto-detects Vite, runs `/api/chat` as a function. Set
`ANTHROPIC_API_KEY` in Vercel env. GitHub Pages can't run the chatbot backend.

## Still placeholder (owner to fill)
LinkedIn/GitHub URLs in `content.js` `socials`, résumé PDF in `public/`, certification
verify links. The two non-client featured projects (MuleSoft→Azure, API-as-MCP-server)
were reconstructed from past sessions — keep internal/employer identifiers out.
