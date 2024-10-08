import React from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';
import { BodyText, Card } from '@whitelotus/front-shared';

type WordContextProps = {
  heading: Heading;
  paragraphWithUsage: string;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

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
        <BodyText>{paragraphWithUsage}</BodyText>
      </div>
    </Card>
  );
