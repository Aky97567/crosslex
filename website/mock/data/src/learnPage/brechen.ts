import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const brechen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'brechen',
        article: null,
        translation: 'to break',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To cause something to separate into pieces by force, or to break a rule, promise, or record.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'brechen'?",
          options: [
            { text: 'to break', isCorrect: true },
            { text: 'to fix something', isCorrect: false },
            { text: 'to clean something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Pass auf, das Glas {{bricht}} leicht.',
          'Er hat sich beim Skifahren das Bein {{gebrochen}}.',
          'Sie {{brach}} ihr Versprechen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'brehhan', directly related to English 'break' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zerbrechen',
            article: null,
            translation: 'to break, shatter',
            similarityScore: 4,
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
              "'Brechen' looks and sounds like English 'break-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture a glass shattering on the floor — 'Es bricht!'",
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
