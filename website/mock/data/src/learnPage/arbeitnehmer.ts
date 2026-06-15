import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const arbeitnehmer: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Arbeitnehmer',
        article: 'der',
        translation: 'employee, worker',
        partOfSpeech: 'noun',
        themes: ['work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "A person who works for an employer in exchange for wages or salary — the direct counterpart to Arbeitgeber (employer). German employment law grants Arbeitnehmer significant protections: dismissal protection (Kündigungsschutz), paid leave entitlement, and mandatory social insurance. The term covers both full-time and part-time workers.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Arbeitnehmer'?",
          options: [
            { text: 'A person who works for an employer in exchange for wages or salary', isCorrect: true },
            { text: 'A person who runs their own business and hires other workers', isCorrect: false },
            { text: 'A government official who inspects workplaces for safety compliance', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Als Arbeitnehmer habe ich Anspruch auf bezahlten Urlaub. Der Arbeitnehmer und der Arbeitgeber haben den Vertrag gemeinsam unterschrieben. Jeder Arbeitnehmer in Deutschland zahlt Beiträge zur Sozialversicherung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Arbeit' (work) + 'nehmen' (to take) + '-er' (agent suffix). An Arbeitnehmer 'takes work' — they accept the employment offered by the Arbeitgeber (the work-giver).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Angestellter',
            article: 'der',
            translation: 'salaried employee, white-collar worker',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Beschäftigter',
            article: 'der',
            translation: 'employee, person in employment',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Mitarbeiter',
            article: 'der',
            translation: 'employee, team member',
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
              "'Arbeit-NEHMER' — Arbeit = work, nehmer = taker. The Arbeitnehmer takes the work that the Arbeitgeber gives.",
          },
          {
            id: 2,
            content:
              "Remember the pair: Arbeit-NEHMER (takes work) ↔ Arbeit-GEBER (gives work). Two sides of every employment contract.",
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
