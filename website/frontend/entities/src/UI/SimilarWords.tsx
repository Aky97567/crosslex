import { useEffect, useMemo, useRef, useState } from 'react';
import { SimilarWord } from '@/common/crosslex/view/src';
import { Card, Heading2 } from '@whitelotus/front-shared';

const BASE_FACTOR = 1.3;
const FACTOR_DIVISOR = 20;
const BAR_WIDTH = 3; // Width in rem
const BAR_HEIGHT = 1.5; // Height in rem

const paletteColors: Record<string, string> = {
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
  palette: string,
) => {
  const baseColor = paletteColors[palette] || paletteColors.light;

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

function hexToRgba(hex: string, alpha: number): string {
  hex = hex.replace(/^#/, '');

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

type SimilarWordsProps = {
  similarWords: SimilarWord[];
};

export const SimilarWords: React.FC<SimilarWordsProps> = ({ similarWords }) => {
  if (!similarWords || similarWords.length === 0) return null;

  const [maxWidth, setMaxWidth] = useState<number | null>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (!similarWords || similarWords.length === 0) return;

    const calculateMaxWidth = () => {
      let currentMaxWidth = 0;
      wordRefs.current.forEach(ref => {
        if (ref) {
          const width = ref.getBoundingClientRect().width;
          if (width > currentMaxWidth) {
            currentMaxWidth = width;
          }
        }
      });
      setMaxWidth(currentMaxWidth);
    };

    calculateMaxWidth();

    const observer = new ResizeObserver(calculateMaxWidth);

    wordRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [similarWords, maxWidth]);

  const palette =
    document.documentElement.getAttribute('data-palette') || 'sober';
  const strengthWiseColors = useMemo(() => {
    return Array.from({ length: 5 }, (_, index) =>
      getColorShadeFromSimilarityScore(index, palette),
    );
  }, [palette]);

  return (
    <Card>
      <Heading2>Similar Words</Heading2>
      <div className="mb-10 flex justify-center">
        <table>
          <tbody>
            {similarWords
              .sort((a, b) => b.similarityScore - a.similarityScore)
              .map((similarWord, index) => (
                <tr key={index} className="text-lg mb-10">
                  <td
                    className="text-0 pr-10"
                    style={{
                      verticalAlign: 'middle',
                      width: maxWidth ? `${maxWidth + 16}px` : 'auto',
                    }}
                  >
                    <span
                      ref={el => (wordRefs.current[index] = el)}
                      style={{
                        color:
                          strengthWiseColors[similarWord.similarityScore - 1],
                        fontWeight:
                          similarWord.similarityScore > 3 ? 'bold' : 'normal',
                      }}
                    >
                      {`${similarWord.article} ${similarWord.word}`.trimStart()}
                    </span>
                  </td>
                  <td>
                    <div
                      className="py-5 px-10 flex gap-5"
                      style={{
                        width: `${BAR_WIDTH * 16 + 24}px`, // Calculate width
                        height: `${BAR_HEIGHT}rem`, // Height of the container
                        border: `2px solid ${paletteColors[palette]}`, // Border color
                        borderRadius: '7px',
                        padding: '0.1rem', // Padding around the bars
                        boxShadow: `5px 5px 5px ${hexToRgba(paletteColors[palette], 0.5)}`,
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
                              palette,
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
