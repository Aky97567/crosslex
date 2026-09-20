import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const feststellen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'feststellen',
        article: null,
        translation: 'to determine, establish, find out',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To discover or confirm a fact after checking or observing something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'feststellen'?",
          options: [
            { text: 'to determine, establish', isCorrect: true },
            { text: 'to guess', isCorrect: false },
            { text: 'to forget', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Arzt muss die Ursache {{feststellen}}.',
          'Ich {{stelle}} oft Fehler in Berichten {{fest}}.',
          'Die Polizei hat den Schaden {{festgestellt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'fest' (firm, fixed) + 'stellen' (to put, place) — literally 'to put firmly in place', i.e. to pin down a fact.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'ermitteln',
            article: null,
            translation: 'to determine, investigate (formal)',
            similarityScore: 4,
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
              "'Fest' + 'stellen' — putting (stellen) something 'firmly' (fest) in place: establishing it as fact.",
          },
          {
            id: 2,
            content:
              "Think of pinning down the facts 'firmly' — feststellen.",
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
