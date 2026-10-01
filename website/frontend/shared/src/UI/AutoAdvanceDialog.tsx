import React, { useEffect, useRef, useState } from 'react';

type AutoAdvanceDialogProps = {
  message: string;
  buttonLabel: string;
  onAdvance: () => void;
  // Must be > 0 — callers only render this dialog when auto-advance is
  // actually active (see SessionFooter's isAutoAdvancing gate, which also
  // suspends it while a coach mark is showing).
  seconds: number;
  // Which outcome this dialog is for — drives the ring color (see
  // BORDER_COLORS below). Presentational only: the component doesn't need
  // to know anything about exercises/words/sessions beyond this variant.
  variant: 'correct' | 'wrong';
};

const STROKE_WIDTH = 6;
// The dialog box's own CSS border (`border-2` = 2px, Tailwind's default
// borderWidth scale — not overridden in this project). Independent of
// STROKE_WIDTH: this is what the SVG's position needs to compensate for
// (see the inline top/left style below), not how thick the trace is drawn.
const DIALOG_BORDER_WIDTH = 2;
// Matches this project's `rounded-lg` (24px — a custom override of
// Tailwind's default scale; see config/tailwind/tailwind.config.js), since
// the traced path needs to be drawn, not just styled with a class.
const CORNER_RADIUS = 24;
// Same hex values as this app's existing color1 ("correct")/color3
// ("wrong") tokens — this dialog only ever shows one specific outcome at a
// time, so matching the app's established correct/wrong color vocabulary
// is more consistent than a single neutral color shared across both.
const BORDER_COLORS: Record<AutoAdvanceDialogProps['variant'], string> = {
  correct: '#059669',
  wrong: '#DC2626',
};

// Builds a rounded-rectangle path that starts and ends at the top-center
// point (12 o'clock) and traces clockwise all the way around — arc
// sweep-flag 1 is the clockwise direction in SVG's on-screen coordinate
// space. `pathLength="100"` (SVG2) normalizes the path to exactly 100
// units regardless of actual pixel perimeter, so the dash math stays
// simple percentages rather than a hand-computed perimeter formula.
const buildClockwisePath = (width: number, height: number, radius: number): string => {
  const o = STROKE_WIDTH / 2; // inset so the stroke isn't clipped at the edge
  const w = width - STROKE_WIDTH;
  const h = height - STROKE_WIDTH;
  const r = Math.min(radius, w / 2, h / 2);
  return [
    `M ${o + w / 2} ${o}`,
    `L ${o + w - r} ${o}`,
    `A ${r} ${r} 0 0 1 ${o + w} ${o + r}`,
    `L ${o + w} ${o + h - r}`,
    `A ${r} ${r} 0 0 1 ${o + w - r} ${o + h}`,
    `L ${o + r} ${o + h}`,
    `A ${r} ${r} 0 0 1 ${o} ${o + h - r}`,
    `L ${o} ${o + r}`,
    `A ${r} ${r} 0 0 1 ${o + r} ${o}`,
    `L ${o + w / 2} ${o}`,
  ].join(' ');
};

const AutoAdvanceDialog: React.FC<AutoAdvanceDialogProps> = ({
  message,
  buttonLabel,
  onAdvance,
  seconds,
  variant,
}) => {
  const borderColor = BORDER_COLORS[variant];
  const boxRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  const onAdvanceRef = useRef(onAdvance);
  onAdvanceRef.current = onAdvance;

  // Measure the dialog box so the traced path matches its actual
  // (responsive — max-w-4xl, not a fixed pixel size) dimensions exactly.
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const measure = () => setSize({ width: el.offsetWidth, height: el.offsetHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Drive stroke-dashoffset via requestAnimationFrame rather than a CSS
  // @keyframes animation — this avoids depending on @property (a smooth
  // custom-property animation needs it, and it silently no-ops rather than
  // erroring when something's off, which is exactly what happened on an
  // earlier pass at this). A plain per-frame number has no such failure
  // mode to hide.
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const totalMs = seconds * 1000;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / totalMs, 1);
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = String(100 * (1 - progress));
      }
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seconds]);

  useEffect(() => {
    const timer = setTimeout(() => onAdvanceRef.current(), seconds * 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-20">
      <div className="absolute inset-0 bg-dark opacity-50" />
      <div
        ref={boxRef}
        className="relative bg-bg-l2 border-2 border-brand rounded-lg p-30 max-w-4xl w-full shadow-lg text-center"
      >
        {size && (
          // top/left = -DIALOG_BORDER_WIDTH, not `inset-0`: an
          // absolutely-positioned child's offsets resolve against the
          // parent's *padding* edge — i.e. already inside the dialog's own
          // border — while `width`/`height` below measure the full
          // *border*-box. Left at `inset-0`, the SVG would start inside the
          // box and (being sized for the whole box) overflow past its far
          // edge: drawn inward over the white background near the start of
          // the path, drawn outside over the page backdrop near the end.
          // Shifting the origin out by exactly the border's own width
          // aligns the SVG with the box's actual outer edge on all sides.
          <svg
            width={size.width}
            height={size.height}
            className="absolute pointer-events-none"
            style={{ top: -DIALOG_BORDER_WIDTH, left: -DIALOG_BORDER_WIDTH }}
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              d={buildClockwisePath(size.width, size.height, CORNER_RADIUS)}
              fill="none"
              stroke={borderColor}
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={100}
            />
          </svg>
        )}
        <p className="text-text text-sm mb-20">{message}</p>
        <button
          onClick={onAdvance}
          className="bg-brand border-2 border-brand rounded-md px-40 py-10 text-text-cta text-sm transition-colors duration-300"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export { AutoAdvanceDialog };
