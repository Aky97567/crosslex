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

## Session Loop

The session loop is the core learning experience. It replaces the old index-based Prev/Next navigation.

**User flow:** Dashboard (start form) → Running (one card at a time) → Complete (summary) → back to Dashboard.

**localStorage keys:**
- `crosslex:words_seen` — `Record<wordKey, { count, accuracy, lastSeen }>` — algorithm cache, updated after every exercise
- `crosslex:exercise_log` — append-only `ExerciseEvent[]` — source of truth for all metrics (never mutated, only appended)
- `crosslex:learning_rate` — `'review' | 'easy' | 'balanced' | 'intensive'` — persisted user preference

**Scheduling algorithm** (`frontend/features/src/Session/sessionAlgorithm.ts`):

At each step, one decision: introduce a new word OR pick an exercise from the pool.

1. If pool (`seenKeys`) is empty → wordIntro (cold start)
2. If last introduced word has 0 exercises since its intro → force exercise on that word (guarantees `[intro → quiz]` unit)
3. Otherwise: coin flip — `random() < newWordProbability` → wordIntro; else weighted exercise from pool

**Rate → coin flip probability:**
- `review`: 0 (exercises only)
- `easy`: 0.1
- `balanced`: 0.25
- `intensive`: 0.5

No cap on new words per session. Session length and user pace determine the total.

**Pool weight:** `(1 - accuracy) + (now - lastSeen) / sessionDurationMs`
- Words answered incorrectly come back more often
- Words introduced earlier in the session (longer since last seen) come back more often

**Exercise types** (picked at random from what the word supports):
- `meaningGuess` — pulls `meaningBestGuessQuestion` from mock data
- `contextBlank` — derives from `wordContext.paragraphWithUsage`; replaces word with `___`; 3 random distractors
- `wordDefinition` — word + article shown; correct = translation; 3 random distractor translations

**Files:**
```
frontend/features/src/Session/
├── sessionStorage.ts   ← types + localStorage helpers (words_seen, exercise_log, learning_rate)
├── sessionAlgorithm.ts ← pickNextCard, generateExerciseData
└── index.ts            ← re-exports

frontend/widgets/src/Crosslex/
├── SessionDashboard/SessionDashboard.tsx  ← start form (free-text duration + 4-level rate)
├── SessionRunner/SessionRunner.tsx        ← session orchestrator + progress bar
└── SessionComplete/SessionComplete.tsx    ← end-of-session summary
```

**Exercise UX rules (as of alpha-2026-05-05-session-polish):**
- After any option is selected, all options lock (no reattempts)
- The correct option is highlighted green for all exercise types
- Wrong answer → button reads "Review word →"; clicking shows the full word learn page; "Got it →" advances to the next card and records the answer as incorrect
- `contextBlank` blanks **all** occurrences of the target word (`gi` regex flag), and the blank always fills with the correct word after answering

**Cutting a new build with this feature live:** bump `CURRENT_BUILD_ID` in `AlphaAnnouncement/changelog.ts` and add a changelog entry.

---

## Roadmap TODOs

Pending features, prioritised by effort vs impact. Items marked ✅ are done.

### Done
- ✅ **Word metrics dashboard** — clickable readiness panel (seed planted / familiar / test-ready) on the session dashboard, sourced from `crosslex:exercise_log`

### In-flight / Tech debt
- **FSD audit** — review all session loop files introduced on `feat/session-loop` against layer rules now that the branch is merged into main
- **Storybook stories for exercise entities** — `MeaningGuessQuestion`, `ContextBlankQuestion`, `WordDefinitionQuestion` all have new answered/locked state that should be covered

### Quick wins (trivial effort, immediate value)
1. **Default session duration → 5 minutes** — change the `useState<number>(30)` default in `SessionDashboard.tsx` to `5`; aligns with the inactivity timeout default
2. **Session duration recommendation copy** — replace "15–30 minutes recommended daily" with something science-backed and less prescriptive (e.g. spaced, shorter sessions are more effective than long ones)

### Standalone UX improvements
3. **Fixed advance button during a session** — the primary action button (correct/wrong/next) should be anchored in a sticky footer or header inside `SessionRunner` so users never need to scroll to progress

### Foundation (unblocks several items below)
4. **Header/footer nav + Settings panel** — add a persistent header or footer to the dashboard with:
   - Bell icon → notifications drawer (see item 7)
   - Gear icon → settings panel
   - Settings panel initially houses: feature flags, session timeout config, storage visualisation, known-word management

### Core learning features
5. **"I know this" button + known word management** — let users mark a word as already known during a word intro card, skipping it from future sessions; settings panel should show the known-words list and allow removal of accidentally added words; needs a good name (not "IKT")

### Plugs into Settings panel
6. **Session timeout** — end the active session after N minutes of inactivity (default 5 min); configurable from the settings panel; timeout should record the session as complete up to that point
7. **Storage visualisation** — show a breakdown of `localStorage` usage by key inside the settings panel (words seen, exercise log, etc.) so users understand what is stored

### Analytics & consent
8. **Analytics consent banner** — replace the new-user full-page overlay with a GDPR-compliant consent banner for analytics; move the alpha announcement into the notifications bell (item 4); the overlay should only appear for analytics opt-in going forward
9. **Move alpha announcement → notifications bell** — returning users see new-build notices in the bell drawer rather than the bottom-right card; bell shows an unread badge when there is something new
10. **Free analytics tool integration** — integrate a privacy-friendly, EU-compliant analytics tool (strong candidates: PostHog self-hosted, Umami); blocked by consent banner (item 8)
