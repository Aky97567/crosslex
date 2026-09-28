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

// Dot diameter (w-60/h-60 = 32px). Track sits at top-40 (16px, exactly half
// the dot height) then shifts up by half its own height via -translate-y-1/2
// — this lands the track's vertical center exactly on the dots' center
// without needing an arbitrary pixel value.

/**
 * A horizontal track with one selectable dot per option, each labelled
 * with its value — for a small, ordered set of discrete choices (playback
 * speed, difficulty level) where a full continuous range input would
 * misrepresent the data (there's no value between the marks) and a plain
 * button row doesn't show that the options are ordered.
 *
 * Note: this project's Tailwind config replaces (not extends) the default
 * spacing/borderRadius scales — there is no `rounded-full` or arbitrary
 * `h-2`/`w-16`-style class here. `rounded-lg` (24px) is used for "circle"
 * shapes since it exceeds half the width/height of every element below.
 */
const SteppedSlider = <T extends string | number>({
  options,
  value,
  onChange,
  ariaLabel,
  className = '',
}: SteppedSliderProps<T>) => {
  const selectedIndex = options.findIndex((opt) => opt.value === value);
  const lastIndex = options.length - 1;
  const filledPercent = lastIndex === 0 ? 100 : (selectedIndex / lastIndex) * 100;

  return (
    <div className={`relative ${className}`} role="group" aria-label={ariaLabel}>
      <div className="absolute left-0 right-0 top-40 -translate-y-1/2 h-10 rounded-lg bg-bg-l2" />
      <div
        className="absolute left-0 top-40 -translate-y-1/2 h-10 rounded-lg bg-brand transition-all duration-200"
        style={{ width: `${filledPercent}%` }}
      />
      <div className="relative flex justify-between">
        {options.map((opt, index) => {
          const active = index === selectedIndex;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              aria-pressed={active}
              aria-label={opt.label}
              className="group flex flex-col items-center gap-10 cursor-pointer"
            >
              <span
                data-active={String(active)}
                className={`block w-60 h-60 rounded-lg border-2 transition-colors duration-200 ${
                  active
                    ? 'bg-brand border-brand ring-4 ring-brand ring-offset-2 ring-offset-[rgb(var(--color-bg-l1))]'
                    : 'bg-bg-l1 border-brand group-hover:bg-brand-2'
                }`}
              />
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
