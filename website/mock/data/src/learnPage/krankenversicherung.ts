import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const krankenversicherung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Krankenversicherung',
        article: 'die',
        translation: 'health insurance',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/krankenversicherung/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Insurance that covers medical costs such as doctor visits, hospital stays, and medication. In Germany, health insurance is mandatory for all residents.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is 'Krankenversicherung'?",
          options: [
            { text: 'Insurance that covers medical costs', isCorrect: true },
            { text: 'A monthly government payment for families', isCorrect: false },
            { text: 'A document proving you are fit to work', isCorrect: false },
            { text: 'Insurance for accidents at work only', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'In Deutschland ist die Krankenversicherung Pflicht — ohne sie darf man nicht arbeiten. Ich bin bei der AOK krankenversichert und zahle jeden Monat meinen Beitrag.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'Compound of "krank" (sick, from Old High German "kranc" meaning weak) + "Versicherung" (insurance, from "versichern" = to assure/insure). Literally: sick-insurance.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Pflegeversicherung',
            article: 'die',
            translation: 'care insurance',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Rentenversicherung',
            article: 'die',
            translation: 'pension insurance',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Sozialversicherung',
            article: 'die',
            translation: 'social insurance',
            similarityScore: 5,
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
              '"Krank" means sick. "Versicherung" means insurance. Krankenversicherung = what you need when you get sick in Germany.',
            imageUrl: 'https://picsum.photos/seed/krankenversicherung1/300/200',
          },
          {
            id: 2,
            content:
              'One of the first cards you receive in Germany. It\'s your ticket to seeing a doctor.',
            imageUrl: 'https://picsum.photos/seed/krankenversicherung2/300/200',
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
