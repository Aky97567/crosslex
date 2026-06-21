import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const oeffnungszeiten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Öffnungszeiten',
        displayName: 'Öffnungs­zeiten',
        article: 'die',
        translation: 'opening hours',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The times during which a shop, office, or service is open to the public; always used in the plural form.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Öffnungszeiten'?",
          options: [
            { text: 'a booking system', isCorrect: false },
            { text: 'opening hours', isCorrect: true },
            { text: 'a closing sale', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Was sind die Öffnungszeiten? Die Öffnungszeiten sind von 9 bis 18 Uhr. Ich schaue die Öffnungszeiten auf der Webseite nach.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'öffnen' (to open) + 'Zeit' (time) + plural '-en'. The times of opening — straightforward compound noun.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Geschäftszeiten',
            article: 'die',
            translation: 'business hours',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Betriebszeiten',
            article: 'die',
            translation: 'operating hours',
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
              "Break it down: Öffnungs (opening) + Zeiten (times, plural of Zeit). Opening-times. German compounds are their own explanation.",
          },
          {
            id: 2,
            content:
              "You'll see 'Öffnungszeiten' on every German shop window. After reading it a hundred times, you'll never forget it.",
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
