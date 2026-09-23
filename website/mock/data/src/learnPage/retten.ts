import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const retten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'retten',
        article: null,
        translation: 'to save, rescue',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'health'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To save someone or something from danger, harm, or destruction.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'retten'?",
          options: [
            { text: 'to save, rescue', isCorrect: true },
            { text: 'to injure someone', isCorrect: false },
            { text: 'to lose something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Rettungsschwimmer {{rettet}} den Jungen aus dem Wasser.',
          'Ärzte {{retten}} jeden Tag Leben.',
          'Die Feuerwehr hat die Familie aus dem brennenden Haus {{gerettet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'retten', a purely Germanic word for saving from danger, with no direct English cognate.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Befreien' (to free) is broader — it covers release from any restriction, not specifically danger.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Retten' sounds like 'red-ten' — imagine a red rescue helicopter arriving to retten someone.",
          },
          {
            id: 2,
            content:
              "Picture a lifeguard pulling a swimmer to safety — that's retten.",
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
