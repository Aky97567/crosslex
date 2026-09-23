import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const faulenzen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'faulenzen',
        article: null,
        translation: 'to be lazy, laze around',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To relax and do nothing productive on purpose, often for pleasure rather than out of tiredness.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'faulenzen'?",
          options: [
            { text: 'to be lazy, laze around', isCorrect: true },
            { text: 'to work very hard', isCorrect: false },
            { text: 'to clean the whole house', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Am Wochenende {{faulenze}} ich gern auf dem Sofa.',
          'Er {{faulenzt}} den ganzen Tag im Garten.',
          'Wir haben im Urlaub einfach nur {{gefaulenzt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the adjective 'faul' (lazy) — faulenzen turns the adjective into a verb describing the act of being lazy on purpose.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Entspannen' (to relax) is broader — it doesn't carry faulenzen's specific sense of idleness.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Faulenzen' contains 'faul' (lazy) — faulenzen is doing nothing, on purpose.",
          },
          {
            id: 2,
            content:
              "Picture lying in a hammock all afternoon — the perfect image of faulenzen.",
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
