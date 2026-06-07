import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const widerspruch: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Widerspruch',
        article: 'der',
        translation: 'objection, appeal, contradiction',
        partOfSpeech: 'noun',
        theme: 'bureaucracy',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A formal legal objection filed against an administrative decision. In Germany, if an authority rejects your application, you have the right to file a Widerspruch within a specific deadline before taking the matter to court.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Widerspruch'?",
          options: [
            { text: 'A formal objection or legal appeal', isCorrect: true },
            { text: 'A written agreement between two parties', isCorrect: false },
            { text: 'A type of official identification document', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe gegen den Bescheid Widerspruch eingelegt. Der Widerspruch muss innerhalb eines Monats eingereicht werden. Nach dem Widerspruch prüft die Behörde den Fall erneut.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'wider-' (against) + 'sprechen' (to speak) → 'Widerspruch' (speaking against). To file a Widerspruch is literally to speak back against an official decision.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Einspruch',
            article: 'der',
            translation: 'objection, protest',
            similarityScore: 5,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Beschwerde',
            article: 'die',
            translation: 'complaint, appeal',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Klage',
            article: 'die',
            translation: 'lawsuit, complaint',
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
              "'Wider' = against, 'Spruch' = saying/verdict. A Widerspruch is your saying-against — your official pushback.",
          },
          {
            id: 2,
            content:
              "Think of 'witherspoon' — you stand your ground (wider) and speak (spruch) like a courtroom actor.",
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
