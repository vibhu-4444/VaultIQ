import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from './card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  clickable?: boolean;
  compact?: boolean;
  glowing?: boolean;
}

export function Card({
  hoverable = false,
  clickable = false,
  compact = false,
  glowing = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        styles.card,
        hoverable && styles.hoverable,
        clickable && styles.clickable,
        compact && styles.compact,
        glowing && styles.glowing,
        className
      )}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  action?: ReactNode;
}

export function CardHeader({ title, action, className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn(styles.header, className)} {...props}>
      {title ? <h3 className={styles.headerTitle}>{title}</h3> : children}
      {action && <div className={styles.headerAction}>{action}</div>}
    </div>
  );
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  compact?: boolean;
  noPadding?: boolean;
}

export function CardBody({ compact = false, noPadding = false, className, children, ...props }: CardBodyProps) {
  return (
    <div
      className={cn(
        compact ? styles.compactBody : styles.body,
        noPadding && styles.noPadding,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(styles.footer, className)} {...props}>
      {children}
    </div>
  );
}
