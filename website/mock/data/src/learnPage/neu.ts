import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const neu: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'neu',
        article: null,
        translation: 'new',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Recently made, introduced, or discovered; not old.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'neu'?",
          options: [
            { text: 'new', isCorrect: true },
            { text: 'old', isCorrect: false },
            { text: 'used', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich habe ein {{neues}} Handy gekauft.',
          'Das ist mein {{neuer}} Kollege.',
          'Was gibt es {{Neues}}?',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Mein Handy ist {{neu}}.',
        positivAttributiv: 'Das ist ein {{neues}} Handy.',
        komparativPredicativ: 'Mein Handy ist {{neuer}} als deins.',
        komparativAttributiv: 'Das ist das {{neuere}} Handy.',
        superlativPredicativ: 'Dieses Modell ist {{am neuesten}}.',
        superlativAttributiv: 'Das ist das {{neueste}} Modell.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'niuwi', related to English 'new' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aktuell',
            article: null,
            translation: 'current, up-to-date',
            similarityScore: 3,
            level: ['A2'],
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
            content: "'Neu' is basically 'new' with the letters rearranged.",
          },
          {
            id: 2,
            content:
              "Think of the German word 'neu' as a compact twist on 'new'.",
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
