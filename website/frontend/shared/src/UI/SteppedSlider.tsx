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

/**
 * A horizontal track with one selectable dot per option, each labelled
 * with its value — for a small, ordered set of discrete choices (playback
 * speed, difficulty level) where a full continuous range input would
 * misrepresent the data (there's no value between the marks) and a plain
 * button row doesn't show that the options are ordered.
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
    <div className={`relative pt-4 pb-24 ${className}`} role="group" aria-label={ariaLabel}>
      <div className="absolute top-14 left-0 right-0 h-2 rounded-full bg-bg-l2" />
      <div
        className="absolute top-14 left-0 h-2 rounded-full bg-brand transition-all duration-200"
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
              className="group flex flex-col items-center gap-8 cursor-pointer"
            >
              <span
                data-active={String(active)}
                className={`block w-16 h-16 rounded-full border-2 transition-colors duration-200 ${
                  active
                    ? 'bg-brand border-brand'
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
