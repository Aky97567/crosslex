# AGENTS.md

This file provides guidance to coding agents (Claude Code and others) when working with code in this repository.

## Project

Crosslex is a vocabulary training platform. The code lives under `website/` as a Yarn 4 workspace monorepo.

## Commands

All commands run from `website/`.

```bash
# Dev servers
yarn dev:crosslex-react  # Main app (Vite React SPA)
yarn dev:crosslex-next   # Next.js app (legacy)
yarn dev:storybook-next  # Next.js Storybook (port 6006)
yarn dev:storybook-react # React/Vite Storybook (port 6007)

# Builds
yarn build:crosslex-react   # Build React SPA (deployed to GitHub Pages)
yarn build:storybook-next   # Build Next.js Storybook
yarn build:storybook-react  # Build React/Vite Storybook
yarn workspace @whitelotus/crosslex-next build   # Production build of Next.js app (legacy)
yarn workspace @whitelotus/crosslex-next lint    # Lint Next.js app (legacy)

# Testing (run inside a frontend package directory)
yarn test                # Jest
yarn test:watch          # Watch mode
yarn test:ci             # CI mode with coverage
yarn test:update         # Update snapshots

# Linting (inside a frontend package)
yarn lint:js             # ESLint
yarn lint:css            # Stylelint
```

To run a single test file: `yarn test <path-to-file>` from within the relevant package.

## Git Conventions

**Branch naming**: `<prefix>/<kebab-case-description>`. Always branch off freshly pulled `main` (`git checkout main && git pull origin main` first). One branch per logical concern — never stack on another feature branch.

| Prefix | Use for |
|---|---|
| `feat/` | New user-facing or product functionality |
| `fix/` | Bug fixes |
| `chore/` | Tooling, config, dependency bumps, docs restructuring — no behaviour change |
| `refactor/` | Code restructuring with no behaviour change |
| `docs/` | Documentation-only changes |

**Reference branches**: agent-built code kept only for diffing against (never merged) uses no prefix and a descriptive name, and is noted under Active plans below.

## Architecture

The monorepo follows a layered frontend architecture (Feature-Sliced Design):

```
website/
├── sites/crosslex-react/   # Main app (Vite React SPA, deployed to GitHub Pages)
├── sites/crosslex-next/    # Next.js app (legacy, pages router)
├── sites/storybook-next/   # Next.js Storybook (port 6006, deployed to GitHub Pages)
├── sites/storybook-react/  # React/Vite Storybook (port 6007)
├── frontend/
│   ├── entities/         # Domain entities (data + UI)
│   ├── features/         # User-facing features
│   ├── pages/            # Page-level compositions
│   ├── widgets/          # Standalone UI blocks
│   └── shared/           # Reusable UI primitives (front-shared)
├── common/crosslex/view/ # Shared view logic across sites
├── backend/runtime/      # App initialization / server-side bootstrap
├── lib/
│   ├── core/             # logging, perf, types
│   ├── external/next/    # Next.js server bindings
│   └── system/           # app-tier and runtime utilities
├── config/tailwind/      # Shared Tailwind config
└── mock/data/            # Mock data for tests and Storybook
```

**Import conventions**: All packages are imported via `@whitelotus/*` path aliases (defined in `tsconfig.base.json`). The main site (`sites/crosslex-next/next.config.mjs`) transpiles all monorepo packages via `transpilePackages`.

**Layer rules**: `entities` → `features` → `pages`/`widgets`. Shared utilities live in `lib/` or `frontend/shared/`. Do not import upward through layers.

**TypeScript**: Strict mode everywhere (`noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`). Base config at `website/tsconfig.base.json`; each package extends it.

**Styling**: Tailwind CSS with a shared config at `config/tailwind/tailwind.config.js`. Prettier is set to 80-char width, single quotes, trailing commas.

**IMPORTANT — `front-shared` has two index files**: When adding a new export to `frontend/shared/src/UI/`, update BOTH `frontend/shared/src/UI/index.ts` AND `frontend/shared/src/index.ts` (the root index has an explicit named list). Missing the root index causes build failures in consuming packages.

**IMPORTANT — custom Tailwind scale**: This project overrides almost every default Tailwind scale. Before using any utility class, read `config/tailwind/tailwind.config.js` to check the actual values. Key overrides:
- `fontSize`: `text-sm` = 1rem (16px), `text-md` = 1.555rem (~25px), `text-lg` = 2.111rem (~34px) — these are NOT standard Tailwind sizes
- `spacing`: 5=2px, 10=4px, 15=6px, 20=8px, 30=12px, 40=16px, 50=24px, 60=32px — unitless numbers, not rems
- `screens`: sm=375px, md=768px, lg=992px, xl=1280px

## CI

GitHub Actions (`.github/workflows/publish.yml`) builds `crosslex-react` and deploys it to GitHub Pages on push to `main`. The `VITE_BASE` env var is set to `/crosslex/` in CI so asset paths resolve correctly under the GitHub Pages subpath.

## FSD Component Rules

Before creating any new component:

1. **Search existing slices first** — check `shared`, `entities`, `features`, `widgets` for anything reusable
2. **Place in the correct slice**:
   - `shared` — pure UI primitives, no business logic (Button, Card, Text)
   - `entities` — domain UI tied to a concept (WordIntro, MeaningGuessQuestion)
   - `features` — interactive behaviour (FlipCardToTarget, PaletteSwitcher)
   - `widgets` — standalone self-contained UI blocks
   - `pages` — composition only, no logic
3. **Never duplicate** — if a component exists in a lower slice, use it
4. **Never import upward** — pages import features/entities/shared; features import entities/shared; entities import shared only
5. **When in doubt, ask** which slice a new component belongs to before creating it

## Feature & Content Docs

Detailed guides live in `docs/` — read the relevant one **before** touching the code it covers:

- **Word content** (`mock/data/src/learnPage/`, themes, A2/B1 guidelines, trennbar rules): read `docs/word-content.md` before adding or editing any word data.
- **Session loop** (`frontend/features/src/Session/`, the Session* widgets): read `docs/session-loop.md` before changing scheduling, exercises, or their storage. Invariant: the `crosslex:exercise_log` localStorage entry is **append-only** — never mutate or rewrite existing events.
- **Alpha announcement widget** (`frontend/widgets/src/Crosslex/AlphaAnnouncement/`): read `docs/alpha-announcement.md`.

## Release Rule — Changelog Before Merge

**Before merging any feature branch:** bump `CURRENT_BUILD_ID` in `frontend/widgets/src/Crosslex/AlphaAnnouncement/changelog.ts` and add a matching `CHANGELOG` entry so returning alpha users are notified of the change. Treat it as part of the feature work, not an afterthought. Full workflow: `docs/alpha-announcement.md`.

## Roadmap

Pending features and tech debt live in `ROADMAP.md`. It is backlog, not instructions — consult it only when asked to plan or pick up new work.

## Plans

**Always write implementation plans to their own Markdown files** before starting non-trivial work. Use `~/.claude/plans/` (the auto-generated path from `/plan`) or a path of your choosing. Reference the plan file here once created.

### Active plans

- `2026-07-18-backend-build-order.md` — dependency-ordered build chart for the NestJS/GraphQL/RDS/JWT backend (companion to `2026-07-15-nestjs-backend-architecture.md`). Akshay implements each phase himself for interview depth; agents instruct and review, not write. Reference branch `backend-api-skeleton` holds an agent-built Phase 1 skeleton for diffing only — never merge it.
