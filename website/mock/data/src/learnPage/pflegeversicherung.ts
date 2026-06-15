import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const pflegeversicherung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Pflegeversicherung',
        article: 'die',
        translation: 'long-term care insurance',
        partOfSpeech: 'noun',
        themes: ['health', 'finance'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A mandatory social insurance in Germany covering the costs of professional care when a person can no longer manage daily life independently due to age, illness, or disability. Like health insurance, contributions are split between employer and employee. A Pflegegrad (care grade 1–5) is assessed to determine the level of benefit received.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Pflegeversicherung'?",
          options: [
            { text: 'Mandatory insurance covering professional care costs when you can no longer live independently', isCorrect: true },
            { text: 'An optional insurance covering the full cost of nursing home accommodation', isCorrect: false },
            { text: 'A state benefit paid to family members who provide home care', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Pflegeversicherung ist in Deutschland eine gesetzliche Pflichtversicherung. Ich zahle jeden Monat einen Beitrag zur Pflegeversicherung. Im Alter kann die Pflegeversicherung einen Teil der Pflegekosten übernehmen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Pflege' (care, nursing) + 'Versicherung' (insurance). An insurance for Pflege — covering the cost of caring for those who can no longer care for themselves.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Pflegekasse',
            article: 'die',
            translation: 'long-term care insurance fund',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Sozialversicherung',
            article: 'die',
            translation: 'social insurance',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Krankenversicherung',
            article: 'die',
            translation: 'health insurance',
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
              "'Pflege-VERSICHERUNG' — Pflege = care, Versicherung = insurance. Insurance for when you need professional care.",
          },
          {
            id: 2,
            content:
              "'Pflege' sounds like 'pledge' — the state pledges to help cover your care costs through this insurance.",
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
