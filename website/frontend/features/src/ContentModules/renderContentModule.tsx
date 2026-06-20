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
import { ModuleWrapper } from './renderContentModule.styles';

interface CloseProps {
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
}

interface RenderContentModuleProps extends CloseProps {
  module: ContentModules;
}

const resolveModule = (
  module: ContentModules,
  closeProps: CloseProps,
): React.ReactElement => {
  switch (module.moduleType) {
    case 'wordIntro':
      return <WordIntro {...module} />;
    case 'wordMeaning':
      return <WordMeaning {...module} {...closeProps} />;
    case 'wordContext':
      return <WordContext {...module} {...closeProps} />;
    case 'meaningGuessQuestion':
      return <MeaningGuessQuestion {...module} {...closeProps} />;
    case 'etymology':
      return <Etymology {...module} {...closeProps} />;
    case 'similarWords':
      return <SimilarWords {...module} {...closeProps} />;
    case 'mnemonics':
      return <Mnemonics {...module} {...closeProps} />;
    case 'wordShowcase':
      return <WordShowcase {...module} {...closeProps} />;
  }
};

export const renderContentModule = ({
  module,
  needClose,
  onClose,
  showContent = true,
}: RenderContentModuleProps): React.ReactElement => {
  const closeProps = needClose ? { needClose, onClose, showContent } : {};
  return <ModuleWrapper>{resolveModule(module, closeProps)}</ModuleWrapper>;
};
