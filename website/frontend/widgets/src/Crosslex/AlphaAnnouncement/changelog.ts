export type ChangelogEntry = {
  newUser: { heading: string; body: string; cta: string };
  returningUser: { heading: string; body: string; changes: string[] };
};

export const CURRENT_BUILD_ID = 'alpha-2026-05-05-words';

export const CHANGELOG: Record<string, ChangelogEntry> = {
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
