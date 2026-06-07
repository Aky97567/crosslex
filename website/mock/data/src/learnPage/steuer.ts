import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const steuer: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Steuer',
        article: 'die',
        translation: 'tax',
        partOfSpeech: 'noun',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A mandatory financial charge collected by the government. In Germany, income tax (Einkommensteuer) is deducted directly from wages by employers. Employees receive a yearly tax assessment (Steuererklärung).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Steuer'?",
          options: [
            { text: 'A government grant for low-income residents', isCorrect: false },
            { text: 'A mandatory financial charge collected by the state', isCorrect: true },
            { text: 'A fine or penalty issued by a court', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Steuer wird automatisch vom Gehalt abgezogen. Ich muss jedes Jahr eine Steuererklärung beim Finanzamt einreichen. Wer zu viel Steuer gezahlt hat, bekommt eine Rückerstattung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'stiura' (support, prop). The idea: citizens prop up the state with their payments. Note: 'das Steuer' (neuter) means steering wheel — a different word with the same spelling.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Abgabe',
            article: 'die',
            translation: 'levy, contribution',
            similarityScore: 3,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Taxe',
            article: 'die',
            translation: 'levy, tax',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Gebühr',
            article: 'die',
            translation: 'fee, charge',
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
              "'Steuer' rhymes with 'teuer' (expensive) — and indeed, taxes can feel very teuer.",
          },
          {
            id: 2,
            content:
              "Think of 'steward' — the state acts as a steward of your Steuer, redistributing it for public services.",
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
