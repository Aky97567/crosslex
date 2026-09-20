import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const nah: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'nah',
        article: null,
        translation: 'near, close',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A short distance away; not far.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'nah'?",
          options: [
            { text: 'near, close', isCorrect: true },
            { text: 'far', isCorrect: false },
            { text: 'old', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Schule ist sehr {{nah}}.',
          'Wir wohnen in der {{nahen}} Umgebung.',
          'Der Bahnhof ist ganz {{nah}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Die Schule ist {{nah}}.',
        positivAttributiv: 'Das ist eine {{nahe}} Schule.',
        komparativPredicativ: 'Die Schule ist {{näher}} als die Bibliothek.',
        komparativAttributiv: 'Das ist die {{nähere}} Schule.',
        superlativPredicativ: 'Der Supermarkt liegt {{am nächsten}}.',
        superlativAttributiv: 'Das ist der {{nächste}} Supermarkt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'nah', related to English 'nigh' (as in 'well-nigh') and 'near' — all from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'nahegelegen',
            article: null,
            translation: 'nearby, close-by',
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
              "'Nah' sounds like the old English word 'nigh' — both mean near.",
          },
          {
            id: 2,
            content:
              "Think of saying 'nah, it's close by!' — a playful match for 'nah'.",
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
