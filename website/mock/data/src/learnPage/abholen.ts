import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const abholen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'abholen',
        article: null,
        translation: 'to pick up (a person or thing)',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'transport', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To go somewhere to collect a person or an object and bring them back. Used for picking up people from a station, collecting a parcel, or fetching a document.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'abholen'?",
          options: [
            { text: 'to deliver something', isCorrect: false },
            { text: 'to pick up a person or object', isCorrect: true },
            { text: 'to lose something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Kannst du mich vom Bahnhof abholen? Ich hole dich um 18 Uhr ab. Er hat das Paket von der Post abgeholt.',
        alternateForms: ['abgeholt'],
        trennbarTokens: ['hole', 'ab'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab-' (away, off) + 'holen' (to fetch, get). To fetch from away — go there and bring it back.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'holen',
            article: null,
            translation: 'to fetch, get',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'mitnehmen',
            article: null,
            translation: 'to take along',
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
              "'Ab' = away, 'holen' = to fetch. Fetch from away — go there and pick it up. Abholen.",
          },
          {
            id: 2,
            content:
              "'Kann ich dich abholen?' — Can I pick you up? The 'ab' separates and moves to the end: 'Ich hole dich ab.'",
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
