import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bewerben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich bewerben',
        article: null,
        translation: 'to apply (for a job)',
        partOfSpeech: 'verb',
        themes: ['work', 'reflexiv', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To formally apply for a job, place, or opportunity.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich bewerben'?",
          options: [
            { text: 'to apply (for a job)', isCorrect: true },
            { text: 'to resign', isCorrect: false },
            { text: 'to interview someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte mich für die Stelle {{bewerben}}.',
          'Er {{bewirbt}} sich bei mehreren Firmen.',
          'Sie hat sich erfolgreich {{beworben}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' + 'werben' (to advertise, court) — literally 'to court' or actively seek a position.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Bewerben' contains 'werben' (to advertise) — applying means advertising yourself for the job.",
          },
          {
            id: 2,
            content:
              "Think of 'advertising' your skills to a company — sich bewerben.",
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
