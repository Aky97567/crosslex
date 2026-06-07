import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const reise: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Reise',
        article: 'die',
        translation: 'trip, journey, travel',
        partOfSpeech: 'noun',
        theme: 'transport',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A journey from one place to another, especially over a long distance; can be for holiday, work, or personal reasons.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Reise'?",
          options: [
            { text: 'a short walk in the park', isCorrect: false },
            { text: 'a trip or journey', isCorrect: true },
            { text: 'a transport ticket', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Reise nach München hat drei Stunden gedauert. Ich mache gerne eine Reise im Sommer. Wie war die Reise?',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'reise' (march, journey). Related to the English verb 'rise' — early journeys often meant rising early and setting off.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Fahrt',
            article: 'die',
            translation: 'trip, journey, ride',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Ausflug',
            article: 'der',
            translation: 'excursion, day trip',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Tour',
            article: 'die',
            translation: 'tour, trip',
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
              "Think of 'Reise' as 'rise and go' — you rise early and go on your journey.",
          },
          {
            id: 2,
            content:
              "'Gute Reise!' means 'have a good trip!' — it's the most common farewell phrase when someone travels.",
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
