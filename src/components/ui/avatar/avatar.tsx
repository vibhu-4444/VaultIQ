import type { HTMLAttributes } from 'react';
import { cn, getInitials } from '@/lib/utils';
import styles from './avatar.module.css';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline';
}

export function Avatar({
  src,
  name,
  size = 'md',
  status,
  className,
  ...props
}: AvatarProps) {
  const initials = getInitials(name);

  return (
    <div
      className={cn(styles.avatar, styles[size], className)}
      aria-label={name}
      role="img"
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className={styles.image}
          loading="lazy"
        />
      ) : (
        initials
      )}
      {status && (
        <span
          className={cn(styles.status, styles[status])}
          aria-label={status === 'online' ? 'Online' : 'Offline'}
        />
      )}
    </div>
  );
}
