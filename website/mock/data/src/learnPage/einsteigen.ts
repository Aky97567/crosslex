import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const einsteigen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'einsteigen',
        article: null,
        translation: 'to get on, board (transport)',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['transport', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To board or get into a vehicle — train, bus, tram, or car. The counterpart of aussteigen (to get off). Heard in the announcement "Bitte einsteigen!"',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'einsteigen'?",
          options: [
            { text: 'to get off a bus', isCorrect: false },
            { text: 'to board, get on a vehicle', isCorrect: true },
            { text: 'to change trains', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Du musst schnell in den Zug einsteigen. Ich steige jetzt in die U-Bahn ein. Wir sind am Gleis drei eingestiegen.',
        alternateForms: ['eingestiegen'],
        trennbarTokens: ['steige', 'ein'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ein-' (in, into) + 'steigen' (to climb). To climb in — stepping up and into the vehicle.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aussteigen',
            article: null,
            translation: 'to get off, exit',
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
              "'Ein' = in/into, 'steigen' = to climb. Climb into the vehicle — einsteigen.",
          },
          {
            id: 2,
            content:
              "'Bitte einsteigen!' — Please board! You'll hear this at every German train platform. The 'ein' moves to the end: 'Ich steige … ein.'",
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
