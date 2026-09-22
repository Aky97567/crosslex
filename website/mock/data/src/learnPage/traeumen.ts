import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const traeumen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'träumen',
        article: null,
        translation: 'to dream',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To experience images, thoughts, or feelings while sleeping, or to imagine something one hopes for.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'träumen'?",
          options: [
            { text: 'to dream', isCorrect: true },
            { text: 'to stay awake all night', isCorrect: false },
            { text: 'to plan carefully', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{träume}} oft von meinem Urlaub.',
          'Er {{träumt}} jede Nacht sehr lebhaft.',
          'Ich habe von dir {{geträumt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Traum' (dream), from Old High German 'troum' — related to English 'dream', both sharing the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Träumen' contains 'Traum' (dream) — you träumen a Traum.",
          },
          {
            id: 2,
            content:
              "Picture closing your eyes and drifting into a Traum — that's träumen.",
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
