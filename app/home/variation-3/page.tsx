'use client';

import React, { type ReactElement, useState, useEffect } from 'react';
import { BG_COLORS, NEON_COLORS } from '../../lib/theme';
import {
  Navigation,
  Footer,
  ServicesSection,
  ContactSection,
  ParticleBackground,
  ScanningLine,
  GridOverlay,
} from '../../components';

/**
 * Home Page Variation 3 - Mosaic Grid Layout
 * Features:
 * - Asymmetrical masonry-style grid
 * - Variable card sizes and spans
 * - Creative visual hierarchy
 * - Hover reveal effects
 */
export default function HomePageVariation3(): ReactElement {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mosaicCards = [
    { 
      title: 'Quantum Core', 
      description: 'Next-gen processing power',
      icon: '⚛️',
      size: 'large',
      color: NEON_COLORS.cyan 
    },
    { 
      title: 'AI Systems', 
      description: 'Self-learning neural networks',
      icon: '🤖',
      size: 'medium',
      color: NEON_COLORS.magenta 
    },
    { 
      title: 'Cloud Sync', 
      description: 'Seamless data integration',
      icon: '☁️',
      size: 'small',
      color: NEON_COLORS.blue 
    },
    { 
      title: 'Security', 
      description: 'Military-grade encryption',
      icon: '🛡️',
      size: 'medium',
      color: NEON_COLORS.green 
    },
    { 
      title: 'Analytics', 
      description: 'Real-time insights',
      icon: '📊',
      size: 'small',
      color: NEON_COLORS.cyan 
    },
    { 
      title: 'IoT Hub', 
      description: 'Connected device management',
      icon: '🌐',
      size: 'medium',
      color: NEON_COLORS.magenta 
    },
    { 
      title: 'Blockchain', 
      description: 'Decentralized ledger tech',
      icon: '⛓️',
      size: 'large',
      color: NEON_COLORS.blue 
    },
    { 
      title: 'AR/VR', 
      description: 'Immersive experiences',
      icon: '🥽',
      size: 'small',
      color: NEON_COLORS.green 
    },
  ];

  const getGridSpan = (size: string) => {
    switch (size) {
      case 'large': return { gridColumn: 'span 2', gridRow: 'span 2' };
      case 'medium': return { gridColumn: 'span 1', gridRow: 'span 2' };
      default: return { gridColumn: 'span 1', gridRow: 'span 1' };
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: BG_COLORS.dark, color: '#fff' }}>
      <ParticleBackground />
      <ScanningLine />
      <GridOverlay />
      <Navigation />

      <main role="main" style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 20px' }}>
        {/* Hero Section - Asymmetrical */}
        <section style={{ marginBottom: '60px', textAlign: 'center' }}>
          <span style={{ 
            display: 'inline-block',
            padding: '8px 20px',
            border: `1px solid ${NEON_COLORS.magenta}40`,
            borderRadius: '30px',
            fontSize: '12px',
            letterSpacing: '2px',
            color: NEON_COLORS.magenta,
            marginBottom: '20px'
          }}>
            MOSAIC GRID LAYOUT
          </span>
          <h1 style={{ 
            color: NEON_COLORS.magenta, 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            marginBottom: '16px',
            textShadow: `0 0 30px ${NEON_COLORS.magenta}40`
          }}>
            NEXUSCORE
          </h1>
          <p style={{ 
            color: 'rgba(255,255,255,0.7)', 
            maxWidth: '800px', 
            margin: '0 auto',
            fontSize: '1.2rem',
            lineHeight: 1.8
          }}>
            An asymmetrical mosaic layout with variable card sizes and creative visual arrangements. 
            Each element tells a unique story within the collective vision.
          </p>
        </section>

        {/* Mosaic Grid */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            gridAutoFlow: 'dense'
          }} className="mosaic-grid">
            {mosaicCards.map((card, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  ...getGridSpan(card.size),
                  padding: '32px',
                  background: hoveredCard === index 
                    ? `linear-gradient(135deg, ${card.color}15, transparent)` 
                    : 'rgba(255,255,255,0.02)',
                  borderRadius: '20px',
                  border: `1px solid ${hoveredCard === index ? card.color : 'rgba(255,255,255,0.1)'}`,
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  minHeight: card.size === 'large' ? '280px' : card.size === 'medium' ? '280px' : '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Background glow */}
                {hoveredCard === index && (
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, ${card.color}20, transparent 70%)`,
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                )}
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ 
                    fontSize: card.size === 'large' ? '4rem' : '2.5rem', 
                    marginBottom: '16px',
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{ 
                    color: card.color, 
                    fontSize: card.size === 'large' ? '1.8rem' : '1.3rem', 
                    marginBottom: '8px'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '0.95rem',
                    opacity: hoveredCard === index ? 1 : 0.8,
                    transform: hoveredCard === index ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.3s ease'
                  }}>
                    {card.description}
                  </p>
                </div>
                
                {card.size === 'large' && (
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '20px', 
                    right: '20px',
                    opacity: hoveredCard === index ? 1 : 0.5,
                    transition: 'opacity 0.3s'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="18" stroke={card.color} strokeWidth="2" />
                      <path d="M16 20L22 20M22 20L19 23M22 20L19 17" stroke={card.color} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Row */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}>
            {[
              { value: '500+', label: 'Projects', color: NEON_COLORS.cyan },
              { value: '150+', label: 'Clients', color: NEON_COLORS.magenta },
              { value: '50+', label: 'Team', color: NEON_COLORS.green },
              { value: '10+', label: 'Years', color: NEON_COLORS.blue },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: '24px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  border: `1px solid ${stat.color}30`,
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold', 
                  color: stat.color,
                  marginBottom: '8px'
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={{ marginBottom: '60px' }}>
          <ServicesSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .mosaic-grid {
          grid-template-columns: repeat(1, 1fr);
        }
        @media (min-width: 768px) {
          .mosaic-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .mosaic-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}
