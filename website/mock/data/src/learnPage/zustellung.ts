import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zustellung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Zustellung',
        article: 'die',
        translation: 'delivery (of a document, letter)',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'The official delivery of a letter, package, or document.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Zustellung'?",
          options: [
            { text: 'delivery (of a document, letter)', isCorrect: true },
            { text: 'a collection', isCorrect: false },
            { text: 'a payment', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die {{Zustellung}} des Bescheids erfolgt per Post.',
          'Die {{Zustellung}} hat sich um zwei Tage verzögert.',
          'Bitte bestätigen Sie den Empfang der {{Zustellung}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'zu-' + 'stellen' (to place, put) — literally 'to place something at someone's door', i.e. to deliver it.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Lieferung',
            article: 'die',
            translation: 'delivery (of goods)',
            similarityScore: 3,
            level: ['A2'],
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
              "'Zustellung' contains 'stellen' (to place) — delivery means placing something right at your door.",
          },
          {
            id: 2,
            content:
              "Think of the postal worker placing a letter at your door — Zustellung.",
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
