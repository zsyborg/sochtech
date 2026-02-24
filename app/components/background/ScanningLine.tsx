import React, { useState, useEffect, type ReactElement } from 'react';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Custom hook that manages an oscillating scanning line position.
 */
const useScanningLine = (): number => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((pos) => {
        const newPos = pos + direction * 0.5;
        if (newPos >= 100) {
          setDirection(-1);
          return 100;
        }
        if (newPos <= 0) {
          setDirection(1);
          return 0;
        }
        return newPos;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [direction]);

  return position;
};

/**
 * Props for the ScanningLine component.
 */
export interface ScanningLineProps {
  /** Color of the scanning line */
  color?: string;
  /** Speed of the scanning animation (1 = normal) */
  speed?: number;
  /** Thickness of the line in pixels */
  thickness?: number;
  /** Whether the animation is active */
  active?: boolean;
}

/**
 * ScanningLine - An animated horizontal scanning line effect.
 * 
 * Creates a glowing line that moves vertically across the screen,
 * simulating a radar or scanner sweep effect. Perfect for sci-fi backgrounds.
 * 
 * @param props - Component props
 * @returns ReactElement with scanning line overlay
 * 
 * @example
 * ```tsx
 * <ScanningLine color="#00ffff" speed={1} thickness={2} />
 * ```
 */
export const ScanningLine = ({
  color = NEON_COLORS.cyan,
  speed = 1,
  thickness = 2,
  active = true,
}: ScanningLineProps): ReactElement => {
  const position = useScanningLine();

  if (!active) {
    return <></>;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: `${position}%`,
        left: 0,
        right: 0,
        height: thickness,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}50`,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default ScanningLine;
