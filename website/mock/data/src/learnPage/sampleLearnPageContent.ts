import { apfel } from './apfel';
import { auto } from './auto';
import { erfahrung } from './erfahrung';
import { haus } from './haus';
import { katze } from './katze';
import { tisch } from './tisch';

export const sampleLearnPageContentList = {
  //! A1
  haus,
  katze,
  tisch,
  auto,
  apfel,
  //! B1
  erfahrung,
};

export type SampleContentKey = keyof typeof sampleLearnPageContentList;

export type SampleContentKeys = SampleContentKey[];

export const Words = Object.keys(
  sampleLearnPageContentList,
) as SampleContentKeys;
