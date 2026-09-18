import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wohnen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'wohnen',
        article: null,
        translation: 'to live, reside',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To have one’s home in a particular place; to reside somewhere.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'wohnen'?",
          options: [
            { text: 'to live, reside', isCorrect: true },
            { text: 'to work', isCorrect: false },
            { text: 'to travel', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{wohne}} seit zwei Jahren in Berlin.',
          'Wo {{wohnst}} du jetzt?',
          'Meine Eltern haben in einem kleinen Dorf {{gewohnt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'wonen', meaning to dwell or be accustomed to a place — related to the English word 'wont', as in 'as is his wont'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'leben',
            article: null,
            translation: 'to live, reside (also: to be alive)',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'hausen',
            article: null,
            translation: 'to dwell, live (informal)',
            similarityScore: 3,
            level: ['B1'],
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
              "'Wohnen' sounds like 'own' — where you live is often where you own (or rent) a place.",
          },
          {
            id: 2,
            content:
              "Think of a home you've 'won' — 'wohnen' is where you've won a place to stay.",
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
