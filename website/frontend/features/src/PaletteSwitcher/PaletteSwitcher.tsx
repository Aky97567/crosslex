import React from 'react';

export const PALETTES = [
  'classic',
  'overlord',
  'sober',
  'light',
  'dark',
  'modern',
  'coolBlue',
  'oceanBlue',
  'skyBlue',
  'pink',
  'iris',
] as const;

export type Palette = (typeof PALETTES)[number];

const STORAGE_KEY = 'crosslex-palette';

export const getInitialPalette = (): Palette => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (PALETTES as readonly string[]).includes(stored)) {
      return stored as Palette;
    }
  } catch {}
  return 'classic';
};

type PaletteSwitcherProps = {
  active: Palette;
  onChange: (palette: Palette) => void;
};

export const PaletteSwitcher: React.FC<PaletteSwitcherProps> = ({
  active,
  onChange,
}) => {
  const handleChange = (palette: Palette) => {
    document.documentElement.setAttribute('data-palette', palette);
    try {
      localStorage.setItem(STORAGE_KEY, palette);
    } catch {}
    onChange(palette);
  };

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {PALETTES.map((palette) => (
        <button
          key={palette}
          onClick={() => handleChange(palette)}
          className={`px-20 py-10 rounded-lg border-2 text-sm capitalize transition-colors duration-200 ${
            active === palette
              ? 'border-brand bg-brand text-text-cta'
              : 'border-brand bg-bg-l2 text-text hover:bg-brand hover:text-text-cta'
          }`}
        >
          {palette}
        </button>
      ))}
    </div>
  );
};
