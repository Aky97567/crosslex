import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ruecksicht: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Rücksicht',
        article: 'die',
        translation: 'consideration, regard',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: "Careful thought about the feelings or needs of others.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Rücksicht'?",
          options: [
            { text: 'consideration, regard', isCorrect: true },
            { text: 'a complaint', isCorrect: false },
            { text: 'a mistake', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte nehmen Sie {{Rücksicht}} auf andere Fahrgäste.',
          'Er zeigt wenig {{Rücksicht}} auf die Nachbarn.',
          'Aus {{Rücksicht}} auf die Kinder blieb sie ruhig.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Rück-' (back) + 'Sicht' (view, sight) — literally 'looking back' to check on others before acting.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Achtsamkeit',
            article: 'die',
            translation: 'mindfulness, attentiveness',
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
              "'Rücksicht' — 'Rück' (back) + 'Sicht' (view) — you look back to check how your actions affect others.",
          },
          {
            id: 2,
            content: "Think of checking your mirrors before acting — Rücksicht.",
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
