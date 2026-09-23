import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verlieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'verlieren',
        article: null,
        translation: 'to lose',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To no longer have something, either by misplacing it or by losing a game or competition.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'verlieren'?",
          options: [
            { text: 'to lose', isCorrect: true },
            { text: 'to find something', isCorrect: false },
            { text: 'to win something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{verliere}} ständig meine Schlüssel.',
          'Unser Team {{verliert}} das Spiel.',
          'Er hat seinen Job {{verloren}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'firliosan', related to English 'lose' and 'forlorn' (literally 'utterly lost') — all share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'einbüßen',
            article: null,
            translation: 'to lose, forfeit (formal)',
            similarityScore: 3,
            level: ["B1"],
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
              "'Verlieren' contains 'lieren', close to 'leer' (empty) — losing leaves your hands empty.",
          },
          {
            id: 2,
            content:
              "Picture searching your pockets frantically — 'Ich habe meine Schlüssel verloren!'",
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
