import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const heiraten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'heiraten',
        article: null,
        translation: 'to marry',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To become someone's husband or wife in an official ceremony.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'heiraten'?",
          options: [
            { text: 'to marry', isCorrect: true },
            { text: 'to move in together', isCorrect: false },
            { text: 'to get divorced', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie {{heiraten}} im Sommer.',
          'Er {{heiratet}} seine Freundin nächstes Jahr.',
          'Meine Schwester hat letzten Monat {{geheiratet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Heirat' (marriage), related to Old High German 'hīwa' (household, spouse) — an old Germanic root about forming a household together.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Heiraten' sounds like 'hire-aten' — imagine 'hiring' a life partner, though the real meaning is much sweeter.",
          },
          {
            id: 2,
            content:
              "Picture wedding rings exchanged at the altar — that's heiraten.",
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
