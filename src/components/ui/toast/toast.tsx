'use client';

import { useUIStore } from '@/stores/ui-store';
import type { ToastVariant } from '@/stores/ui-store';
import { cn } from '@/lib/utils';
import styles from './toast.module.css';

const ICONS: Record<ToastVariant, string> = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
};

export function ToastContainer() {
  const toasts = useUIStore((s) => s.toasts);
  const removeToast = useUIStore((s) => s.removeToast);

  if (toasts.length === 0) return null;

  return (
    <div className={styles.container} aria-live="polite" aria-label="Notifications">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(styles.toast, styles[toast.variant])}
          role="alert"
        >
          <span className={styles.icon} aria-hidden="true">
            {ICONS[toast.variant]}
          </span>
          <div className={styles.content}>
            <p className={styles.message}>{toast.message}</p>
          </div>
          <button
            className={styles.close}
            onClick={() => removeToast(toast.id)}
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
