import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const arbeitserlaubnis: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Arbeitserlaubnis',
        article: 'die',
        translation: 'work permit',
        partOfSpeech: 'noun',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Official authorisation to work in Germany, required for non-EU citizens. It is usually tied to a specific job or employer and is issued by the Ausländerbehörde. EU citizens do not need one.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Arbeitserlaubnis'?",
          options: [
            { text: 'A certificate confirming professional qualifications', isCorrect: false },
            { text: 'Official permission to work in Germany', isCorrect: true },
            { text: 'A document listing your previous employers', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ohne Arbeitserlaubnis darf ich in Deutschland nicht arbeiten. Meine Arbeitserlaubnis ist an meinen aktuellen Arbeitgeber gebunden. Die Verlängerung der Arbeitserlaubnis muss rechtzeitig beantragt werden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A compound: 'Arbeit' (work) + 'Erlaubnis' (permission, from 'erlauben' — to allow). Erlauben traces to 'laub' (belief, trust) — to grant someone trust to do something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Erlaubnis',
            article: 'die',
            translation: 'permission, authorisation',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Arbeitsgenehmigung',
            article: 'die',
            translation: 'work permit (alternative term)',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Beschäftigungserlaubnis',
            article: 'die',
            translation: 'employment permit',
            similarityScore: 4,
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
              "Three parts: Arbeit (work) + er (filler) + laubnis (allowance). It's the allowance to work.",
          },
          {
            id: 2,
            content:
              "'Erlaubnis' shares a root with 'erlauben' (to allow). Your Arbeitserlaubnis is Germany allowing you to work.",
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
