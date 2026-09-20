import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gesund: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'gesund',
        article: null,
        translation: 'healthy',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'health', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'In good physical or mental condition; free from illness.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'gesund'?",
          options: [
            { text: 'healthy', isCorrect: true },
            { text: 'sick', isCorrect: false },
            { text: 'tired', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Obst und Gemüse sind {{gesund}}.',
          'Er sieht heute nicht sehr {{gesund}} aus.',
          'Ich möchte {{gesund}} bleiben.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Obst ist {{gesünder}} als Süßigkeiten.',
        superlativeSentence: 'Diese Mahlzeit ist {{am gesündesten}}.',
        superlativeAttributiveSentence: 'Das ist das {{gesündeste}} Essen auf der Karte.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'gisunt', related to English 'sound' (as in 'sound body and mind') — both from the same root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'fit',
            article: null,
            translation: 'fit, in good shape',
            similarityScore: 3,
            level: ['A2'],
            register: 'borrowed',
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
              "'Gesund' relates to English 'sound' — 'safe and sound' means healthy.",
          },
          {
            id: 2,
            content: "Think of a 'sound' body — 'gesund' means healthy.",
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
