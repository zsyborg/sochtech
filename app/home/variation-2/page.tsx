'use client';

import React, { type ReactElement, useState, useEffect } from 'react';
import { BG_COLORS, NEON_COLORS } from '../../lib/theme';

// Import from modular components
import {
  Navigation,
  Footer,
  HeroSection,
  FeaturesSection,
  StatsSection,
  ServicesSection,
  ContactSection,
  ParticleBackground,
  ScanningLine,
  GridOverlay,
} from '../../components';

/**
 * Home Page Variation 2 - Centered Layout
 * Features:
 * - Centered content alignment
 * - Alternating section layouts
 * - Animated background with different effects
 * - Horizontal card arrangements
 */
export default function HomePageVariation2(): ReactElement {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollTop / docHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    sections.forEach((section) => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        backgroundColor: BG_COLORS.dark,
        minHeight: '100vh',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        overflowX: 'hidden',
      }}
    >
      {/* Global Styles */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${NEON_COLORS.cyan}, ${NEON_COLORS.magenta})`,
          width: `${scrollProgress * 100}%`,
          zIndex: 1000,
          transition: 'width 0.1s ease-out',
        }}
      />

      {/* Background Effects */}
      <ParticleBackground />
      <ScanningLine />
      <GridOverlay />

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Content - Centered Layout */}
      <main style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Hero Section - Centered */}
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '900px' }}>
            <div className="scale-in" style={{ animationDelay: '0.1s' }}>
              <span style={{ 
                display: 'inline-block', 
                padding: '8px 20px', 
                border: `1px solid ${NEON_COLORS.cyan}`,
                borderRadius: '30px',
                fontSize: '12px',
                letterSpacing: '2px',
                marginBottom: '20px',
                color: NEON_COLORS.cyan
              }}>
                🚀 WELCOME TO THE FUTURE
              </span>
            </div>
            <h1 className="slide-in-left" style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
              fontWeight: 'bold',
              marginBottom: '20px',
              background: `linear-gradient(135deg, #fff 0%, ${NEON_COLORS.cyan} 50%, ${NEON_COLORS.magenta} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              NEXUSCORE
            </h1>
            <p className="slide-in-right" style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              Pioneering the next generation of digital innovation. Experience technology that transforms how you work, create, and connect.
            </p>
            <div className="scale-in" style={{ animationDelay: '0.3s' }}>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button style={{
                  padding: '15px 40px',
                  background: `linear-gradient(135deg, ${NEON_COLORS.cyan}, ${NEON_COLORS.blue})`,
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = `0 0 30px ${NEON_COLORS.cyan}50`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  Get Started
                </button>
                <button style={{
                  padding: '15px 40px',
                  background: 'transparent',
                  border: `2px solid ${NEON_COLORS.magenta}`,
                  borderRadius: '8px',
                  color: NEON_COLORS.magenta,
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = `0 0 30px ${NEON_COLORS.magenta}50`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Centered with Cards */}
        <section id="stats" style={{ padding: '80px 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { value: '500+', label: 'Projects Delivered', color: NEON_COLORS.cyan },
              { value: '150+', label: 'Clients Worldwide', color: NEON_COLORS.magenta },
              { value: '50+', label: 'Team Members', color: NEON_COLORS.green },
              { value: '10+', label: 'Years Experience', color: NEON_COLORS.blue },
            ].map((stat, index) => (
              <div key={index} className="scale-in" style={{ 
                textAlign: 'center', 
                padding: '30px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: `1px solid ${stat.color}30`,
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: stat.color, marginBottom: '10px' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section - Alternating Layout */}
        <section id="features" style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: NEON_COLORS.cyan, marginBottom: '15px' }}>
                FEATURES
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
                Cutting-edge capabilities designed for the modern digital landscape
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              {[
                { title: 'Quantum Processing', description: 'Advanced quantum computing algorithms for lightning-fast data processing.', icon: '⚡', color: NEON_COLORS.cyan },
                { title: 'Neural Networks', description: 'Self-learning AI systems that adapt and evolve with your business needs.', icon: '🧠', color: NEON_COLORS.magenta },
                { title: 'Holographic Display', description: 'Immersive 3D visualization technology for enhanced data presentation.', icon: '🔮', color: NEON_COLORS.green },
                { title: 'Blockchain Security', description: 'Military-grade encryption and decentralized ledger technology.', icon: '🔐', color: NEON_COLORS.blue },
                { title: 'Cloud Integration', description: 'Seamless cloud connectivity with automatic synchronization.', icon: '☁️', color: NEON_COLORS.cyan },
                { title: 'IoT Connectivity', description: 'Connect and control all devices from a unified interface.', icon: '🌐', color: NEON_COLORS.magenta },
              ].map((feature, index) => (
                <div key={index} style={{ 
                  padding: '30px', 
                  background: 'rgba(255,255,255,0.02)', 
                  borderRadius: '16px', 
                  border: `1px solid ${feature.color}30`,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.borderColor = feature.color;
                  e.currentTarget.style.boxShadow = `0 0 30px ${feature.color}20`;
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.borderColor = `${feature.color}30`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{feature.icon}</div>
                  <h3 style={{ color: feature.color, fontSize: '1.3rem', marginBottom: '10px' }}>{feature.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Horizontal Cards */}
        <section id="services" style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: NEON_COLORS.magenta, marginBottom: '15px' }}>
                SERVICES
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive solutions tailored to your unique requirements
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {[
                { title: 'IT Development', description: 'Full-stack development, cloud infrastructure, and cybersecurity solutions.', icon: '💻', color: NEON_COLORS.cyan, align: 'left' },
                { title: 'Software Solutions', description: 'Tailored software products including ERP systems and CRM platforms.', icon: '📦', color: NEON_COLORS.magenta, align: 'right' },
                { title: 'Animation Services', description: 'Captivating visual storytelling through 3D animation and AR/VR.', icon: '🎬', color: NEON_COLORS.green, align: 'left' },
              ].map((service, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '40px',
                  padding: '40px',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '20px',
                  border: `1px solid ${service.color}20`,
                  flexDirection: service.align === 'right' ? 'row-reverse' : 'row',
                  flexWrap: 'wrap',
                }}>
                  <div style={{ flex: '1', minWidth: '280px' }}>
                    <div style={{ 
                      width: '80px', 
                      height: '80px', 
                      borderRadius: '50%', 
                      background: `${service.color}15`,
                      border: `2px solid ${service.color}`,
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '2rem',
                      marginBottom: '20px',
                    }}>
                      {service.icon}
                    </div>
                    <h3 style={{ color: service.color, fontSize: '1.8rem', marginBottom: '15px' }}>{service.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '20px' }}>{service.description}</p>
                    <button style={{
                      padding: '12px 30px',
                      background: 'transparent',
                      border: `2px solid ${service.color}`,
                      borderRadius: '8px',
                      color: service.color,
                      fontSize: '14px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = service.color; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = service.color; }}
                    >
                      Explore Services
                    </button>
                  </div>
                  <div style={{ 
                    flex: '1', 
                    minWidth: '280px', 
                    height: '250px',
                    background: `linear-gradient(135deg, ${service.color}10, transparent)`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${service.color}30`,
                  }}>
                    <div style={{ 
                      fontSize: '4rem', 
                      opacity: 0.3,
                      animation: 'float 3s ease-in-out infinite',
                    }}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Centered */}
        <section id="contact" style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: NEON_COLORS.green, marginBottom: '15px' }}>
                GET IN TOUCH
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                Ready to transform your digital presence? Let's talk.
              </p>
            </div>
            
            <form style={{ 
              padding: '40px', 
              background: 'rgba(255,255,255,0.02)', 
              borderRadius: '20px',
              border: `1px solid ${NEON_COLORS.green}30`,
            }}>
              <div style={{ display: 'grid', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', color: NEON_COLORS.green, marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase' }}>Name</label>
                  <input type="text" placeholder="Your name" style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(0,0,0,0.5)',
                    border: `1px solid ${NEON_COLORS.green}30`,
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = NEON_COLORS.green; }}
                  onBlur={(e) => { e.target.style.borderColor = `${NEON_COLORS.green}30`; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: NEON_COLORS.green, marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase' }}>Email</label>
                  <input type="email" placeholder="your@email.com" style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(0,0,0,0.5)',
                    border: `1px solid ${NEON_COLORS.green}30`,
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = NEON_COLORS.green; }}
                  onBlur={(e) => { e.target.style.borderColor = `${NEON_COLORS.green}30`; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: NEON_COLORS.green, marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase' }}>Message</label>
                  <textarea placeholder="Your message" rows={5} style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(0,0,0,0.5)',
                    border: `1px solid ${NEON_COLORS.green}30`,
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '16px',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = NEON_COLORS.green; }}
                  onBlur={(e) => { e.target.style.borderColor = `${NEON_COLORS.green}30`; }}
                  />
                </div>
                <button type="submit" style={{
                  padding: '15px 40px',
                  background: NEON_COLORS.green,
                  border: 'none',
                  borderRadius: '8px',
                  color: '#000',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
