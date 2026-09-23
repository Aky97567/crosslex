import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const treten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'treten',
        article: null,
        translation: 'to step, kick',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To put one's foot down in a particular place, or to hit something forcefully with the foot.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'treten'?",
          options: [
            { text: 'to step, kick', isCorrect: true },
            { text: 'to sit down', isCorrect: false },
            { text: 'to clap hands', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte {{treten}} Sie näher.',
          'Er {{tritt}} versehentlich auf meinen Fuß.',
          'Das Kind hat gegen den Ball {{getreten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'tretan', related to English 'tread' — both share the same Germanic root about stepping.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'kicken',
            article: null,
            translation: 'to kick (a ball, colloquial)',
            similarityScore: 3,
            level: ["B1"],
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
              "'Treten' is related to English 'tread' — both describe stepping down firmly.",
          },
          {
            id: 2,
            content:
              "Picture stepping onto a bus pedal — 'Ich trete auf das Pedal.'",
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
