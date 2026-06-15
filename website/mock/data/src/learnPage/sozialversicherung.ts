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
        translation: 'social insurance, social security',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The collective term for Germany\'s five compulsory statutory insurance systems: health insurance (Krankenversicherung), pension insurance (Rentenversicherung), unemployment insurance (Arbeitslosenversicherung), care insurance (Pflegeversicherung), and accident insurance (Unfallversicherung). Contributions are deducted directly from wages and split between employer and employee.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Sozialversicherung'?",
          options: [
            { text: "The collective system of five compulsory state insurances deducted from wages in Germany", isCorrect: true },
            { text: 'A government welfare payment made to people living below the poverty line', isCorrect: false },
            { text: 'A voluntary savings scheme run by the state for long-term financial security', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Sozialversicherung schützt alle Arbeitnehmer in Deutschland. Mein Arbeitgeber zieht die Beiträge zur Sozialversicherung direkt von meinem Gehalt ab. Die Sozialversicherung deckt Krankheit, Arbeitslosigkeit und Alter ab.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'sozial' (social, relating to society) + 'Versicherung' (insurance). A system of insurances organised collectively by society to protect all its members against life's major risks.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Pflichtversicherung',
            article: 'die',
            translation: 'compulsory insurance',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Sozialleistungen',
            article: 'die',
            translation: 'social benefits, welfare payments',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Sozialabgaben',
            article: 'die',
            translation: 'social security contributions',
            similarityScore: 4,
            level: ['B2'],
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
              "'Sozial-VERSICHERUNG' — sozial = social/society, Versicherung = insurance. Society's shared insurance: everyone pays in, everyone benefits.",
          },
          {
            id: 2,
            content:
              "Think of 'social security' — Sozialversicherung is Germany's version of social security, covering health, work, age, and care.",
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
