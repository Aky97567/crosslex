import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const weiterleiten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'weiterleiten',
        article: null,
        translation: 'to forward, pass on',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To send something you received on to another person.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'weiterleiten'?",
          options: [
            { text: 'to forward, pass on', isCorrect: true },
            { text: 'to delete', isCorrect: false },
            { text: 'to reply', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du mir die E-Mail {{weiterleiten}}?',
          'Ich {{leite}} die Nachricht sofort {{weiter}}.',
          'Er hat die Beschwerde an die Abteilung {{weitergeleitet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'weiter' (further, on) + 'leiten' (to lead, direct) — literally 'to lead further' along to someone else.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'übermitteln',
            article: null,
            translation: 'to transmit, pass on (formal)',
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
              "'Weiter' + 'leiten' — leading (leiten) something 'further' (weiter) along.",
          },
          {
            id: 2,
            content:
              "Think of forwarding mail 'further' down the chain — weiterleiten.",
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
