import { Card, Heading1 } from '@whitelotus/front-shared';

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
      <Heading1>{word.trimStart()}</Heading1>
      <p className="text-lg italic mb-2 text-text">{translation}</p>
      <p className="text-lg mb-4 text-text">{partOfSpeech}</p>
    </div>
    {representativeImageUrl && (
      <img
        src={representativeImageUrl}
        alt={word}
        className="h-64 object-cover mb-4 rounded-lg max-w-[50%]"
      />
    )}
  </Card>
);
