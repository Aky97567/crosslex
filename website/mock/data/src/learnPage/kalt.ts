import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kalt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kalt',
        article: null,
        translation: 'cold',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having a low temperature; not warm.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kalt'?",
          options: [
            { text: 'cold', isCorrect: true },
            { text: 'hot', isCorrect: false },
            { text: 'wet', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Im Winter ist es sehr {{kalt}}.',
          'Das Wasser ist {{kalt}}.',
          'Ich trinke gern {{kalte}} Getränke.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Der Winter hier ist {{kälter}} als in Spanien.',
        superlativeSentence: 'Im Januar ist es {{am kältesten}}.',
        superlativeAttributiveSentence: 'Das ist der {{kälteste}} Tag des Jahres.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'kalt', related to English 'cold' and 'cool' — all from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'kühl',
            article: null,
            translation: 'cool',
            similarityScore: 4,
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
            content: "'Kalt' sounds close to 'cold' — same root, different vowel.",
          },
          {
            id: 2,
            content: "Think of a 'cold' front bringing 'kalt' weather.",
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
