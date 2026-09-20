import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zustimmung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Zustimmung',
        article: 'die',
        translation: 'consent, approval',
        partOfSpeech: 'noun',
        themes: ['bureaucracy', 'daily_life'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Formal agreement or permission for something to happen.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Zustimmung'?",
          options: [
            { text: 'consent, approval', isCorrect: true },
            { text: 'a refusal', isCorrect: false },
            { text: 'a complaint', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich brauche Ihre schriftliche {{Zustimmung}}.',
          'Der Plan wurde ohne seine {{Zustimmung}} geändert.',
          'Alle gaben ihre {{Zustimmung}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'zu-' + 'stimmen' (to agree, vote) — literally 'to add your voice in agreement'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Einwilligung',
            article: 'die',
            translation: 'consent (formal)',
            similarityScore: 4,
            level: ['B1'],
            register: 'formal',
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
              "'Zustimmung' contains 'stimmen' (to vote) — giving Zustimmung means casting your vote in favor.",
          },
          {
            id: 2,
            content: "Think of raising your hand in agreement — Zustimmung.",
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
