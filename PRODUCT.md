# Crosslex — Product Documentation

## What is Crosslex?

Crosslex is a vocabulary training platform for **B1+ German learners**, specifically targeting **recent immigrants to Germany** who need practical, high-utility vocabulary beyond what Duolingo or Anki offer.

The core insight: Membean's methodology (spaced repetition + multiple recall patterns via distinct widgets) applied to German for adult self-directed learners — a completely unserved market. Membean teaches English to schoolchildren in a teacher-administered B2B model. Crosslex is consumer-first, German-first, adult-first.

---

## Who is it for?

- Recent immigrants to Germany at B1+ level
- Self-directed learners (no teacher, no classroom)
- Adults who need vocabulary for real life: bureaucracy, housing, work, social situations
- People for whom Duolingo is too shallow and Anki is too manual

---

## What makes it different?

- **Language**: German, not English
- **Audience**: Adult immigrants, not schoolchildren
- **Model**: Consumer/freemium, not B2B school licences
- **Methodology**: 7–9 distinct recall patterns per word create multiple memory pathways ("resonance"), which is especially effective beyond A2 level where rote memorisation breaks down
- **Content**: Practical immigrant-life vocabulary, not textbook vocabulary

---

## Stack Decisions

| Part | Tool | Reason |
|---|---|---|
| Marketing / SEO pages | Next.js (existing crosslex-next) | SSR, SEO-critical |
| Learning web app | Vite + React SPA (crosslex-react) | No SSR needed, SPA behaviour, shared with mobile |
| Native apps | React Native + Expo | Shared TS/component logic with web |
| Backend | Supabase (future) | Postgres, auth, storage, edge functions |
| Billing | Stripe (future) | Hosted portal, no custom billing UI |
| AI content generation | Anthropic API (Claude Haiku/Sonnet) | Word content, example sentences, mnemonics |
| Local dev AI | Ollama + Qwen 2.5 32B | Code tasks, M3 Max 36GB |
| Monorepo | Yarn 4 workspaces | Already established |

---

## Word Content Schema

Each word is a `LearnPageContent` object with a `content.modules` array of typed modules:

- `wordIntro` — word, article, translation, part of speech, CEFR level, image
- `wordMeaning` — plain language definition
- `meaningGuessQuestion` — 4-option multiple choice
- `wordContext` — paragraph with natural usage
- `etymology` — word origin
- `similarWords` — thematically related words with similarity score and CEFR level
- `mnemonics` — 2–3 memory hooks with images
- `wordShowcase` — placeholder for future video widget

### SimilarWord type
```ts
{
  word: string;
  article: Article;
  translation: string;
  similarityScore: 1 | 2 | 3 | 4 | 5;
  level?: ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')[];
}
```

---

## Current Word List

### A1 (existing)
haus, katze, tisch, auto, apfel

### B1 (added May 2026)
erfahrung, beantragen, unterlagen, frist, formular, bescheinigung, uebertragen, genehmigung, nachweisen, anspruch, zustaendigkeit

Target: **30 words** for first meaningful user impression.

---

## Exercise Types

Ordered by build priority for the session loop:

| # | Stimulus | Response | Complexity | Status |
|---|---|---|---|---|
| 1 | Definition | Pick correct word (4 options) | Low | ✅ exists (`meaningGuessQuestion`) |
| 2 | Context sentence with blank | Pick correct word (3 options) | Low | ❌ |
| 3 | Word shown | Pick correct definition (4 options) | Low | ❌ |
| 4 | Image + definition | Type first 3 letters | Medium | ❌ |
| 5 | Image alone | Type word | Medium | ❌ |
| 6 | Crossword-style letter reveal | Type full word | High | ❌ |
| 7 | Full sentence | Select all correct usages (SATA) | High | ❌ — phase 3 |

---

## Session Loop Design

### User flow
1. User selects session duration (5 / 10 / 15 min)
2. Session begins — timer counts down
3. Each card is either:
   - **New word** — full word page (all modules in sequence)
   - **Exercise** — one of the exercise types above, on a previously seen word
4. Session ends when timer runs out or user exits

### Learning rate setting
- **Aggressive**: up to 3 new words per session, rest are exercises
- **Conservative**: no new words, exercises only on known words

### Word scheduling logic (mocked frontend, localStorage)
- Track: words seen, times seen, accuracy per word, last seen timestamp
- New word eligibility: not yet seen
- Exercise eligibility: seen at least once
- Weighting: lower accuracy → higher exercise frequency
- No new words until at least 3 exercises done on previous word

### Mocked state (localStorage keys)
```
crosslex:words_seen        — { [wordKey]: { count, accuracy, lastSeen } }
crosslex:session_history   — [{ date, duration, wordsNew, wordsReviewed, accuracy }]
crosslex:learning_rate     — 'aggressive' | 'conservative'
```

---

## Dashboard Features (Priority Order)

### Tier 1 — Build first
1. **Words in play** — count of trained words, progress bars per CEFR level
2. **Training history** — sessions with time, accuracy, words new/reviewed
3. **Daily goal + completion signal** — target minutes/words, clear "done today" state

### Tier 2 — Differentiators
4. **Word progress categories** — new / seen / strong / quizzable
5. **"I Know This" (IKT)** — skip words already known, still appear in exercises
6. **Streak** — daily consistency tracker (Membean doesn't have this; critical for consumer app)

### Tier 3 — Later
7. **Accuracy tracking** per word and session
8. **Level progression milestones** — e.g. "You now have enough vocabulary to understand a German tenancy agreement"
9. **Assessments** — formal quizzes on quizzable words

---

## Funnel / Go-to-Market

1. **Landing page** (Next.js, crosslex-next) — SEO-optimised, targets German learner search queries
2. **CTA** → opens the SPA (crosslex-react) with the alpha word set
3. **Alpha experience** — ~30 words, full session loop, no login required
4. **Freemium gate** — login/signup to save progress, unlock more words
5. **Paid tier** — more words, more languages (future)

---

## What's Next (as of May 2026)

1. Generate 19 more B1 words to reach 30 total
2. Build exercise types 2 and 3 (context blank + word→definition)
3. Build timed session loop with localStorage state
4. Build dashboard (Tier 1 features only)
5. Wire landing page (Next.js) to SPA with alpha CTA
