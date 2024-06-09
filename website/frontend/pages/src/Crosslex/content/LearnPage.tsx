import { Card } from '@whitelotus/front-shared';
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
    memoryHooks,
    wordTheaterUrl,
  },
}: ContentLayout<LearnPageContent>) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <h1 className="text-3xl font-bold mb-4">{word}</h1>
        {representativeImageUrl && (
          <img
            src={representativeImageUrl}
            alt={word}
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
        )}
        <p className="text-xl italic mb-2">{translation}</p>
        <p className="text-lg mb-4 text-gray-600">{partOfSpeech}</p>
      </Card>
      <Card>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Meaning</h2>
          <p className="text-lg">{meaning}</p>
        </div>
      </Card>
      {meaningBestGuessQuestion && (
        <Card>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Meaning Best Guess Question
            </h2>
            <p className="text-lg">{meaningBestGuessQuestion.question}</p>
          </div>
        </Card>
      )}
      {paragraphWithUsage && (
        <Card>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Usage</h2>
            <p className="text-lg">{paragraphWithUsage}</p>
          </div>
        </Card>
      )}
      {etymology && (
        <Card>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Etymology</h2>
            <p className="text-lg">{etymology}</p>
          </div>
        </Card>
      )}
      {similarWords && similarWords.length > 0 && (
        <Card>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Similar Words</h2>
            <ul className="list-disc list-inside">
              {similarWords.map((similarWord, index) => (
                <li key={index} className="text-lg">
                  {similarWord.word}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}
      {memoryHooks && memoryHooks.length > 0 && (
        <Card>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Memory Hooks</h2>
            <ul className="list-disc list-inside">
              {memoryHooks.map((hook, index) => (
                <li key={index} className="text-lg">
                  {hook.content}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}
      {wordTheaterUrl && (
        <Card>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Word Theater</h2>
            <a href={wordTheaterUrl} className="text-blue-500 underline">
              Watch here
            </a>
          </div>
        </Card>
      )}
    </div>
  );
};

export { LearnPage };
