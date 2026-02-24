import React, { useState, type ReactElement } from 'react';
import { motion } from 'framer-motion';
import { NEON_COLORS, SIZES } from '../../lib/theme';

/**
 * Size options for AnimatedFrame.
 */
type FrameSize = keyof typeof SIZES;

/**
 * Props for the AnimatedFrame component.
 */
export interface AnimatedFrameProps {
  /** Child content to display inside the frame */
  children: React.ReactNode;
  /** Color of the frame theme */
  color?: string;
  /** Size of the frame */
  size?: FrameSize;
  /** Whether to animate on hover */
  animateOnHover?: boolean;
  /** Custom class name for additional styling */
  className?: string;
}

/**
 * Responsive sizes for different screen breakpoints
 */
const responsiveSizes = {
  small: { default: 200, md: 200, lg: 200 },
  medium: { default: 280, md: 300, lg: 320 },
  large: { default: 320, md: 400, lg: 500 },
};

/**
 * AnimatedFrame - A custom sci-fi frame with hover animations.
 *
 * Features custom hover effects and responsive sizing options.
 * Perfect for decorative info displays with a sci-fi aesthetic.
 *
 * @param props - Component props
 * @returns ReactElement with animated frame styling
 *
 * @example
 * ```tsx
 * <AnimatedFrame color="#00ffff" size="medium">
 *   <p>System Status: Online</p>
 * </AnimatedFrame>
 * ```
 */
export const AnimatedFrame = ({
  children,
  color = NEON_COLORS.cyan,
  size = 'medium',
  animateOnHover = true,
  className,
}: AnimatedFrameProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  const sizes = responsiveSizes[size];

  return (
    <div
      className={className}
      onMouseEnter={() => animateOnHover && setIsHovered(true)}
      onMouseLeave={() => animateOnHover && setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: sizes.default,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* Responsive sizing using CSS media queries */}
      <style jsx>{`
        div {
          max-width: ${sizes.default}px;
        }
        @media (min-width: 768px) {
          div {
            max-width: ${sizes.md}px;
          }
        }
        @media (min-width: 1024px) {
          div {
            max-width: ${sizes.lg}px;
          }
        }
      `}</style>
       
      {/* Custom sci-fi frame with Framer Motion animation */}
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          border: `2px solid ${color}`,
          borderRadius: '8px',
          boxShadow: `0 0 20px ${color}50`,
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(5px)',
        }}
        whileHover={{
          scale: animateOnHover ? 1.05 : 1,
          boxShadow: animateOnHover ? `0 0 30px ${color}80` : `0 0 20px ${color}50`,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '16px',
            textAlign: 'center',
            color: '#fff',
            width: '100%',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedFrame;
