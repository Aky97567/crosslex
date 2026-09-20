import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const dumm: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'dumm',
        article: null,
        translation: 'stupid, dumb',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'irregular_comparison'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Lacking intelligence or good sense.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'dumm'?",
          options: [
            { text: 'stupid, dumb', isCorrect: true },
            { text: 'smart', isCorrect: false },
            { text: 'funny', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das war eine {{dumme}} Idee.',
          'Er stellt manchmal {{dumme}} Fragen.',
          'Ich habe mich wirklich {{dumm}} verhalten.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Idee ist {{dumm}}.',
        positivAttributiv: 'Das ist eine {{dumme}} Idee.',
        komparativPredicativ: 'Das war {{dümmer}} als ich dachte.',
        komparativAttributiv: 'Das ist die {{dümmere}} Idee.',
        superlativPredicativ: 'Diese Idee war {{am dümmsten}}.',
        superlativAttributiv: 'Das war die {{dümmste}} Idee überhaupt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'tumb', related to English 'dumb' — both originally meant 'mute' before shifting to 'stupid'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'blöd',
            article: null,
            translation: 'stupid, silly (informal)',
            similarityScore: 4,
            level: ['A2'],
            register: 'colloquial',
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
              "'Dumm' sounds exactly like English 'dumb' — same root, similar meaning.",
          },
          {
            id: 2,
            content: "Think of a 'dumb' mistake — dumm.",
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
