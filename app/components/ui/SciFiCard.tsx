import React, { useState, type ReactElement } from 'react';
import { GlowContainer, type GlowContainerProps } from './GlowContainer';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Stats display for SciFiCard.
 */
export interface SciFiCardStats {
  [key: string]: string | number;
}

/**
 * Props for the SciFiCard component.
 */
export interface SciFiCardProps {
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Color theme for the card */
  color?: string;
  /** Statistics to display in a grid */
  stats?: SciFiCardStats;
  /** Props passed to the GlowContainer wrapper */
  glowContainerProps?: Omit<GlowContainerProps, 'children'>;
}

/**
 * SciFiCard - A futuristic card component with sci-fi styling.
 * 
 * Features:
 * - Decorative corner elements
 * - Optional icon with glow effect
 * - Optional statistics grid
 * - Hover animation with glow intensification
 * 
 * @param props - Component props
 * @returns ReactElement with sci-fi card styling
 * 
 * @example
 * ```tsx
 * <SciFiCard
 *   title="Quantum Processing"
 *   description="Lightning-fast data processing"
 *   icon="⚡"
 *   color="#00ffff"
 *   stats={{ Speed: '99.9%', Power: 'Quantum' }}
 * />
 * ```
 */
export const SciFiCard = ({
  title,
  description,
  icon,
  color = NEON_COLORS.cyan,
  stats,
  glowContainerProps,
}: SciFiCardProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GlowContainer
      color={color}
      intensity="medium"
      animated={isHovered}
      {...glowContainerProps}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="p-6 h-full"
        style={{
          background: 'rgba(20, 20, 40, 0.6)',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease-out',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Decorative corner elements */}
        <CornerDecoration color={color} position="top-left" />
        <CornerDecoration color={color} position="top-right" />
        <CornerDecoration color={color} position="bottom-left" />
        <CornerDecoration color={color} position="bottom-right" />

        {/* Content */}
        <div className="relative z-10">
          {icon && (
            <div
              style={{
                color: color,
                marginBottom: '16px',
                fontSize: '32px',
                filter: isHovered ? `drop-shadow(0 0 10px ${color})` : 'none',
                transition: 'filter 0.3s ease-out',
              }}
            >
              {icon}
            </div>
          )}
          <h3
            style={{
              color: color,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '8px',
              textShadow: isHovered ? `0 0 10px ${color}60` : 'none',
              transition: 'text-shadow 0.3s ease-out',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              marginBottom: stats ? '16px' : 0,
            }}
          >
            {description}
          </p>
          {stats && (
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(stats).map(([key, value]) => (
                <div key={key} className="text-xs">
                  <span
                    style={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {key}
                  </span>
                  <div style={{ color, fontWeight: 'bold' }}>{value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </GlowContainer>
  );
};

/**
 * Corner decoration for SciFiCard.
 */
const CornerDecoration = ({
  color,
  position,
}: {
  color: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}): ReactElement => {
  const styles: Record<string, React.CSSProperties> = {
    'top-left': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '20px',
      height: '20px',
      borderTop: `2px solid ${color}`,
      borderLeft: `2px solid ${color}`,
    },
    'top-right': {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '20px',
      height: '20px',
      borderTop: `2px solid ${color}`,
      borderRight: `2px solid ${color}`,
    },
    'bottom-left': {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '20px',
      height: '20px',
      borderBottom: `2px solid ${color}`,
      borderLeft: `2px solid ${color}`,
    },
    'bottom-right': {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '20px',
      height: '20px',
      borderBottom: `2px solid ${color}`,
      borderRight: `2px solid ${color}`,
    },
  };

  return <div style={styles[position]} />;
};

export default SciFiCard;
