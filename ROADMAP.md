# Roadmap

Pending features, prioritised by effort vs impact.

## Bugs
- **ContextBlank fill-in-blank matches inside compound words** — `generateExerciseData()`'s `contextBlank` case in `frontend/features/src/Session/sessionAlgorithm.ts` (~L153-159) builds its highlight regex from `allForms` with no word-boundary anchoring, so a short form (e.g. `Steuer`) matches inside a longer compound containing it (e.g. `Steuererklärung`) and gets blanked out incorrectly. Plain `\b` is not a full fix either — JS regex `\b` is ASCII-only by default (umlauts aren't `\w`), which creates phantom boundaries next to characters like ä/ö/ü/ß. Verified fix: a Unicode-aware lookaround pattern, `` new RegExp(`(?<![\p{L}\p{N}])${word}(?![\p{L}\p{N}])`, 'giu') ``, in place of the current join without boundaries — confirmed correct via direct `node -e` testing, not yet applied to the file. Related, separate product question (not blocking this fix): should compound words be allowed to appear unplanned inside example sentences at all, or should there be a dedicated `relatedCompounds`-style structured module instead (precedent: the existing `similarWords` module) — see `mock/data/src/learnPage/steuer.ts`.
- **Mobile: long-text answer options overflow the viewport** — reported, not yet investigated at the code level.

## In-flight / Tech debt
- **Exercise story state coverage** — `MeaningGuessQuestion`, `ContextBlankQuestion`, `WordDefinitionQuestion` stories only show the unanswered initial state; need stories for: correct answer selected (green highlight), wrong answer selected (red + review prompt), post-answer locked state (all options non-interactive)
- **No test coverage** — Jest is configured but no tests exist; highest priority targets are `sessionAlgorithm.ts` (pickNextCard, generateExerciseData) and `sessionStorage.ts` (streak logic, readiness computation) — these are complex enough to break silently under refactoring
- **`@whitelotus/mock-test` package rename** — name implies test fixtures but this is the production word database; rename to `@whitelotus/word-content`; requires updating `package.json`, all `tsconfig` path aliases, and all import sites
- **Missing widget Storybook stories** — 13 widget components have no stories: `AlphaAnnouncement` (+ `NewUserOverlay`, `ReturningUserCard`), `AppNav`, `BadgesDrawer`, `NotificationsDrawer`, `SessionComplete`, `SessionDashboard`, and the `SettingsPanel` subsections (`HardcoreModeSection`, `MobileDisplaySection`, `SessionTimeoutSection`, `StorageSection`)

## Onboarding
- **New user handholding overview** — an explanatory walkthrough for first-time users that introduces the session loop, the learning rate options, and how word cards work; should feel lightweight, not a forced tutorial

## Engagement & retention
- **Return motivation / streak** — streak counter exists in WordMetricsPanel; missing piece is a push notification or nudge when the user hasn't practiced today
- **Word content scale** — 30 A2 + 32 B1 words; users will exhaust a level in several sessions; need significantly more content at both levels
- **In-app feedback channel** — users have no way to flag a broken question or wrong answer; only discoverable via DM

## Code TODOs
Duplicated here for visibility — not moved. The source-of-truth comment stays in the file; this is a provisional entry until code-TODO handling is properly unified into this file.
- **Video player for `WordShowcase`** — `frontend/entities/src/UI/WordShowcase/WordShowcase.tsx:30` (`TODO: add video player`); also still noted in `PRODUCT.md` ("Word Content Schema" → `wordShowcase`), left there deliberately for now
- **Custom error type for guard utility** — `lib/core/types/src/guard.ts:5` (`@todo: implement a custom error type here (or even passed in as part of the options)`)

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
- **Content-module service split (D2)** — must be decided before Phase 7 applies; see `2026-07-18-phase-7-instructions.md`
- **Admin/allowlist gate on paid Anthropic content-generation calls** — should every authenticated user be able to trigger paid API calls, or does this need role-based authorization beyond ownership; see `2026-07-18-phase-7-instructions.md`

## Ideas / Icebox
Nascent product ideas — not yet refined into epics or stories, not prioritised. Captured so they aren't lost.
- **Partizip II for verbs** — teach past participle forms (e.g. `gemacht`, `gegangen`, separable-verb participles like `aufgestanden`); how to teach it is unexplored. Also surface which auxiliary (`haben`/`sein`) each verb takes for Perfekt — needed alongside Partizip II, not derivable from the participle alone. Build-order hint: Adjective degrees (below) may be a good first pass at the "teach a grammatical form + test it" pattern, since Partizip II likely needs the same content-module + exercise-type shape.
- **Adjective degrees (Komparation)** — teach comparison forms (Positiv/Komparativ/Superlativ: `schön → schöner → am schönsten`, including irregulars like `gut → besser → am besten`); needs a content module plus a testable exercise type. Candidate first build for the content-module + exercise-type pattern Partizip II would also need.
- **A2 verbs as a standalone theme** — tag/group verbs (starting at A2) as their own study theme, separate from the mixed CEFR-level content, so a user can drill verbs specifically. Possibly bundle Perfekt-form teaching directly into verb introduction rather than as a separate drill (overlaps with Partizip II, above). Open sub-idea: tiering verbs by difficulty within the theme — trennbar (separable) verbs are already effectively the hardest category; a regular/weak → strong/irregular → trennbar progression might be the natural tiering.
- **Show full verb conjugation (Konjugation)** — a reference table (all persons, at least present tense) rather than a graded exercise; link to it from verb word-detail pages.
- **Custom Lists** — user-curated word lists outside the fixed CEFR-level content (e.g. a self-made "Bürgeramt visit" list), with their own study/session scoping.
