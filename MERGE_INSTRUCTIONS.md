# Merge Guide: New UI + Old Content/Contact

This project uses the NEW design (Next.js) while pulling CONTENT and CONTACT from the OLD portfolio repo.

Old repo: https://github.com/kbweeb/my-portfolio

## What was merged already
- Integrated the old contact behavior (direct email compose) into the NEW UI:
  - Added: `components/sections/contact-form.tsx` (opens Gmail compose; falls back to `mailto:`)
  - Inserted into About page under “Get in Touch”.
  - To address: `kbweeb.01@gmail.com`

## What to copy from OLD → NEW (Content/Data)
Update these files with your exact info from the old site:
- `components/views/home-view.tsx`
  - Name, role/short bio, social links (GitHub, LinkedIn, Instagram), and any tagline.
- `components/views/about-view.tsx`
  - Replace the paragraph texts with your old “About” wording.
- `app/layout.tsx`
  - Update `<Metadata>`: title, description, open graph, icons (favicon). Copy from the old site’s `<head>`.
- `public/`
  - Favicon and any images you used in the old site.

Tip: Open the old repo `app/page.tsx` and copy name/bio/links verbatim.

## Contact form functionality (from OLD)
The old site sent messages to your email “like a normal email”. The new form replicates this:
- File: `components/sections/contact-form.tsx`
- Behavior: opens Gmail compose with prefilled To/Subject/Body. If popups are blocked, it falls back to `mailto:`.
- To change the recipient, edit the `toEmail` prop where used in `about-view.tsx`:
  ```tsx
  <ContactForm toEmail="kbweeb.01@gmail.com" />
  ```

If the old repo also contains an EmailJS key or other service, you can swap the submit logic inside `contact-form.tsx` with that code. Keep the UI as is to preserve the new layout.

## What to remove/keep
- Keep: All NEW UI components, views, and styling.
- Replace texts/images/links with OLD content where noted above.
- Remove: Any leftover placeholder names (e.g., "Joshua Effiong") after you paste your real info.

## Test locally
```
npm install
npm run dev
# open http://localhost:3000
```
- Go to About → Get in Touch → send a message. A Gmail compose tab should open to `kbweeb.01@gmail.com` with your message.

## Deploy to GitHub Pages (my-portfolio)
Option A: Static export to `docs/` (recommended)
1. Add `next.config.ts` with export:
   ```ts
   // next.config.ts
   import type { NextConfig } from 'next'
   const nextConfig: NextConfig = { output: 'export' }
   export default nextConfig
   ```
2. Build and export:
   ```
   npm run build
   npx next export -o docs
   ```
3. Copy `docs/` into your `my-portfolio` repo root and commit.
4. In GitHub repo settings → Pages → set source to `main` branch, folder `/docs`.

Option B: Publish `out/` as the site root (if Pages branch is `gh-pages`)
1. Export to `out/`:
   ```
   npm run build
   npx next export -o out
   ```
2. Push contents of `out/` to the `gh-pages` branch.

## Push as kbweeb
If this repo isn’t linked yet, set the remote and push from your account:
```
git remote add origin https://github.com/kbweeb/my-portfolio.git
git checkout -b merge/new-ui-old-content
git add -A
git commit -m "merge: new UI + old content/contact"
git push -u origin merge/new-ui-old-content
```
Open a Pull Request on GitHub from `merge/new-ui-old-content` → `main`.

## Conflicts: What to keep vs remove
- Keep NEW structure and components.
- Keep OLD exact texts, links, metadata, and email recipient.
- If a component exists with the same purpose in both, keep the NEW component and only move the OLD text/props into it.
- If the OLD site had additional scripts (EmailJS) and you prefer them over Gmail compose, replace the submit logic in `contact-form.tsx` accordingly and store keys in `.env.local` (never commit secrets).
