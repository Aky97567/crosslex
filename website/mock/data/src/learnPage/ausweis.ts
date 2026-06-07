import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ausweis: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Ausweis',
        article: 'der',
        translation: 'identity document, ID card',
        partOfSpeech: 'noun',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An official document used to prove identity. In everyday usage, it most often refers to the German national ID card (Personalausweis). Can also mean any card that identifies you — library card, staff card, etc.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Ausweis'?",
          options: [
            { text: 'An official ID or identity document', isCorrect: true },
            { text: 'A written statement of income for tax purposes', isCorrect: false },
            { text: 'A printed receipt for a government payment', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Darf ich bitte Ihren Ausweis sehen? Ohne Ausweis kann ich kein Konto eröffnen. Ich habe meinen Ausweis zu Hause vergessen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus-' (out) + 'weisen' (to show, to direct). An Ausweis is what you show outward to prove who you are — a document that points to your identity.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Personalausweis',
            article: 'der',
            translation: 'national ID card',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Identitätskarte',
            article: 'die',
            translation: 'identity card',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Lichtbildausweis',
            article: 'der',
            translation: 'photo ID',
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
              "'Aus-weis' — you show (weisen) something outward (aus). Your Ausweis is what you show to prove you are who you say you are.",
          },
          {
            id: 2,
            content:
              "Think of 'out-wise' — you prove yourself outwardly through your Ausweis.",
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
