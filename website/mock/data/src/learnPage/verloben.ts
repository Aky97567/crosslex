import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verloben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich verloben',
        article: null,
        translation: 'to get engaged',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To formally promise to marry someone, usually marked by giving or receiving a ring.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich verloben'?",
          options: [
            { text: 'to get engaged', isCorrect: true },
            { text: 'to get divorced', isCorrect: false },
            { text: 'to move to a new city', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie haben sich letzten Sommer {{verlobt}}.',
          'Wir {{verloben}} uns nächstes Jahr.',
          'Er hat sich mit seiner Freundin {{verlobt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'geloben' (to vow, promise) with the prefix 'ver-' — sich verloben is literally 'to promise oneself' to someone in marriage.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym for this specific milestone.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Verloben' contains a hidden 'loben' (to praise/vow) — sich verloben is making a solemn promise.",
          },
          {
            id: 2,
            content:
              "Picture a ring box opening — the classic verloben moment.",
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
