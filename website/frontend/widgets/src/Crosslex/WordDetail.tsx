import React from 'react';
import {
  FlipCardToTarget,
  renderContentModule,
  useCrosslexStorage,
} from '@whitelotus/front-features';
import { HasContent, ContentModules } from '@whitelotus/common-crosslex-view';

type WordDetailProps = HasContent & {
  closeFlipCardSignal?: number;
  onFlipCardClosed?: () => void;
  onFlipCardOpenChange?: (isOpen: boolean) => void;
};

const WordDetail: React.FC<WordDetailProps> = ({
  content,
  closeFlipCardSignal,
  onFlipCardClosed,
  onFlipCardOpenChange,
}) => {
  const { mobileFullView } = useCrosslexStorage();

  const introModule = content.modules.find(
    (m): m is ContentModules => m.moduleType === 'wordIntro',
  );

  return (
    <div className="bg-bg-l1 p-20 max-w-4xl mx-auto">
      {/* Mobile/tablet: word intro + flip card grid — hidden when mobileFullView is on */}
      <div className={`${mobileFullView ? 'hidden' : 'md:hidden'} flex flex-col gap-20`}>
        {introModule && renderContentModule({ module: introModule })}
        <FlipCardToTarget
          content={content}
          closeSignal={closeFlipCardSignal}
          onClosed={onFlipCardClosed}
          onOpenChange={onFlipCardOpenChange}
        />
      </div>

      {/* Full module list — always shown on desktop; also shown on mobile when mobileFullView is on */}
      <div className={`${mobileFullView ? 'flex' : 'hidden md:flex'} flex-col gap-20`}>
        {content.modules.map((module, index) => (
          <React.Fragment key={index}>
            {renderContentModule({ module })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export { WordDetail };
