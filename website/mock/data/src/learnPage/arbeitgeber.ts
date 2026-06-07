import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const arbeitgeber: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Arbeitgeber',
        article: 'der',
        translation: 'employer',
        partOfSpeech: 'noun',
        themes: ['work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A person or organisation that employs workers under a contract. In Germany, the Arbeitgeber is legally required to pay social security contributions alongside the employee and to issue a monthly pay slip.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Arbeitgeber'?",
          options: [
            { text: 'An employment agency that finds jobs', isCorrect: false },
            { text: 'The employer — the party that gives work', isCorrect: true },
            { text: 'A job seeker registered at the job centre', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Arbeitgeber hat den Vertrag noch nicht unterschrieben. Der Arbeitgeber ist verpflichtet, die Sozialversicherungsbeiträge abzuführen. Ich muss meinem Arbeitgeber die Krankmeldung vorlegen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A compound of 'Arbeit' (work) + 'geber' (giver, from 'geben'). The employer literally gives work. Its counterpart is 'Arbeitnehmer' (employee) — the one who takes work.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Chef',
            article: 'der',
            translation: 'boss',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Unternehmer',
            article: 'der',
            translation: 'entrepreneur, employer',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Dienstgeber',
            article: 'der',
            translation: 'employer (formal/Austrian)',
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
              "'Arbeit-geber' = work-giver. The employer gives you the work. Its mirror is Arbeit-nehmer (work-taker).",
          },
          {
            id: 2,
            content:
              "Think of 'give a job' — your Arbeitgeber is the one who gives (gibt) you a job (Arbeit).",
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
