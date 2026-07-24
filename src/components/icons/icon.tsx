import { cn } from '@/lib/utils';

/**
 * Material Symbols icon component.
 * Uses Google Material Symbols Outlined variable font.
 * No icon library dependency — just renders the font glyph.
 *
 * @see https://fonts.google.com/icons
 */
export interface IconProps {
  /** Material Symbols icon name (e.g., "dashboard", "payments") */
  name: string;
  /** Icon size in pixels */
  size?: number;
  /** Whether to use filled variant */
  filled?: boolean;
  /** Additional CSS class */
  className?: string;
}

export function Icon({ name, size = 20, filled = false, className }: IconProps) {
  return (
    <span
      className={cn(
        'material-symbols-outlined',
        filled && 'fill-icon',
        className
      )}
      style={{
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: `${size}px`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
