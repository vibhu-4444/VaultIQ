import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import styles from './skeleton.module.css';

export type SkeletonVariant = 'text' | 'heading' | 'circle' | 'card' | 'chart';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  variant,
  width,
  height,
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        styles.skeleton,
        variant && styles[variant],
        className
      )}
      style={{
        width: width ?? undefined,
        height: height ?? undefined,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}
