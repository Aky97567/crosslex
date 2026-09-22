export type ChangelogEntry = {
  newUser: { heading: string; body: string; cta: string };
  returningUser: { heading: string; body: string; changes: string[] };
};

export const CURRENT_BUILD_ID = 'alpha-2026-09-22-a1-level-and-cefr-relabel';

export const CHANGELOG: Record<string, ChangelogEntry> = {
  'alpha-2026-09-22-a1-level-and-cefr-relabel': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'A new A1 level, plus every word now sits at its true CEFR level.',
      changes: [
        'New: A1 level — select it in Settings or from onboarding',
        'Fix: 168 words were mislabeled against the official Goethe-Institut word lists (many marked A2 or higher were actually A1) — every word now carries its correct CEFR level, and 129 of them now live in the new A1 tier',
      ],
    },
  },
  'alpha-2026-09-22-reflexiv-distractor-fix': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'Fixed shortcuts in fill-in-the-blank exercises for reflexive and separable verbs.',
      changes: [
        'Fix: "Fill in the Blank" exercises for reflexive verbs (sich freuen, sich beeilen, and others) no longer give away the answer — since the reflexive pronoun (sich/uns/mich/dich) was never blanked, the one multiple-choice option containing "sich" was always the correct one. Distractors are now drawn only from other reflexive verbs when the target word is reflexive.',
        'Fix: same fix for separable (trennbar) verbs like anrufen, aufstehen — their two-part example sentence ("Ich ___ dich morgen früh ___.") revealed the word splits into two parts before you even looked at the options. Distractors are now drawn only from other separable verbs when the target word is separable.',
      ],
    },
  },
  'alpha-2026-09-20-filter-clusters': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'The session Filter dropdown is now organised into four clear groups.',
      changes: [
        'New: Filter dropdown now groups into Topic, Part of Speech, Verb Grammar, and Adjective Grammar — no more grammar tags mixed in with topics',
        'New: "Adjectives only" filter, alongside "Verbs only" — both now only appear when your level actually has that part of speech',
      ],
    },
  },
  'alpha-2026-09-20-comparison-full-degrees': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'The Comparison card now covers every degree, in both grammatical forms.',
      changes: [
        'New: "Comparison" card now also shows the Positiv (grundform) alongside Komparativ and Superlativ',
        'New: every degree shows both a predicative sentence ("... ist älter") and an attributive sentence ("ein älterer Mann"), sharing the same scenario',
      ],
    },
  },
  'alpha-2026-09-20-comparison-module': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'Every adjective now shows its comparative and superlative forms.',
      changes: [
        'New: "Comparison" card on every adjective word page — see the comparative (schöner) and superlative (am schönsten / der schönste) forms in example sentences',
      ],
    },
  },
  'alpha-2026-09-20-b2-level': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'A new B2 level, with 30 words to start.',
      changes: [
        'New: B2 level — select it in Settings or from onboarding',
        'New: 30 B2 nouns added — more abstract, everyday-professional vocabulary (Möglichkeit, Herausforderung, Nachweis, and more)',
      ],
    },
  },
  'alpha-2026-09-19-b1-expansion': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: '60 new B1 words: 30 verbs, 30 adjectives.',
      changes: [
        'New: 30 B1 verbs added, across regular, separable (trennbar), irregular, and reflexive types',
        'New: 30 B1 adjectives added, including ones with tricky comparative/superlative forms (krank, schwach, arm, and more)',
      ],
    },
  },
  'alpha-2026-09-19-a2-adjectives': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: '30 new A2 adjectives added.',
      changes: [
        'New: 30 A2 adjectives added, including the ones with tricky comparative/superlative forms (alt, gut, hoch, groß, and more)',
        'New: "Adjectives" filter category in the session Filter dropdown',
      ],
    },
  },
  'alpha-2026-09-18-a2-verb-expansion': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: '50 new A2 verbs, plus new ways to filter sessions.',
      changes: [
        'New: 50 A2 verbs added — everyday verbs, separable (trennbar) verbs, irregular verbs, and reflexive verbs',
        'New: "Timetable" theme for verbs used to describe a daily routine (Tagesablauf) — what you do on a typical day, yesterday, or last weekend',
        'New: "Reflexiv" and "Irregular verbs" filter categories in the session Filter dropdown',
      ],
    },
  },
  'alpha-2026-09-18-verbs-only': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'Filter sessions to verbs only.',
      changes: [
        'New: "Verbs only" option in the session Filter dropdown — drill just the verbs at your level',
      ],
    },
  },
  'alpha-2026-06-21-blank-screen-fix': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'Session reliability fix.',
      changes: [
        'Fix: blank screen during fill-in-the-blank exercises on compound nouns (e.g. Krankenversicherung)',
        'Fix: exercises now always render even if the scheduled type falls back to an alternative',
      ],
    },
  },
  'alpha-2026-05-07-type-the-word': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'A harder exercise type is here.',
      changes: [
        'New: "Type the word" exercise — type the German word from memory after practising it a few times',
        'Accepts umlaut alternatives: ue for ü, oe for ö, ae for ä, ss for ß',
        'Only appears once you know a word well enough (3+ attempts, 50%+ accuracy)',
      ],
    },
  },
  'alpha-2026-05-07-level-selection': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer — built for adults navigating real life in Germany. Choose your level, pick a session length and learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'A2 level and level switching.',
      changes: [
        'New: choose your German level (A2 or B1) when you first open the app',
        'New: 10 A2 words added — everyday vocabulary for A2 learners',
        'New: switch your level any time in Settings',
        'Fix: word progress is now tracked separately per level',
      ],
    },
  },
  'alpha-2026-05-05-words': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer for B1+ learners — built for adults navigating real life in Germany. Choose a session length, pick your learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: '10 new B1 words added.',
      changes: [
        'New words: Termin, Behörde, Anmeldung, Kündigung, Mietvertrag',
        'New words: Anerkennung, Aufenthalt, Beitrag, Krankenversicherung, Steuer, Widerspruch',
      ],
    },
  },
  'alpha-2026-05-05-self-heal': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer for B1+ learners — built for adults navigating real life in Germany. Choose a session length, pick your learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'Bug fix: all words now show up correctly in sessions.',
      changes: [
        'Fix: some words were incorrectly treated as already seen and never introduced in sessions',
        'Sessions now self-heal corrupted word data on start',
      ],
    },
  },
  'alpha-2026-05-05-known-words': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer for B1+ learners — built for adults navigating real life in Germany. Choose a session length, pick your learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'You can now skip words you already know.',
      changes: [
        'New: "Already know it" button on word intro cards removes the word from future sessions',
        'New: manage known words in Settings — remove any word to bring it back',
      ],
    },
  },
  'alpha-2026-05-05-settings': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer for B1+ learners — built for adults navigating real life in Germany. Choose a session length, pick your learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'Settings and nav are here.',
      changes: [
        'New: gear icon in the top bar opens a settings panel',
        'New: configure session timeout (default 5 minutes of inactivity)',
        'New: storage usage breakdown in settings',
        'Fix: advance button is now always visible in a sticky footer during sessions',
      ],
    },
  },
  'alpha-2026-05-05-word-metrics': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer for B1+ learners — built for adults navigating real life in Germany. Choose a session length, pick your learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'Word progress is now visible on the dashboard.',
      changes: [
        'New: "Your progress" panel on the session dashboard shows words at each readiness level',
        'Seed planted: word has been introduced',
        'Familiar: ≥2 correct answers',
        'Test-ready: ≥4 correct answers with recent accuracy',
      ],
    },
  },
  'alpha-2026-05-05-session-polish': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer for B1+ learners — built for adults navigating real life in Germany. Choose a session length, pick your learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'Exercise polish update.',
      changes: [
        'Fix: selecting a wrong answer now locks all options and highlights the correct one',
        'Fix: wrong answer shows a "Review word →" button to revisit the full word page',
        'Fix: fill-in-the-blank now blanks every occurrence of the word in the sentence',
        'Fix: blank always fills with the correct word after answering',
      ],
    },
  },
  'alpha-2026-05-04-session': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer for B1+ learners — built for adults navigating real life in Germany. Choose a session length, pick your learning pace, and Crosslex will guide you through words and exercises. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'The session loop is here.',
      changes: [
        'New: guided sessions with a start screen and timer',
        'New: three exercise types — meaning guess, fill the blank, define the word',
        'New: aggressive vs conservative learning rate setting',
        'Your progress is tracked locally and used to prioritise review',
      ],
    },
  },
  'alpha-2026-05-04': {
    newUser: {
      heading: "You're testing Crosslex Alpha",
      body: "Crosslex is a German vocabulary trainer for B1+ learners — built for adults navigating real life in Germany. This alpha has a small set of words for you to explore. Flip through them, read the context, and try the quiz. Your feedback shapes what we build next.",
      cta: "Let's go →",
    },
    returningUser: {
      heading: "You're back — something's new",
      body: 'Thanks for returning to Crosslex.',
      changes: [],
    },
  },
};
