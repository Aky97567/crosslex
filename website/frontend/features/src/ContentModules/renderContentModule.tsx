import React from 'react';
import {
  Etymology,
  MeaningGuessQuestion,
  Mnemonics,
  SimilarWords,
  WordContext,
  WordIntro,
  WordMeaning,
  WordShowcase,
} from '@whitelotus/front-entities';
import { ContentModules } from '@whitelotus/common-crosslex-view';

interface RenderContentModuleProps {
  module: ContentModules;
  needClose?: boolean;
  onClose?: () => void;
}

export const renderContentModule = ({
  module,
  needClose,
  onClose,
}: RenderContentModuleProps): React.ReactElement => {
  const getCloseProps = () => {
    if (needClose) {
      return { needClose, onClose };
    }
    return {};
  };

  switch (module.moduleType) {
    case 'wordIntro':
      return <WordIntro {...module} />;
    case 'wordMeaning':
      return <WordMeaning {...module} {...getCloseProps()} />;
    case 'wordContext':
      return <WordContext {...module} {...getCloseProps()} />;
    case 'meaningGuessQuestion':
      return <MeaningGuessQuestion {...module} {...getCloseProps()} />;
    case 'etymology':
      return <Etymology {...module} {...getCloseProps()} />;
    case 'similarWords':
      return <SimilarWords {...module} {...getCloseProps()} />;
    case 'mnemonics':
      return <Mnemonics {...module} {...getCloseProps()} />;
    case 'wordShowcase':
      return <WordShowcase {...module} {...getCloseProps()} />;
  }
};
