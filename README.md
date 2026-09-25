# Protik Biswas — Portfolio

Personal portfolio built with **Next.js 16 (Pages Router)**, React 19, TypeScript, Tailwind CSS v4, shadcn/ui and Lucide icons.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # static site in out/
npm run preview    # serve out/ locally
```

## Deployment (GitHub Pages)

The site is a static export (`output: "export"`), so it needs no server. `.github/workflows/deploy.yml` builds it and publishes `out/` to GitHub Pages on every push to `main`.

One-time setup: in the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

The workflow sets `NEXT_PUBLIC_BASE_PATH` (e.g. `/portfolio`) and `NEXT_PUBLIC_SITE_URL` from the repository's Pages settings, so the same code works for a project site, a `username.github.io` repo or a custom domain. Public files referenced with plain `<a>` or `<link>` tags must go through `withBasePath()` from `src/lib/base-path.ts`.

The social preview image is the static file `public/og.png`.

## Editing content

All copy lives in typed data files under `src/data/`. Components only render it.

| File | Controls |
| --- | --- |
| `profile.ts` | Name, contact details, hero copy, about text, "at a glance" facts, stats, social links |
| `sections.ts` | Section numbers, titles, descriptions and the nav order |
| `about.ts` | Focus-area cards |
| `experience.ts` | Company, roles, highlights (`**bold**` is supported) |
| `projects.ts` | Project cards and filter categories |
| `payments.ts` | Payment gateway cards and the order-flow diagram |
| `skills.ts` | Skill groups and the ERPNext / Frappe depth panel |
| `achievements.ts` | Client recognition and milestones |
| `philosophy.ts` | Engineering principles |
| `cycling.ts` | Ride distances and other interests |
| `site.ts` | SEO title, description and keywords |

To show LinkedIn or GitHub, add entries to `profile.socials`. They appear in the contact card and the JSON-LD `sameAs` field.

The downloadable resume is `public/resume/Protik-Biswas-Resume.pdf`. Replace that file to update it.

## Structure

```
src/
  components/
    layout/     header, footer, page shell
    sections/   one component per page section
    shared/     Section, Reveal, Seo, ThemeToggle, …
    ui/         shadcn/ui primitives (Button, Badge, Card)
  data/         all portfolio content
  hooks/        in-view, active-section and scroll hooks
  lib/          cn() and base-path helpers
  pages/        _app, _document, index, 404
  styles/       globals.css: design tokens and animations
  types/        shared content types
```

## Notes

- Dark theme is the default. Visitors can switch themes from the header, and the choice persists through `next-themes`.
- Scroll reveals use `IntersectionObserver` and only hide content when JavaScript is running and the visitor hasn't asked for reduced motion.
- The brand green `#1F7A5C` fills buttons and chart marks. Text and icons use a contrast-checked tint (`--brand-text`) for each theme.
