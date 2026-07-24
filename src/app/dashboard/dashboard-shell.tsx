'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';
import styles from './dashboard-layout.module.css';

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <div className={styles.main}>
        <Topbar
          onMenuClick={() => setMobileOpen((v) => !v)}
        />
        <main id="main-content" className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
