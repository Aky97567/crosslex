import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const mahnung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Mahnung',
        article: 'die',
        translation: 'reminder notice, demand for payment',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A formal written reminder demanding that someone pay an overdue bill or fulfil an obligation. German law recognises escalating stages: erste Mahnung (first reminder), zweite Mahnung, and eventually legal action. Receiving one requires immediate attention.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Mahnung'?",
          options: [
            { text: 'A formal reminder demanding payment of an overdue amount', isCorrect: true },
            { text: 'A written confirmation that a payment has been received', isCorrect: false },
            { text: 'A notice informing you that a contract has been renewed', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe eine Mahnung von meiner Krankenkasse bekommen. Die Mahnung fordert mich auf, den Beitrag innerhalb von zwei Wochen zu bezahlen. Nach der dritten Mahnung kann es zu rechtlichen Schritten kommen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'mahnen' (to remind, to admonish) + '-ung'. 'Mahnen' traces back to Old High German 'manōn', related to the idea of urgently bringing something to another person's attention.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Mahnschreiben',
            article: 'das',
            translation: 'formal reminder letter',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Zahlungserinnerung',
            article: 'die',
            translation: 'payment reminder',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Aufforderung',
            article: 'die',
            translation: 'demand, formal request',
            similarityScore: 3,
            level: ['B1'],
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
              "'Mahnung' sounds like 'moaning' — when you get one, your creditor is moaning at you to pay up.",
          },
          {
            id: 2,
            content:
              "Think of 'Mahn' as 'man!' — as in someone exclaiming 'Man, you still haven't paid!'",
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
