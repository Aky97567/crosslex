import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const steigen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'steigen',
        article: null,
        translation: 'to climb, rise',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'finance'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To move upward, or to increase in amount, level, or number.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'steigen'?",
          options: [
            { text: 'to climb, rise', isCorrect: true },
            { text: 'to decrease slowly', isCorrect: false },
            { text: 'to stay the same', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Preise {{steigen}} jedes Jahr ein bisschen.',
          'Die Temperatur {{steigt}} im Sommer schnell.',
          'Der Ballon ist langsam in die Luft {{gestiegen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'stīgan', related to the English word 'sty' (as in 'stile', a step for climbing over a fence) — both trace back to a shared Germanic root about climbing.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Klettern' implies physical hands-and-feet climbing, narrower than the general 'rise' sense.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Steigen' sounds like 'sty-gen' — think of climbing up over a stile (sty) in a fence.",
          },
          {
            id: 2,
            content:
              "Picture a graph line steigen (rising) upward on a chart.",
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
