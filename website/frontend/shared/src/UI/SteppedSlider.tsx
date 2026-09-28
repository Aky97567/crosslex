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
  return (
    <div className={`relative ${className}`} role="group" aria-label={ariaLabel}>
      <div className="absolute left-0 right-0 top-30 -translate-y-1/2 h-5 rounded-lg bg-bg-l2" />
      <div className="relative flex justify-between">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              aria-pressed={active}
              aria-label={opt.label}
              className="group flex flex-col items-center gap-10 cursor-pointer"
            >
              <span className="h-50 flex items-center justify-center">
                {active ? (
                  <span className="w-50 h-50 rounded-lg border-2 border-brand bg-bg-l1 flex items-center justify-center">
                    <span className="w-30 h-30 rounded-lg bg-brand" />
                  </span>
                ) : (
                  <span className="block w-20 h-20 rounded-lg bg-brand opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
                )}
              </span>
              <span className={`text-sm ${active ? 'text-text font-semibold' : 'text-text opacity-70'}`}>
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { SteppedSlider };
