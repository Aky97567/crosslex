import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const anspruch: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Anspruch',
        article: 'der',
        translation: 'claim, entitlement, right',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A legal or moral right to have, receive, or demand something; an entitlement or claim.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Anspruch'?",
          options: [
            { text: 'A formal greeting', isCorrect: false },
            { text: 'A legal entitlement or claim to something', isCorrect: true },
            { text: 'A type of contract', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Sie haben Anspruch auf Kindergeld. Er macht seinen Anspruch auf die Erbschaft geltend. Jeder Bürger hat Anspruch auf eine kostenlose Beratung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an' (at, to) + 'Spruch' (saying, ruling), derived from 'sprechen' (to speak). A formal spoken claim directed at someone – to speak up and declare your right.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Recht',
            article: 'das',
            translation: 'right, law',
            similarityScore: 3,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Forderung',
            article: 'die',
            translation: 'demand, claim',
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Berechtigung',
            article: 'die',
            translation: 'entitlement, authorization',
            similarityScore: 4,
            level: ['B2'],
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
              "'An' + 'Spruch' (from sprechen = to speak) – you speak up (an-sprechen) to assert your claim.",
          },
          {
            id: 2,
            content:
              "Think of 'Anspruch' as your personal speech act: you announce your right by speaking it out loud.",
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
