import { ContentModules } from '@whitelotus/common-crosslex-view';

// Canonical display order for a word's content modules. Rendering is
// otherwise fully data-driven — every consumer (WordDetail's full list,
// ExpandableSectionCard's flip-card grid) just iterates `content.modules`
// in whatever order the array happens to be in a given word file — so
// without this, getting the order "right" would mean every one of the
// ~470 word data files independently arranging its own array the same
// way, with nothing catching a file (present or future) that didn't.
// Enforcing it once, here, means every word displays consistently
// regardless of how its own `modules` array happens to be ordered.
//
// `wordContext` is deliberately ahead of `meaningGuessQuestion` — reading
// the word used in context before being quizzed on its meaning.
const MODULE_DISPLAY_ORDER: ContentModules['moduleType'][] = [
  'wordIntro',
  'wordMeaning',
  'wordContext',
  'meaningGuessQuestion',
  'comparison',
  'etymology',
  'similarWords',
  'mnemonics',
  'wordShowcase',
];

export const sortModulesByDisplayOrder = (
  modules: ContentModules[],
): ContentModules[] =>
  [...modules].sort(
    (a, b) =>
      MODULE_DISPLAY_ORDER.indexOf(a.moduleType) -
      MODULE_DISPLAY_ORDER.indexOf(b.moduleType),
  );
