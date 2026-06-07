import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wetter: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Wetter',
        article: 'das',
        translation: 'weather',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The condition of the atmosphere at a particular time and place — including temperature, rain, sun, wind, and clouds.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Wetter'?",
          options: [
            { text: 'the temperature inside a building', isCorrect: false },
            { text: 'the weather outside', isCorrect: true },
            { text: 'the season of the year', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Heute ist das Wetter sehr schön. Ich schaue jeden Morgen, wie das Wetter ist. Das Wetter in Berlin ist oft bewölkt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'wetar', related to English 'weather'. Both words come from the same Germanic root meaning wind or storm.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Witterung',
            article: 'die',
            translation: 'weather conditions, atmospheric state',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Wetterlage',
            article: 'die',
            translation: 'weather situation',
            similarityScore: 3,
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
              "'Wetter' sounds just like the English 'weather' — same word, same meaning, different spelling.",
          },
          {
            id: 2,
            content:
              "Think of 'wetter' — rain makes everything wet. Wetter = the thing that makes you wet.",
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
