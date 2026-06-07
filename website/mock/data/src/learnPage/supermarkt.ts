import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const supermarkt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Supermarkt',
        article: 'der',
        translation: 'supermarket',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A large shop that sells food, drinks, and everyday household items all under one roof.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Supermarkt'?",
          options: [
            { text: 'a clothing shop', isCorrect: false },
            { text: 'a large food shop', isCorrect: true },
            { text: 'a farmers market', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich gehe in den Supermarkt. Der Supermarkt ist um 8 Uhr geöffnet. Im Supermarkt gibt es alles, was man braucht.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A compound of Latin 'super' (above, extra) and 'Markt' (market). The same word exists in English — a direct international borrowing.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Laden',
            article: 'der',
            translation: 'shop, store',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Geschäft',
            article: 'das',
            translation: 'shop, store',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Einkaufsmarkt',
            article: 'der',
            translation: 'grocery store',
            similarityScore: 4,
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
              "'Supermarkt' = super + Markt. A market that is super. Exactly what it means in English too.",
          },
          {
            id: 2,
            content:
              "Think of Superman shopping — he goes to the Super-markt.",
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
