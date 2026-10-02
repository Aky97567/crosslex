# Session Loop

The session loop is the core learning experience. It replaces the old index-based Prev/Next navigation.

**User flow:** Dashboard (start form) → Running (one card at a time) → Complete (summary) → back to Dashboard.

**localStorage keys:**
- `crosslex:words_seen` — `Record<wordKey, { count, accuracy, lastSeen }>` — algorithm cache, updated after every exercise
- `crosslex:exercise_log` — append-only `ExerciseEvent[]` — source of truth for all metrics (never mutated, only appended)
- `crosslex:learning_rate` — `'review' | 'easy' | 'balanced' | 'intensive'` — persisted user preference
- `crosslex:hardcore_mode` — `'true'` when set — hides translation hint in TypeTheWord exercise; absent means hints shown

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

**What resets on a CEFR level change** (`writeActiveLevel`, `sessionStorage.ts`): every localStorage key here is global unless noted. A new key added to this file needs a deliberate decision — leveled (scoped via `leveledKey()`, a `:{level}` suffix) if it's about *this level's content/progress*, global if it's a *cross-level user preference* — and that decision belongs in this list, not left implicit.

- **Reset on level change** (cleared by `writeActiveLevel` itself, in the one shared write path — not left to each call site to remember):
  - `crosslex:session_filter` — its valid *options* are level-dependent (a theme or verbs/adjectives-only filter that exists at one level may not exist at another). Left stale, it silently narrows the new level's pool — in the worst case to zero, with no error, just a blank session screen. This is the one key that's ever needed this; regression-tested in `sessionStorage.test.ts`'s `writeActiveLevel` suite.
- **Already scoped per level** (not "reset" — switching level just reads an entirely different key, via `leveledKey()`): `crosslex:words_seen`, `crosslex:exercise_log`, `crosslex:known_words`.
- **Deliberately global, untouched by level changes** — cross-level user preferences, not tied to any one level's content: `crosslex:learning_rate`, `crosslex:hardcore_mode`, `crosslex:session_timeout`, `crosslex:auto_advance_correct_seconds`/`crosslex:auto_advance_wrong_seconds`, `crosslex:flip_animation`, `crosslex:mobile_full_view`, `crosslex:known_word_confirmed`, `crosslex:coach_marks`, streak data.

**Cutting a new build with this feature live:** bump `CURRENT_BUILD_ID` in `AlphaAnnouncement/changelog.ts` and add a changelog entry.
