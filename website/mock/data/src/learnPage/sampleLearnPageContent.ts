import { WordIntroModule } from '@whitelotus/common-crosslex-view';
import { abmeldung } from './abmeldung';
import { anerkennung } from './anerkennung';
import { anmeldung } from './anmeldung';
import { anspruch } from './anspruch';
import { apfel } from './apfel';
import { apotheke } from './apotheke';
import { arbeitgeber } from './arbeitgeber';
import { arbeiten } from './arbeiten';
import { arbeitserlaubnis } from './arbeitserlaubnis';
import { arzt } from './arzt';
import { brief } from './brief';
import { freund } from './freund';
import { handy } from './handy';
import { aufenthalt } from './aufenthalt';
import { ausweis } from './ausweis';
import { auto } from './auto';
import { beantragen } from './beantragen';
import { behoerde } from './behoerde';
import { beitrag } from './beitrag';
import { bescheinigung } from './bescheinigung';
import { erfahrung } from './erfahrung';
import { familie } from './familie';
import { formular } from './formular';
import { frist } from './frist';
import { gehalt } from './gehalt';
import { geld } from './geld';
import { genehmigung } from './genehmigung';
import { haus } from './haus';
import { katze } from './katze';
import { kaufen } from './kaufen';
import { kindergeld } from './kindergeld';
import { konto } from './konto';
import { krankenversicherung } from './krankenversicherung';
import { kuendigung } from './kuendigung';
import { mietvertrag } from './mietvertrag';
import { nachweisen } from './nachweisen';
import { krankenhaus } from './krankenhaus';
import { probezeit } from './probezeit';
import { reise } from './reise';
import { schreiben } from './schreiben';
import { sprechen } from './sprechen';
import { stadt } from './stadt';
import { steuer } from './steuer';
import { strasse } from './strasse';
import { supermarkt } from './supermarkt';
import { termin } from './termin';
import { ticket } from './ticket';
import { tisch } from './tisch';
import { uebertragen } from './uebertragen';
import { ueberweisung } from './ueberweisung';
import { unterlagen } from './unterlagen';
import { vollmacht } from './vollmacht';
import { wetter } from './wetter';
import { widerspruch } from './widerspruch';
import { wohnung } from './wohnung';
import { zug } from './zug';
import { zustaendigkeit } from './zustaendigkeit';

export const sampleLearnPageContentList = {
  //! A1
  haus,
  katze,
  tisch,
  auto,
  apfel,
  //! A2
  apotheke,
  arbeiten,
  arzt,
  brief,
  familie,
  freund,
  geld,
  handy,
  kaufen,
  krankenhaus,
  reise,
  schreiben,
  sprechen,
  stadt,
  strasse,
  supermarkt,
  ticket,
  wetter,
  wohnung,
  zug,
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

const getWordLevel = (key: SampleContentKey): string[] => {
  const wordIntro = sampleLearnPageContentList[key].content.modules.find(
    (m): m is WordIntroModule => m.moduleType === 'wordIntro',
  );
  return wordIntro?.level ?? [];
};

export const A2Words = (Object.keys(sampleLearnPageContentList) as SampleContentKeys).filter(
  (key) => getWordLevel(key).some((l) => l === 'A2'),
);

export const B1Words = (Object.keys(sampleLearnPageContentList) as SampleContentKeys).filter(
  (key) => getWordLevel(key).some((l) => l === 'B1'),
);

export const Words = B1Words;
