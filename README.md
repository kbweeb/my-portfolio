## Portfolio App

Simple Next.js portfolio. Run locally using npm.

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ (bundled with Node.js)

### Install
```
npm install
```

### Develop
```
npm run dev
```
Then open:
- http://localhost:3000

Windows PowerShell users: run commands one per line. Example:
```
cd C:\Users\ednaa\portfolio
npm install
npm run dev
```

### Build (optional)
```
npm run build
npm start
```

### Notes
- Navigation uses an in‑page view switcher with URL hash (e.g., `/#projects`).
- Project demos also live at `/projects/encrypted-bank/` and `/projects/anime-chatbot/`.

### Deploy to GitHub Pages

1. Push to `main` — the workflow publishes the `out/` folder to the `gh-pages` branch.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Branch** = `gh-pages`, folder `/ (root)`.
3. Site URL: `https://kbweeb.github.io/my-portfolio/` (project pages base path matches the repo name).

Optional env at build time (set in the workflow):

- `NEXT_PUBLIC_BASE_PATH` — `/my-portfolio` on GitHub Pages
- `NEXT_PUBLIC_CHATBOT_API` — anime API base URL (default: Vercel deployment)

### Anime chatbot API on Vercel

If `anime-chatbot-api.vercel.app` shows a v0 placeholder, copy `deploy/anime-chatbot-api/vercel.json` into the [anime-chatbot-api](https://github.com/kbweeb/anime-chatbot-api) repo, reconnect the Vercel project to that repository, and redeploy. See `deploy/anime-chatbot-api/README.md`.
