import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const vermieten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'vermieten',
        article: null,
        translation: 'to rent out',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To allow someone to use your property in exchange for regular payment.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'vermieten'?",
          options: [
            { text: 'To let someone use your property for payment', isCorrect: true },
            { text: 'To buy a property', isCorrect: false },
            { text: 'To sell a property', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir möchten unsere Wohnung {{vermieten}}.',
          'Er {{vermietet}} drei Zimmer an Studenten.',
          'Die Wohnung wurde schnell {{vermietet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ver-' (a prefix indicating a change of state) + 'mieten' (to rent) — vermieten is the landlord's side of mieten.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'verpachten',
            article: null,
            translation: 'to lease (of land or a business)',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "'Vermieten' contains 'mieten' (to rent) — the landlord vermietet, the tenant mietet.",
          },
          {
            id: 2,
            content:
              "Think of a 'For Rent' sign — that's exactly what vermieten offers.",
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
