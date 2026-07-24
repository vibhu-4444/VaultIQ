'use client';

import { Icon } from '@/components/icons';
import styles from './topbar.module.css';

interface TopbarProps {
  searchPlaceholder?: string;
  onMenuClick?: () => void;
}

export function Topbar({
  searchPlaceholder = 'Search...',
  onMenuClick,
}: TopbarProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <button
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="Toggle navigation menu"
        >
          <Icon name="menu" size={24} />
        </button>
        <div className={styles.searchWrapper}>
          <Icon name="search" size={20} className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder={searchPlaceholder}
          />
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.iconButton} aria-label="Quick actions">
          <Icon name="find_replace" size={24} />
        </button>

        <button className={styles.iconButton} aria-label="Notifications">
          <Icon name="notifications" size={24} />
          <span className={styles.notificationDot} />
        </button>

        <button className={styles.avatarButton} aria-label="User menu">
          <Icon name="account_circle" size={28} />
        </button>
      </div>
    </header>
  );
}
