import { Card } from '@whitelotus/front-shared';

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
      <h1 className="text-3xl  text-brand1  font-bold mb-4">{word}</h1>
      <p className="text-xl italic mb-2">{translation}</p>
      <p className="text-lg mb-4 text-gray-600">{partOfSpeech}</p>
    </div>
    {representativeImageUrl && (
      <img
        src={representativeImageUrl}
        alt={word}
        className="h-64 object-cover mb-4 rounded-lg max-w-50"
      />
    )}
  </Card>
);
