# yaswanth.dev — Portfolio

A **code-editor-themed** personal portfolio for Yaswanth Daruvuri (Python Full-Stack
Developer). React + Vite, with a **memoji-style AI assistant** that drops down from the
top of the screen with a bouncing avatar and animated mouth.

**Design:** laid out like an IDE — fixed file-tree sidebar for navigation, tabbed top
bar with window dots, syntax-highlighted "code window" cards for sections, a terminal
hero that types out commands, a bento-grid for skills, a `git log` style experience
view, GitHub README-style project cards, and an emerald status bar.

**Palette:** GitHub-ish dark (`#0d1117`), emerald + cyan accents, JetBrains Mono
throughout.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Opens on http://localhost:5173 (or next free port). `npm run dev` serves **both** the
site and the chatbot API (`/api/chat`) — no separate backend process needed.

```bash
npm run build     # production build into /dist
npm run preview   # preview the production build
```

## 2. Turn on the AI assistant (optional)

The memoji chatbot calls the Claude API through a serverless function so your API key
stays server-side, never in the browser.

1. Get a **personal** key at <https://console.anthropic.com> → **API Keys**
   (must start with `sk-ant-api03-`; a `sk-ant-usr-…` token won't work).
2. Copy `.env.example` to `.env` and paste your key:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-...
   ```
3. Restart `npm run dev`.

The chatbot defaults to **`claude-haiku-5-5`** (low cost). Change in `api/_handler.js`.
Without a key, the chatbot still drops in — it just shows a friendly "something went
wrong" message in the speech bubble.

## 3. Personalize the content

Edit **[`src/data/content.js`](src/data/content.js)**:

| What | Key |
| --- | --- |
| Name, role, taglines, email, phone, GitHub, résumé link | `profile` |
| Hero stats | `heroStats` |
| About (Python class) highlights + domains | `about` |
| Skills bento tiles (category + items + accent color) | `skillGroups` |
| Experience (git-log commits) | `experience` |
| Projects (README cards) | `projects` |
| Certifications / Education | `certifications`, `education` |
| Chatbot greeting + suggested questions + avatar name | `chatbot` |

The chatbot answers from a *separate* server-side copy in
[`api/_resume-context.js`](api/_resume-context.js). Keep it in sync.

Quick tweaks:
- **Accent colors:** CSS variables at the top of [`src/index.css`](src/index.css)
  (`--emerald`, `--cyan`, and per-tile `.accent-*` classes).
- **Favicon:** [`public/favicon.svg`](public/favicon.svg) (a `</>` bracket mark).
- **Memoji look:** [`src/components/Memoji.jsx`](src/components/Memoji.jsx) is an
  inline SVG character — edit hair, shirt color, skin tone, etc. right there.

## 4. Deploy (free) — Vercel recommended

1. Push to a GitHub repo.
2. On <https://vercel.com> (free Hobby plan) → **Add New Project** → import → Deploy.
3. In **Settings → Environment Variables**, add `ANTHROPIC_API_KEY`. Redeploy.

## Project structure

```
api/
  chat.js             ← serverless endpoint (Vercel)
  _handler.js         ← shared request handler (Claude call + guardrails)
  _resume-context.js  ← résumé knowledge + system prompt for the AI
src/
  data/content.js     ← ALL site content (edit this)
  components/
    TopBar (tabs + window dots), Sidebar (file tree), StatusBar,
    TerminalHero (typed shell), CodeWindow (section wrapper), About (Python class),
    Skills (bento grid), Experience (git log), Projects (README cards), Contact,
    Memoji (SVG avatar), MemojiChat (dropping chatbot UI), Icons
  hooks.js            ← reveal, scrollspy, live clock
  index.css           ← theme variables + all styles
  App.jsx / main.jsx
vite.config.js        ← serves /api/chat in local dev
```

## Tech
React 19 · Vite 8 · `@anthropic-ai/sdk` (chatbot) · plain CSS · inline SVG icons &
memoji — no UI framework, no icon package.
