import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const scheinen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'scheinen',
        article: null,
        translation: 'to shine, seem',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To give off light, such as the sun, or to appear to be a certain way.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'scheinen'?",
          options: [
            { text: 'to shine, seem', isCorrect: true },
            { text: 'to be dark', isCorrect: false },
            { text: 'to be certain', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Sonne {{scheint}} heute den ganzen Tag.',
          'Er {{scheint}} müde zu sein.',
          'Die Sterne haben hell {{geschienen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'skinan', related to English 'shine' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym covering both senses.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Scheinen' looks and sounds like English 'shine-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture bright sunshine on a summer day — 'Die Sonne scheint.'",
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
