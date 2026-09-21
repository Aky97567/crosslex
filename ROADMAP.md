# Roadmap

Pending features, prioritised by effort vs impact. Priority tags: `P0`
(live/broken, fix now) → `P3` (low urgency, do when convenient); `Icebox`
items are deliberately unranked against P0-P3, not yet refined enough for
a priority call. Deferred items and Open decisions aren't tagged — they're
gated on something else (a scoping decision, a track resuming), not ready
to be worked regardless of priority.

## Bugs
- `[P0]` **Mobile: long-text answer options overflow the viewport** — reported, not yet investigated at the code level; not yet shovel-ready, needs triage before estimating.

## In-flight / Tech debt
- `[P3]` **`similarWords` content: 2 words have no synonym entries, 8 more flagged for semantic (non-lexical) review** — follow-up from the derivational-relatives fix (`docs/word-content.md` now documents the rule; a full scan found 34 violations across 26 files, all fixed by removing the bad entry — `rente`/`Altersrente`, the original known offender, among them). Two words, `Schlüssel` and `Tisch`, lost every entry in the fix (all of `Hausschlüssel`/`Wohnungsschlüssel` and `Schreibtisch`/`Esstisch`/`Beistelltisch` were specific-instance compounds, not synonyms) and no confident replacement was found — `similarWords: []`, the "Similar Words" card now hides itself for these two, needs a human pass to find real synonyms (if any exist). Separately, 8 entries were flagged as *possibly* violating the same principle but weren't touched, because nothing shares spelling with the target word so the scan couldn't catch them and confidence is lower — needs manual judgment, not another scan: `elterngeld.ts` (`Mutterschaftsgeld` — a different benefit program), `kind.ts` (`Jugendlicher` — a different life stage), `kuendigungsfrist.ts` (`Sperrfrist` — a different legal concept), `mietvertrag.ts` (`Pachtvertrag` — land/business lease vs. housing rental), `nebenkostenabrechnung.ts` (`Heizkostenabrechnung` — a narrower subset), `rentenversicherung.ts` (`Altersvorsorge` — broader; `Betriebsrente` — a specific subtype), `steuererklaerung.ts` (`Steuerbescheid` — the tax office's response document, not the return itself).
- `[P2]` **Exercise story state coverage** — `MeaningGuessQuestion`, `ContextBlankQuestion`, `WordDefinitionQuestion` stories only show the unanswered initial state; need stories for: correct answer selected (green highlight), wrong answer selected (red + review prompt), post-answer locked state (all options non-interactive)
- `[P1]` **Test coverage beyond the session core** — `sessionAlgorithm.ts` (pickNextCard, generateExerciseData/generateExerciseDataSafe) and `sessionStorage.ts`'s streak logic and readiness computation (`recordSessionForStreak`, `computeWordMetrics`, `getMetricsSummary`, `updateWordStats`/`seedWordStats`/`healWordsSeen`) now have tests — 97.6%/92.85% stmt/branch coverage on the former. `frontend/features` also needed `jest`/`ts-jest`/`@types/jest`/`jest-environment-jsdom` added to its own `devDependencies` before any test could run at all (Yarn 4's node-modules linker doesn't resolve the root-level ones — see the package-creation note above). Everything else is still untested: the rest of `sessionStorage.ts` (trivial localStorage getters/setters, lower risk), `useSessionState.ts`'s React-hook orchestration, and every other package in the monorepo has zero test infra wired at all — `eslint` has the same missing-devDependency problem in `frontend/features`, discovered but not fixed here (out of scope for this pass)
- `[P3]` **`@whitelotus/mock-test` package rename** — name implies test fixtures but this is the production word database; rename to `@whitelotus/word-content`; requires updating `package.json`, all `tsconfig` path aliases, and all import sites
- `[P3]` **Missing widget Storybook stories** — 13 widget components have no stories: `AlphaAnnouncement` (+ `NewUserOverlay`, `ReturningUserCard`), `AppNav`, `BadgesDrawer`, `NotificationsDrawer`, `SessionComplete`, `SessionDashboard`, and the `SettingsPanel` subsections (`HardcoreModeSection`, `MobileDisplaySection`, `SessionTimeoutSection`, `StorageSection`)

## Onboarding
- `[P2]` **New user handholding overview** — an explanatory walkthrough for first-time users that introduces the session loop, the learning rate options, and how word cards work; should feel lightweight, not a forced tutorial

## Engagement & retention
- `[P2]` **Return motivation / streak** — streak counter exists in WordMetricsPanel; missing piece is a push notification or nudge when the user hasn't practiced today
- `[P0]` **Word content scale** — 30 A2 + 32 B1 words; users will exhaust a level in several sessions; need significantly more content at both levels — a hard ceiling on retention until addressed, everything else in this section matters less if users run out of content first
- `[P1]` **In-app feedback channel** — users have no way to flag a broken question or wrong answer; only discoverable via DM — cheap to build, and the fastest way to catch the next ContextBlank-style content bug without having to find it yourself

## Code TODOs
Duplicated here for visibility — not moved. The source-of-truth comment stays in the file; this is a provisional entry until code-TODO handling is properly unified into this file.
- `[P3]` **Video player for `WordShowcase`** — `frontend/entities/src/UI/WordShowcase/WordShowcase.tsx:30` (`TODO: add video player`); also still noted in `PRODUCT.md` ("Word Content Schema" → `wordShowcase`), left there deliberately for now
- `[P3]` **Custom error type for guard utility** — `lib/core/types/src/guard.ts:5` (`@todo: implement a custom error type here (or even passed in as part of the options)`)

## Deferred
Work explicitly postponed, with a reason. Full reasoning lives at the linked source — don't duplicate it here.
- **Dashboard Tier 1 + wire landing page to SPA** — status not reverified since originally scoped; treat as not started until confirmed otherwise
- **AWS deploy** (VPC/RDS Proxy/Secrets Manager/Lambda) — out of scope for the current interview-prep timeline; see `backend/api/crosslex/DECISIONS.md` ("Product scope") and `2026-07-18-phase-5-instructions.md`
- **Cross-subdomain cookie work** (real stage/prod subdomains, not just local) — see `2026-07-18-phase-6-instructions.md`
- **Dashboard rollup table / Redis cache** — see `backend/api/crosslex/DECISIONS.md` ("Progress / schema")
- **Frontend auth integration** (login/signup UI) — see `backend/api/crosslex/DECISIONS.md` ("Product scope")
- **Word content full DB migration** (off static `mock/data/`) — see `backend/api/crosslex/DECISIONS.md` ("Product scope")

## Open decisions
Design questions with no answer yet — need a decision before the related work can start.
- `[P3]` **Content-module service split (D2)** — must be decided before Phase 7 applies; see `2026-07-18-phase-7-instructions.md` — gated on the backend interview-prep track resuming, not urgent against product work
- `[P3]` **Admin/allowlist gate on paid Anthropic content-generation calls** — should every authenticated user be able to trigger paid API calls, or does this need role-based authorization beyond ownership; see `2026-07-18-phase-7-instructions.md` — same gating as above

## Ideas / Icebox
Nascent product ideas — not yet refined into epics or stories, not prioritised against the P0-P3 work above (deliberately — they aren't ready for a priority call yet). Captured so they aren't lost.
- `[Icebox]` **Partizip II for verbs** — teach past participle forms (e.g. `gemacht`, `gegangen`, separable-verb participles like `aufgestanden`); how to teach it is unexplored. Also surface which auxiliary (`haben`/`sein`) each verb takes for Perfekt — needed alongside Partizip II, not derivable from the participle alone. Build-order hint: Adjective degrees (below) may be a good first pass at the "teach a grammatical form + test it" pattern, since Partizip II likely needs the same content-module + exercise-type shape.
- `[Icebox]` **Adjective degrees (Komparation)** — teach comparison forms (Positiv/Komparativ/Superlativ: `schön → schöner → am schönsten`, including irregulars like `gut → besser → am besten`); needs a content module plus a testable exercise type. Candidate first build for the content-module + exercise-type pattern Partizip II would also need.
- `[Icebox]` **A2 verbs as a standalone theme** — tag/group verbs (starting at A2) as their own study theme, separate from the mixed CEFR-level content, so a user can drill verbs specifically. Possibly bundle Perfekt-form teaching directly into verb introduction rather than as a separate drill (overlaps with Partizip II, above). Open sub-idea: tiering verbs by difficulty within the theme — trennbar (separable) verbs are already effectively the hardest category; a regular/weak → strong/irregular → trennbar progression might be the natural tiering.
- `[Icebox]` **Show full verb conjugation (Konjugation)** — a reference table (all persons, at least present tense) rather than a graded exercise; link to it from verb word-detail pages.
- `[Icebox]` **Custom Lists** — user-curated word lists outside the fixed CEFR-level content (e.g. a self-made "Bürgeramt visit" list), with their own study/session scoping.
- `[Icebox]` **Related terms / compound words section** — a new content module for words related to the target word by compounding rather than synonymy (`Rente` → `Altersrente`, `Tisch` → `Esstisch`), i.e. the hyponym relationship the `similarWords` fix (see In-flight / Tech debt) deliberately excluded. Distinct module from `similarWords` since the relationship is "narrower/specific-instance," not "same concept" — needs its own heading, data shape, and design principle before use.
- `[Icebox]` **Confusable-words drilling** — a module/exercise teaching DaF learners to tell apart words that look or sound alike but aren't interchangeable, where mixing them up is a known learner error: `zahlen`/`bezahlen`, `werden`/`würden` (and possibly `wurden`, if all three are commonly confused as legal-looking infinitive/conjugated forms — verify), `wenn`/`wann`. Different problem from both `similarWords` (same concept) and the compound-words idea above (narrower concept): here the words are often unrelated in meaning and the teaching goal is contrast, not similarity. Needs its own content shape and exercise type — unexplored.
- `[Icebox]` **Theme/category completion badges** — badges/achievements for completing a whole grammatical or thematic category (e.g. all `reflexiv` verbs, all `trennbar` verbs) or hitting a word-count milestone within a theme, surfaced alongside the existing streak mechanic. Overlaps with the "A2 verbs as a standalone theme" idea above (both need per-theme progress tracking) — needs a decision on what counts as "complete" and how progress is computed before this is buildable.
