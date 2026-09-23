import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const handeln: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'handeln',
        article: null,
        translation: 'to act, to trade',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To take action or behave in a certain way, or to buy and sell goods.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'handeln'?",
          options: [
            { text: 'to act, to trade', isCorrect: true },
            { text: 'to think about something', isCorrect: false },
            { text: 'to sleep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'In dieser Situation musst du schnell {{handeln}}.',
          'Er {{handelt}} immer sehr überlegt.',
          'Sie haben lange mit Aktien {{gehandelt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Hand' — handeln originally meant 'to work with one's hands', later broadening to 'to act' and 'to trade'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'agieren',
            article: null,
            translation: 'to act (formal)',
            similarityScore: 3,
            level: ["B1"],
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
              "'Handeln' contains 'Hand' — handeln is taking matters into your own hands.",
          },
          {
            id: 2,
            content:
              "Picture a trader shaking hands (Hand) to seal a deal — that's handeln.",
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
