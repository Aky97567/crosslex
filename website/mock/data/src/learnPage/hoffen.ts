import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const hoffen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'hoffen',
        article: null,
        translation: 'to hope',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To want something to happen or be true, while feeling positive about the outcome.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'hoffen'?",
          options: [
            { text: 'to hope', isCorrect: true },
            { text: 'to forget something', isCorrect: false },
            { text: 'to refuse something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{hoffe}}, dass das Wetter morgen schön ist.',
          'Wir {{hoffen}} auf gute Nachrichten.',
          'Sie hat lange auf einen Anruf {{gehofft}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'hoffen', related to English 'hope' — both trace back to a shared Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Wünschen' (to wish) implies desire without expectation, a different concept from hoping — not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Hoffen' looks and sounds like English 'hope in' — an easy direct connection.",
          },
          {
            id: 2,
            content:
              "Picture crossing your fingers while saying 'Ich hoffe' — hoping for the best.",
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
