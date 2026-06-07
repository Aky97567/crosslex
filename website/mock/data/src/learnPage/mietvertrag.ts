import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const mietvertrag: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Mietvertrag',
        article: 'der',
        translation: 'rental contract, lease agreement',
        partOfSpeech: 'noun',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A legally binding written agreement between a landlord and a tenant setting out the terms of renting a property, including rent amount, notice period, and permitted use.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Mietvertrag'?",
          options: [
            { text: 'A rental contract or lease agreement', isCorrect: true },
            { text: 'A purchase agreement for property', isCorrect: false },
            { text: 'A utility contract for gas or electricity', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe den Mietvertrag sorgfältig gelesen, bevor ich unterschrieben habe. Der Mietvertrag läuft unbefristet. Im Mietvertrag steht, dass Haustiere nicht erlaubt sind.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A compound of 'Miete' (rent) + 'Vertrag' (contract). 'Miete' comes from Old High German 'mieta' (reward, pay). 'Vertrag' comes from 'vertragen' (to carry forward, to agree upon).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Vertrag',
            article: 'der',
            translation: 'contract, agreement',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Mietvereinbarung',
            article: 'die',
            translation: 'rental agreement',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Pachtvertrag',
            article: 'der',
            translation: 'lease agreement',
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
              "'Miet-vertrag' — 'Miet' sounds like 'meet' and 'Vertrag' like 'contract'. When landlord and tenant meet, they sign a Mietvertrag.",
          },
          {
            id: 2,
            content:
              "The word is two parts: rent (Miete) + contract (Vertrag). If you know both halves, you know the whole.",
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
