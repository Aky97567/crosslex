import { Card, Heading2 } from '@whitelotus/front-shared';

type WordShowcaseProps = {
  wordShowcaseUrl: string;
};

export const WordShowcase: React.FC<WordShowcaseProps> = ({
  wordShowcaseUrl,
}) =>
  wordShowcaseUrl && (
    <Card>
      <div className="mb-6">
        <Heading2>Word Showcase</Heading2>
        <a href={wordShowcaseUrl} className="text-blue-500 underline">
          Watch here
        </a>
      </div>
    </Card>
  );
