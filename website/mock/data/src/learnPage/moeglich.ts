import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const moeglich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'möglich',
        article: null,
        translation: 'possible',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Able to happen, exist, or be done; not impossible.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'möglich'?",
          options: [
            { text: 'possible', isCorrect: true },
            { text: 'impossible', isCorrect: false },
            { text: 'certain', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ist ein früherer Termin {{möglich}}?',
          'Alles ist {{möglich}}, wenn man es wirklich will.',
          'Eine schnelle Lösung war leider nicht {{möglich}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Diese Lösung ist {{möglicher}} als die andere.',
        superlativeSentence: 'Diese Lösung erscheint mir {{am möglichsten}}.',
        superlativeAttributiveSentence: 'Das ist die {{möglichste}} Lösung, die wir haben.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'mögen' (to be able to, to like) — möglich describes what one is able to do.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'machbar',
            article: null,
            translation: 'feasible, doable',
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
              "'Möglich' relates to 'mögen' (to be able to) — if it's möglich, you're able to do it.",
          },
          {
            id: 2,
            content:
              "Think of 'mögen' (can) plus '-lich' — möglich means 'can-able': possible.",
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
