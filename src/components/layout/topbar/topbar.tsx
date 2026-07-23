'use client';

import { Icon } from '@/components/icons';
import { Avatar } from '@/components/ui/avatar';
import { useUIStore } from '@/stores/ui-store';
import styles from './topbar.module.css';

interface TopbarProps {
  title: string;
  userName?: string;
  userAvatar?: string | null;
}

export function Topbar({ title, userName = 'User', userAvatar }: TopbarProps) {
  const toggleMobileSidebar = useUIStore((s) => s.toggleMobileSidebar);
  const toggleTheme = useUIStore((s) => s.toggleTheme);
  const theme = useUIStore((s) => s.theme);

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <button
          className={`${styles.iconButton} ${styles.menuButton}`}
          onClick={toggleMobileSidebar}
          aria-label="Toggle navigation menu"
        >
          <Icon name="menu" size={20} />
        </button>
        <h1 className={styles.pageTitle}>{title}</h1>
      </div>

      <div className={styles.right}>
        <button
          className={styles.iconButton}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
        </button>

        <button
          className={styles.iconButton}
          aria-label="Notifications"
        >
          <Icon name="bell" size={20} />
          <span className={styles.notificationDot} />
        </button>

        <div className={styles.divider} />

        <button className={styles.userButton} aria-label="User menu">
          <Avatar name={userName} src={userAvatar} size="sm" />
          <span className={styles.userName}>{userName}</span>
        </button>
      </div>
    </header>
  );
}
