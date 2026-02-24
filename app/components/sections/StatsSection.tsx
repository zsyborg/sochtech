import React, { type ReactElement } from 'react';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Stats item configuration.
 */
export interface StatItem {
  value: string;
  label: string;
}

/**
 * Props for the StatsSection component.
 */
export interface StatsSectionProps {
  /** Section ID for navigation and scrolling */
  id?: string;
  /** Statistics to display */
  stats?: StatItem[];
  /** Number of columns */
  columns?: 2 | 3 | 4;
}

/**
 * StatsSection - Displays animated statistics with gradient values.
 * 
 * Features:
 * - Gradient text effects
 * - Responsive grid layout
 * - Configurable statistics
 * 
 * @param props - Component props
 * @returns ReactElement with statistics section
 * 
 * @example
 * ```tsx
 * <StatsSection
 *   stats={[
 *     { value: '10M+', label: 'Active Users' },
 *     { value: '99.9%', label: 'Uptime' },
 *   ]}
 * />
 * ```
 */
export const StatsSection = ({
  id = 'stats',
  stats = [
    { value: '10M+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '150+', label: 'Countries' },
    { value: '24/7', label: 'Support' },
  ],
  columns = 4,
}: StatsSectionProps): ReactElement => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  const fontSizes = {
    2: 'text-3xl sm:text-4xl',
    3: 'text-2xl sm:text-3xl lg:text-4xl',
    4: 'text-xl sm:text-2xl lg:text-3xl',
  };

  return (
    <section id={id} className="py-8 sm:py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${gridCols[columns]} gap-4 sm:gap-6 lg:gap-8`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`${fontSizes[columns]} font-bold mb-2`}
                style={{
                  background: `linear-gradient(135deg, ${NEON_COLORS.cyan}, ${NEON_COLORS.magenta})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs sm:text-sm"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
