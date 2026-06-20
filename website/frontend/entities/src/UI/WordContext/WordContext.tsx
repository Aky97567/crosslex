import React from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';
import { BodyText, Card } from '@whitelotus/front-shared';

type WordContextProps = {
  heading: Heading;
  paragraphWithUsage: string;
  highlightTokens?: string[];
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

const applyHighlights = (text: string, tokens: string[]): React.ReactNode => {
  const escaped = tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <span key={match.index} className="text-brand font-semibold">
        {match[0]}
      </span>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
};

export const WordContext: React.FC<WordContextProps> = ({
  heading,
  paragraphWithUsage,
  highlightTokens,
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
          .split('. ')
          .map((s, i, arr) => (i < arr.length - 1 ? s + '.' : s))
          .map((sentence, i) => (
            <BodyText key={i}>
              {highlightTokens?.length
                ? applyHighlights(sentence, highlightTokens)
                : sentence}
            </BodyText>
          ))}
      </div>
    </Card>
  );
