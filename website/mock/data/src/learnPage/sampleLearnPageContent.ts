import { WordIntroModule } from '@whitelotus/common-crosslex-view';
import { abmeldung } from './abmeldung';
import { anerkennung } from './anerkennung';
import { anmeldung } from './anmeldung';
import { anspruch } from './anspruch';
import { apfel } from './apfel';
import { arbeitgeber } from './arbeitgeber';
import { arbeitserlaubnis } from './arbeitserlaubnis';
import { aufenthalt } from './aufenthalt';
import { ausweis } from './ausweis';
import { auto } from './auto';
import { beantragen } from './beantragen';
import { behoerde } from './behoerde';
import { beitrag } from './beitrag';
import { bescheinigung } from './bescheinigung';
import { erfahrung } from './erfahrung';
import { formular } from './formular';
import { frist } from './frist';
import { gehalt } from './gehalt';
import { genehmigung } from './genehmigung';
import { haus } from './haus';
import { katze } from './katze';
import { kindergeld } from './kindergeld';
import { konto } from './konto';
import { krankenversicherung } from './krankenversicherung';
import { kuendigung } from './kuendigung';
import { mietvertrag } from './mietvertrag';
import { nachweisen } from './nachweisen';
import { probezeit } from './probezeit';
import { steuer } from './steuer';
import { termin } from './termin';
import { tisch } from './tisch';
import { uebertragen } from './uebertragen';
import { ueberweisung } from './ueberweisung';
import { unterlagen } from './unterlagen';
import { vollmacht } from './vollmacht';
import { widerspruch } from './widerspruch';
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
  termin,
  behoerde,
  anmeldung,
  kuendigung,
  mietvertrag,
  anerkennung,
  aufenthalt,
  beitrag,
  krankenversicherung,
  steuer,
  widerspruch,
  arbeitgeber,
  gehalt,
  konto,
  ueberweisung,
  probezeit,
  arbeitserlaubnis,
  abmeldung,
  vollmacht,
  kindergeld,
  ausweis,
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
