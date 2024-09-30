import React from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';
import { Card } from '@whitelotus/front-shared';

type WordShowcaseProps = {
  heading: Heading;
  wordShowcaseUrl: string;
  needClose?: boolean;
  onClose?: () => void;
};

export const WordShowcase: React.FC<WordShowcaseProps> = ({
  heading,
  wordShowcaseUrl,
  needClose,
  onClose,
}) =>
  wordShowcaseUrl && (
    <Card heading={heading} needClose={needClose} onClose={onClose}>
      <div className="mb-6">
        <a href={wordShowcaseUrl} className="text-text underline">
          {/**
           * TODO: add video player
           * */}
          Watch here
        </a>
      </div>
    </Card>
  );
