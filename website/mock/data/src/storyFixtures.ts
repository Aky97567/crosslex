import {
  WordIntroModule,
  WordContextModule,
} from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from './learnPage/sampleLearnPageContent';

type ContentModule = { moduleType: string };

const findModule = <T extends ContentModule>(modules: ContentModule[], type: string) =>
  modules.find((m) => m.moduleType === type) as T | undefined;

const getIntro = (key: keyof typeof sampleLearnPageContentList) =>
  findModule<WordIntroModule>(sampleLearnPageContentList[key].content.modules, 'wordIntro')!;

// --- ContextBlankQuestion fixtures ---

const makeContextBlankFixture = (
  wordKey: keyof typeof sampleLearnPageContentList,
  distractorKeys: Array<keyof typeof sampleLearnPageContentList>,
) => {
  const intro = getIntro(wordKey);
  const ctx = findModule<WordContextModule>(
    sampleLearnPageContentList[wordKey].content.modules,
    'wordContext',
  )!;
  const allForms = [intro.word, ...(ctx.alternateForms ?? [])];
  const pattern = allForms.map((f) => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const fills: string[] = [];
  const sentence = ctx.paragraphWithUsage.replace(
    new RegExp(pattern, 'gi'),
    (match) => { fills.push(match); return '___'; },
  );
  const distractors = distractorKeys.map((k) => ({ text: getIntro(k).word, isCorrect: false as const }));
  return { sentence, fills, options: [{ text: intro.word, isCorrect: true as const }, ...distractors] };
};

export const contextBlankStoryFixtures = {
  beantragen: makeContextBlankFixture('beantragen', ['kaufen', 'schreiben', 'bezahlen']),
  kaufen: makeContextBlankFixture('kaufen', ['beantragen', 'bezahlen', 'schreiben']),
  schreiben: makeContextBlankFixture('schreiben', ['kaufen', 'beantragen', 'sprechen']),
};

// --- WordDefinitionQuestion fixtures ---

const makeWordDefinitionFixture = (
  wordKey: keyof typeof sampleLearnPageContentList,
  distractorKeys: Array<keyof typeof sampleLearnPageContentList>,
) => {
  const intro = getIntro(wordKey);
  const distractors = distractorKeys.map((k) => ({ text: getIntro(k).translation, isCorrect: false as const }));
  return {
    word: intro.word,
    article: intro.article,
    options: [{ text: intro.translation, isCorrect: true as const }, ...distractors],
  };
};

export const wordDefinitionStoryFixtures = {
  erfahrung: makeWordDefinitionFixture('erfahrung', ['frist', 'bescheinigung', 'mahnung']),
  frist: makeWordDefinitionFixture('frist', ['erfahrung', 'termin', 'konto']),
  beantragen: makeWordDefinitionFixture('beantragen', ['kaufen', 'schreiben', 'bezahlen']),
};
