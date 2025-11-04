import { useEffect, useMemo, useState, useId } from 'react';
import styles from './CountdownTimer.module.css';

/**
 * CountdownTimer
 * - target: Date | string | number (required)
 * - onComplete?: () => void
 * - dayMax?: number (default 31; e.g. 365 for long campaigns)
 * - sweepDeg?: number (visible arc length in degrees, default 260)
 * - size?: number (SVG size px, default 140)
 * - radius?: number (default 60)
 * - strokeWidth?: number (default 10)
 * - gradient?: [startColor, endColor]
 * - tickMs?: number (update frequency, default 1000)
 * - labels?: {days,hours,minutes,seconds}
 */
export default function CountdownTimer({
  target,
  onComplete,
  dayMax = 31,
  sweepDeg = 260,
  size = 140,
  radius = 60,
  strokeWidth = 10,
  gradient = ['darkblue', '#f54f15'],
  tickMs = 1000,
  labels = {
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MINUTES',
    seconds: 'SECONDS',
  },
}) {
  const targetMs = useMemo(() => new Date(target).getTime(), [target]);
  const [t, setT] = useState(() => compute(targetMs, dayMax));
  const uid = useId();

  useEffect(() => {
    const doTick = () => setT(compute(targetMs, dayMax));
    doTick(); // immediate sync
    if (t.done) {
      onComplete?.();
      return;
    }
    const id = setInterval(() => {
      const next = compute(targetMs, dayMax);
      setT(next);
      if (next.done) {
        clearInterval(id);
        onComplete?.();
      }
    }, Math.max(100, tickMs));
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetMs, dayMax, onComplete, tickMs]);

  const rings = [
    {
      key: 'days',
      value: t.days,
      label: labels.days,
      // remaining fraction of days (includes hour fraction for smoothness)
      progress: clamp01(1 - t.frac.daysRemaining),
      gradId: `g-days-${uid}`,
    },
    {
      key: 'hours',
      value: t.hours,
      label: labels.hours,
      // remaining fraction of hours in current day (includes minutes for smoothness)
      progress: clamp01(1 - t.frac.hoursRemaining),
      gradId: `g-hours-${uid}`,
    },
    {
      key: 'minutes',
      value: t.minutes,
      label: labels.minutes,
      // remaining fraction of minutes in current hour (includes seconds for smoothness)
      progress: clamp01(1 - t.frac.minutesRemaining),
      gradId: `g-min-${uid}`,
    },
    {
      key: 'seconds',
      value: t.seconds,
      label: labels.seconds,
      // remaining fraction of seconds in current minute
      progress: clamp01(1 - t.frac.secondsRemaining),
      gradId: `g-sec-${uid}`,
    },
  ];

  return (
    <div
      className={styles.container}
      role="timer"
      aria-live="polite"
      aria-label={
        t.done
          ? 'Countdown complete'
          : `Time remaining ${t.days} days ${t.hours} hours ${t.minutes} minutes ${t.seconds} seconds`
      }
    >
      {rings.map(({ key, value, label, progress, gradId }) => (
        <div key={key} className={styles.element}>
          <svg
            className={styles.circle}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            role="img"
            aria-label={`${value} ${label} remaining`}
          >
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={gradient[0]} />
                <stop offset="100%" stopColor={gradient[1]} />
              </linearGradient>
            </defs>

            {/* Active arc (drains as time passes) */}
            <Arc
              cx={size / 2}
              cy={size / 2}
              r={radius}
              sweepDeg={sweepDeg}
              stroke={`url(#${gradId})`}
              strokeWidth={strokeWidth}
              progress={progress} // 0..1 along the arc
            />
          </svg>

          <span className={styles.number}>{pad2(value)}</span>
          <span className={styles.label}>{label}</span>
        </div>
      ))}
    </div>
  );
}

/** Draw a normalized arc: pathLength="1" so strokeDashoffset = 1 - progress */
function Arc({ cx, cy, r, sweepDeg, stroke, strokeWidth, progress = 1 }) {
  // center the arc at the top (start = -sweep/2 - 90, end = +sweep/2 - 90)
  const startAngle = -90 - sweepDeg / 2;
  const endAngle = -90 + sweepDeg / 2;
  const d = describeArc(cx, cy, r, startAngle, endAngle);
  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      pathLength="1"
      strokeDasharray="1"
      strokeDashoffset={1 - progress}
    />
  );
}

function compute(targetMs, dayMax) {
  const now = Date.now();
  let diff = Math.max(0, targetMs - now);

  const MS = 1000,
    MIN = 60 * MS,
    HR = 60 * MIN,
    DAY = 24 * HR;

  const days = Math.floor(diff / DAY);
  diff -= days * DAY;

  const hours = Math.floor(diff / HR);
  diff -= hours * HR;

  const minutes = Math.floor(diff / MIN);
  diff -= minutes * MIN;

  const seconds = Math.floor(diff / MS);

  // Fractions (remaining) for smooth ring fill
  const secondsRemaining = (diff % MIN) / MIN; // 0..1 of a minute remaining
  const minutesRemaining = ((hours * HR + minutes * MIN + diff) % HR) / HR; // 0..1 of an hour remaining
  const hoursRemaining =
    ((days * DAY + hours * HR + minutes * MIN + diff) % DAY) / DAY; // 0..1 of a day remaining
  const daysRemaining = clamp01((days + hoursRemaining) / Math.max(1, dayMax)); // remaining across the window

  return {
    done: targetMs - now <= 0,
    days,
    hours,
    minutes,
    seconds,
    frac: {
      secondsRemaining: (60 - (seconds + (diff % MS) / MS)) / 60, // 0..1 remaining in minute
      minutesRemaining,
      hoursRemaining,
      daysRemaining,
    },
  };
}

// --- SVG helpers ---
function polarToCartesian(cx, cy, r, angleDeg) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function describeArc(cx, cy, r, startDeg, endDeg) {
  const start = polarToCartesian(cx, cy, r, startDeg);
  const end = polarToCartesian(cx, cy, r, endDeg);
  const largeArcFlag = endDeg - startDeg <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

// --- utils ---
const clamp01 = n => Math.max(0, Math.min(1, n));
const pad2 = n => String(n).padStart(2, '0');
