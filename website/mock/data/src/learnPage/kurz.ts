import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kurz: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kurz',
        article: null,
        translation: 'short',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having little length or duration; not long.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kurz'?",
          options: [
            { text: 'short', isCorrect: true },
            { text: 'long', isCorrect: false },
            { text: 'tall', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Pause ist heute sehr {{kurz}}.',
          'Er hat {{kurze}} Haare.',
          'Kannst du das {{kurz}} erklären?',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Pause ist {{kurz}}.',
        positivAttributiv: 'Das ist eine {{kurze}} Pause.',
        komparativPredicativ: 'Diese Pause ist {{kürzer}} als die letzte.',
        komparativAttributiv: 'Das ist die {{kürzere}} Pause.',
        superlativPredicativ: 'Dieser Weg ist {{am kürzesten}}.',
        superlativAttributiv: 'Das ist der {{kürzeste}} Weg zur Arbeit.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'curtus' (shortened), borrowed into Old High German — the same Latin root gives English 'curt' and 'curtail'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'knapp',
            article: null,
            translation: 'brief, tight',
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
            content: "'Kurz' relates to English 'curt' — a curt answer is a short one.",
          },
          {
            id: 2,
            content: "Think of a 'curt' reply — 'kurz' means short.",
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
