export type ChangelogEntry = {
  newUser: { heading: string; body: string; cta: string };
  returningUser: { heading: string; body: string; changes: string[] };
};

export const CURRENT_BUILD_ID = 'alpha-2026-05-04';

export const CHANGELOG: Record<string, ChangelogEntry> = {
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
