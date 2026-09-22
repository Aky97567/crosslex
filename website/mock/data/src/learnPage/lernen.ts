import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const lernen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'lernen',
        article: null,
        translation: 'to learn',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To acquire knowledge or a skill through study, practice, or experience.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'lernen'?",
          options: [
            { text: 'to learn', isCorrect: true },
            { text: 'to teach', isCorrect: false },
            { text: 'to forget', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{lerne}} jeden Tag Deutsch.',
          'Er {{lernt}} für die Prüfung.',
          'Wir haben viel in diesem Kurs {{gelernt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'lernen', related to English 'learn' — both come from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'pauken',
            article: null,
            translation: 'to cram, study hard (informal)',
            similarityScore: 3,
            level: ['B1'],
            register: 'colloquial',
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
              "'Lernen' sounds nearly identical to the English word 'learn' — same root, same meaning.",
          },
          {
            id: 2,
            content:
              "Think of a 'learner's permit' — 'lernen' is exactly that: learning something new.",
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
