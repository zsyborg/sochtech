'use client';

import React, { type ReactElement, useState, useEffect } from 'react';
import { BG_COLORS, NEON_COLORS } from '../../lib/theme';
import {
  Navigation,
  Footer,
  FeaturesSection,
  ServicesSection,
  ContactSection,
  ParticleBackground,
  ScanningLine,
  GridOverlay,
} from '../../components';

/**
 * Home Page Variation 1 - Split Layout
 * Features:
 * - Split-screen hero with text on left, visual on right
 * - Asymmetrical feature tiles
 * - Side-by-side services comparison
 * - Horizontal scroll indicators
 */
export default function HomePageVariation1(): ReactElement {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { title: 'Quantum Processing', icon: '⚡', color: NEON_COLORS.cyan },
    { title: 'Neural Networks', icon: '🧠', color: NEON_COLORS.magenta },
    { title: 'Holographic Display', icon: '🔮', color: NEON_COLORS.green },
    { title: 'Blockchain Security', icon: '🔐', color: NEON_COLORS.blue },
  ];

  return (
    <div style={{ minHeight: '100vh', background: BG_COLORS.dark, color: '#fff' }}>
      <ParticleBackground />
      <ScanningLine />
      <GridOverlay />
      <Navigation />

      <main role="main" style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 20px' }}>
        {/* Hero Section - Split Layout */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          minHeight: '70vh'
        }}>
          <div>
            <span style={{ 
              display: 'inline-block',
              padding: '8px 16px',
              border: `1px solid ${NEON_COLORS.cyan}40`,
              borderRadius: '30px',
              fontSize: '12px',
              letterSpacing: '2px',
              color: NEON_COLORS.cyan,
              marginBottom: '24px'
            }}>
              SPLIT LAYOUT DESIGN
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: NEON_COLORS.cyan, marginBottom: '20px', lineHeight: 1.1 }}>
              NEXUSCORE
              <span style={{ display: 'block', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'rgba(255,255,255,0.8)', marginTop: '8px' }}>
                Split Vision
              </span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px', lineHeight: 1.8, fontSize: '1.1rem' }}>
              A dynamic split layout that balances content and visuals for maximum impact. 
              Perfect for showcasing products and services with equal emphasis on information and aesthetics.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#services" style={{ 
                padding: '14px 32px', 
                background: NEON_COLORS.cyan, 
                color: '#000', 
                borderRadius: '8px', 
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${NEON_COLORS.cyan}40`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Our Services
              </a>
              <a href="#contact" style={{ 
                padding: '14px 32px', 
                border: `2px solid ${NEON_COLORS.magenta}`, 
                borderRadius: '8px', 
                color: NEON_COLORS.magenta, 
                textDecoration: 'none',
                fontWeight: '700',
                transition: 'transform 0.3s, background 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${NEON_COLORS.magenta}10`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                Contact Us
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ 
              height: '400px', 
              borderRadius: '20px', 
              background: `linear-gradient(135deg, ${NEON_COLORS.cyan}10, ${NEON_COLORS.magenta}10)`,
              border: `1px solid ${NEON_COLORS.cyan}20`,
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                fontSize: '8rem', 
                opacity: 0.15,
                animation: 'float 4s ease-in-out infinite'
              }}>🛰️</div>
              
              {/* Floating elements */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: `${30 + Math.random() * 50}px`,
                    height: '2px',
                    background: NEON_COLORS.cyan,
                    opacity: 0.3,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `slide ${5 + Math.random() * 5}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
            
            {/* Floating cards */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              padding: '16px 24px',
              background: 'rgba(0,0,0,0.8)',
              borderRadius: '12px',
              border: `1px solid ${NEON_COLORS.magenta}50`,
              backdropFilter: 'blur(10px)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>Active Projects</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: NEON_COLORS.magenta }}>127+</div>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-15px',
              padding: '16px 24px',
              background: 'rgba(0,0,0,0.8)',
              borderRadius: '12px',
              border: `1px solid ${NEON_COLORS.cyan}50`,
              backdropFilter: 'blur(10px)',
              animation: 'float 4s ease-in-out infinite',
              animationDelay: '1s'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>Client Rating</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: NEON_COLORS.cyan }}>4.9/5</div>
            </div>
          </div>
        </section>

        {/* Feature Tiles - Asymmetrical Grid */}
        <section id="features" style={{ marginTop: '100px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#fff', marginBottom: '12px' }}>
              Key Features
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>
              Explore our cutting-edge capabilities
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                style={{
                  padding: '28px',
                  background: index === activeFeature ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                  borderRadius: '16px',
                  border: `1px solid ${index === activeFeature ? feature.color : 'rgba(255,255,255,0.1)'}`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ color: feature.color, fontSize: '1.1rem', marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Advanced technology solutions for modern challenges.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section - Side by Side */}
        <section id="services" style={{ marginTop: '100px' }}>
          <ServicesSection />
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ marginTop: '100px' }}>
          <ContactSection />
        </section>
      </main>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slide {
          0% { transform: translateX(0); opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { transform: translateX(100px); opacity: 0; }
        }
      `}</style>
      
      <Footer />
    </div>
  );
}
