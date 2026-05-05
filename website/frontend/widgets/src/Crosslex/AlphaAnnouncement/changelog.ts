export type ChangelogEntry = {
  newUser: { heading: string; body: string; cta: string };
  returningUser: { heading: string; body: string; changes: string[] };
};

export const CURRENT_BUILD_ID = 'alpha-2026-05-05-session-polish';

export const CHANGELOG: Record<string, ChangelogEntry> = {
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
