import React, { type ReactElement } from 'react';
import Link from 'next/link';
import { GlowContainer } from '../ui/GlowContainer';
import { NeonButton } from '../ui/NeonButton';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Service item configuration.
 */
export interface ServiceItem {
  title: string;
  description: string;
  tagline: string;
  icon: string;
  color?: string;
  buttonText?: string;
  href?: string;
}

/**
 * Props for the ServicesSection component.
 */
export interface ServicesSectionProps {
  /** Section ID for navigation and scrolling */
  id?: string;
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Services to display */
  services?: ServiceItem[];
}

/**
 * ServicesSection - Displays service offerings with glow effects.
 * 
 * Features:
 * - Large icon headers
 * - Detailed descriptions
 * - CTA buttons with neon styling
 * - Glowing container effects
 * 
 * @param props - Component props
 * @returns ReactElement with services section
 * 
 * @example
 * ```tsx
 * <ServicesSection
 *   title="SERVICES"
 *   description="Comprehensive solutions"
 *   services={[...]}
 * />
 * ```
 */
export const ServicesSection = ({
  id = 'services',
  title = 'SERVICES',
  description = 'Comprehensive solutions tailored to your unique requirements',
  services = [
    {
      title: 'IT Development',
      description: 'Full-stack development, cloud infrastructure, and cybersecurity solutions powering your digital transformation with cutting-edge technology and best practices.',
      icon: '💻',
      tagline: 'Comprehensive technology solutions',
      color: NEON_COLORS.cyan,
      buttonText: 'Explore IT Services',
      href: '/services#it-development',
    },
    {
      title: 'Software Solutions',
      description: 'Tailored software products including ERP systems, CRM platforms, and mobile applications designed to address your unique business challenges.',
      icon: '📦',
      tagline: 'Enterprise-grade software products',
      color: NEON_COLORS.magenta,
      buttonText: 'View Software',
      href: '/services#software-solutions',
    },
    {
      title: 'Animation Services',
      description: 'Captivating visual storytelling through 3D character animation, motion graphics, and immersive interactive experiences using AR/VR technologies.',
      icon: '🎬',
      tagline: 'Creative visual storytelling',
      color: NEON_COLORS.green,
      buttonText: 'Discover Animation',
      href: '/services#animation',
    },
    {
      title: 'AI Services',
      description: 'Intelligent automation and machine learning solutions that transform data into competitive advantage through NLP, computer vision, and predictive analytics.',
      icon: '🧠',
      tagline: 'Next-generation AI solutions',
      color: NEON_COLORS.blue,
      buttonText: 'Learn About AI',
      href: '/services#ai-services',
    },
  ],
}: ServicesSectionProps): ReactElement => {
  return (
    <section id={id} className="py-12 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
            style={{
              color: NEON_COLORS.magenta,
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <GlowContainer
              key={index}
              color={service.color || NEON_COLORS.cyan}
              intensity="high"
            >
              <div className="p-4 sm:p-6 lg:p-8" style={{ background: 'rgba(20, 20, 40, 0.6)', borderRadius: '8px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px sm:mb-6 lg:mb-8',
                    flexDirection: 'row',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: `${service.color || NEON_COLORS.cyan}20`,
                      border: `2px solid ${service.color || NEON_COLORS.cyan}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3
                      className="text-lg sm:text-xl lg:text-1.5rem font-bold"
                      style={{
                        color: service.color || NEON_COLORS.cyan,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm"
                      style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm sm:text-base mb-4 sm:mb-6 mt-6"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href={service.href || '/services'}>
                    <NeonButton
                      color={service.color || NEON_COLORS.cyan}
                      className="text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
                    >
                      {service.buttonText || 'Learn More'}
                    </NeonButton>
                  </Link>
                </div>
              </div>
            </GlowContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
