// =============================================================
// VaultIQ — Global Type Definitions
// =============================================================

import type { Decimal } from '@prisma/client/runtime/library';

/**
 * Serialized versions of Prisma models for client components.
 * Prisma Decimal and Date are not serializable over the wire.
 */

export interface SerializedUser {
  id: string;
  email: string;
  name: string;
  avatarUrl: string | null;
  currency: string;
  timezone: string;
  theme: string;
}

export interface SerializedAccount {
  id: string;
  name: string;
  type: 'CHECKING' | 'SAVINGS' | 'CREDIT' | 'INVESTMENT' | 'CASH' | 'OTHER';
  balance: number;
  currency: string;
  color: string;
  icon: string;
  isActive: boolean;
}

export interface SerializedCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
}

export interface SerializedTransaction {
  id: string;
  accountId: string;
  categoryId: string | null;
  amount: number;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
  description: string;
  notes: string | null;
  date: string; // ISO date string
  isRecurring: boolean;
  tags: string[];
  category: SerializedCategory | null;
  account: SerializedAccount;
}

export interface SerializedBudget {
  id: string;
  categoryId: string;
  amount: number;
  period: 'WEEKLY' | 'MONTHLY' | 'YEARLY';
  isActive: boolean;
  spent: number;
  category: SerializedCategory;
}

export interface SerializedGoal {
  id: string;
  name: string;
  icon: string;
  color: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string | null;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'ACTIVE' | 'COMPLETED' | 'PAUSED' | 'CANCELLED';
}

/**
 * Dashboard KPI data structure.
 */
export interface DashboardKpis {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsRate: number;
  incomeChange: number;
  expenseChange: number;
  balanceChange: number;
}

/**
 * Daily spending data point for charts.
 */
export interface SpendingDataPoint {
  date: string;
  amount: number;
}

/**
 * Category breakdown for pie/donut charts.
 */
export interface CategoryBreakdown {
  categoryId: string;
  name: string;
  icon: string;
  color: string;
  amount: number;
  percentage: number;
}

/**
 * Complete dashboard data payload.
 */
export interface DashboardData {
  kpis: DashboardKpis;
  spendingTrend: SpendingDataPoint[];
  recentTransactions: SerializedTransaction[];
  categoryBreakdown: CategoryBreakdown[];
  accounts: SerializedAccount[];
  budgetSnapshots: SerializedBudget[];
}

/**
 * Utility type to convert Prisma Decimal fields to number.
 */
export type WithNumericDecimals<T> = {
  [K in keyof T]: T[K] extends Decimal ? number : T[K];
};
