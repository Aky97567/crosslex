import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const spinnen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'spinnen',
        article: null,
        translation: 'to spin (thread)',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To twist fibers, such as wool or cotton, into thread; colloquially, to talk or act in a crazy or nonsensical way.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'spinnen'?",
          options: [
            { text: 'to spin (thread)', isCorrect: true },
            { text: 'to sew fabric together', isCorrect: false },
            { text: 'to fold clothes', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Früher {{spann}} man Wolle von Hand.',
          'Die Fabrik {{spinnt}} Baumwolle zu Garn.',
          '{{Spinnst}} du? Das ist doch viel zu teuer!',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'spinnan', directly related to English 'spin' — both share the same Germanic root. The colloquial 'to be crazy' sense compares confused talk to a spinning wheel out of control.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym covering both the literal and colloquial senses.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Spinnen' looks and sounds like English 'spin-en' — you spin thread with a spinning wheel.",
          },
          {
            id: 2,
            content:
              "Picture a spider spinning its web — 'Die Spinne spinnt.'",
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
