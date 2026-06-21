import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kindergeld: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Kindergeld',
        displayName: 'Kinder­geld',
        article: 'das',
        translation: 'child benefit',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A monthly payment made by the German state to parents for each child, intended to help cover the cost of raising children. It is paid by the Familienkasse and must be applied for — it is not automatic.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Kindergeld'?",
          options: [
            { text: 'Money paid by the state to parents for each child', isCorrect: true },
            { text: 'A savings account opened in a child\'s name', isCorrect: false },
            { text: 'A tax deduction for school expenses', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Wir haben Kindergeld für unser Kind beantragt. Das Kindergeld wird monatlich auf unser Konto überwiesen. Für das Kindergeld muss man einen Antrag bei der Familienkasse stellen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A compound of 'Kinder' (children, plural of 'Kind') + 'Geld' (money). Straightforwardly: children's money — the money the state gives for children.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Kinderbeihilfe',
            article: 'die',
            translation: 'child allowance (Austrian term)',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Kinderzuschlag',
            article: 'der',
            translation: 'child supplement',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Beihilfe',
            article: 'die',
            translation: 'allowance, subsidy',
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
              "'Kinder' = children, 'Geld' = money. Kindergeld is money for Kinder — simple compound logic.",
          },
          {
            id: 2,
            content:
              "The pattern repeats in German welfare: Elterngeld (parent money), Wohngeld (housing money), Kindergeld (child money). Learn one, guess the others.",
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
