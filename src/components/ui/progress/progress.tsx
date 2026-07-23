import { cn } from '@/lib/utils';
import styles from './progress.module.css';

export interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  valueFormatter?: (value: number, max: number) => string;
  size?: 'sm' | 'md' | 'lg';
  colorMode?: 'threshold' | 'accent';
  className?: string;
}

function getThresholdClass(percentage: number): string {
  if (percentage < 70) return styles.safe;
  if (percentage < 90) return styles.caution;
  return styles.critical;
}

export function Progress({
  value,
  max = 100,
  label,
  showValue = false,
  valueFormatter,
  size = 'md',
  colorMode = 'threshold',
  className,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const fillClass = colorMode === 'accent' ? styles.accent : getThresholdClass(percentage);

  const displayValue = valueFormatter
    ? valueFormatter(value, max)
    : `${Math.round(percentage)}%`;

  return (
    <div className={cn(styles.wrapper, className)}>
      {(label ?? showValue) && (
        <div className={styles.labelRow}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && <span className={styles.value}>{displayValue}</span>}
        </div>
      )}
      <div
        className={cn(
          styles.track,
          size === 'sm' && styles.trackSmall,
          size === 'lg' && styles.trackLarge
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={cn(styles.fill, fillClass)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
