import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kuendigungsfrist: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Kündigungsfrist',
        displayName: 'Kündigungs­frist',
        article: 'die',
        translation: 'notice period',
        partOfSpeech: 'noun',
        themes: ['work', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The legally required period of advance notice that must be given before terminating an employment contract or rental agreement. For employment, the statutory minimum is four weeks; longer periods apply based on how many years the employee has worked for the employer. Both sides must respect the Kündigungsfrist.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Kündigungsfrist'?",
          options: [
            { text: 'The required period of advance notice before ending a contract', isCorrect: true },
            { text: 'The deadline for submitting a formal appeal against a dismissal', isCorrect: false },
            { text: 'The maximum time an employer has to respond to a resignation letter', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Arbeitsvertrag hat eine Kündigungsfrist von drei Monaten. Ich muss die Kündigungsfrist einhalten, bevor ich die Stelle verlasse. Nach fünf Jahren Beschäftigung verlängert sich die Kündigungsfrist auf zwei Monate.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Kündigung' (notice of termination) + 'Frist' (deadline, time limit). The Kündigungsfrist is the Frist — the required waiting period — built into every act of termination.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Kündigungszeit',
            article: 'die',
            translation: 'notice time, notice period',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Frist',
            article: 'die',
            translation: 'deadline, time limit',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Sperrfrist',
            article: 'die',
            translation: 'blocking period, waiting period',
            similarityScore: 3,
            level: ['B2'],
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
              "'Kündigung-FRIST' — Kündigung = notice, Frist = deadline. The deadline built into your notice: the time you must wait before leaving.",
          },
          {
            id: 2,
            content:
              "Think of 'cue-and-freeze' — once you give notice, both sides freeze for the Kündigungsfrist before anything actually changes.",
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
