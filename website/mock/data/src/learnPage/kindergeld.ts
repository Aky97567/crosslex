import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kindergeld: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Kindergeld',
        article: 'das',
        translation: 'child benefit',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/kindergeld/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A monthly state payment to parents or guardians to help cover the costs of raising children. Paid by the Familienkasse for each child.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is 'Kindergeld'?",
          options: [
            { text: 'A monthly state payment to parents for raising children', isCorrect: true },
            { text: 'A government fund for children\'s education only', isCorrect: false },
            { text: 'A tax reduction for families with children', isCorrect: false },
            { text: 'A one-time payment when a child is born', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Kindergeld können Sie bei der Familienkasse beantragen, wenn Ihr Kind in Deutschland lebt. Das Kindergeld wird monatlich auf Ihr Konto überwiesen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'Compound of "Kind" (child, from Old High German "kind") + "Geld" (money, from Old High German "gelt", meaning payment or reward). Literally: child money.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Elterngeld',
            article: 'das',
            translation: 'parental benefit',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Wohngeld',
            article: 'das',
            translation: 'housing benefit',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Sozialhilfe',
            article: 'die',
            translation: 'social welfare',
            similarityScore: 3,
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
              '"Kinder" = children, "Geld" = money. The government gives you money for your children.',
            imageUrl: 'https://picsum.photos/seed/kindergeld1/300/200',
          },
          {
            id: 2,
            content:
              'One of the most valuable words you can learn as a parent in Germany — always apply for it.',
            imageUrl: 'https://picsum.photos/seed/kindergeld2/300/200',
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
