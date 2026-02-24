import React, { useState, type ReactElement } from 'react';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Button variant types.
 */
type ButtonVariant = 'filled' | 'outline';

/**
 * Props for the NeonButton component.
 */
export interface NeonButtonProps {
  /** Button label or content */
  children: React.ReactNode;
  /** Color of the neon effect */
  color?: string;
  /** Visual variant of the button */
  variant?: ButtonVariant;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class name */
  className?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
}

/**
 * NeonButton - A sci-fi styled button with neon glow effects.
 * 
 * Features a glowing border and background that intensifies on hover.
 * Suitable for call-to-action buttons in futuristic UI designs.
 * 
 * @param props - Component props
 * @returns ReactElement with neon button styling
 * 
 * @example
 * ```tsx
 * <NeonButton color="#00ffff" variant="outline" onClick={handleClick}>
 *   Explore Now
 * </NeonButton>
 * ```
 */
export const NeonButton = ({
  children,
  color = NEON_COLORS.cyan,
  variant = 'outline',
  onClick,
  className = '',
  disabled = false,
}: NeonButtonProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      className={`relative px-8 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 ${className}`}
      style={{
        backgroundColor: variant === 'filled' ? `${color}20` : 'transparent',
        border: `2px solid ${color}`,
        color: color,
        boxShadow: isHovered
          ? `0 0 20px ${color}60, 0 0 40px ${color}30, inset 0 0 20px ${color}10`
          : `0 0 10px ${color}30, 0 0 20px ${color}10`,
        textShadow: isHovered ? `0 0 10px ${color}` : 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
};

export default NeonButton;
