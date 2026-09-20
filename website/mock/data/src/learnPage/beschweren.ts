import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const beschweren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich beschweren',
        article: null,
        translation: 'to complain',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To express dissatisfaction or annoyance about something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich beschweren'?",
          options: [
            { text: 'to complain', isCorrect: true },
            { text: 'to praise', isCorrect: false },
            { text: 'to apologize', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte mich über den Service {{beschweren}}.',
          'Er {{beschwert}} sich ständig über das Wetter.',
          'Sie hat sich beim Vermieter {{beschwert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' + 'schwer' (heavy) — literally 'to burden' someone with your grievance.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'sich beklagen',
            article: null,
            translation: 'to complain, lament',
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
              "'Beschweren' contains 'schwer' (heavy) — a complaint is a heavy burden you voice.",
          },
          {
            id: 2,
            content:
              "Think of getting something heavy 'off your chest' — sich beschweren.",
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
