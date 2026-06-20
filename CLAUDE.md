# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- `contextBlank` — derives from `wordContext.paragraphWithUsage`; replaces base form AND any `alternateForms` with `___`; correct answer is always the base form; 3 random distractors
- `wordDefinition` — word + article shown; correct = translation; 3 random distractor translations
- `typeTheWord` — user types the German word from memory; unlocked for a word only after ≥ 3 correct answers on it (`Math.round(count * accuracy) >= 3`); respects `crosslex:hardcore_mode` localStorage flag (hides hints when set)

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

## Adding New Words

Word data lives in `mock/data/src/learnPage/`. Each word is its own file.

**Steps:**
1. Create `mock/data/src/learnPage/<wordkey>.ts` — use an all-lowercase ASCII key (e.g. `ueberweisung` for Überweisung, `kuendigung` for Kündigung)
2. Import and add the word to `sampleLearnPageContent.ts` — both the import and the object entry
3. Type-check: `npx tsc --project mock/data/tsconfig.json --noEmit`

**Word file structure** (copy from any existing file):
- `wordIntro` — word, article, translation, partOfSpeech, level `['B1']`; omit `representativeImageUrl` until a real URL exists
- `wordMeaning` — one-paragraph definition
- `meaningGuessQuestion` — 3 options, exactly 1 `isCorrect: true`
- `wordContext` — paragraph using the word **at least 3 times**; include `alternateForms` for any inflected forms that appear in the paragraph (see below)
- `etymology` — origin explanation
- `similarWords` — 2–3 **synonyms** (not thematically related words) with article, translation, similarityScore, level, cefrRelevant
- `mnemonics` — 2 mnemonics; omit `imageUrl` until a real URL exists
- `wordShowcase` — always include, leave empty (hides itself when no URL)

**`alternateForms` — what to include per part of speech:**

The `contextBlank` exercise blanks the base form plus any strings listed in `alternateForms`. Without this, conjugated/inflected forms remain visible and leak the answer. The correct answer shown to the user is always the base form (dictionary lemma).

| Part of speech | What to include in `alternateForms` |
|---|---|
| Verb | Partizip II (past participle), e.g. `beantragt`, `bezahlt`, `geschrieben`. Also include Präsens 3rd-person singular if it appears and is visually distinct (e.g. `spricht` for `sprechen`, `arbeitet` for `arbeiten`). Also include 1st-person singular if it appears and is shorter than the infinitive (e.g. `bestelle`, `bezahle`). |
| Noun | Nominative plural if the paragraph uses it (e.g. `Wohnungen` for `Wohnung`). Most noun paragraphs repeat the nominative singular — omit if not needed. |
| Adjective | Attributive declension forms if the paragraph uses them (e.g. `schnelles` for `schnell`). Rare at A2/B1. |

Note: separable verbs (e.g. `nachweisen` → "weisen … nach") can't be handled via `alternateForms` because the prefix separates. Write the paragraph to avoid separated-prefix forms for separable verbs, or accept that one sentence in three is unblanked.

**Gotchas encountered:**
- `representativeImageUrl` and mnemonic `imageUrl` are **multi-line** in the file (`key:\n  'url',`). When bulk-stripping with `sed`, removing the key line leaves the URL value as an orphaned string — causes a TS error. Always run a second `sed` pass to remove the bare URL lines too, then verify with `grep`.
- `sed` patterns containing `//` (as in `https://`) need escaping or an alternative approach — deleting by line number (`sed '15d'`) is safer for one-off fixes.
- After any bulk file edit, always run the type-check before committing.

---

## Roadmap TODOs

Pending features, prioritised by effort vs impact.

### In-flight / Tech debt
- **Storybook stories for exercise entities** — `MeaningGuessQuestion`, `ContextBlankQuestion`, `WordDefinitionQuestion` all have new answered/locked state that should be covered
- **No test coverage** — Jest is configured but no tests exist; highest priority targets are `sessionAlgorithm.ts` (pickNextCard, generateExerciseData) and `sessionStorage.ts` (streak logic, readiness computation) — these are complex enough to break silently under refactoring
- **`mock/data` is the production word database** — the package name and `sampleLearnPageContentList` export name are misleading; rename to reflect that this is real content, not test fixtures

### Onboarding
- **New user handholding overview** — an explanatory walkthrough for first-time users that introduces the session loop, the learning rate options, and how word cards work; should feel lightweight, not a forced tutorial

### Engagement & retention
- **Return motivation / streak** — streak counter exists in WordMetricsPanel; missing piece is a push notification or nudge when the user hasn't practiced today
- **Word content scale** — 30 A2 + 32 B1 words; users will exhaust a level in several sessions; need significantly more content at both levels
- **In-app feedback channel** — users have no way to flag a broken question or wrong answer; only discoverable via DM

### Analytics
- **Plausible analytics** — live at crosslex.app via cookieless script; no consent banner needed

---

## A2 Word Content Guidelines

When adding A2-level words (level `['A2']` in `wordIntro`):

- **Vocabulary domain**: daily life — shopping, transport, weather, family, time, body, home, food, common verbs
- **Grammar in `wordContext`**: Präsens and Perfekt are preferred; simple `war`/`hatte` Präteritum is acceptable. **Avoid**: Konjunktiv II (`würde/könnte` as hypotheticals), Passiv constructions, Genitiv, complex nested subordinate clauses
- **Sentence length**: max ~15 words per sentence; prefer simple main clauses
- **`meaningGuessQuestion`**: wrong options should also be everyday A2-level vocabulary (not bureaucratic B1 terms)
- **`similarWords`**: synonyms only — words that mean roughly the same thing, not thematically related words; pick other A2 common words; keep `similarityScore` ≥ 3; `cefrRelevant: true`
- **`etymology`**: brief, max 2 sentences; favour English/Latin cognates; no scholarly depth
- Word file structure is otherwise identical to B1 words — copy from any existing file and change `level: ['A2']`

---

## Plans

**Always write implementation plans to their own Markdown files** before starting non-trivial work. Use `~/.claude/plans/` (the auto-generated path from `/plan`) or a path of your choosing. Reference the plan file here once created.

### Active plans

_(none)_
