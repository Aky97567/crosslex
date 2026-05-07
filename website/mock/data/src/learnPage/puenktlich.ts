import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const puenktlich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'pünktlich',
        article: null,
        translation: 'punctual, on time',
        partOfSpeech: 'adjective',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Arriving or happening exactly at the agreed time; not late. Punctuality is considered very important in German culture.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'pünktlich'?",
          options: [
            { text: 'early', isCorrect: false },
            { text: 'on time, punctual', isCorrect: true },
            { text: 'busy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Der Zug ist pünktlich. Bitte komm pünktlich! Ich bin immer pünktlich.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'punctum' (point) via 'Punkt' (point, dot). Pünktlich = to the point in time — exactly on the dot.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Verspätung',
            article: 'die',
            translation: 'delay, lateness',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'rechtzeitig',
            article: null,
            translation: 'in time, timely',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'spät',
            article: null,
            translation: 'late',
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
            content:
              "'Pünktlich' contains 'Punkt' (dot). To be pünktlich is to arrive exactly on the dot.",
          },
          {
            id: 2,
            content:
              "Think of 'punctual' — same Latin root as pünktlich. The German word just adds an umlaut and a different suffix.",
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
