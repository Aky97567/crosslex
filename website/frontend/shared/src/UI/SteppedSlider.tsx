type SteppedSliderOption<T extends string | number> = {
  value: T;
  label: string;
};

type SteppedSliderProps<T extends string | number> = {
  options: SteppedSliderOption<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel?: string;
  className?: string;
};

// Every dot sits inside a fixed-height h-50 (24px) box, centered via flex —
// regardless of whether it renders as the small unselected dot or the
// bigger selected ring, its visual center always lands at the same 12px
// (top-30) from the row's top. The track line is centered on that same
// point via -translate-y-1/2, so nothing needs an arbitrary pixel value.
//
// Each button is flex-1 (equal-width columns), NOT sized by its own label
// text — with N equal columns, the first/last dot centers sit exactly
// 50/N % in from each edge, so the track's left/right inset is computed
// from options.length rather than guessed; unequal-width columns (sized by
// label text, as this used to be) put dot centers at unpredictable
// positions the track couldn't line up with, and overhung both edges.
//
// Track and inactive dots use bg-brand-2 (a real, opaque theme color) —
// not bg-brand + opacity. Two overlapping semi-transparent layers of the
// "same" color compound to a visibly different (darker) shade wherever a
// dot sits on the track, which is why that looked like a color mismatch.
//
// This project's Tailwind config replaces (not extends) the default
// spacing/borderRadius scales, so there's no `rounded-full` — `rounded-lg`
// (24px) is used instead, which still renders as a full circle since it
// exceeds half the width/height of every shape here. Every class below
// was checked against the actual compiled CSS before use.

/**
 * A horizontal track with one marker per option and a label under each —
 * the selected option renders as a hollow ring with a solid dot centered
 * inside it, unselected options as a small plain dot. For a small ordered
 * set of discrete choices (playback speed, difficulty) where a continuous
 * range input would misrepresent the data (there's no value between the
 * marks).
 */
const SteppedSlider = <T extends string | number>({
  options,
  value,
  onChange,
  ariaLabel,
  className = '',
}: SteppedSliderProps<T>) => {
  const edgeInsetPercent = 50 / options.length;

  return (
    <div className={`relative ${className}`} role="group" aria-label={ariaLabel}>
      <div
        className="absolute top-30 -translate-y-1/2 h-5 rounded-lg bg-brand-2"
        style={{ left: `${edgeInsetPercent}%`, right: `${edgeInsetPercent}%` }}
      />
      <div className="relative flex">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              aria-pressed={active}
              aria-label={opt.label}
              className="group flex-1 flex flex-col items-center gap-10 cursor-pointer"
            >
              {/* Fixed w-50/h-50 regardless of active state — the dot/ring
                  rendered inside never changes this wrapper's own size, so
                  toggling selection can't shift any button's width. */}
              <span className="w-50 h-50 flex items-center justify-center">
                {active ? (
                  <span className="w-50 h-50 rounded-lg border-2 border-brand bg-bg-l1 flex items-center justify-center">
                    <span className="w-30 h-30 rounded-lg bg-brand" />
                  </span>
                ) : (
                  <span className="block w-20 h-20 rounded-lg bg-brand-2 transition-colors duration-200 group-hover:bg-brand" />
                )}
              </span>
              {/* Opacity only, never font-weight — a weight change alters
                  the label's own text width (bold is wider), which would
                  reintroduce the per-button width shift the fixed-size dot
                  wrapper above was added to eliminate. */}
              <span className={`text-sm text-text ${active ? '' : 'opacity-70'}`}>{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { SteppedSlider };
