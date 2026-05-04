import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sozialversicherung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Sozialversicherung',
        article: 'die',
        translation: 'social insurance',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/sozialversicherung/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The mandatory state insurance system covering health, unemployment, pension, and long-term care. Contributions are split between employer and employee.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is 'Sozialversicherung'?",
          options: [
            { text: 'The mandatory state system of health, pension and unemployment insurance', isCorrect: true },
            { text: 'A private insurance policy for accidents and theft', isCorrect: false },
            { text: 'A government programme for housing homeless people', isCorrect: false },
            { text: 'An employer\'s bonus payment to their workers', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'In Deutschland sind alle Arbeitnehmer automatisch in der Sozialversicherung pflichtversichert. Die Beiträge zur Sozialversicherung werden direkt vom Gehalt abgezogen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "sozial" (social, from Latin "socialis" meaning of companionship) + "Versicherung" (insurance, from "versichern" = to assure). A collective assurance of society for its members.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Krankenversicherung',
            article: 'die',
            translation: 'health insurance',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Rentenversicherung',
            article: 'die',
            translation: 'pension insurance',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Arbeitslosenversicherung',
            article: 'die',
            translation: 'unemployment insurance',
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
              '"Sozial" = social, "Versicherung" = insurance. Germany\'s social safety net — it covers you from birth to retirement.',
            imageUrl: 'https://picsum.photos/seed/sozialversicherung1/300/200',
          },
          {
            id: 2,
            content:
              'Your Sozialversicherungsnummer (social insurance number) is one of the first numbers you will receive in Germany.',
            imageUrl: 'https://picsum.photos/seed/sozialversicherung2/300/200',
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
