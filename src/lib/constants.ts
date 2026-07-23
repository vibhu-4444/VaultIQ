// =============================================================
// VaultIQ — Application Constants
// =============================================================

export const APP_NAME = 'VaultIQ' as const;
export const APP_DESCRIPTION = 'AI-Powered Personal Finance Operating System' as const;

/**
 * Default categories created for every new user.
 * Icons use emoji for portability — can be swapped for an icon library later.
 */
export const DEFAULT_CATEGORIES = [
  // Expenses
  { name: 'Housing', icon: '🏠', color: '#6366F1', type: 'EXPENSE' as const, sortOrder: 1 },
  { name: 'Transportation', icon: '🚗', color: '#8B5CF6', type: 'EXPENSE' as const, sortOrder: 2 },
  { name: 'Food & Dining', icon: '🍔', color: '#F59E0B', type: 'EXPENSE' as const, sortOrder: 3 },
  { name: 'Groceries', icon: '🛒', color: '#22C55E', type: 'EXPENSE' as const, sortOrder: 4 },
  { name: 'Utilities', icon: '💡', color: '#3B82F6', type: 'EXPENSE' as const, sortOrder: 5 },
  { name: 'Entertainment', icon: '🎬', color: '#EC4899', type: 'EXPENSE' as const, sortOrder: 6 },
  { name: 'Shopping', icon: '🛍️', color: '#F97316', type: 'EXPENSE' as const, sortOrder: 7 },
  { name: 'Health', icon: '🏥', color: '#EF4444', type: 'EXPENSE' as const, sortOrder: 8 },
  { name: 'Education', icon: '📚', color: '#14B8A6', type: 'EXPENSE' as const, sortOrder: 9 },
  { name: 'Subscriptions', icon: '📱', color: '#06B6D4', type: 'EXPENSE' as const, sortOrder: 10 },
  { name: 'Insurance', icon: '🛡️', color: '#64748B', type: 'EXPENSE' as const, sortOrder: 11 },
  { name: 'Personal Care', icon: '💇', color: '#A855F7', type: 'EXPENSE' as const, sortOrder: 12 },
  // Income
  { name: 'Salary', icon: '💰', color: '#22C55E', type: 'INCOME' as const, sortOrder: 1 },
  { name: 'Freelance', icon: '💻', color: '#3B82F6', type: 'INCOME' as const, sortOrder: 2 },
  { name: 'Investments', icon: '📈', color: '#6366F1', type: 'INCOME' as const, sortOrder: 3 },
  // Transfers
  { name: 'Transfer', icon: '🔄', color: '#71717A', type: 'TRANSFER' as const, sortOrder: 1 },
] as const;

/**
 * Navigation items for the sidebar.
 */
export const NAV_ITEMS = [
  { label: 'Dashboard', href: '/', icon: 'layout-dashboard' },
  { label: 'Transactions', href: '/transactions', icon: 'arrow-left-right' },
  { label: 'Budgets', href: '/budgets', icon: 'pie-chart' },
  { label: 'Goals', href: '/goals', icon: 'target' },
  { label: 'Accounts', href: '/accounts', icon: 'building-2' },
  { label: 'Insights', href: '/insights', icon: 'sparkles' },
  { label: 'Reports', href: '/reports', icon: 'bar-chart-3' },
] as const;

/**
 * Bottom navigation items.
 */
export const NAV_BOTTOM_ITEMS = [
  { label: 'Settings', href: '/settings', icon: 'settings' },
] as const;

/**
 * Account type display names and icons.
 */
export const ACCOUNT_TYPE_CONFIG = {
  CHECKING: { label: 'Checking', icon: '🏦', color: '#3B82F6' },
  SAVINGS: { label: 'Savings', icon: '🐖', color: '#22C55E' },
  CREDIT: { label: 'Credit Card', icon: '💳', color: '#EF4444' },
  INVESTMENT: { label: 'Investment', icon: '📈', color: '#8B5CF6' },
  CASH: { label: 'Cash', icon: '💵', color: '#F59E0B' },
  OTHER: { label: 'Other', icon: '📁', color: '#71717A' },
} as const;

/**
 * Budget period display labels.
 */
export const BUDGET_PERIOD_LABELS = {
  WEEKLY: 'Weekly',
  MONTHLY: 'Monthly',
  YEARLY: 'Yearly',
} as const;

/**
 * Goal priority configuration.
 */
export const GOAL_PRIORITY_CONFIG = {
  LOW: { label: 'Low', color: '#3B82F6' },
  MEDIUM: { label: 'Medium', color: '#F59E0B' },
  HIGH: { label: 'High', color: '#EF4444' },
} as const;
