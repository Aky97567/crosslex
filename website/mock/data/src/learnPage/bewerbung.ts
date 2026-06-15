import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bewerbung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Bewerbung',
        article: 'die',
        translation: 'job application',
        partOfSpeech: 'noun',
        themes: ['work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The formal process of applying for a job or position, including the cover letter (Anschreiben) and CV (Lebenslauf). German applications tend to be thorough and formal. A complete Bewerbung is often submitted as a PDF or a physical folder (Bewerbungsmappe).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Bewerbung'?",
          options: [
            { text: 'A formal application for a job or position', isCorrect: true },
            { text: 'A contract signed at the start of employment', isCorrect: false },
            { text: 'An official invitation to a job interview', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe eine Bewerbung für die Stelle als Buchhalter abgeschickt. Die Bewerbung muss ein Anschreiben und einen Lebenslauf enthalten. Nach meiner Bewerbung habe ich eine Woche auf eine Antwort gewartet.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'sich bewerben' (to apply for) + '-ung'. 'Bewerben' derives from 'werben' (to recruit, to advertise) — a Bewerbung is literally an act of advertising oneself to an employer.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Stellengesuch',
            article: 'das',
            translation: 'job application, position sought',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Antrag',
            article: 'der',
            translation: 'application, formal request',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Kandidatur',
            article: 'die',
            translation: 'candidacy',
            similarityScore: 3,
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
              "'Be-WERB-ung' contains 'werb' like 'advertise' — a Bewerbung is you advertising yourself to an employer.",
          },
          {
            id: 2,
            content:
              "Think of 'be-verb-ung' — applying is all about the right verbs: writing, sending, following up.",
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
