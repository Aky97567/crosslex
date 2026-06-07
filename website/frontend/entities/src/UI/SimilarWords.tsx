import { useEffect, useMemo, useRef, useState } from 'react';
import { Heading, SimilarWord } from '@whitelotus/common-crosslex-view';
import { Card, adjustColorShade, hexToRgba } from '@whitelotus/front-shared';

const BASE_FACTOR = 1.3;
const FACTOR_DIVISOR = 20;
const BAR_WIDTH = 3; // Width in rem
const BAR_HEIGHT = 1.5; // Height in rem

const paletteColors: Record<string, string> = {
  classic: '#222',
  overlord: '#ccc',
  sober: '#007bff',
  dark: '#6574cd',
  light: '#f6ad55',
  modern: '#2196f3',
  coolBlue: '#0099cc',
  oceanBlue: '#006699',
  skyBlue: '#66b2ff',
  pink: '#e91e8c',
  iris: '#5c4fc3',
};

const getPaletteColor = (palette: string): string =>
  paletteColors[palette] ?? paletteColors['sober'];

const getColorShadeFromSimilarityScore = (
  similarityScore: number,
  palette: string,
) =>
  adjustColorShade(
    getPaletteColor(palette),
    Math.pow(similarityScore, BASE_FACTOR) / FACTOR_DIVISOR,
  );

type SimilarWordsProps = {
  heading: Heading;
  similarWords: SimilarWord[];
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

export const SimilarWords: React.FC<SimilarWordsProps> = ({
  heading,
  similarWords,
  needClose,
  onClose,
  showContent = true,
}) => {
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
    <Card
      heading={heading}
      needClose={needClose}
      onClose={onClose}
      showContent={showContent}
    >
        <div className="mb-10 flex justify-center">
          <table>
            <tbody>
              {similarWords
                .sort((a, b) => b.similarityScore - a.similarityScore)
                .map((similarWord, index) => (
                  <tr key={index} className="text-md md:text-lg mb-10">
                    <td
                      className={`text-0 pr-10 ${index > 0 ? 'pt-30 md:pt-10' : ''}`}
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
                        {[similarWord.article, similarWord.word].filter(Boolean).join(' ')}
                      </span>
                      <div className="flex gap-[3px] mt-[3px] md:hidden">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div
                            key={i}
                            style={{
                              width: '7px',
                              height: '7px',
                              borderRadius: '50%',
                              backgroundColor:
                                i < similarWord.similarityScore
                                  ? getColorShadeFromSimilarityScore(
                                      similarWord.similarityScore,
                                      palette,
                                    )
                                  : 'transparent',
                              border: `1px solid ${getColorShadeFromSimilarityScore(similarWord.similarityScore, palette)}`,
                            }}
                          />
                        ))}
                      </div>
                    </td>
                    <td className={`hidden md:table-cell ${index > 0 ? 'pt-10' : ''}`}>
                      <div
                        className="py-5 px-10 flex gap-5"
                        style={{
                          width: `${BAR_WIDTH * 16 + 24}px`,
                          height: `${BAR_HEIGHT}rem`,
                          border: `2px solid ${getPaletteColor(palette)}`,
                          borderRadius: '7px',
                          padding: '0.1rem',
                          boxShadow: `5px 5px 5px ${hexToRgba(getPaletteColor(palette), 0.5)}`,
                        }}
                      >
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
                              width: `${BAR_WIDTH / 10}rem`,
                              height: '95%',
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
