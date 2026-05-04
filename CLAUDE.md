# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Crosslex is a vocabulary training platform. The code lives under `website/` as a Yarn 4 workspace monorepo.

## Commands

All commands run from `website/`.

```bash
# Dev servers
yarn dev:crosslex-next   # Main Next.js app
yarn dev:crosslex-react  # Vite React SPA
yarn dev:storybook-next  # Next.js Storybook (port 6006)
yarn dev:storybook-react # React/Vite Storybook (port 6007)

# Builds
yarn build:crosslex-react   # Build React SPA (deployed to GitHub Pages)
yarn build:storybook-next   # Build Next.js Storybook
yarn build:storybook-react  # Build React/Vite Storybook
yarn workspace @whitelotus/crosslex-next build   # Production build of main app
yarn workspace @whitelotus/crosslex-next lint    # Lint main app

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

## Architecture

The monorepo follows a layered frontend architecture (Feature-Sliced Design):

```
website/
├── sites/crosslex-next/    # Next.js app (pages router)
├── sites/crosslex-react/   # Vite React SPA
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

**Styling**: Tailwind CSS with a shared config at `config/tailwind/`. Prettier is set to 80-char width, single quotes, trailing commas.

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

## Alpha Announcement Widget

A one-time announcement widget that shows context to alpha test users based on their localStorage state.

**User states:**
- **New user** (no `crosslex:seen_build` in localStorage): full-page overlay blocks the app until the user clicks the CTA.
- **Returning user on a new build** (`crosslex:seen_build` value ≠ `CURRENT_BUILD_ID`): dismissible card at bottom-right.
- **Returning user, same build**: nothing renders.

**Files:**
```
frontend/widgets/src/Crosslex/AlphaAnnouncement/
├── changelog.ts          ← edit this for every new build
├── AlphaAnnouncement.tsx ← orchestrator, reads localStorage
├── NewUserOverlay.tsx    ← full-page overlay for first-time visitors
└── ReturningUserCard.tsx ← card for returning visitors on a new build
```

**To cut a new build:**
1. Open `changelog.ts`
2. Update `CURRENT_BUILD_ID` to a new string, e.g. `'alpha-2026-05-11'`
3. Add a matching entry to `CHANGELOG`:
   ```ts
   'alpha-2026-05-11': {
     newUser: { heading: '...', body: '...', cta: "Let's go →" },
     returningUser: {
       heading: "You're back — something's new",
       body: 'Here is what changed.',
       changes: ['Added X', 'Fixed Y'],
     },
   },
   ```
4. Commit. No env vars, no Vite config changes needed.

**localStorage key:** `crosslex:seen_build` — stores the last acknowledged build ID.

**Before merging any feature branch:** update `changelog.ts` as described above so returning alpha users are notified of the change. Treat it as part of the feature work, not an afterthought.
