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

**`wordContext` paragraph — design principle and consumers:**

Each sentence in `paragraphWithUsage` is an independent chance for a
learner with their own limited, individually-varying vocabulary to
recognize the target word from context — that's why the paragraph repeats
the word across 3+ *separate* sentences rather than once: a given sentence
might simply not land for a particular learner, so each one has to carry
that chance on its own. Write each sentence so it can be understood — and
the target word picked out — using vocabulary a learner at this word's
level is likely to already know.

Don't substitute a word's derivational relatives — words it's derived
from, or words derived from it — for the word itself. That cuts both
ways: a compound built from the target word (e.g. `Steuer` →
`Steuererklärung`, `Genehmigung` → `Baugenehmigung`) is a different
concept from the base word, not an inflected form of it; and for a noun
formed from a verb (`Kündigung` ← `kündigen`, `Anmeldung` ← `anmelden`,
`Genehmigung` ← `genehmigen`), leaning on the verb's conjugations instead
of the noun's own usage teaches the wrong word's grammar. Ordinary,
unrelated vocabulary elsewhere in the sentence is fine and expected — this
rule is specifically about a word's own derivational family, not about
avoiding every other word that happens to share letters or a root with it.

Use the word strictly as the part of speech `wordIntro.partOfSpeech`
labels it, not as a same-spelling word in a different word class. German
nominalizes infinitives directly (`das Leben` from `leben`, `das Rauchen`
from `rauchen`) — identical spelling, different grammatical function — so
a noun entry's paragraph can accidentally use the word as a plain verb
instead of the noun it's meant to teach, and because `contextBlank`'s
matching is case-insensitive, that misuse would still get blanked as if it
were correct. Some German words are true homographs across parts of
speech or even genders with unrelated meanings (`die Steuer`, tax, vs
`das Steuer`, steering wheel — noted in `steuer.ts`'s own etymology
entry) — double-check the sentence uses the word as the specific concept
`wordIntro` declares, not a same-spelling relative.

Match sentence complexity to the word's `level`. A B1-appropriate
subordinate clause or construction can make an A2 sentence unreadable for
the learner it's meant for — see the A2-specific grammar and length rules
below for the concrete ceiling; this is the same underlying principle as
the vocabulary point above, just applied to grammar rather than word
choice.

This data feeds more than one place, so "does the sentence read naturally"
isn't the only bar it has to clear:
- The `contextBlank` exercise (`sessionAlgorithm.ts`, `generateExerciseData`)
  blanks the base word plus any declared `alternateForms`/`trennbarTokens`.
  A sentence where **no** declared form actually matches ends up with a
  blank count of zero — and a zero-blank sentence is hidden from the
  learner entirely until the question is answered
  (`ContextBlankQuestion.tsx`). An inflected form the paragraph uses but
  `alternateForms` doesn't list isn't just missed — it silently removes
  that whole sentence as a teaching opportunity, with nothing in the UI
  signalling the gap. Always double-check every form the paragraph
  actually uses is listed (see `alternateForms` below).
- The word-intro learn-page card (`WordContext.tsx`) displays the **full**
  paragraph, unconditionally, with the word and its forms highlighted —
  real, always-visible content on first encounter with the word, not just
  exercise fodder.
- `storyFixtures.ts`'s `makeContextBlankFixture` mirrors the exercise's own
  matching logic for Storybook fixtures.

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

The `contextBlank` exercise blanks the base form plus any strings listed in `alternateForms`. Without this, conjugated/inflected forms remain visible and leak the answer if they share a sentence with a form that *is* declared, or — if a sentence's only occurrence is the undeclared form — silently drop that entire sentence from the exercise instead (see "design principle and consumers" above). Either way, an incomplete list is a real content bug, not just a cosmetic one. The correct answer shown to the user is always the base form (dictionary lemma).

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
