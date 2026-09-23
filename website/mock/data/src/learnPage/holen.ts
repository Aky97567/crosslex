import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const holen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'holen',
        article: null,
        translation: 'to fetch, get',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To go and get something or someone and bring it back.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'holen'?",
          options: [
            { text: 'to fetch, get', isCorrect: true },
            { text: 'to give something', isCorrect: false },
            { text: 'to lose something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{hole}} schnell Brot vom Bäcker.',
          'Kannst du die Kinder von der Schule {{holen}}?',
          'Er hat den Arzt {{geholt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'holon', a purely Germanic word for fetching, distantly related to English 'haul'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'abholen',
            article: null,
            translation: 'to pick up, collect',
            similarityScore: 4,
            level: ["A1"],
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
              "'Holen' is distantly related to English 'haul' — both about bringing something back with you.",
          },
          {
            id: 2,
            content:
              "Picture running to the bakery and back with fresh bread — that's holen.",
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
