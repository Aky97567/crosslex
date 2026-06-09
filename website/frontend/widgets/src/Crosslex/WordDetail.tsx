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
    <div className="bg-bg-l1 p-20 max-w-4xl mx-auto">
      {/* Mobile/tablet: word intro + flip card grid */}
      <div className="md:hidden flex flex-col gap-20">
        {introModule && renderContentModule({ module: introModule })}
        <FlipCardToTarget content={content} />
      </div>

      {/* Desktop: flat module list */}
      <div className="hidden md:flex md:flex-col md:gap-20">
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
