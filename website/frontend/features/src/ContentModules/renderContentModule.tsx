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

interface RenderContentModuleProps {
  module: ContentModules;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
}

export const renderContentModule = ({
  module,
  needClose,
  onClose,
  showContent = true,
}: RenderContentModuleProps): React.ReactElement => {
  const getCloseProps = () => {
    if (needClose) {
      return { needClose, onClose, showContent };
    }
    return {};
  };

  switch (module.moduleType) {
    case 'wordIntro':
      return <ModuleWrapper><WordIntro {...module} /></ModuleWrapper>;
    case 'wordMeaning':
      return <ModuleWrapper><WordMeaning {...module} {...getCloseProps()} /></ModuleWrapper>;
    case 'wordContext':
      return <ModuleWrapper><WordContext {...module} {...getCloseProps()} /></ModuleWrapper>;
    case 'meaningGuessQuestion':
      return <ModuleWrapper><MeaningGuessQuestion {...module} {...getCloseProps()} /></ModuleWrapper>;
    case 'etymology':
      return <ModuleWrapper><Etymology {...module} {...getCloseProps()} /></ModuleWrapper>;
    case 'similarWords':
      return <ModuleWrapper><SimilarWords {...module} {...getCloseProps()} /></ModuleWrapper>;
    case 'mnemonics':
      return <ModuleWrapper><Mnemonics {...module} {...getCloseProps()} /></ModuleWrapper>;
    case 'wordShowcase':
      return <ModuleWrapper><WordShowcase {...module} {...getCloseProps()} /></ModuleWrapper>;
  }
};
