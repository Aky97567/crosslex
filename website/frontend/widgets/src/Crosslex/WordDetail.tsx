import React from 'react';
import {
  FlipCardToTarget,
  renderContentModule,
} from '@whitelotus/front-features';
import { HasContent, ContentModules } from '@whitelotus/common-crosslex-view';

type WordDetailProps = HasContent;

const WordDetail: React.FC<WordDetailProps> = ({ content }) => {
  const introModule = content.modules.find(
    (m): m is ContentModules => m.moduleType === 'wordIntro',
  );

  return (
    <div className="bg-bg-l1 p-20 max-w-4xl mx-auto space-y-10">
      {/* Mobile/tablet: word intro + flip card grid */}
      <div className="md:hidden">
        {introModule && renderContentModule({ module: introModule })}
        <FlipCardToTarget content={content} />
      </div>

      {/* Desktop: flat module list */}
      <div className="hidden md:block">
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
