'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/icons';
import { APP_NAME, APP_TAGLINE, NAV_ITEMS, NAV_BOTTOM_ITEMS } from '@/lib/constants';
import styles from './sidebar.module.css';

interface SidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({ mobileOpen, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();

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
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          styles.sidebar,
          mobileOpen && styles.mobileOpen
        )}
        aria-label="Main navigation"
      >
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandRow}>
            <div className={styles.logo} aria-hidden="true">V</div>
            <div>
              <div className={styles.brandName}>{APP_NAME}</div>
              <div className={styles.brandTagline}>{APP_TAGLINE}</div>
            </div>
          </div>
        </div>

        {/* New Transaction CTA */}
        <div className={styles.ctaSection}>
          <button className={styles.ctaButton}>
            <Icon name="add" size={20} />
            New Transaction
          </button>
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
              onClick={onCloseMobile}
            >
              <Icon
                name={item.icon}
                size={20}
                filled={isActive(item.href)}
              />
              {item.label}
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
              onClick={onCloseMobile}
            >
              <Icon name={item.icon} size={20} />
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
