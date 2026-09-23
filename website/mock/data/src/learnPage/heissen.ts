import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const heissen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'heißen',
        article: null,
        translation: 'to be called, named',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To have a particular name.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'heißen'?",
          options: [
            { text: 'to be called, named', isCorrect: true },
            { text: 'to look a certain way', isCorrect: false },
            { text: 'to come from a place', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{heiße}} Anna.',
          'Wie {{heißt}} du?',
          'Früher hat die Straße anders {{geheißen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'heizan', related to the archaic English word 'hight' (meaning 'to be named', still seen in old texts) — both share the same Germanic root.",
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
              "'Heißen' sounds like 'height-en' — but really it's about your name, not your height!",
          },
          {
            id: 2,
            content:
              "Picture introducing yourself: 'Ich heiße...' — that's heißen.",
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
