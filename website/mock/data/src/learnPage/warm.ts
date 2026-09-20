import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const warm: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'warm',
        article: null,
        translation: 'warm',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having a comfortably high temperature; not cold.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'warm'?",
          options: [
            { text: 'warm', isCorrect: true },
            { text: 'cold', isCorrect: false },
            { text: 'dry', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Heute ist es schön {{warm}}.',
          'Ich brauche eine {{warme}} Jacke.',
          'Das Essen ist noch {{warm}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Heute ist es {{wärmer}} als gestern.',
        superlativeSentence: 'Im Sommer ist es {{am wärmsten}}.',
        superlativeAttributiveSentence: 'Das ist der {{wärmste}} Monat des Jahres.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'warm', identical to English 'warm' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'mild',
            article: null,
            translation: 'mild (of weather)',
            similarityScore: 3,
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
              "'Warm' is spelled and pronounced almost exactly like English 'warm'.",
          },
          {
            id: 2,
            content:
              "Think of a warm hug — 'warm' means exactly that in German too.",
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
