import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const jung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'jung',
        article: null,
        translation: 'young',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having lived for only a short time; not old.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'jung'?",
          options: [
            { text: 'young', isCorrect: true },
            { text: 'old', isCorrect: false },
            { text: 'small', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie ist noch sehr {{jung}}.',
          'Das ist ein {{junger}} Hund.',
          'Wie {{jung}} siehst du aus!',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Die Schwester ist {{jung}}.',
        positivAttributiv: 'Das ist eine {{junge}} Schwester.',
        komparativPredicativ: 'Sie ist {{jünger}} als ihre Schwester.',
        komparativAttributiv: 'Das ist die {{jüngere}} Schwester.',
        superlativPredicativ: 'Von allen Kindern ist der Sohn {{am jüngsten}}.',
        superlativAttributiv: 'Er ist der {{jüngste}} Sohn.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'jung', related to English 'young' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'jugendlich',
            article: null,
            translation: 'youthful',
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
              "'Jung' sounds like 'young' if you say it quickly — same Germanic root.",
          },
          {
            id: 2,
            content:
              "Think of Carl Jung — but 'jung' simply means young in German.",
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
