import React from 'react';
import { Card } from '@whitelotus/front-shared';
import { Heading } from '@whitelotus/common-crosslex-view';

type EtymologyProps = {
  etymology: string;
  heading: Heading;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

export const Etymology: React.FC<EtymologyProps> = ({
  etymology,
  heading,
  needClose,
  onClose,
  showContent = true,
}) =>
  etymology && (
    <Card
      heading={heading}
      needClose={needClose}
      onClose={onClose}
      showContent={showContent}
    >
      <div className="mb-6">
        <p className="text-lg text-text">{etymology}</p>
      </div>
    </Card>
  );
