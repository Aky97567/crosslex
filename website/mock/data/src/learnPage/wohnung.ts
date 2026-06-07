import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wohnung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Wohnung',
        article: 'die',
        translation: 'apartment, flat',
        partOfSpeech: 'noun',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A set of rooms in a building where someone lives; a self-contained home, usually rented.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Wohnung'?",
          options: [
            { text: 'a house with a garden', isCorrect: false },
            { text: 'an apartment or flat', isCorrect: true },
            { text: 'a hotel room', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich suche eine neue Wohnung. Die Wohnung hat zwei Zimmer. Meine Wohnung ist nicht weit vom Bahnhof.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the verb 'wohnen' (to live, to reside). A Wohnung is literally the place where you wohnen.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Appartement',
            article: 'das',
            translation: 'apartment',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Unterkunft',
            article: 'die',
            translation: 'accommodation, lodging',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Bleibe',
            article: 'die',
            translation: 'place to stay (informal)',
            similarityScore: 3,
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
              "'Wohnung' comes from 'wohnen' (to live). Picture someone waving from their window — they wohnen there.",
          },
          {
            id: 2,
            content:
              "Think of 'woning' in Dutch or 'woning' in Afrikaans — the same word, same meaning across Germanic languages.",
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
