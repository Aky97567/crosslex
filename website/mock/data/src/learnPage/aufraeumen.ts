import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aufraeumen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'aufräumen',
        article: null,
        translation: 'to tidy up, clean up',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To put things in order, clear up a room, desk, or space. A very common everyday verb used at home and in the workplace.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'aufräumen'?",
          options: [
            { text: 'to make a mess', isCorrect: false },
            { text: 'to tidy up', isCorrect: true },
            { text: 'to go shopping', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich muss heute mein Zimmer aufräumen. Ich räume jetzt das Wohnzimmer auf. Sie hat die Küche nach dem Kochen aufgeräumt.',
        alternateForms: ['aufgeräumt'],
        trennbarTokens: ['räume', 'auf'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'auf-' (up) + 'räumen' (to clear, make room). To clear up — create space by putting things in their place.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'ordnen',
            article: null,
            translation: 'to organise, sort',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'putzen',
            article: null,
            translation: 'to clean',
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
              "'Auf' = up, 'räumen' = to clear space. Clear things up — aufräumen.",
          },
          {
            id: 2,
            content:
              "Picture clearing up (räumen) and stacking things up (auf). 'Räum bitte auf!' — Please tidy up!",
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
