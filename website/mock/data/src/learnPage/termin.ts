import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const termin: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Termin',
        article: 'der',
        translation: 'appointment, date',
        partOfSpeech: 'noun',
        theme: 'bureaucracy',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A scheduled time for a meeting, visit, or official appointment, especially at a government office, doctor, or employer.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Termin'?",
          options: [
            { text: 'A type of public transport ticket', isCorrect: false },
            { text: 'A scheduled appointment or date', isCorrect: true },
            { text: 'A legal penalty', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe einen Termin beim Ausländeramt nächste Woche. Der Termin dauert etwa eine Stunde. Ohne Termin kann man dort nicht vorsprechen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'terminus' (boundary, end point). In German it evolved to mean a fixed point in time — a scheduled boundary between free time and an obligation.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Vereinbarung',
            article: 'die',
            translation: 'arrangement, agreement',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Besprechung',
            article: 'die',
            translation: 'meeting, discussion',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Verabredung',
            article: 'die',
            translation: 'arrangement to meet',
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
              "Think of 'terminal' — a fixed point where you must arrive. A Termin is your fixed arrival point in the calendar.",
          },
          {
            id: 2,
            content:
              "'Termin' sounds like 'termination' — the moment where your free schedule terminates and the appointment begins.",
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
