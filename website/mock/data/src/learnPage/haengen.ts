import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const haengen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'hängen',
        article: null,
        translation: 'to hang',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To attach or suspend something so that it does not touch the ground, or to be suspended in that way.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'hängen'?",
          options: [
            { text: 'to hang', isCorrect: true },
            { text: 'to fold something', isCorrect: false },
            { text: 'to carry something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Bild {{hängt}} über dem Sofa.',
          'Ich {{hänge}} meine Jacke an den Haken.',
          'Die Wäsche hat den ganzen Tag {{gehangen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'hangen', directly related to English 'hang' — the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'baumeln',
            article: null,
            translation: 'to dangle',
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
              "'Hängen' sounds like 'hang in' — hang something in place.",
          },
          {
            id: 2,
            content:
              "Picture a coat hanger (Hänger) holding your jacket — that's hängen.",
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
