# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

Personal portfolio site for Alexander Garcia. Static Next.js 15 app with App Router — no API routes, no database. All portfolio content is defined as TypeScript constants in `src/app/constants/`:

- `projects.ts` — featured projects (title, company, href, tags, description, stack icons)
- `works.ts` — work experience entries
- `skills.ts` — skills grouped into Backend / DevOps / Frontend categories
- `keywords.ts` — SEO keywords array
- `env.ts` — single export `NODE_ENV = process.env.NODE_ENV`

To update content, edit these files — no component changes needed.

## i18n

All pages are under `src/app/[locale]/`. Routing is configured in `src/i18n/routing.ts` with Spanish (`es`) as the only active locale. `src/middleware.ts` handles locale detection via next-intl and matches all paths except API routes and static assets. Translation strings live in `messages/es.json` (an `en.json` exists but is not wired into routing).

## Blog posts

MDX files in `src/posts/`. `next.config.mjs` adds `.md`/`.mdx` to `pageExtensions` and applies `@next/mdx`. `gray-matter` and `remark` are used to parse frontmatter and render content.

## Icon system

`src/app/components/dynamic-icon/` owns all tech-stack icons. Icons are keyed by the `ICONS_NAMES` enum — to add a new technology, add it to the enum and map it to a component in that directory. Skills and projects reference icons by enum value.

## Styling

Tailwind CSS with `darkMode: 'class'`. The root `<html>` always has `class="dark"` (dark mode is not togglable). CSS variables `--background` / `--foreground` drive theming. Path alias `@/*` → `src/*`.

## Analytics

Both analytics scripts are injected in `src/app/[locale]/layout.tsx`:
- **Google Tag Manager** (`GTM-55CTMHMV`) — all environments, loaded via `next/script`
- **Microsoft Clarity** (`u1j1jpvcbb`) — production only, guarded by `NODE_ENV === "production"`
- **Google Analytics** (`G-28T9J5L108`) — production only via `@next/third-parties/google`

## Deployment

Push to `dev` triggers `.github/workflows/dev.yml`, which:
1. Builds a Docker image tagged with the short commit SHA and pushes to GHCR (`ghcr.io`)
2. Runs `.deploy/build_deployment.sh` to render `deployment.template.yml` into a final Docker Compose file
3. SCPs the compose file to the production server and deploys via `docker stack deploy` (Docker Swarm)

The template configures 2 replicas, rolling updates with automatic rollback, and routes traffic through a Caddy reverse proxy on an external `caddy` Docker network. `next.config.mjs` uses `output: "standalone"` so the Docker runner stage only copies the minimal build artefacts.
