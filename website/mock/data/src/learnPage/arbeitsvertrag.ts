import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const arbeitsvertrag: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Arbeitsvertrag',
        article: 'der',
        translation: 'employment contract',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/arbeitsvertrag/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A legally binding agreement between an employer and employee that defines the terms of employment, including salary, working hours, duties, and notice periods.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is an 'Arbeitsvertrag'?",
          options: [
            { text: 'A legal agreement defining terms of employment', isCorrect: true },
            { text: 'A certificate of completed professional training', isCorrect: false },
            { text: 'A form for applying for unemployment benefit', isCorrect: false },
            { text: 'A rental agreement for a workplace', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Vor dem ersten Arbeitstag sollten Sie Ihren Arbeitsvertrag genau lesen und alle Punkte verstehen. Im Arbeitsvertrag steht, wie viel Sie verdienen und wie lange die Probezeit dauert.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'Compound of "Arbeit" (work, from Old High German "arabeit" meaning hardship or effort) + "Vertrag" (contract, from "vertragen" = to endure/agree). A work agreement.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Mietvertrag',
            article: 'der',
            translation: 'rental contract',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Tarifvertrag',
            article: 'der',
            translation: 'collective wage agreement',
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
              '"Arbeit" = work, "Vertrag" = contract. The paper that makes your work official in Germany.',
            imageUrl: 'https://picsum.photos/seed/arbeitsvertrag1/300/200',
          },
          {
            id: 2,
            content:
              'No Arbeitsvertrag = no legal protection. It is the foundation of your working life in Germany.',
            imageUrl: 'https://picsum.photos/seed/arbeitsvertrag2/300/200',
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
