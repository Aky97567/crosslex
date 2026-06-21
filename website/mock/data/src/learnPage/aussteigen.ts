import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aussteigen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'aussteigen',
        article: null,
        translation: 'to get off, exit (transport)',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['transport', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To exit a vehicle — train, bus, tram, or car. The counterpart of einsteigen (to board). Heard constantly in German public transport announcements.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'aussteigen'?",
          options: [
            { text: 'to board a train', isCorrect: false },
            { text: 'to get off a vehicle', isCorrect: true },
            { text: 'to buy a ticket', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Hier müssen wir aussteigen. Ich steige an der nächsten Haltestelle aus. Sie ist am Hauptbahnhof ausgestiegen.',
        alternateForms: ['ausgestiegen'],
        trennbarTokens: ['steige', 'aus'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus-' (out) + 'steigen' (to climb). To climb out — stepping down and out of the vehicle.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'einsteigen',
            article: null,
            translation: 'to get on, board',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'umsteigen',
            article: null,
            translation: 'to change (trains/buses)',
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
              "'Aus' = out, 'steigen' = to climb. Climb out of the train — aussteigen.",
          },
          {
            id: 2,
            content:
              "Three travel verbs share 'steigen': ein- (in), aus- (out), um- (over to another). Learn all three together.",
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
