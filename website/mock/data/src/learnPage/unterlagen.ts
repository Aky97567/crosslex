import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const unterlagen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Unterlagen',
        article: 'die',
        translation: 'documents, papers',
        partOfSpeech: 'noun (plural)',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Official documents, papers, or records required for an application, process, or administrative procedure.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Unterlagen'?",
          options: [
            { text: 'Underground tunnels', isCorrect: false },
            { text: 'Official documents and papers', isCorrect: true },
            { text: 'A type of storage unit', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Bitte bringen Sie alle notwendigen Unterlagen mit. Die Unterlagen müssen vollständig und korrekt sein. Ohne die richtigen Unterlagen kann der Antrag nicht bearbeitet werden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'unter' (under/below) + 'legen' (to lay/place). Originally referred to papers placed underneath as a foundation – the base documents supporting a case.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Dokumente',
            article: 'die',
            translation: 'documents',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Papiere',
            article: 'die',
            translation: 'papers',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Akte',
            article: 'die',
            translation: 'file, dossier',
            similarityScore: 3,
            level: ['B2'],
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
              "'Unterlagen' – the documents that 'lie under' everything, forming the paper foundation of your application.",
          },
          {
            id: 2,
            content:
              "Think of 'unter' (under) + 'legen' (lay): all your papers laid out under the bureaucracy.",
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
