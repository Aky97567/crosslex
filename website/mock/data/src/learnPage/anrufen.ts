import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const anrufen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'anrufen',
        article: null,
        translation: 'to call (by phone)',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'work', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To contact someone by telephone; to make a phone call to a person or organisation.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'anrufen'?",
          options: [
            { text: 'to send a message', isCorrect: false },
            { text: 'to phone someone', isCorrect: true },
            { text: 'to visit someone at home', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Du solltest die Arztpraxis anrufen und einen Termin machen. Ich rufe dich morgen früh an. Sie hat ihren Chef nicht angerufen.',
        alternateForms: ['angerufen'],
        trennbarTokens: ['rufe', 'an'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an-' (to, at) + 'rufen' (to call, shout). To call out to someone — originally face to face, now by telephone.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'telefonieren',
            article: null,
            translation: 'to talk on the phone',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'zurückrufen',
            article: null,
            translation: 'to call back',
            similarityScore: 4,
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
            content:
              "'An' = to/at, 'rufen' = to call. You call at someone — anrufen.",
          },
          {
            id: 2,
            content:
              "Notice the split: 'Ich rufe … an.' The 'an' jumps to the end, like the phone ringing at the other end.",
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
