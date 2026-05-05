import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const frist: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Frist',
        article: 'die',
        translation: 'deadline, time limit',
        partOfSpeech: 'noun',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A fixed period of time within which something must be done or completed; a deadline.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Frist'?",
          options: [
            { text: 'A hairstyle', isCorrect: false },
            { text: 'A set time limit or deadline', isCorrect: true },
            { text: 'A type of certificate', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Frist endet am 30. April. Sie haben die Frist versäumt und müssen jetzt eine Strafe zahlen. Bitte halten Sie die Frist ein.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'frist', related to Gothic 'freis' (free) and Old Norse 'frest' (delay). Originally meant a period of respite or granted time.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Termin',
            article: 'der',
            translation: 'appointment, date',
            similarityScore: 3,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Zeitraum',
            article: 'der',
            translation: 'time period',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Abgabefrist',
            article: 'die',
            translation: 'submission deadline',
            similarityScore: 5,
            level: ['B2'],
            cefrRelevant: false,
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
              "'Frist' sounds like 'first' – you must finish it by the FIRST set date.",
          },
          {
            id: 2,
            content:
              "Imagine a freezing frost that stops everything – when the 'Frist' passes, time is frozen and you can't submit.",
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
