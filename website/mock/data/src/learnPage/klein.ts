import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const klein: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'klein',
        article: null,
        translation: 'small',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Of a size that is less than normal or usual; not big.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'klein'?",
          options: [
            { text: 'small', isCorrect: true },
            { text: 'big', isCorrect: false },
            { text: 'tall', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das ist eine sehr {{kleine}} Wohnung.',
          'Mein Bruder ist noch {{klein}}.',
          'Wir haben nur {{kleine}} Probleme.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Meine Wohnung ist {{kleiner}} als seine.',
        superlativeSentence: 'Dieses Zimmer ist {{am kleinsten}}.',
        superlativeAttributiveSentence: 'Das ist das {{kleinste}} Zimmer der Wohnung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'kleini', originally meaning 'delicate, fine' — the meaning shifted to 'small' over time.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'winzig',
            article: null,
            translation: 'tiny',
            similarityScore: 3,
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
            content:
              "'Klein' sounds like 'cline', as in de-cline — small in size, small in stature.",
          },
          {
            id: 2,
            content:
              "Think of Calvin Klein — but 'klein' just means small in German.",
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
