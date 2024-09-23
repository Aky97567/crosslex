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
import { TabbedCarousel } from '@whitelotus/front-features';
import { useIsMobile, useIsTablet } from '@whitelotus/front-shared';
import {
  ContentLayout,
  LearnPageContent,
} from '@whitelotus/common-crosslex-view';

const LearnPage = ({
  content: {
    word,
    article,
    translation,
    partOfSpeech,
    meaning,
    meaningBestGuessQuestion,
    paragraphWithUsage,
    etymology,
    similarWords,
    representativeImageUrl,
    mnemonics,
    wordShowcaseUrl,
  },
}: ContentLayout<LearnPageContent>) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const tabs = [
    'Meaning',
    'Context',
    'Guess Question',
    'Etymology',
    'Similar Words',
    'Mnemonics',
    'Showcase',
  ];

  return !isTablet && !isMobile ? (
    <div className="bg-bg-l1 p-20 max-w-4xl mx-auto space-y-10">
      <WordIntro
        word={`${article} ${word}`}
        translation={translation}
        partOfSpeech={partOfSpeech}
        representativeImageUrl={representativeImageUrl}
      />
      <WordMeaning meaning={meaning} />
      <WordContext paragraphWithUsage={paragraphWithUsage} />
      <MeaningGuessQuestion
        meaningBestGuessQuestion={meaningBestGuessQuestion}
      />
      <Etymology etymology={etymology} />
      <SimilarWords similarWords={similarWords} />
      <Mnemonics mnemonics={mnemonics} />
      <WordShowcase wordShowcaseUrl={wordShowcaseUrl} />
    </div>
  ) : (
    <div className="bg-bg-l1 p-20 max-w-4xl mx-auto space-y-10">
      <WordIntro
        word={`${article} ${word}`}
        translation={translation}
        partOfSpeech={partOfSpeech}
        representativeImageUrl={representativeImageUrl}
      />
      <TabbedCarousel tabs={tabs}>
        <WordMeaning meaning={meaning} />
        <WordContext paragraphWithUsage={paragraphWithUsage} />
        <MeaningGuessQuestion
          meaningBestGuessQuestion={meaningBestGuessQuestion}
        />
        <Etymology etymology={etymology} />
        <SimilarWords similarWords={similarWords} />
        <Mnemonics mnemonics={mnemonics} />
        <WordShowcase wordShowcaseUrl={wordShowcaseUrl} />
      </TabbedCarousel>
    </div>
  );
};

export { LearnPage };
