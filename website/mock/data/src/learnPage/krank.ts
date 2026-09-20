import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const krank: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'krank',
        article: null,
        translation: 'sick, ill',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'health', 'adjective', 'irregular_comparison'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Suffering from an illness; not in good health.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'krank'?",
          options: [
            { text: 'sick, ill', isCorrect: true },
            { text: 'healthy', isCorrect: false },
            { text: 'tired', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er ist seit gestern {{krank}}.',
          'Meine Kollegin war die ganze Woche {{krank}}.',
          'Ich fühle mich heute etwas {{krank}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Er ist {{kränker}} als letzte Woche.',
        superlativeSentence: 'Heute fühlt er sich {{am kränksten}}.',
        superlativeAttributiveSentence: 'Das ist der {{kränkste}} Patient auf der Station.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'kranc', originally meaning 'weak, feeble' — the sense narrowed to 'sick' over time.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'unwohl',
            article: null,
            translation: 'unwell',
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
              "'Krank' sounds like 'crank' — feeling cranky can be a sign you're krank (sick).",
          },
          {
            id: 2,
            content: "Think of staying home from work — krank means sick.",
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
