import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const krankenversicherung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Krankenversicherung',
        displayName: 'Kranken­versicherung',
        article: 'die',
        translation: 'health insurance',
        partOfSpeech: 'noun',
        themes: ['health', 'work', 'finance'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Health insurance coverage, mandatory for all residents in Germany. It can be statutory (gesetzlich, GKV) or private (privat, PKV). Without it, access to most medical services is blocked.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Krankenversicherung'?",
          options: [
            { text: 'A certificate of good health from a doctor', isCorrect: false },
            { text: 'Health insurance coverage', isCorrect: true },
            { text: 'A type of sick leave entitlement', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'In Deutschland ist die Krankenversicherung für alle Pflicht. Meine Krankenversicherung übernimmt die Kosten für den Arztbesuch. Ich habe mich bei der AOK als Krankenversicherung angemeldet.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A compound: 'Kranken-' (from 'krank', sick) + 'Versicherung' (insurance). 'Versicherung' comes from 'versichern' (to assure, to insure) — making sure you are covered when sick.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Krankenkasse',
            article: 'die',
            translation: 'health insurance fund',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Versicherung',
            article: 'die',
            translation: 'insurance',
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
              "'Kranken' = sick, 'Versicherung' = insurance. Break it in two: insurance for when you're kranken (sick).",
          },
          {
            id: 2,
            content:
              "The word is long but logical — German often builds compound nouns like Lego bricks. Sick + Insurance = Krankenversicherung.",
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
