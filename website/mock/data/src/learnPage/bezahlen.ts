import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bezahlen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bezahlen',
        article: null,
        translation: 'to pay',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To give money for something you buy or use. In Germany you often hear "Kann ich bar bezahlen?" (Can I pay cash?) or "Getrennt oder zusammen bezahlen?" (Separate or together?) in restaurants.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bezahlen'?",
          options: [
            { text: 'to pay for something', isCorrect: true },
            { text: 'to order food or drinks', isCorrect: false },
            { text: 'to buy something in a shop', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich bezahle im Supermarkt mit Karte. Kann ich hier bar bezahlen? Ich habe die Miete schon bezahlt.',
        alternateForms: ['bezahle', 'bezahlt'],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' (intensifying prefix) + 'zahlen' (to pay, to count). 'Zahlen' comes from 'Zahl' (number) — to pay is to count out the right number of coins.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zahlen',
            article: null,
            translation: 'to pay (simpler form)',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'begleichen',
            article: null,
            translation: 'to settle, to pay off',
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
              "'Be-ZAHLEN' contains 'Zahl' (number) — to pay is to count the right number of euros.",
          },
          {
            id: 2,
            content:
              "Think of 'pay' + 'zahl' — bezahlen is the German version of 'pay', just with a number twist.",
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
