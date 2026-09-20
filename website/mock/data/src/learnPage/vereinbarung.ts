import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const vereinbarung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Vereinbarung',
        article: 'die',
        translation: 'agreement',
        partOfSpeech: 'noun',
        themes: ['work', 'bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A formal arrangement or agreement made between people.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Vereinbarung'?",
          options: [
            { text: 'an agreement', isCorrect: true },
            { text: 'a disagreement', isCorrect: false },
            { text: 'a question', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir haben eine {{Vereinbarung}} getroffen.',
          'Laut {{Vereinbarung}} zahlen Sie monatlich.',
          'Beide Seiten halten sich an die {{Vereinbarung}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'vereinbaren' (to agree on), built on 'ein' (one) — literally 'to bring into one', i.e. to reach a single shared agreement.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Absprache',
            article: 'die',
            translation: 'arrangement',
            similarityScore: 4,
            level: ['B1'],
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
              "'Vereinbarung' relates to 'ein' (one) — an agreement brings two sides into one shared understanding.",
          },
          {
            id: 2,
            content: "Think of a handshake sealing a deal — Vereinbarung.",
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
