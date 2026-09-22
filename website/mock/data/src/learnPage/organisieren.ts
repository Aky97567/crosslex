import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const organisieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'organisieren',
        article: null,
        translation: 'to organize',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To arrange or plan something in a structured, systematic way.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'organisieren'?",
          options: [
            { text: 'To arrange or plan something in a structured way', isCorrect: true },
            { text: 'To destroy something', isCorrect: false },
            { text: 'To forget something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie muss die ganze Feier {{organisieren}}.',
          'Wer {{organisiert}} das Treffen nächste Woche?',
          'Wir haben die Reise gemeinsam {{organisiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'organum' (tool, instrument) via French 'organiser' — the same root gives English 'organize' and 'organ'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'koordinieren',
            article: null,
            translation: 'to coordinate',
            similarityScore: 4,
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
              "'Organisieren' looks like 'organize' — same Latin root, same meaning.",
          },
          {
            id: 2,
            content:
              "Think of an 'organ' in an orchestra — organizing many parts into one whole.",
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
