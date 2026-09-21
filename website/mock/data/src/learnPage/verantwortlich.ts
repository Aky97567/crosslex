import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verantwortlich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'verantwortlich',
        article: null,
        translation: 'responsible',
        partOfSpeech: 'adjective',
        themes: ['work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having a duty to deal with or take care of something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'verantwortlich'?",
          options: [
            { text: 'responsible', isCorrect: true },
            { text: 'careless', isCorrect: false },
            { text: 'guilty', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wer ist für diese Abteilung {{verantwortlich}}?',
          'Ich fühle mich {{verantwortlich}} für den Fehler.',
          'Sie ist {{verantwortlich}} für die gesamte Planung.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Die Mitarbeiterin ist {{verantwortlich}}.',
        positivAttributiv: 'Das ist eine {{verantwortliche}} Mitarbeiterin.',
        komparativPredicativ: 'Sie ist {{verantwortlicher}} als ihr Vorgänger.',
        komparativAttributiv: 'Das ist die {{verantwortlichere}} Mitarbeiterin.',
        superlativPredicativ: 'Der Mitarbeiter handelt {{am verantwortlichsten}} von allen.',
        superlativAttributiv: 'Das ist der {{verantwortlichste}} Mitarbeiter der Abteilung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Antwort' (answer) — verantwortlich literally means 'able to answer for' something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zuständig',
            article: null,
            translation: 'in charge of, responsible for',
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
              "'Verantwortlich' contains 'Antwort' (answer) — being responsible means you can answer for it.",
          },
          {
            id: 2,
            content:
              "Think of being called to 'answer' for your actions — verantwortlich.",
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
