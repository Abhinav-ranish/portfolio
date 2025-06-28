# 🌐 Abhinav Ranish — Portfolio (Next.js + TailwindCSS 4)

This is my personal portfolio site showcasing my work in Software Engineering, Cybersecurity, AI/ML, and more.  
Built with the latest tech: **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **TailwindCSS 4**, and deployed via **Cloudflare Pages**.

---

## ⚙️ Tech Stack

- **Frontend Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS 4
- **Components:** Framer Motion, Lucide Icons, ShadCN
- **Hosting:** Cloudflare Pages
- **Animations:** Framer Motion + CSS transitions
- **Persistent Music Player:** Embedded iframe + floating control
- **Projects Filter:** Category tabs + Framer animations

---

## 🚀 Getting Started (Local Setup)

```bash
# Clone repo
git clone https://github.com/Abhinav-ranish/portfolio.git
cd portfolio

# Install deps
npm install  # or yarn / pnpm

# Start dev server
pnpm dev
````

Visit: `http://localhost:3000`

---

## 🛠 Folder Structure

```bash
app/                  # Next.js 15 App Router layout
  page.tsx            # Landing page layout
  contact/page.tsx    # Contact page
  projects/page.tsx   # Projects display with filters
components/           # All modular UI components
  Home.tsx
  MusicBar.tsx
  AnimatedTitle.tsx
  ...
public/               # Images, favicon, static files
tailwind.config.ts    # Tailwind v4 config
postcss.config.js     # Tailwind/PostCSS plugin config
```

---

## 🌩 Deployment: Cloudflare Pages

### 🔗 GitHub Connected

* Repo: `Abhinav-ranish/portfolio`
* Branch: `main`
* Framework Preset: `Next.js`
* Build Command: `npm build`
* Output Directory: `.next`

### 🛠 Environment Variables (if needed)

None required for public portfolio — static build.


## 🔁 Branch Management

* `main`: latest working TypeScript Next.js version (live)
* `old-dev`: legacy React + JS version (archived)
* `feature/*`: optional staging branches for new features

---

## 🧼 Styling & Utilities

* **Tailwind 4** (no custom CSS used)
* `clsx`, `tailwind-merge` for conditional styling
* Responsive grid layout using `grid-cols-*` utilities
* `framer-motion` used for all entrance/hover animations
* Theme: dark UI with green highlights

---

## 🎧 Music Player

```tsx
// Floating player via iframe
<iframe
  src="https://music.aranish.uk/miniplayer"
  className="rounded-full w-full h-full"
/>
```

* Persistent across pages
* Collapsible behavior for minimal UI
* Custom domain used: `music.aranish.uk`

---

## 📈 Analytics / Extras

* `VisitCounter.tsx`: Fetches from `/api/visit` (optional)
* `AnimatedTitle.tsx`: Colorful animated title with Framer Motion
* Dynamic toolbar for project categories (AI, Cyber, Software, Hot!, All)

---

## 💬 Contact / Calendly

* Contact page has:

  * `Connect on LinkedIn` → [linkedin.com/in/abhinavranish](https://www.linkedin.com/in/abhinavranish/)
  * `Email Me` → `chatgpt@asu.edu`
  * `Schedule Meet` → [meet.aranish.uk](https://meet.aranish.uk)

---

## 🛡 License

MIT License © Abhinav Ranish

---
