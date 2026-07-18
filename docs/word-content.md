# Word Content Guide

How to add and edit word data (files in `mock/data/src/learnPage/`), pick themes, and write A2-level content.

## Adding New Words

Word data lives in `mock/data/src/learnPage/`. Each word is its own file.

**Steps:**
1. Create `mock/data/src/learnPage/<wordkey>.ts` — use an all-lowercase ASCII key (e.g. `ueberweisung` for Überweisung, `kuendigung` for Kündigung)
2. Import and add the word to `sampleLearnPageContent.ts` — both the import and the object entry
3. Type-check: `npx tsc --project mock/data/tsconfig.json --noEmit`

**Word file structure** (copy from any existing file):
- `wordIntro` — word, article, translation, partOfSpeech, level `['B1']`; omit `representativeImageUrl` until a real URL exists; for compound nouns add a `displayName` with soft hyphens (see below)
- `wordMeaning` — one-paragraph definition
- `meaningGuessQuestion` — 3 options, exactly 1 `isCorrect: true`
- `wordContext` — paragraph using the word **at least 3 times**; include `alternateForms` for any inflected forms that appear in the paragraph (see below); for trennbar verbs, see trennbar rules below
- `etymology` — origin explanation
- `similarWords` — 2–3 **synonyms** (not thematically related words) with article, translation, similarityScore, level, cefrRelevant
- `mnemonics` — 2 mnemonics; omit `imageUrl` until a real URL exists
- `wordShowcase` — always include, leave empty (hides itself when no URL)

**`word` vs `displayName` in `wordIntro`:**

`wordIntro` has two related fields:

| Field | Value | Used for |
|---|---|---|
| `word` | Plain form, **no soft hyphens** — e.g. `'Krankenversicherung'` | Exercise logic: `contextBlank` regex matching, `typeTheWord` character validation, distractor generation |
| `displayName` | Optional. Same word **with soft hyphens** — e.g. `'Kranken­versicherung'` | Display only: word intro heading, fill-in-the-blank options, word definition question, badges |

**Rule:** always set `word` to the plain form. Add `displayName` whenever the word is long enough to overflow on a phone screen (roughly 12+ characters). Short words like `'Konto'` or `'Frist'` need no `displayName`.

```ts
// Compound noun — needs both fields
word: 'Krankenversicherung',
displayName: 'Kranken­versicherung',

// Short word — word only
word: 'Konto',
```

**Soft hyphens in `displayName`:**

German compound nouns don't break naturally on mobile. We use soft hyphens (`­`, written as `­` in source) in `displayName` placed at each morphological boundary.

Rule: insert a soft hyphen at every word boundary in the compound. Examples:
- `'Kranken­versicherung'` (Kranken + versicherung)
- `'Neben­kosten­abrechnung'` (Neben + kosten + abrechnung)
- `'Arbeits­losen­geld'` (Arbeits + losen + geld)

Verbs and adjectives rarely need this — it mainly affects long nouns.

**`alternateForms` — what to include per part of speech:**

The `contextBlank` exercise blanks the base form plus any strings listed in `alternateForms`. Without this, conjugated/inflected forms remain visible and leak the answer. The correct answer shown to the user is always the base form (dictionary lemma).

| Part of speech | What to include in `alternateForms` |
|---|---|
| Verb | Partizip II (past participle), e.g. `beantragt`, `bezahlt`, `geschrieben`. Also include Präsens 3rd-person singular if it appears and is visually distinct (e.g. `spricht` for `sprechen`, `arbeitet` for `arbeiten`). Also include 1st-person singular if it appears and is shorter than the infinitive (e.g. `bestelle`, `bezahle`). |
| Verb (trennbar) | Partizip II only (e.g. `nachgewiesen`, `umgestiegen`). The separated prefix form is **not** in `alternateForms` — it goes in `trennbarTokens` instead for display highlighting. |
| Noun | Nominative plural if the paragraph uses it (e.g. `Wohnungen` for `Wohnung`). Most noun paragraphs repeat the nominative singular — omit if not needed. |
| Adjective | Attributive declension forms if the paragraph uses them (e.g. `schnelles` for `schnell`). Rare at A2/B1. |

**Trennbar verbs — mandatory paragraph structure and extra fields:**

Add `trennbar: true` to `wordIntro`. The `wordContext` paragraph **must follow this exact sentence order**:

1. **Infinitive** — "Sie müssen … nachweisen." ← blankable in contextBlank (base form)
2. **Separated prefix form** — "Bitte weisen Sie … nach." ← shown as context, NOT blanked; parts highlighted in the learn card
3. **Partizip II** — "Er hat … nachgewiesen." ← blankable in contextBlank (via `alternateForms`)

In `wordContext`, set:
```ts
alternateForms: ['partizipII'],           // e.g. ['nachgewiesen']
trennbarTokens: ['stemForm', 'prefix'],   // e.g. ['weisen', 'nach'] — tokens highlighted in sentence 2
```

The exercise blanks sentences 1 and 3; sentence 2 is rendered as plain text but with `stemForm` and `prefix` highlighted in the learn card alongside all other form highlights.

**Gotchas encountered:**
- `representativeImageUrl` and mnemonic `imageUrl` are **multi-line** in the file (`key:\n  'url',`). When bulk-stripping with `sed`, removing the key line leaves the URL value as an orphaned string — causes a TS error. Always run a second `sed` pass to remove the bare URL lines too, then verify with `grep`.
- `sed` patterns containing `//` (as in `https://`) need escaping or an alternative approach — deleting by line number (`sed '15d'`) is safer for one-off fixes.
- After any bulk file edit, always run the type-check before committing.

## Themes

Every word has a `themes` field in `wordIntro` that categorises it for filtering and navigation. The type is defined at:

`website/common/crosslex/view/src/crosslex/module/content/LearnPageModules.ts` (line 30)

```ts
export type WordTheme = 'transport' | 'health' | 'daily_life' | 'work' | 'bureaucracy' | 'finance';
```

### Theme taxonomy

| Theme | Meaning | Example words |
|---|---|---|
| `daily_life` | Everyday objects, routines, family, food, home, weather | `Apfel`, `Frühstück`, `Familie`, `Wetter`, `Katze` |
| `bureaucracy` | Government offices, paperwork, registration, permits | `Anmeldung`, `Formular`, `Behörde`, `Ausweis` |
| `finance` | Money, banking, payments, insurance | `Konto`, `Gehalt`, `Überweisung`, `Steuer` |
| `work` | Employment, contracts, workplace, rights | `Arbeitgeber`, `Kündigung`, `Probezeit`, `Gewerkschaft` |
| `health` | Medical care, illness, prescriptions, insurance | `Arzt`, `Krankenversicherung`, `Rezept`, `Fieber` |
| `transport` | Getting around — trains, buses, travel, tickets | `Fahrplan`, `Ticket`, `Verspätung`, `Zug` |
| `trennbar` | Separable verbs (prefix detaches in conjugation) | `umsteigen`, `anrufen`, `ausfüllen` |

### Rules for picking themes

- A word gets **1–3 themes**; most words need only 1–2.
- Pick based on the **primary context** in which a German resident would encounter the word, not abstract category membership. (`Krankenversicherung` takes `health`, `work`, and `finance` because a resident deals with it in all three contexts.)
- `daily_life` is the catch-all for common vocabulary with no bureaucratic, medical, or work slant.
- If a word genuinely fits none of the 6 themes, **add a new `WordTheme` literal** and update all three of these places, then add a row to the table above and document it here:
  1. `website/common/crosslex/view/src/crosslex/module/content/LearnPageModules.ts` line 30 — **single source of truth** for the type; `sessionStorage.ts` and the word data layer both import from here
  2. `website/frontend/features/src/Session/sessionStorage.ts` — the `valid: WordTheme[]` **runtime array** inside `readActiveTheme()`; the type is imported automatically, but this array must be updated manually or the new theme is silently stripped from localStorage on read
  3. `website/frontend/widgets/src/Crosslex/SessionDashboard/SessionDashboard.tsx` — `THEME_LABELS` `Record<WordTheme, string>`; missing it renders a blank option in the theme picker (the `Record` type will catch this as a compile error in the widgets package)

## A2 Word Content Guidelines

When adding A2-level words (level `['A2']` in `wordIntro`):

- **Vocabulary domain**: daily life — shopping, transport, weather, family, time, body, home, food, common verbs
- **Grammar in `wordContext`**: Präsens and Perfekt are preferred; simple `war`/`hatte` Präteritum is acceptable. **Avoid**: Konjunktiv II (`würde/könnte` as hypotheticals), Passiv constructions, Genitiv, complex nested subordinate clauses
- **Sentence length**: max ~15 words per sentence; prefer simple main clauses
- **`meaningGuessQuestion`**: wrong options should also be everyday A2-level vocabulary (not bureaucratic B1 terms)
- **`similarWords`**: synonyms only — words that mean roughly the same thing, not thematically related words; pick other A2 common words; keep `similarityScore` ≥ 3; `cefrRelevant: true`
- **`etymology`**: brief, max 2 sentences; favour English/Latin cognates; no scholarly depth
- Word file structure is otherwise identical to B1 words — copy from any existing file and change `level: ['A2']`
