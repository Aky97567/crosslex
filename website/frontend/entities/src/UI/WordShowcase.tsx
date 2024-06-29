import { Card } from '@whitelotus/front-shared';

type WordShowcaseProps = {
  wordShowcaseUrl: string;
};

export const WordShowcase: React.FC<WordShowcaseProps> = ({
  wordShowcaseUrl,
}) =>
  wordShowcaseUrl && (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Word Showcase</h2>
        <a href={wordShowcaseUrl} className="text-blue-500 underline">
          Watch here
        </a>
      </div>
    </Card>
  );
