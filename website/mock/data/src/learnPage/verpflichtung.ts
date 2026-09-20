import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verpflichtung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Verpflichtung',
        article: 'die',
        translation: 'obligation',
        partOfSpeech: 'noun',
        themes: ['bureaucracy', 'finance'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A duty or commitment that someone must fulfill.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Verpflichtung'?",
          options: [
            { text: 'an obligation, duty', isCorrect: true },
            { text: 'a favor', isCorrect: false },
            { text: 'a gift', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er hat viele berufliche {{Verpflichtungen}}.',
          'Diese {{Verpflichtung}} können wir nicht ignorieren.',
          'Sie ist ihren {{Verpflichtungen}} immer nachgekommen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ver-' + 'Pflicht' (duty) — literally 'to bind someone to a duty'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Pflicht',
            article: 'die',
            translation: 'duty',
            similarityScore: 5,
            level: ['B1'],
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
              "'Verpflichtung' contains 'Pflicht' (duty) — a Verpflichtung is a binding duty.",
          },
          {
            id: 2,
            content:
              "Think of signing a contract that binds you to your duties — Verpflichtung.",
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
