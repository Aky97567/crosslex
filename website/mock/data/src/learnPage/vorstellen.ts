import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const vorstellen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'vorstellen',
        article: null,
        translation: 'to introduce; to imagine (sich vorstellen)',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'work', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To introduce a person to others. Used reflexively as "sich vorstellen" — to introduce oneself. Also means to imagine or picture something: "Ich kann mir das vorstellen" (I can imagine that).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'vorstellen'?",
          options: [
            { text: 'to forget someone\'s name', isCorrect: false },
            { text: 'to introduce (oneself)', isCorrect: true },
            { text: 'to look for a job', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Darf ich mich kurz vorstellen? Ich stelle mich jetzt den neuen Kollegen vor. Sie hat sich beim Vorstellungsgespräch gut vorgestellt.',
        alternateForms: ['vorgestellt'],
        trennbarTokens: ['stelle', 'vor'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'vor-' (before, in front of) + 'stellen' (to place, put). To place oneself in front — stepping forward to be seen and named.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bekanntmachen',
            article: null,
            translation: 'to introduce, make known',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'präsentieren',
            article: null,
            translation: 'to present',
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
              "'Vor' = before/in front, 'stellen' = to place. Place yourself in front — vorstellen.",
          },
          {
            id: 2,
            content:
              "'Darf ich mich vorstellen?' — May I introduce myself? The 'vor' splits off: 'Ich stelle mich vor.' You step forward (vor) to be seen.",
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
