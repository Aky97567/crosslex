import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const anerkennung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Anerkennung',
        article: 'die',
        translation: 'recognition, acknowledgement',
        partOfSpeech: 'noun',
        themes: ['bureaucracy', 'work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The official recognition of foreign qualifications, degrees, or professional titles so they are accepted as equivalent to German standards. A critical step for immigrants working in regulated professions.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Anerkennung'?",
          options: [
            { text: 'Recognition or official acknowledgement', isCorrect: true },
            { text: 'A fine for submitting incorrect documents', isCorrect: false },
            { text: 'A rejection of an application', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Anerkennung meines ausländischen Abschlusses dauerte sechs Monate. Ohne Anerkennung darf ich meinen Beruf in Deutschland nicht ausüben. Die Anerkennung wird von der zuständigen Stelle geprüft.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an-' (at, to) + 'erkennen' (to recognize, to identify) + '-ung' (noun suffix). 'Erkennen' traces to 'kennen' (to know) — the act of formally knowing and accepting something as valid.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Würdigung',
            article: 'die',
            translation: 'appreciation, recognition',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Wertschätzung',
            article: 'die',
            translation: 'appreciation, esteem',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Billigung',
            article: 'die',
            translation: 'approval, endorsement',
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
              "'An-erkennung' — to 'recognize' (erkennen) something 'at' (an) the official level. Germany officially recognizes your qualification.",
          },
          {
            id: 2,
            content:
              "Think of 'acknowledge' — Anerkennung is the formal acknowledgement that your foreign skills count here.",
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
