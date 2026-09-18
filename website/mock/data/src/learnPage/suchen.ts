import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const suchen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'suchen',
        article: null,
        translation: 'to search, look for',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To try to find someone or something by looking carefully.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'suchen'?",
          options: [
            { text: 'to search, look for', isCorrect: true },
            { text: 'to find', isCorrect: false },
            { text: 'to lose', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{suche}} meine Schlüssel.',
          'Er {{sucht}} eine neue Wohnung.',
          'Wir haben lange nach dem Hund {{gesucht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'suohhen', related to English 'seek' — both share the same Germanic root meaning to pursue or look for.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found at this level — nearby
        // words like 'fahnden' (to search, of the police) name a
        // narrower, specific-context activity, not the same concept.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Suchen' sounds like the English word 'seek' if you squint — same root, same meaning.",
          },
          {
            id: 2,
            content:
              "Think of playing 'hide and seek' — 'suchen' is the seeking part.",
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
