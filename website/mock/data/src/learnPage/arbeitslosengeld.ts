import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const arbeitslosengeld: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Arbeitslosengeld',
        displayName: 'Arbeits­losen­geld',
        article: 'das',
        translation: 'unemployment benefit',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A state benefit paid to people who have lost their job and previously contributed to statutory unemployment insurance (Arbeitslosenversicherung). Known as ALG I, it replaces approximately 60–67% of the previous net wage. It must be claimed at the Agentur für Arbeit and is generally paid for up to twelve months.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Arbeitslosengeld'?",
          options: [
            { text: 'State benefit paid to workers who have lost their job and contributed to unemployment insurance', isCorrect: true },
            { text: 'A monthly welfare payment available to anyone without an income', isCorrect: false },
            { text: 'A lump sum paid by an employer when making a worker redundant', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Nach der Kündigung hat er sofort Arbeitslosengeld beantragt. Das Arbeitslosengeld beträgt etwa 60 Prozent des letzten Nettogehalts. Man bezieht das Arbeitslosengeld für maximal zwölf Monate.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'arbeitslos' (unemployed, without work) + 'Geld' (money). Literally: money for those without work — the state's financial safety net for people who have lost their employment.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Arbeitslosenhilfe',
            article: 'die',
            translation: 'unemployment assistance (older term)',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Kurzarbeitergeld',
            article: 'das',
            translation: 'short-time work allowance',
            similarityScore: 3,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Bürgergeld',
            article: 'das',
            translation: "citizens' income (welfare benefit)",
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
              "'Arbeitslos-GELD' — arbeitslos = unemployed, Geld = money. Money paid to you precisely because you are without work.",
          },
          {
            id: 2,
            content:
              "'Arbeit' = work, 'los' = without, 'Geld' = money. No work → get money. That is the ALG in a nutshell.",
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
