import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const miete: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Miete',
        article: 'die',
        translation: 'rent',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The amount of money paid every month to a landlord for living in a flat or house. Most Germans rent rather than own their home, so die Miete is a very common word.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Miete'?",
          options: [
            { text: 'the monthly payment for living in a rented home', isCorrect: true },
            { text: 'the cost of electricity and heating', isCorrect: false },
            { text: 'the price of buying a house', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich bezahle jeden Monat die Miete. Die Miete beträgt 800 Euro. Die Miete ist in dieser Stadt sehr hoch.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'miata' (reward, hire), related to Gothic 'mizdō'. The same root appears in English 'meed' (an old word for reward or wage).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Monatsmiete',
            article: 'die',
            translation: 'monthly rent',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Mietpreis',
            article: 'der',
            translation: 'rental price',
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
              "Think of 'meet' — every month you meet your landlord's expectation by paying the Miete.",
          },
          {
            id: 2,
            content:
              "'Miete' sounds like 'meat' — paying rent is as essential as putting meat on the table.",
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
