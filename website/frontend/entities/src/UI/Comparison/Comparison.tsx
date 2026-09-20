import React from 'react';
import { Heading, parseAnnotatedParagraph } from '@whitelotus/common-crosslex-view';
import { BodyText, Card } from '@whitelotus/front-shared';

type ComparisonProps = {
  heading: Heading;
  positivPredicativ: string;
  positivAttributiv: string;
  komparativPredicativ: string;
  komparativAttributiv: string;
  superlativPredicativ: string;
  superlativAttributiv: string;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

// Mirrors WordContext's rendering — occurrences are marked inline as
// {{...}} and highlighted the same way.
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

const FORMS: {
  label: string;
  key:
    | 'positivPredicativ'
    | 'positivAttributiv'
    | 'komparativPredicativ'
    | 'komparativAttributiv'
    | 'superlativPredicativ'
    | 'superlativAttributiv';
}[] = [
  { label: 'Positiv (prädikativ)', key: 'positivPredicativ' },
  { label: 'Positiv (attributiv)', key: 'positivAttributiv' },
  { label: 'Komparativ (prädikativ)', key: 'komparativPredicativ' },
  { label: 'Komparativ (attributiv)', key: 'komparativAttributiv' },
  { label: 'Superlativ (prädikativ)', key: 'superlativPredicativ' },
  { label: 'Superlativ (attributiv)', key: 'superlativAttributiv' },
];

export const Comparison: React.FC<ComparisonProps> = ({
  heading,
  needClose,
  onClose,
  showContent = true,
  ...sentences
}) => (
  <Card
    heading={heading}
    needClose={needClose}
    onClose={onClose}
    showContent={showContent}
  >
    <div className="mb-6">
      {FORMS.map(({ label, key }) => (
        <div key={key} className="mb-15">
          <span className="text-sm opacity-70 block">{label}</span>
          <BodyText>{renderSentence(sentences[key])}</BodyText>
        </div>
      ))}
    </div>
  </Card>
);
