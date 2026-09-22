import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const nehmen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'nehmen',
        article: null,
        translation: 'to take',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'transport', 'irregular'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To take hold of something, or to accept something offered.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'nehmen'?",
          options: [
            { text: 'to take', isCorrect: true },
            { text: 'to give', isCorrect: false },
            { text: 'to lose', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte den Kaffee {{nehmen}}.',
          'Er {{nimmt}} den Bus zur Arbeit.',
          'Wir haben ein Taxi {{genommen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'neman', related to English 'nimble' (quick to take or grab) — both trace back to the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found — 'mitnehmen' and
        // 'teilnehmen' are compounds built from 'nehmen' naming
        // narrower, specific activities, not the same general concept.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Nehmen' sounds like 'name 'em' — you take (nehmen) what you name.",
          },
          {
            id: 2,
            content:
              "Think of being 'nimble' enough to grab and take something quickly — 'nehmen'.",
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
