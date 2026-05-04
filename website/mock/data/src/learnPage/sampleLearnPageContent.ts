import { WordIntroModule } from '@whitelotus/common-crosslex-view';
import { abmelden } from './abmelden';
import { anmelden } from './anmelden';
import { anspruch } from './anspruch';
import { antrag } from './antrag';
import { apfel } from './apfel';
import { arbeitsvertrag } from './arbeitsvertrag';
import { aufenthalt } from './aufenthalt';
import { aufenthaltserlaubnis } from './aufenthaltserlaubnis';
import { auto } from './auto';
import { beantragen } from './beantragen';
import { behoerde } from './behoerde';
import { bescheinigung } from './bescheinigung';
import { erfahrung } from './erfahrung';
import { formular } from './formular';
import { frist } from './frist';
import { genehmigung } from './genehmigung';
import { haus } from './haus';
import { katze } from './katze';
import { kindergeld } from './kindergeld';
import { krankenversicherung } from './krankenversicherung';
import { kuendigung } from './kuendigung';
import { mietvertrag } from './mietvertrag';
import { nachweisen } from './nachweisen';
import { nebenkosten } from './nebenkosten';
import { pflicht } from './pflicht';
import { sozialversicherung } from './sozialversicherung';
import { steuer } from './steuer';
import { tisch } from './tisch';
import { uebertragen } from './uebertragen';
import { ueberweisung } from './ueberweisung';
import { unterlagen } from './unterlagen';
import { vollmacht } from './vollmacht';
import { widerspruch } from './widerspruch';
import { zeugnis } from './zeugnis';
import { zustaendigkeit } from './zustaendigkeit';

export const sampleLearnPageContentList = {
  //! A1
  haus,
  katze,
  tisch,
  auto,
  apfel,
  //! B1
  abmelden,
  anmelden,
  anspruch,
  antrag,
  arbeitsvertrag,
  aufenthalt,
  aufenthaltserlaubnis,
  beantragen,
  behoerde,
  bescheinigung,
  erfahrung,
  formular,
  frist,
  genehmigung,
  kindergeld,
  krankenversicherung,
  kuendigung,
  mietvertrag,
  nachweisen,
  nebenkosten,
  pflicht,
  sozialversicherung,
  steuer,
  uebertragen,
  ueberweisung,
  unterlagen,
  vollmacht,
  widerspruch,
  zeugnis,
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
