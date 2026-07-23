import { clsx, type ClassValue } from 'clsx';

/**
 * Merges class names conditionally.
 * Wraps clsx for consistent usage across the app.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Formats a number as currency.
 * Uses Intl.NumberFormat for locale-aware formatting.
 */
export function formatCurrency(
  amount: number,
  currency = 'USD',
  locale = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formats a compact currency for dashboard KPIs.
 * e.g., $1,234,567 → $1.23M
 */
export function formatCompactCurrency(
  amount: number,
  currency = 'USD',
  locale = 'en-US'
): string {
  if (Math.abs(amount) < 1000) {
    return formatCurrency(amount, currency, locale);
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formats a number as a percentage.
 */
export function formatPercentage(
  value: number,
  decimals = 1
): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`;
}

/**
 * Formats a date relative to now.
 * e.g., "Today", "Yesterday", "3 days ago", "Jan 15"
 */
export function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  });
}

/**
 * Formats a date for display in lists and tables.
 * e.g., "Jan 15, 2025"
 */
export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    ...options,
  });
}

/**
 * Converts a Prisma Decimal to a number safely.
 */
export function decimalToNumber(decimal: unknown): number {
  if (decimal === null || decimal === undefined) return 0;
  return Number(decimal);
}

/**
 * Generates initials from a name.
 * e.g., "John Doe" → "JD", "Alice" → "A"
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/**
 * Truncates text with an ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

/**
 * Delays execution. Useful for optimistic UI testing.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates a random color from our palette for new categories/accounts.
 */
const PALETTE_COLORS = [
  '#6366F1', '#8B5CF6', '#EC4899', '#EF4444', '#F59E0B',
  '#22C55E', '#14B8A6', '#3B82F6', '#F97316', '#06B6D4',
] as const;

export function getRandomColor(): string {
  const index = Math.floor(Math.random() * PALETTE_COLORS.length);
  return PALETTE_COLORS[index] ?? PALETTE_COLORS[0];
}
