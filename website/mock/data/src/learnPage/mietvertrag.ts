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
        translation: 'rental contract',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/mietvertrag/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A legally binding agreement between a landlord and a tenant that defines the terms of renting a property, including rent amount, duration, and obligations.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is a 'Mietvertrag'?",
          options: [
            { text: 'A legal agreement between landlord and tenant', isCorrect: true },
            { text: 'A document proving your right to live in Germany', isCorrect: false },
            { text: 'A form for applying for housing benefit', isCorrect: false },
            { text: 'An invoice for monthly utility costs', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Bevor ich in die neue Wohnung einziehe, muss ich den Mietvertrag sorgfältig lesen und unterschreiben. Im Mietvertrag stehen alle Rechte und Pflichten von Mieter und Vermieter.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'Compound of "Miete" (rent, from Old High German "mieta", meaning reward or hire) + "Vertrag" (contract, from "vertragen" = to bear/agree). Literally: a rent agreement.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Arbeitsvertrag',
            article: 'der',
            translation: 'employment contract',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Kaufvertrag',
            article: 'der',
            translation: 'purchase contract',
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Kündigung',
            article: 'die',
            translation: 'termination / notice',
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
              '"Miete" sounds like "meet" — you meet your landlord to sign the "Vertrag" (contract).',
            imageUrl: 'https://picsum.photos/seed/mietvertrag1/300/200',
          },
          {
            id: 2,
            content:
              'Miete = rent, Vertrag = contract. Two words you learn on your first day apartment hunting.',
            imageUrl: 'https://picsum.photos/seed/mietvertrag2/300/200',
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
