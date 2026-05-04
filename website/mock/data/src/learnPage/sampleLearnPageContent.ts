import { WordIntroModule } from '@whitelotus/common-crosslex-view';
import { anspruch } from './anspruch';
import { apfel } from './apfel';
import { auto } from './auto';
import { beantragen } from './beantragen';
import { bescheinigung } from './bescheinigung';
import { erfahrung } from './erfahrung';
import { formular } from './formular';
import { frist } from './frist';
import { genehmigung } from './genehmigung';
import { haus } from './haus';
import { katze } from './katze';
import { nachweisen } from './nachweisen';
import { tisch } from './tisch';
import { uebertragen } from './uebertragen';
import { unterlagen } from './unterlagen';
import { zustaendigkeit } from './zustaendigkeit';

export const sampleLearnPageContentList = {
  //! A1
  haus,
  katze,
  tisch,
  auto,
  apfel,
  //! B1
  erfahrung,
  beantragen,
  unterlagen,
  frist,
  formular,
  bescheinigung,
  uebertragen,
  genehmigung,
  nachweisen,
  anspruch,
  zustaendigkeit,
};

export type SampleContentKey = keyof typeof sampleLearnPageContentList;

export type SampleContentKeys = SampleContentKey[];

export const Words = (
  Object.keys(sampleLearnPageContentList) as SampleContentKeys
).filter((key) => {
  const wordIntro = sampleLearnPageContentList[key].content.modules.find(
    (m): m is WordIntroModule => m.moduleType === 'wordIntro',
  );
  return wordIntro ? !wordIntro.level.every((l) => l === 'A1') : true;
});
