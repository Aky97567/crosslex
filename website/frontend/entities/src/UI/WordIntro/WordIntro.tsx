import { BodyText, Heading } from '@whitelotus/front-shared';
import { Article } from '@whitelotus/common-crosslex-view';
import { WordIntroCard } from './WordIntro.styles';

type WordIntroProps = {
  word: string;
  article: Article;
  translation: string;
  partOfSpeech: string;
  trennbar?: boolean;
  representativeImageUrl?: string;
};

export const WordIntro: React.FC<WordIntroProps> = ({
  word,
  article,
  translation,
  partOfSpeech,
  trennbar,
  representativeImageUrl,
}) => (
  <WordIntroCard hasImage={!!representativeImageUrl}>
    <div>
      <Heading
        className="break-words"
        style={{ hyphens: 'auto' }}
        heading={{ text: article ? `${article} ${word.trimStart()}` : word.trimStart(), level: 'h1' }}
      />
      <BodyText className="italic mb-5">{translation}</BodyText>
      <BodyText className="mb-5">
        {partOfSpeech}
        {trennbar && <span className="ml-10 text-brand font-semibold">· trennbar</span>}
      </BodyText>
    </div>
    {representativeImageUrl && (
      <img
        src={representativeImageUrl}
        alt={word}
        className="object-cover mb-4 rounded-lg max-w-[50%]"
      />
    )}
  </WordIntroCard>
);
