import React from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';
import { Card } from '@whitelotus/front-shared';

type WordMeaningProps = {
  heading: Heading;
  meaning: string;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

export const WordMeaning: React.FC<WordMeaningProps> = ({
  heading,
  meaning,
  needClose,
  onClose,
  showContent = true,
}) => (
  <Card
    heading={heading}
    needClose={needClose}
    onClose={onClose}
    showContent={showContent}
  >
    <div className="mb-6">
      <p className="text-lg text-text">{meaning}</p>
    </div>
  </Card>
);
