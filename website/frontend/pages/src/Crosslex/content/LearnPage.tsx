import React from 'react';
import {
  FlipCardToTarget,
  renderContentModule,
} from '@whitelotus/front-features';
import { useIsMobile, useIsTablet } from '@whitelotus/front-shared';
import { HasContent, ContentModules } from '@whitelotus/common-crosslex-view';

type LearnPageProps = HasContent;

const LearnPage: React.FC<LearnPageProps> = ({ content }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (!isTablet && !isMobile) {
    return (
      <div className="bg-bg-l1 p-20 max-w-4xl mx-auto space-y-10">
        {content.modules.map((module, index) => (
          <React.Fragment key={index}>
            {renderContentModule({ module })}
          </React.Fragment>
        ))}
      </div>
    );
  }

  const introModule = content.modules.find(
    (m): m is ContentModules => m.moduleType === 'wordIntro',
  );

  return (
    <div className="bg-bg-l1 p-20 max-w-4xl mx-auto space-y-10">
      {introModule && renderContentModule({ module: introModule })}
      <FlipCardToTarget content={content} />
    </div>
  );
};

export { LearnPage };
