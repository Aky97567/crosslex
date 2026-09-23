import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const blicken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'blicken',
        article: null,
        translation: 'to glance, look',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To look at something or someone, often briefly or in a particular direction.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'blicken'?",
          options: [
            { text: 'to glance, look', isCorrect: true },
            { text: 'to listen carefully', isCorrect: false },
            { text: 'to touch something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie {{blickt}} aus dem Fenster.',
          'Er {{blickte}} kurz auf seine Uhr.',
          'Wir haben zurück auf die letzten Jahre {{geblickt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'blicken', related to English 'blink' — both share the same Germanic root about a brief look or flash.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'schauen',
            article: null,
            translation: 'to look, watch',
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
              "'Blicken' sounds like 'blink in' — a quick blick (glance) is almost like a blink.",
          },
          {
            id: 2,
            content:
              "Picture glancing sideways for just a second — that's blicken.",
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
