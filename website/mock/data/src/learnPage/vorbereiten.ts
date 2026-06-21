import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const vorbereiten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'vorbereiten',
        article: null,
        translation: 'to prepare',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'work', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To prepare something or oneself in advance. Used reflexively — "sich vorbereiten auf" (to prepare for something). Common in work, study, and exam contexts.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'vorbereiten'?",
          options: [
            { text: 'to review notes afterwards', isCorrect: false },
            { text: 'to prepare in advance', isCorrect: true },
            { text: 'to cancel an appointment', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich muss mich auf das Vorstellungsgespräch vorbereiten. Ich bereite die Unterlagen für das Meeting vor. Sie hat sich gut auf die Prüfung vorbereitet.',
        alternateForms: ['vorbereitet'],
        trennbarTokens: ['bereite', 'vor'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'vor-' (before, in advance) + 'bereiten' (to prepare, make ready). To make ready before — getting things in order ahead of time.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'planen',
            article: null,
            translation: 'to plan',
            similarityScore: 3,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'organisieren',
            article: null,
            translation: 'to organise',
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
              "'Vor' = before/in advance, 'bereiten' = to prepare. Make ready in advance — vorbereiten.",
          },
          {
            id: 2,
            content:
              "'Ich bereite mich vor.' The 'vor' flies to the end. Think of laying things out (bereiten) before (vor) the event.",
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
