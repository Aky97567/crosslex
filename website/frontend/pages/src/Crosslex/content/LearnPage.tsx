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
import {
  ContentLayout,
  LearnPageContent,
} from '@whitelotus/common-crosslex-view';

const LearnPage = ({
  content: {
    word,
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
  return (
    <div className="bg-brand1-2 p-20 max-w-4xl mx-auto space-y-10">
      <WordIntro
        word={word}
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
  );
};

export { LearnPage };
