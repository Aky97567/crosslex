# Roadmap

Pending features, prioritised by effort vs impact.

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

## Analytics
- **Plausible analytics** — live at crosslex.app via cookieless script; no consent banner needed
