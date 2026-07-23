'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';
import { ToastContainer } from '@/components/ui/toast';
import { useUIStore } from '@/stores/ui-store';
import { cn } from '@/lib/utils';
import styles from './dashboard-layout.module.css';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Dashboard',
  '/transactions': 'Transactions',
  '/budgets': 'Budgets',
  '/goals': 'Goals',
  '/accounts': 'Accounts',
  '/insights': 'AI Insights',
  '/reports': 'Reports',
  '/settings': 'Settings',
};

interface DashboardShellProps {
  children: React.ReactNode;
  userName?: string;
  userAvatar?: string | null;
}

export function DashboardShell({ children, userName, userAvatar }: DashboardShellProps) {
  const pathname = usePathname();
  const collapsed = useUIStore((s) => s.sidebarCollapsed);

  const pageTitle = PAGE_TITLES[pathname] ?? 'VaultIQ';

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div
        className={cn(
          styles.main,
          collapsed && styles.mainCollapsed
        )}
      >
        <Topbar
          title={pageTitle}
          userName={userName}
          userAvatar={userAvatar}
        />
        <main id="main-content" className={styles.content}>
          {children}
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}
