import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const durchfuehren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'durchführen',
        article: null,
        translation: 'to carry out, conduct',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To perform or complete a planned activity, especially a formal one.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'durchführen'?",
          options: [
            { text: 'to carry out, conduct', isCorrect: true },
            { text: 'to cancel', isCorrect: false },
            { text: 'to plan', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Firma möchte eine Umfrage {{durchführen}}.',
          'Wir {{führen}} morgen den Test {{durch}}.',
          'Die Studie wurde erfolgreich {{durchgeführt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'durch' (through) + 'führen' (to lead) — literally 'to lead through' a process to completion.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'ausführen',
            article: null,
            translation: 'to carry out, execute',
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
              "'Durch' + 'führen' — leading (führen) something 'through' (durch) to the end.",
          },
          {
            id: 2,
            content:
              "Think of leading a project 'through' all its steps — durchführen.",
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
