import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const studieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'studieren',
        article: null,
        translation: 'to study (at university)',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To attend a university and take a course of academic study.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'studieren'?",
          options: [
            { text: 'to study (at university)', isCorrect: true },
            { text: 'to teach a class', isCorrect: false },
            { text: 'to finish school', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{studiere}} Medizin in München.',
          'Was {{studierst}} du?',
          'Er hat vier Jahre lang Jura {{studiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from Latin 'studere' (to strive, study) — the same root gives English 'study' and 'student'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Lernen' is broader general learning, not specifically university study.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Studieren' looks almost exactly like English 'study' — an easy cognate.",
          },
          {
            id: 2,
            content:
              "Picture a university lecture hall full of students — that's studieren.",
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
