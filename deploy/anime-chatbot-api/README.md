# Redeploy anime-chatbot-api on Vercel

Copy `vercel.json` from this folder into the root of [kbweeb/anime-chatbot-api](https://github.com/kbweeb/anime-chatbot-api), commit, and push.

Then in the Vercel dashboard:

1. Open project **anime-chatbot-api**
2. Confirm it is linked to `kbweeb/anime-chatbot-api` (not a v0 template)
3. Redeploy from `main`

Expected URLs after fix:

- Demo UI: `https://anime-chatbot-api.vercel.app/` or `/web/`
- API: `POST https://anime-chatbot-api.vercel.app/api/chat` with body `{ "message": "..." }` → `{ "reply": "..." }`

The portfolio uses the built-in demo at `/projects/anime-chatbot/` and calls the API above when available.
