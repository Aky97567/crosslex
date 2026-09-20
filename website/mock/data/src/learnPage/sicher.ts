import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sicher: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sicher',
        article: null,
        translation: 'safe, certain',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Free from danger, or certain about something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sicher'?",
          options: [
            { text: 'safe, certain', isCorrect: true },
            { text: 'dangerous, uncertain', isCorrect: false },
            { text: 'expensive', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ist diese Gegend nachts {{sicher}}?',
          'Ich bin mir {{sicher}}, dass er recht hat.',
          'Die Daten werden {{sicher}} gespeichert.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Diese Gegend ist {{sicherer}} als jene.',
        superlativeSentence: 'Nachts ist es hier {{am sichersten}}.',
        superlativeAttributiveSentence: 'Das ist die {{sicherste}} Route.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'securus' (free from care), via Old High German 'sihhur' — the same root gives English 'secure' and 'sure'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'gewiss',
            article: null,
            translation: 'certain',
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
              "'Sicher' relates to English 'secure' and 'sure' — same Latin root.",
          },
          {
            id: 2,
            content: "Think of feeling 'secure' and confident — sicher.",
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
