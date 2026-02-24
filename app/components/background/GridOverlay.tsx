import React, { type ReactElement } from 'react';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Props for the GridOverlay component.
 */
export interface GridOverlayProps {
  /** Color of the grid lines */
  color?: string;
  /** Opacity of the grid lines (0-1) */
  opacity?: number;
  /** Grid cell size in pixels */
  cellSize?: number;
  /** Whether the grid is visible */
  visible?: boolean;
}

/**
 * GridOverlay - A retro-futuristic grid pattern overlay.
 * 
 * Renders a perspective or flat grid pattern on the background,
 * creating a retro-futuristic/Cyberpunk aesthetic.
 * 
 * @param props - Component props
 * @returns ReactElement with grid overlay
 * 
 * @example
 * ```tsx
 * <GridOverlay color="#00ffff" opacity={0.03} cellSize={50} />
 * ```
 */
export const GridOverlay = ({
  color = NEON_COLORS.cyan,
  opacity = 0.03,
  cellSize = 50,
  visible = true,
}: GridOverlayProps): ReactElement => {
  if (!visible) return <></>;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 1px, transparent 1px),
          linear-gradient(90deg, ${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 1px, transparent 1px)
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default GridOverlay;
