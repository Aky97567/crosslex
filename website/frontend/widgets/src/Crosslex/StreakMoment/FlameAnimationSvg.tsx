import React from 'react';

export const SVG_FLAME_FILES = [
  '1df4b596-1182-11ee-9fc3-6f8d7094dc00',
  '2b610cec-116a-11ee-917e-5b9b6a234276',
  '2e866326-1170-11ee-b759-c34e30831483',
  'bbb0b112-bf19-411d-abf2-6380c736127d',
  'ecde336c-1152-11ee-94f8-13b2f86f8f07',
] as const;

export type SvgFlameVariant = typeof SVG_FLAME_FILES[number];

type Props = {
  file: SvgFlameVariant;
  className?: string;
};

const FlameAnimationSvg: React.FC<Props> = ({ file, className }) => (
  <img
    src={`/lottie/flame/${file}.svg`}
    className={className}
    alt=""
  />
);

export { FlameAnimationSvg };
