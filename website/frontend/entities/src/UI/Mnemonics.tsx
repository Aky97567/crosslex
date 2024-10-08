import React from 'react';
import { Heading, Mnemonic } from '@whitelotus/common-crosslex-view';
import { BodyText, Card } from '@whitelotus/front-shared';

type MnemonicsProps = {
  mnemonics: Mnemonic[];
  heading: Heading;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

export const Mnemonics: React.FC<MnemonicsProps> = ({
  heading,
  mnemonics,
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
      {mnemonics && mnemonics.length > 0 ? (
        <>
          <ul className="list-disc list-inside">
            {mnemonics.map((hook, index) => (
              <li key={index}>
                <BodyText>{hook.content}</BodyText>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <BodyText>No mnemonics available.</BodyText>
      )}
    </div>
  </Card>
);
