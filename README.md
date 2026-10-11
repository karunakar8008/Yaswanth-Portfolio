# Karunakar Gudipudi — Portfolio

A modern, **immersive** developer portfolio built with **React + Vite**, featuring an
optional **AI recruiter assistant** powered by the Claude API.

**Sections:** Hero (interactive particle canvas) · Professional Summary (animated
counters) · Skills (proficiency bars + filterable toolset) · Experience (expandable
6-company timeline) · Featured work (your own builds) · Client projects (filter by
domain) · Certifications · Education · Contact · AI chatbot.

**Interactive layer:** momentum smooth-scrolling (Lenis), a cursor-reactive particle
constellation in the hero, magnetic buttons, 3D-tilt cards, an infinite tech-stack
marquee, scroll-triggered word-by-word text reveals, animated counters, a scroll
progress bar, scrollspy nav, and ambient gradient glows. Dark/light theme toggle,
fully responsive.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173). `npm run dev` serves **both**
the site and the chatbot API (`/api/chat`) — no separate backend process.

```bash
npm run build     # production build into /dist
npm run preview   # preview the production build
```

> **Heads-up on motion:** animations are frame-driven, so they only run when the
> browser tab/window is **visible and focused**. Embedded preview panes (e.g. an IDE
> or app preview) report the document as "hidden" and **throttle animations** — open
> the site in a real, focused browser window to see the full experience.

## 2. The AI chatbot (optional)

The chatbot calls the Claude API through a serverless function (`/api/chat`) so your
API key stays server-side, never in the browser.

1. Get a key at <https://console.anthropic.com> → **API Keys** (must start with
   `sk-ant-api03-`; a `sk-ant-usr-…` account token will NOT work).
2. Put it in `.env` (copy from `.env.example`):
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-...
   ```
3. Restart `npm run dev`.

Until a valid key is set, the chatbot still opens — it just shows a friendly
"not configured" message. The rest of the site works fully without it.

**Model / cost:** defaults to `claude-haiku-5-5` (a fraction of a cent per question).
Override with `ANTHROPIC_MODEL=claude-opus-5-5` for higher-quality answers. Guardrails
cap response length, history, and per-message size.

> ⚠️ **Corporate keys won't work for a public site.** A work-org Anthropic key may be
> restricted by a network policy (403 "Access restricted by network policy") and will
> be blocked from any non-allowlisted network — including a deployed host. Use a
> **personal** Anthropic account's key for a public portfolio, or run the chatbot
> without the API (see the free-assistant option — ask, it's a small swap).

## 3. Personalize the content

Almost everything lives in **[`src/data/content.js`](src/data/content.js)**:

| What | Key |
| --- | --- |
| Name, role, taglines, summary, email, phone, résumé link | `profile` |
| Social links (LinkedIn/GitHub) — **update the placeholder URLs** | `socials` |
| Summary lead, stat counters, highlights, domains | `summary` |
| Core-competency bars + full skill groups | `coreCompetencies`, `skillGroups` |
| Experience (6 companies) | `experience` |
| Featured work (your own builds) | `featuredProjects` |
| Client projects | `projects` |
| Certifications / Education | `certifications`, `education` |
| Chatbot greeting + suggested questions | `chatbot` |

**Keep the chatbot in sync:** it answers from a *separate* server-side copy of your
résumé in [`api/_resume-context.js`](api/_resume-context.js). Update that file too when
your experience changes.

Quick tweaks:
- **Accent color / theme:** CSS variables at the top of [`src/index.css`](src/index.css)
  (`--accent`, `--accent-strong`, surfaces, borders).
- **Résumé download:** drop `resume.pdf` into `public/` and set `profile.resumeUrl = "/resume.pdf"`.
- **Favicon:** [`public/favicon.svg`](public/favicon.svg) (a "KG" monogram).

## 4. Deploy (free) — Vercel recommended

GitHub stores the code; it doesn't host a running site by itself. Connect a host:

1. Push this folder to a GitHub repo.
2. On <https://vercel.com> (free **Hobby** plan) → **Add New Project** → import the
   repo. It auto-detects Vite and runs `/api/chat` as a serverless function.
3. **Settings → Environment Variables** → add `ANTHROPIC_API_KEY` (and optionally
   `ANTHROPIC_MODEL`) if using the AI chatbot. Redeploy.
4. You get a public URL; every `git push` auto-redeploys.

> Netlify / Cloudflare Pages also work (functions supported). **GitHub Pages** can host
> the static site but **not** the chatbot backend.

## Project structure

```
api/
  chat.js             ← serverless endpoint (Vercel)
  _handler.js         ← shared request handler (Claude call + guardrails)
  _resume-context.js  ← résumé knowledge + system prompt for the AI
src/
  data/content.js     ← ALL site content (edit this)
  components/
    Navbar, Hero, HeroCanvas (particle constellation), Summary, Skills,
    Experience, FeaturedProjects, Projects, Certifications, Education, Contact,
    Footer, Chatbot, SectionHead, AnimatedText (word reveals),
    Motion (ScrollProgress, ParallaxOrbs, TiltCard, Magnetic), Icons
  hooks.js            ← theme, reveal, scrollspy, count-up, parallax, tilt, magnetic
  index.css           ← theme variables + all styles
  App.jsx             ← layout + Lenis smooth-scroll init
  main.jsx
vite.config.js        ← serves /api/chat in local dev (shared handler)
```

## Tech
React 19 · Vite 8 · Lenis (smooth scroll) · `@anthropic-ai/sdk` (chatbot) · plain CSS
(no UI framework) · zero-dependency inline SVG icons and canvas.
