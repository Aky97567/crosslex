import React from 'react';
import { Heading, parseAnnotatedParagraph } from '@whitelotus/common-crosslex-view';
import { BodyText, Card } from '@whitelotus/front-shared';

type WordContextProps = {
  heading: Heading;
  paragraphWithUsage: string;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

// Occurrences are marked inline in paragraphWithUsage as {{...}} — see
// parseAnnotatedParagraph. Splitting into sentences first is safe because
// a marker never spans a sentence boundary (it always wraps a single word).
const renderSentence = (sentence: string): React.ReactNode =>
  parseAnnotatedParagraph(sentence).map((seg, i) =>
    seg.marked ? (
      <span key={i} className="text-brand font-semibold">
        {seg.text}
      </span>
    ) : (
      <React.Fragment key={i}>{seg.text}</React.Fragment>
    ),
  );

export const WordContext: React.FC<WordContextProps> = ({
  heading,
  paragraphWithUsage,
  needClose,
  onClose,
  showContent = true,
}) =>
  paragraphWithUsage && (
    <Card
      heading={heading}
      needClose={needClose}
      onClose={onClose}
      showContent={showContent}
    >
      <div className="mb-6">
        {paragraphWithUsage
          // Lookbehind keeps each sentence's own terminator (. ? !) instead
          // of consuming it — a literal ". " split merges a sentence ending
          // in "?" or "!" into the next one.
          .split(/(?<=[.?!]) /)
          .map((sentence, i) => (
            <BodyText key={i}>{renderSentence(sentence)}</BodyText>
          ))}
      </div>
    </Card>
  );
