import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kompliziert: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kompliziert',
        article: null,
        translation: 'complicated',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Difficult to understand or deal with because of many parts.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kompliziert'?",
          options: [
            { text: 'complicated', isCorrect: true },
            { text: 'simple', isCorrect: false },
            { text: 'boring', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Formular ist sehr {{kompliziert}}.',
          'Die Situation ist im Moment etwas {{kompliziert}}.',
          'Er erklärt alles viel zu {{kompliziert}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Dieses Formular ist {{komplizierter}} als jenes.',
        superlativeSentence: 'Diese Situation ist {{am kompliziertesten}}.',
        superlativeAttributiveSentence: 'Das ist der {{komplizierteste}} Fall, den ich kenne.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'complicare' (to fold together), via French — the same root gives English 'complicated'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'schwierig',
            article: null,
            translation: 'difficult',
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
              "'Kompliziert' looks just like English 'complicated' — same Latin root.",
          },
          {
            id: 2,
            content: "Think of many things 'folded together' — kompliziert.",
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
