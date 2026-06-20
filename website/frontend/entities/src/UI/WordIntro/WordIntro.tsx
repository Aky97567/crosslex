import { BodyText, Card, Heading } from '@whitelotus/front-shared';
import { Article } from '@whitelotus/common-crosslex-view';

type WordIntroProps = {
  word: string;
  article: Article;
  translation: string;
  partOfSpeech: string;
  representativeImageUrl?: string;
};

export const WordIntro: React.FC<WordIntroProps> = ({
  word,
  article,
  translation,
  partOfSpeech,
  representativeImageUrl,
}) => (
  <Card className="flex flex-row justify-between">
    <div>
      <Heading
        className="break-words"
        style={{ hyphens: 'auto' }}
        heading={{ text: article ? `${article} ${word.trimStart()}` : word.trimStart(), level: 'h1' }}
      />
      <BodyText className="italic mb-5">{translation}</BodyText>
      <BodyText className="mb-5">{partOfSpeech}</BodyText>
    </div>
    {representativeImageUrl && (
      <img
        src={representativeImageUrl}
        alt={word}
        className="object-cover mb-4 rounded-lg max-w-[50%]"
      />
    )}
  </Card>
);
