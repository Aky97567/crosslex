import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erforderlich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'erforderlich',
        article: null,
        translation: 'required, necessary',
        partOfSpeech: 'adjective',
        themes: ['bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Needed or demanded for a particular purpose.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'erforderlich'?",
          options: [
            { text: 'required, necessary', isCorrect: true },
            { text: 'forbidden', isCorrect: false },
            { text: 'optional', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Für die Anmeldung ist ein Ausweis {{erforderlich}}.',
          'Welche Unterlagen sind {{erforderlich}}?',
          'Eine Unterschrift ist {{erforderlich}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieses Dokument ist {{erforderlich}}.',
        positivAttributiv: 'Das ist ein {{erforderliches}} Dokument.',
        komparativPredicativ: 'Dieses Dokument ist {{erforderlicher}} als jenes.',
        komparativAttributiv: 'Das ist das {{erforderlichere}} Dokument.',
        superlativPredicativ: 'Diese Unterlage ist {{am erforderlichsten}}.',
        superlativAttributiv: 'Das ist die {{erforderlichste}} Unterlage im Antrag.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'erfordern' (to require, demand) — erforderlich describes what is demanded by a situation.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'notwendig',
            article: null,
            translation: 'necessary',
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
              "'Erforderlich' contains 'fordern' (to demand) — erforderlich is what's demanded.",
          },
          {
            id: 2,
            content:
              "Think of a checklist item that's formally demanded — erforderlich.",
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
