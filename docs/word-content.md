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
- `wordContext` — `paragraphWithUsage` is an **array of sentence strings** (one element per sentence, not one long string) using the word **at least 3 times**; wrap every occurrence (any inflected form) in `{{...}}` within each sentence (see below); for trennbar verbs, see trennbar rules below
- `etymology` — origin explanation
- `similarWords` — 2–3 **synonyms** (not thematically related words) with article, translation, similarityScore, level, cefrRelevant
- `mnemonics` — 2 mnemonics; omit `imageUrl` until a real URL exists
- `wordShowcase` — always include, leave empty (hides itself when no URL)

**`wordContext` paragraph — design principle and consumers:**

`paragraphWithUsage: string[]` — each sentence is its own array element,
written out explicitly rather than inferred by splitting a single string
on punctuation. That inference used to break on sentences ending in `?`
or `!`, and on non-terminal periods like German ordinal dates
(`"30. April"`) — an explicit array has no punctuation to misread, so
there's nothing left to get wrong there. No minimum length is enforced by
the type (a handful of older words still have 2 sentences); the "3
sentences" rule below is a content guideline to follow for new/edited
words, not a structural guarantee.

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
  blanks every `{{...}}`-marked span. A sentence with **no** marker in it
  ends up with a blank count of zero — and a zero-blank sentence is hidden
  from the learner entirely until the question is answered
  (`ContextBlankQuestion.tsx`). An inflected form the paragraph uses but
  didn't get marked isn't just missed — it silently removes that whole
  sentence as a teaching opportunity, with nothing in the UI signalling the
  gap. Always double-check every occurrence of the word (any form) in the
  paragraph is wrapped in `{{...}}` (see below).
- The word-intro learn-page card (`WordContext.tsx`) displays the **full**
  paragraph, unconditionally, with marked spans highlighted — real,
  always-visible content on first encounter with the word, not just
  exercise fodder.
- `storyFixtures.ts`'s `makeContextBlankFixture` mirrors the exercise's own
  parsing for Storybook fixtures.

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

**Marking occurrences with `{{...}}`:**

Every occurrence of the word in `paragraphWithUsage` — the base form or any inflected form — is wrapped inline: `{{Steuer}}`, `{{arbeitet}}`, `{{gegessen}}`. `parseAnnotatedParagraph` (from `@whitelotus/common-crosslex-view`) reads these markers directly; there's no separate list to declare or keep in sync with the prose, and no matching-by-inference — a form that isn't wrapped simply isn't recognized, so it's immediately obvious in the source which occurrences are "real" and which aren't, unlike the old `alternateForms` array that could silently drift out of sync with what the sentence actually used. The correct answer shown to the user is always the base form (dictionary lemma) from `wordIntro.word`, regardless of which marked form got blanked.

Mark every occurrence you write, per part of speech:

| Part of speech | What to mark |
|---|---|
| Verb | The infinitive, Partizip II (e.g. `beantragt`, `bezahlt`, `geschrieben`), and any other conjugated form that appears (e.g. `spricht`, `arbeitet`, `bestelle`) |
| Noun | The base form, plus the nominative plural if the paragraph uses it (e.g. `Wohnungen` for `Wohnung`) |
| Adjective | The base form, plus any declension form the paragraph uses (e.g. `schnelles` for `schnell`) |

**Trennbar verbs — mandatory paragraph structure:**

Add `trennbar: true` to `wordIntro`. The `wordContext` paragraph **must follow this exact sentence order**:

1. **Infinitive** — "Sie müssen … {{nachweisen}}." ← blankable in contextBlank
2. **Separated prefix form** — "Bitte {{weisen}} Sie … {{nach}}." ← the stem and prefix are marked individually; the exercise still blanks them, styled as context rather than the quiz answer (see below), and the learn card highlights them the same as any other marked span
3. **Partizip II** — "Er hat … {{nachgewiesen}}." ← blankable in contextBlank

Which sentence gets the "context" styling isn't declared per word — it's derived automatically from `wordIntro.trennbar` (always sentence index 1, per the mandatory order above), so there's nothing extra to set in `wordContext` itself.

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
