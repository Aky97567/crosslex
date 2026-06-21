import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const teilnehmen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'teilnehmen',
        article: null,
        translation: 'to participate, take part',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['work', 'daily_life', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To take part in an event, course, meeting, or competition. Always followed by "an + dative": "an einem Kurs teilnehmen" (to take part in a course).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'teilnehmen'?",
          options: [
            { text: 'to organise an event', isCorrect: false },
            { text: 'to participate, take part', isCorrect: true },
            { text: 'to miss a meeting', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Alle Mitarbeiter müssen an der Schulung teilnehmen. Ich nehme nächste Woche an dem Kurs teil. Sie hat an dem Integrationskurs teilgenommen.',
        alternateForms: ['teilgenommen'],
        trennbarTokens: ['nehme', 'teil'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'teil-' (part, share) + 'nehmen' (to take). To take a part — claiming your share of involvement in an activity.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'mitmachen',
            article: null,
            translation: 'to join in, participate',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'besuchen',
            article: null,
            translation: 'to attend, visit',
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
              "'Teil' = part, 'nehmen' = to take. Take your part — join in. Teilnehmen.",
          },
          {
            id: 2,
            content:
              "'Ich nehme an dem Kurs teil.' The 'teil' goes to the end. You take (nehmen) your part (teil) of the course.",
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
