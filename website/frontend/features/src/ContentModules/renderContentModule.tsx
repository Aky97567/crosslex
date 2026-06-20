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
  wordText?: string;
}

const resolveModule = (
  module: ContentModules,
  closeProps: CloseProps,
  wordText?: string,
): React.ReactElement => {
  switch (module.moduleType) {
    case 'wordIntro':
      return <WordIntro {...module} />;
    case 'wordMeaning':
      return <WordMeaning {...module} {...closeProps} />;
    case 'wordContext': {
      const highlightTokens = wordText
        ? [wordText, ...(module.alternateForms ?? []), ...(module.trennbarTokens ?? [])]
        : undefined;
      return <WordContext {...module} {...closeProps} highlightTokens={highlightTokens} />;
    }
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
  wordText,
}: RenderContentModuleProps): React.ReactElement => {
  const closeProps = needClose ? { needClose, onClose, showContent } : {};
  return <ModuleWrapper>{resolveModule(module, closeProps, wordText)}</ModuleWrapper>;
};
