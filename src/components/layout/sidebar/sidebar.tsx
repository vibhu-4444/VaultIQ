'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icon, type IconName } from '@/components/icons';
import { NAV_ITEMS, NAV_BOTTOM_ITEMS, APP_NAME } from '@/lib/constants';
import { useUIStore } from '@/stores/ui-store';
import styles from './sidebar.module.css';

export function Sidebar() {
  const pathname = usePathname();
  const collapsed = useUIStore((s) => s.sidebarCollapsed);
  const mobileOpen = useUIStore((s) => s.sidebarMobileOpen);
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const closeMobileSidebar = useUIStore((s) => s.closeMobileSidebar);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={closeMobileSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          styles.sidebar,
          collapsed && styles.collapsed,
          mobileOpen && styles.mobileOpen
        )}
        aria-label="Main navigation"
      >
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo} aria-hidden="true">
            V
          </div>
          <span className={styles.brandName}>{APP_NAME}</span>
        </div>

        {/* Main Navigation */}
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                styles.navItem,
                isActive(item.href) && styles.navItemActive
              )}
              onClick={closeMobileSidebar}
              title={collapsed ? item.label : undefined}
            >
              <span className={styles.navItemIcon}>
                <Icon name={item.icon as IconName} size={20} />
              </span>
              <span className={styles.navItemLabel}>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          {NAV_BOTTOM_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                styles.navItem,
                isActive(item.href) && styles.navItemActive
              )}
              onClick={closeMobileSidebar}
              title={collapsed ? item.label : undefined}
            >
              <span className={styles.navItemIcon}>
                <Icon name={item.icon as IconName} size={20} />
              </span>
              <span className={styles.navItemLabel}>{item.label}</span>
            </Link>
          ))}

          <button
            className={styles.collapseButton}
            onClick={toggleSidebar}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <Icon
              name={collapsed ? 'chevron-right' : 'chevron-left'}
              size={18}
            />
          </button>
        </div>
      </aside>
    </>
  );
}
