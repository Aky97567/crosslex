import { BodyText, Card, Heading } from '@whitelotus/front-shared';

type WordIntroProps = {
  word: string;
  translation: string;
  partOfSpeech: string;
  representativeImageUrl: string;
};

export const WordIntro: React.FC<WordIntroProps> = ({
  word,
  translation,
  partOfSpeech,
  representativeImageUrl,
}) => (
  <Card className="flex flex-row justify-between">
    <div>
      <Heading heading={{ text: word.trimStart(), level: 'h1' }} />
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
