export type ParagraphSegment = {
  text: string;
  marked: boolean;
};

const MARKER_PATTERN = /\{\{(.*?)\}\}/g;

/**
 * Splits a `wordContext.paragraphWithUsage` string into an ordered list of
 * segments. `{{...}}` spans become `marked: true` segments (markers
 * stripped, exact original text preserved); everything else is
 * `marked: false`. Consumers decide what "marked" means — blanked out for
 * an exercise, highlighted for display — this only identifies the spans.
 */
export const parseAnnotatedParagraph = (raw: string): ParagraphSegment[] => {
  const segments: ParagraphSegment[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  MARKER_PATTERN.lastIndex = 0;
  while ((match = MARKER_PATTERN.exec(raw)) !== null) {
    if (match.index > cursor) {
      segments.push({ text: raw.slice(cursor, match.index), marked: false });
    }
    segments.push({ text: match[1], marked: true });
    cursor = match.index + match[0].length;
  }
  if (cursor < raw.length) {
    segments.push({ text: raw.slice(cursor), marked: false });
  }
  return segments;
};
