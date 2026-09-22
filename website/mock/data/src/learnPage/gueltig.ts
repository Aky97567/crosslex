import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gueltig: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'gültig',
        article: null,
        translation: 'valid',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'bureaucracy'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Legally or officially acceptable; still in effect.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'gültig'?",
          options: [
            { text: 'valid', isCorrect: true },
            { text: 'invalid', isCorrect: false },
            { text: 'expensive', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Ausweis ist nicht mehr {{gültig}}.',
          'Ihr Vertrag bleibt bis Ende des Jahres {{gültig}}.',
          'Ist dieses Ticket noch {{gültig}}?',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieses Argument ist {{gültig}}.',
        positivAttributiv: 'Das ist ein {{gültiges}} Argument.',
        komparativPredicativ: 'Dieses Argument ist {{gültiger}} als jenes.',
        komparativAttributiv: 'Das ist das {{gültigere}} Argument.',
        superlativPredicativ: 'Dieses Argument erscheint mir {{am gültigsten}}.',
        superlativAttributiv: 'Das ist das {{gültigste}} Argument in der Diskussion.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'gelten' (to be valid, count) + '-ig' — literally 'having validity'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'wirksam',
            article: null,
            translation: 'effective, in force (formal)',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "'Gültig' relates to 'gelten' (to count, be valid) — gültig means it still counts.",
          },
          {
            id: 2,
            content:
              "Think of an official seal of approval — gültig means officially valid.",
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
