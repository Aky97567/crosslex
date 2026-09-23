import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const werden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'werden',
        article: null,
        translation: 'to become',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To start to be something, or to change into a different state; also used to form the future tense and passive voice.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'werden'?",
          options: [
            { text: 'to become', isCorrect: true },
            { text: 'to remain the same', isCorrect: false },
            { text: 'to disappear', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{werde}} nächstes Jahr dreißig.',
          'Es {{wird}} langsam dunkel.',
          'Er ist Arzt {{geworden}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'werdan', related to the archaic English verb 'to worth' (become, as in 'woe worth the day') — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym — a core grammatical verb.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Werden' is distantly related to the archaic English 'to worth' (become) — both describe a change of state.",
          },
          {
            id: 2,
            content:
              "Picture a caterpillar turning into a butterfly — 'Es wird zum Schmetterling.'",
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
