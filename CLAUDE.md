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
yarn dev:storybook       # Storybook (port 6006)

# Builds
yarn build:storybook     # Build static Storybook (deployed to GitHub Pages)
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
├── sites/crosslex-next/  # Next.js app (pages router)
├── sites/crosslex-react/ # Vite React SPA
├── sites/storybook/      # Storybook site
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

GitHub Actions (`.github/workflows/publish.yml`) builds Storybook and deploys it to GitHub Pages on push to `main`. The Storybook is the primary living component documentation.
