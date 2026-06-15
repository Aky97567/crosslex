import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const befristung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Befristung',
        article: 'die',
        translation: 'fixed-term limitation, time limitation',
        partOfSpeech: 'noun',
        themes: ['work', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The limitation of a contract to a defined period of time. A befristeter Arbeitsvertrag (fixed-term employment contract) ends automatically on the agreed date without requiring a Kündigung. German law restricts its use — an employer may generally only apply a Befristung without a substantive reason (sachlicher Grund) twice in succession.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Befristung'?",
          options: [
            { text: 'The limitation of a contract or agreement to a fixed time period', isCorrect: true },
            { text: 'The extension of a contract beyond its originally agreed end date', isCorrect: false },
            { text: 'A penalty clause activated when a contract deadline is missed', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Arbeitsvertrag hat eine Befristung von einem Jahr. Nach der Befristung kann der Vertrag verlängert oder beendet werden. Eine Befristung ohne sachlichen Grund ist gesetzlich nur zweimal zulässig.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' (intensifying prefix) + 'Frist' (deadline, time limit) + '-ung'. A Befristung places a firm Frist onto a contract, locking it to a defined and inescapable end date.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Zeitbegrenzung',
            article: 'die',
            translation: 'time limitation',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Laufzeitbeschränkung',
            article: 'die',
            translation: 'term restriction',
            similarityScore: 3,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Vertragslaufzeit',
            article: 'die',
            translation: 'contract duration, term',
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
              "'Be-FRIST-ung' contains 'Frist' (deadline) — a Befristung places a hard deadline on your contract from the start.",
          },
          {
            id: 2,
            content:
              "Think of 'be-frosted' — your contract is frozen in time, set to melt and end on one fixed date.",
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
