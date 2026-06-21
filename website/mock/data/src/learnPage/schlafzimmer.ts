import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schlafzimmer: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Schlafzimmer',
        displayName: 'Schlaf­zimmer',
        article: 'das',
        translation: 'bedroom',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The room in a home used for sleeping. In German flat listings, the number of Zimmer (rooms) is stated, and a Schlafzimmer counts as one room separate from the living room and kitchen.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Schlafzimmer'?",
          options: [
            { text: 'the bedroom', isCorrect: true },
            { text: 'the living room', isCorrect: false },
            { text: 'the bathroom', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Schlafzimmer ist klein aber gemütlich. Im Schlafzimmer habe ich ein großes Bett. Das Schlafzimmer liegt ruhig zum Garten.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'schlafen' (to sleep) + 'Zimmer' (room). A Schlafzimmer is simply the room for sleeping — the same logic as 'bedroom' in English.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Schlafraum',
            article: 'der',
            translation: 'sleeping room',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Schlafgemach',
            article: 'das',
            translation: 'bedchamber (old-fashioned)',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
        ],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'SCHLAF-zimmer' — 'schlafen' = to sleep, 'Zimmer' = room. The sleep room: exactly like 'bedroom' but built from different words.",
          },
          {
            id: 2,
            content:
              "Think of 'sleep' + 'chamber' — Schlafzimmer is Germany's version of a sleeping chamber.",
          },
        ],
      },
      {
        moduleType: 'wordShowcase',
        heading: { text: 'Word Showcase' },
      },
    ],
  },
};
