import React, { useState, useEffect, type ReactElement } from 'react';
import { motion } from 'framer-motion';
import { NeonButton } from '../ui/NeonButton';
import { AnimatedFrame } from '../ui/AnimatedFrame';
import { NEON_COLORS, BG_COLORS } from '../../lib/theme';

/**
 * Props for the HeroSection component.
 */
export interface HeroSectionProps {
  /** Section ID for navigation and scrolling */
  id?: string;
  /** Main headline */
  headline?: string;
  /** Subtitle/description */
  subtitle?: string;
  /** Primary CTA button text */
  primaryCtaText?: string;
  /** Secondary CTA button text */
  secondaryCtaText?: string;
  /** Primary CTA click handler */
  onPrimaryCtaClick?: () => void;
  /** Secondary CTA click handler */
  onSecondaryCtaClick?: () => void;
  /** Frame configurations for decorative frames */
  frameConfigs?: Array<{
    color: string;
    label: string;
    sublabel: string;
  }>;
}

/**
 * HeroSection - The main hero section of the sci-fi homepage.
 * 
 * Features:
 * - Animated gradient title with neon glow
 * - Descriptive subtitle
 * - Two CTA buttons with different variants
 * - Decorative animated frames
 * - Scroll indicator animation
 * 
 * @param props - Component props
 * @returns ReactElement with hero section content
 * 
 * @example
 * ```tsx
 * <HeroSection
 *   headline="FUTURE IS NOW"
 *   subtitle="Experience the next generation"
 *   primaryCtaText="Explore Now"
 * />
 * ```
 */
export const HeroSection = ({
  id = 'home',
  headline = 'FUTURE IS\nNOW',
  subtitle = 'Experience the next generation of digital innovation with our cutting-edge technology solutions.',
  primaryCtaText = 'Explore Now',
  secondaryCtaText = 'Learn More',
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  frameConfigs = [
    { color: NEON_COLORS.cyan, label: 'STATUS', sublabel: 'ONLINE' },
    { color: NEON_COLORS.magenta, label: 'NETWORK', sublabel: 'CONNECTED' },
    { color: NEON_COLORS.green, label: 'SECURITY', sublabel: 'ENABLED' },
  ],
}: HeroSectionProps): ReactElement => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTitleVisible(true), 100);
  }, []);

  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '40px' }}
    >
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Animated Title */}
        <div
          style={{
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: titleVisible ? 1 : 0,
            transition: 'all 0.8s ease-out',
          }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 whitespace-pre-line leading-tight"
            style={{
              background: `linear-gradient(135deg, ${NEON_COLORS.cyan}, ${NEON_COLORS.magenta}, ${NEON_COLORS.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
              filter: `drop-shadow(0 0 20px ${NEON_COLORS.cyan}50)`,
            }}
          >
            {headline}
          </h1>
        </div>

        {/* Subtitle */}
        <div
          style={{
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: titleVisible ? 1 : 0,
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto px-4"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 px-4"
          style={{
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: titleVisible ? 1 : 0,
            transition: 'all 0.8s ease-out 0.4s',
          }}
        >
          <NeonButton
            color={NEON_COLORS.cyan}
            className="text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto"
            onClick={onPrimaryCtaClick}
          >
            {primaryCtaText}
          </NeonButton>
          <NeonButton
            color={NEON_COLORS.magenta}
            variant="filled"
            className="text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto"
            onClick={onSecondaryCtaClick}
          >
            {secondaryCtaText}
          </NeonButton>
        </div>

        {/* Decorative Frames */}
        <div className="mt-8 sm:mt-12 hidden lg:mt-16 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-center items-center w-full px-4">
          {frameConfigs.map((config, index) => (
            <div key={index} className="flex justify-center col-span-1">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedFrame color={config.color} size="small">
                  <div className="text-xs sm:text-sm text-center">
                    <span style={{ color: config.color }}>{config.label}</span>
                    <br />
                    {config.sublabel}
                  </div>
                </AnimatedFrame>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hidden"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}
      >
        <span className="mb-2">Scroll</span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: `linear-gradient(to bottom, ${NEON_COLORS.cyan}, transparent)`,
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
