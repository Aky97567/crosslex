import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const rasieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich rasieren',
        article: null,
        translation: 'to shave',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To remove hair from the face or body using a razor.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich rasieren'?",
          options: [
            { text: 'to shave', isCorrect: true },
            { text: 'to wash oneself', isCorrect: false },
            { text: "to brush one's teeth", isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{rasiere}} mich jeden Morgen.',
          'Er {{rasiert}} sich vor der Arbeit.',
          'Ich habe mich heute noch nicht {{rasiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'radere' (to scrape, shave) — the same root gives English 'raze' and 'razor'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym for this specific personal-care action.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Rasieren' looks like English 'razor' — you rasieren with a razor.",
          },
          {
            id: 2,
            content:
              "Picture shaving cream and a razor while saying 'Ich rasiere mich.'",
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
