import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from './input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string;
  error?: string;
  helperText?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onSuffixClick?: () => void;
  required?: boolean;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      prefix,
      suffix,
      onSuffixClick,
      required,
      id,
      className,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    return (
      <div className={cn(styles.wrapper, wrapperClassName)}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={styles.inputContainer}>
          {prefix && (
            <span className={styles.prefix} aria-hidden="true">
              {prefix}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              styles.input,
              error && styles.inputError,
              prefix && styles.hasPrefix,
              suffix && styles.hasSuffix,
              className
            )}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={
              [errorId, helperId].filter(Boolean).join(' ') || undefined
            }
            required={required}
            {...props}
          />
          {suffix && (
            onSuffixClick ? (
              <button
                type="button"
                onClick={onSuffixClick}
                className={cn(styles.suffix, styles.suffixClickable)}
                tabIndex={-1}
                aria-label="Toggle visibility"
              >
                {suffix}
              </button>
            ) : (
              <span className={styles.suffix} aria-hidden="true">
                {suffix}
              </span>
            )
          )}
        </div>
        {error && (
          <p id={errorId} className={styles.errorText} role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className={styles.helperText}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
