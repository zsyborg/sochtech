import React, { useState, type ReactElement } from 'react';
import { NEON_COLORS, GLOW_INTENSITIES } from '../../lib/theme';

/** Glow intensity level type */
type GlowIntensity = 'low' | 'medium' | 'high';

/**
 * Props for the GlowContainer component.
 */
export interface GlowContainerProps {
  /** Child elements to render inside the container */
  children: React.ReactNode;
  /** Color of the neon glow effect */
  color?: string;
  /** Intensity level of the glow effect */
  intensity?: GlowIntensity;
  /** Whether animations are active */
  animated?: boolean;
  /** Additional CSS class name */
  className?: string;
}

/**
 * GlowContainer - A container component with neon glow effects.
 * 
 * Provides a decorative container with glowing borders and outer glow
 * that intensifies on hover. Perfect for sci-fi UI cards and sections.
 * 
 * @param props - Component props
 * @returns ReactElement with glow styling
 * 
 * @example
 * ```tsx
 * <GlowContainer color="#00ffff" intensity="medium">
 *   <Card>Content</Card>
 * </GlowContainer>
 * ```
 */
export const GlowContainer = ({
  children,
  color = NEON_COLORS.cyan,
  intensity = 'medium',
  animated = true,
  className,
}: GlowContainerProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  
  const intensities = GLOW_INTENSITIES[intensity];
  const blurAmount = isHovered ? intensities.hoverBlur : intensities.blur;

  return (
    <div
      className={className}
      onMouseEnter={() => animated && setIsHovered(true)}
      onMouseLeave={() => animated && setIsHovered(false)}
      style={{
        position: 'relative',
        transition: 'all 0.3s ease-out',
      }}
    >
      {/* Outer glow */}
      <div
        style={{
          position: 'absolute',
          inset: -8,
          background: `radial-gradient(ellipse at center, ${color}33 0%, transparent 70%)`,
          opacity: isHovered ? 0.8 : 0.4,
          transition: 'opacity 0.3s ease-out',
          filter: `blur(${blurAmount}px)`,
          pointerEvents: 'none',
        }}
      />
      {/* Border glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          border: `1px solid ${color}`,
          borderRadius: '8px',
          opacity: isHovered ? 0.8 : 0.5,
          boxShadow: isHovered
            ? `0 0 ${blurAmount}px ${color}40, inset 0 0 ${blurAmount / 2}px ${color}20`
            : `0 0 ${intensities.blur}px ${color}20`,
          transition: 'all 0.3s ease-out',
          pointerEvents: 'none',
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default GlowContainer;
