# Protik Biswas — Portfolio

Personal portfolio built with **Next.js 16 (Pages Router)**, React 19, TypeScript, Tailwind CSS v4, shadcn/ui and Lucide icons.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build && npm start
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the deployed URL. This turns on the canonical URL, `og:url` and the generated social image served from `/api/og`.

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
  pages/        _app, _document, index, 404, api/og
  styles/       globals.css: design tokens and animations
  types/        shared content types
```

## Notes

- Dark theme is the default. Visitors can switch themes from the header, and the choice persists through `next-themes`.
- Scroll reveals use `IntersectionObserver` and only hide content when JavaScript is running and the visitor hasn't asked for reduced motion.
- The brand green `#1F7A5C` fills buttons and chart marks. Text and icons use a contrast-checked tint (`--brand-text`) for each theme.
