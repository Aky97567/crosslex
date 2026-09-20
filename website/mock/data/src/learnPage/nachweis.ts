import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const nachweis: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Nachweis',
        article: 'der',
        translation: 'proof, evidence',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A document or fact that proves something is true.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Nachweis'?",
          options: [
            { text: 'proof, evidence', isCorrect: true },
            { text: 'a request', isCorrect: false },
            { text: 'an opinion', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte legen Sie einen {{Nachweis}} vor.',
          'Ohne {{Nachweis}} können wir den Antrag nicht bearbeiten.',
          'Sie benötigen einen {{Nachweis}} über Ihr Einkommen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'nachweisen' (to prove, demonstrate), built on 'nach' (after) + 'weisen' (to show) — the noun form of showing proof.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Beleg',
            article: 'der',
            translation: 'receipt, evidence',
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
              "'Nachweis' relates to 'nachweisen' (to prove) — a Nachweis is the document that proves it.",
          },
          {
            id: 2,
            content: "Think of the paperwork that backs up your claim — Nachweis.",
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
