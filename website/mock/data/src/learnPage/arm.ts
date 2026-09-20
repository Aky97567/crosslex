import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const arm: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'arm',
        article: null,
        translation: 'poor',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having very little money or few possessions.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'arm'?",
          options: [
            { text: 'poor', isCorrect: true },
            { text: 'rich', isCorrect: false },
            { text: 'generous', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Familie war früher sehr {{arm}}.',
          'Viele Menschen in dieser Region sind {{arm}}.',
          'Er ist zwar {{arm}}, aber sehr zufrieden.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Diese Familie ist {{ärmer}} als jene.',
        superlativeSentence: 'Er ist von allen {{am ärmsten}}.',
        superlativeAttributiveSentence: 'Das ist die {{ärmste}} Familie im Viertel.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'arm' — a Germanic root for lacking means or being deprived.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bedürftig',
            article: null,
            translation: 'needy, in need (formal)',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "'Arm' looks like the English body part 'arm' — but in German it just means poor.",
          },
          {
            id: 2,
            content: "Think of someone with empty pockets — arm.",
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
