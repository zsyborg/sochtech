import React, { type ReactElement } from 'react';
import { SciFiCard, type SciFiCardProps } from '../ui/SciFiCard';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Feature item configuration.
 */
export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
  stats?: Record<string, string | number>;
}

/**
 * Props for the FeaturesSection component.
 */
export interface FeaturesSectionProps {
  /** Section ID for navigation and scrolling */
  id?: string;
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Features to display */
  features?: FeatureItem[];
  /** Number of columns */
  columns?: 1 | 2 | 3 | 4 | 6;
}

/**
 * FeaturesSection - Displays a grid of feature cards.
 * 
 * Perfect for showcasing product features, services, or capabilities
 * with visual icons and optional statistics.
 * 
 * @param props - Component props
 * @returns ReactElement with features section
 * 
 * @example
 * ```tsx
 * <FeaturesSection
 *   title="FEATURES"
 *   description="Cutting-edge capabilities"
 *   features={[...]}
 * />
 * ```
 */
export const FeaturesSection = ({
  id = 'features',
  title = 'FEATURES',
  description = 'Cutting-edge capabilities designed for the modern digital landscape',
  features = [
    {
      title: 'Quantum Processing',
      description: 'Advanced quantum computing algorithms for lightning-fast data processing and analysis.',
      icon: '⚡',
      color: NEON_COLORS.cyan,
      stats: { Speed: '99.9%', Power: 'Quantum' },
    },
    {
      title: 'Neural Networks',
      description: 'Self-learning AI systems that adapt and evolve with your business needs.',
      icon: '🧠',
      color: NEON_COLORS.magenta,
      stats: { Learning: 'Real-time', Accuracy: '99.7%' },
    },
    {
      title: 'Holographic Display',
      description: 'Immersive 3D visualization technology for enhanced data presentation.',
      icon: '🔮',
      color: NEON_COLORS.green,
      stats: { Depth: '8K', Immersion: '360°' },
    },
    {
      title: 'Blockchain Security',
      description: 'Military-grade encryption and decentralized ledger technology.',
      icon: '🔐',
      color: NEON_COLORS.blue,
      stats: { Security: 'Military', Privacy: '100%' },
    },
    {
      title: 'Cloud Integration',
      description: 'Seamless cloud connectivity with automatic synchronization and backup.',
      icon: '☁️',
      color: NEON_COLORS.cyan,
      stats: { Uptime: '99.99%', Sync: 'Instant' },
    },
    {
      title: 'IoT Connectivity',
      description: 'Connect and control all your devices from a single unified interface.',
      icon: '🌐',
      color: NEON_COLORS.magenta,
      stats: { Devices: 'Unlimited', Range: 'Global' },
    },
  ],
  columns = 3,
}: FeaturesSectionProps): ReactElement => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };

  return (
    <section id={id} className="py-12 sm:py-16 lg:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
            style={{
              color: NEON_COLORS.cyan,
            }}
          >
            {title}
          </h2>
          <p
            className="text-sm sm:text-base lg:text-lg max-w-lg sm:max-w-xl mx-auto"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid ${gridCols[columns]} gap-4 sm:gap-6 lg:gap-8`}>
          {features.map((feature, index) => (
            <SciFiCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              stats={feature.stats}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
