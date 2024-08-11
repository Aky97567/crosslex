import { SimilarWord } from '@/common/crosslex/view/src';
import { Card } from '@whitelotus/front-shared';

const BASE_FACTOR = 1.3;
const FACTOR_DIVISOR = 20;
const BAR_WIDTH = 3; // Width in rem
const BAR_HEIGHT = 1.5; // Height in rem

const themeColors: Record<string, string> = {
  sober: '#007bff',
  dark: '#6574cd',
  light: '#f6ad55',
  modern: '#2196f3',
  coolBlue: '#0099cc',
  oceanBlue: '#006699',
  skyBlue: '#66b2ff',
};

const getColorShadeFromSimilarityScore = (
  similarityScore: number,
  theme: string,
) => {
  const baseColor = themeColors[theme] || themeColors.light;

  const adjustColorShade = (color: string, factor: number) => {
    const [r1, g1, b1] = [
      parseInt(color.slice(1, 3), 16),
      parseInt(color.slice(3, 5), 16),
      parseInt(color.slice(5, 7), 16),
    ];
    const r = Math.round(r1 + factor * (0 - r1));
    const g = Math.round(g1 + factor * (0 - g1));
    const b = Math.round(b1 + factor * (0 - b1));
    return `rgb(${r}, ${g}, ${b})`;
  };

  return adjustColorShade(
    baseColor,
    Math.pow(similarityScore, BASE_FACTOR) / FACTOR_DIVISOR,
  );
};

type SimilarWordsProps = {
  similarWords: SimilarWord[];
};

export const SimilarWords: React.FC<SimilarWordsProps> = ({ similarWords }) => {
  if (!similarWords || similarWords.length === 0) return null;

  const theme = document.documentElement.getAttribute('data-theme') || 'light';

  return (
    <Card>
      <div className="mb-10">
        <h2 className="text-2xl text-brand font-semibold mb-10">
          Similar Words
        </h2>
        <table className="w-full">
          <tbody>
            {similarWords
              .sort((a, b) => b.similarityScore - a.similarityScore)
              .map((similarWord, index) => (
                <tr key={index} className="text-lg mb-10">
                  <td
                    className="text-0 pr-10"
                    style={{ verticalAlign: 'middle' }}
                  >
                    <span
                      style={{
                        color: getColorShadeFromSimilarityScore(
                          similarWord.similarityScore,
                          theme,
                        ),
                        fontWeight:
                          similarWord.similarityScore > 4 ? 'bold' : 'normal',
                      }}
                    >
                      {similarWord.word}
                    </span>
                  </td>
                  <td>
                    <div
                      className="py-5 px-10 flex gap-5"
                      style={{
                        width: `${BAR_WIDTH * 16 + 24}px`, // Calculate width
                        height: `${BAR_HEIGHT}rem`, // Height of the container
                        border: `2px solid ${themeColors[theme]}`, // Border color
                        borderRadius: '7px',
                        padding: '0.1rem', // Padding around the bars
                      }}
                    >
                      {/* Strength Bars */}
                      {Array.from(
                        { length: similarWord.similarityScore * 2 },
                        (_, index) => index,
                      ).map((_, index) => (
                        <div
                          key={index}
                          style={{
                            backgroundColor: getColorShadeFromSimilarityScore(
                              similarWord.similarityScore,
                              theme,
                            ),
                            width: `${BAR_WIDTH / 10}rem`, // Width of each bar
                            height: '95%', // Height of each bar
                          }}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
