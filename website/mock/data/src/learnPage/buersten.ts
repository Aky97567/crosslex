import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const buersten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bürsten',
        article: null,
        translation: 'to brush',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To clean or smooth something, such as hair or clothes, by using a brush.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bürsten'?",
          options: [
            { text: 'to brush', isCorrect: true },
            { text: 'to wash something', isCorrect: false },
            { text: 'to dry something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{bürste}} mir jeden Morgen die Haare.',
          'Sie {{bürstet}} ihrem Hund das Fell.',
          'Er hat seine Jacke {{gebürstet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Bürste' (brush), itself from Old High German 'burst' (bristle) — related to English 'bristle'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Kämmen' (to comb) is a related but distinct tool/action, not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Bürsten' contains 'Bürste' (brush) — you always bürsten with a Bürste.",
          },
          {
            id: 2,
            content:
              "Think of the sound '-bürsten' like 'bristle-n' — brushing always uses bristles.",
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
