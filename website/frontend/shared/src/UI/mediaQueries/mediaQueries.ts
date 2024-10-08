import { breakpoints as defaultBreakpoints } from './breakpoints';
import type { BreakPoints } from './breakpoints';

// helper to deconstruct mq string
const getMqData = (query: string, breakpoints: BreakPoints) => {
  const parts = query.split('-');
  const bpIndex = breakpoints.findIndex(bp => bp.name === parts[0]);
  if (bpIndex === -1) return false;

  const lowEnd = breakpoints[bpIndex].width;
  const highEnd =
    bpIndex < breakpoints.length - 1 ? breakpoints[bpIndex + 1].width : null;

  return { parts, bpIndex, lowEnd, highEnd };
};

/**
 * Generate mediaquery to use in CSS
 *
 * @param  {string} name Media query name (straight viewport or with optional '-only' suffix)
 * @param {BreakPoints} [breakpoints=defaultBreakpoints] Optionally override default breakpoints
 * @return {string}      Generated media query string ready to insert into CSS
 */
const mq = (name: string, breakpoints = defaultBreakpoints) => {
  const mqData = getMqData(name, breakpoints);
  if (!mqData) return '@media screen, print'; // failing gracefully

  if (mqData.parts[1] && mqData.parts[1] === 'only') {
    return !mqData.highEnd
      ? `@media (min-width: ${mqData.lowEnd}px)`
      : `@media (min-width: ${mqData.lowEnd}px) and (max-width: ${
          mqData.highEnd - 1
        }px)`;
  }
  return `@media (min-width: ${mqData.lowEnd}px)`;
};

/**
 * Breakpoint getter, i.e. if you need the width value for a specific breakpoint in other configs
 *
 * @param  {string} name Breakpoint name (i.e. "lg")
 * @return {int}         Width of breakpoint
 */
const getBreakpoint = (name: string, breakpoints = defaultBreakpoints) =>
  breakpoints.find(bp => bp.name === name)?.width;

export { mq, getBreakpoint };
