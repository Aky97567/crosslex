import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ehrlich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'ehrlich',
        article: null,
        translation: 'honest',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Telling the truth; not lying or cheating.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'ehrlich'?",
          options: [
            { text: 'honest', isCorrect: true },
            { text: 'dishonest', isCorrect: false },
            { text: 'shy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er ist immer {{ehrlich}} zu mir.',
          'Seien Sie bitte {{ehrlich}}: Was denken Sie wirklich?',
          'Sie hat eine {{ehrliche}} Antwort gegeben.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Er ist {{ehrlicher}} als sein Kollege.',
        superlativeSentence: 'Sie war {{am ehrlichsten}} von allen.',
        superlativeAttributiveSentence: 'Das war die {{ehrlichste}} Antwort.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Ehre' (honor) + '-lich' — literally 'honorable', i.e. worthy of trust.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aufrichtig',
            article: null,
            translation: 'sincere',
            similarityScore: 4,
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
              "'Ehrlich' contains 'Ehre' (honor) — being ehrlich means acting with honor.",
          },
          {
            id: 2,
            content: "Think of someone with real honor and integrity — ehrlich.",
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
