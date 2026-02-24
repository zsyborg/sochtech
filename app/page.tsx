'use client';

import React, { type ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BG_COLORS, NEON_COLORS } from './lib/theme';

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
} from './components';

import {convertAniBinaryToCSS} from 'ani-cursor';



async function applyCursor(selector: string, aniUrl: string | URL | Request) {
    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());

    const style = document.createElement('style');
    style.innerText = convertAniBinaryToCSS(selector, data);

    document.head.appendChild(style);
}

/**
 * Main Sci-Fi Homepage
 * 
 * The main entry point for the sci-fi themed homepage.
 * Uses modular components for better maintainability.
*/
export default function SciFiHomepage(): ReactElement {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>('hero');

  const onPrimaryCtaClick = () => router.push('/services');
  const onSecondaryCtaClick = () => router.push('/about');

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    applyCursor('.ani-cursor', '/cursors/01.ani');

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
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>

      {/* Background Effects */}
      <ParticleBackground />
      <ScanningLine />
      <GridOverlay />

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Content */}
      <main>
        <HeroSection
          id="hero"
          onPrimaryCtaClick={onPrimaryCtaClick}
          onSecondaryCtaClick={onSecondaryCtaClick}
        />
        {/* <StatsSection id="stats" /> */}
        <FeaturesSection id="features" />
        <ServicesSection id="services" />
        <ContactSection id="contact" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
