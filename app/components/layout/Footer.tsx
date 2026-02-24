import React, { type ReactElement, useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaTelegram, FaSlack } from 'react-icons/fa';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Social link configuration.
 */
export interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

/**
 * Footer link configuration.
 */
export interface FooterLink {
  label: string;
  url: string;
}

/**
 * Props for the Footer component.
 */
export interface FooterProps {
  /** Company name for branding */
  companyName?: string;
  /** Tagline or description */
  tagline?: string;
  /** Quick links to display */
  quickLinks?: FooterLink[];
  /** Legal links to display */
  legalLinks?: FooterLink[];
  /** Social links to display */
  socialLinks?: SocialLink[];
  /** Copyright text */
  copyrightText?: string;
  /** Callback when a link is clicked */
  onLinkClick?: (url: string) => void;
}

/**
 * Interface for quote data from quotable.io API
 */
interface Quote {
  content: string;
  author: string;
}

/**
 * Footer - A sci-fi styled footer component.
 * 
 * Features:
 * - Branded logo with glowing effect
 * - Quick links and legal links sections
 * - Social media icons with hover effects
 * - Responsive grid layout
 * 
 * @param props - Component props
 * @returns ReactElement with footer content
 * 
 * @example
 * ```tsx
 * <Footer
 *   companyName="SochTechnologies"
 *   tagline="Pioneering the future"
 *   quickLinks={[{ label: 'Home', url: '#home' }]}
 * />
 * ```
 */
export const Footer = ({
  companyName = 'Soch Technologies',
  tagline = 'Pioneering the future of digital innovation with cutting-edge technology solutions.',
  quickLinks = [
    { label: 'Home', url: '/home' },
    { label: 'About Us', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Blog', url: '/blog' },
  ],
  legalLinks = [
    { label: 'Privacy Policy', url: '#privacy' },
    { label: 'Terms of Service', url: '#terms' },
    { label: 'Cookie Policy', url: '#cookies' },
  ],
  socialLinks = [
    { icon: <FaTwitter />, url: '#twitter', label: 'Twitter' },
    { icon: <FaLinkedin />, url: '#linkedin', label: 'LinkedIn' },
    { icon: <FaTelegram />, url: '#telegram', label: 'Telegram' },
    { icon: <FaInstagram />, url: '#instagram', label: 'Instagram' },
    { icon: <FaSlack />, url: '#slack', label: 'Slack' },
  ],
  copyrightText = `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`,
  onLinkClick,
}: FooterProps): ReactElement => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = NEON_COLORS.cyan;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = 'rgba(255, 255, 255, 0.6)';
  };

  // Fetch random quote from quotable.io
  const [quote, setQuote] = useState<Quote | null>(null);
  const [quoteLoading, setQuoteLoading] = useState(true);
  const [quoteError, setQuoteError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) throw new Error('Failed to fetch quote');
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuoteError(true);
      } finally {
        setQuoteLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <footer
      style={{
        borderTop: `1px solid ${NEON_COLORS.cyan}30`,
        padding: '48px 32px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: NEON_COLORS.cyan,
                textShadow: `0 0 10px ${NEON_COLORS.cyan}80`,
                marginBottom: '16px',
              }}
            >
              {/* {companyName}
              <span style={{ color: NEON_COLORS.magenta }}>CORE</span> */}
          <img src="/logo.png" alt="Soch Technologies Logo" style={{ height: '33px', width: 'auto' }} />

            </div>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '14px',
                lineHeight: 1.8,
              }}
            >
              {tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontWeight: 'bold',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: '8px' }}>
                  <a
                    href={link.url}
                    className="transition-colors duration-300"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => onLinkClick?.(link.url)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className='hidden'>
            <h4
              style={{
                color: '#fff',
                fontWeight: 'bold',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {legalLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: '8px' }}>
                  <a
                    href={link.url}
                    className="transition-colors duration-300"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => onLinkClick?.(link.url)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote of the moment */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontWeight: 'bold',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Quote of the moment
            </h4>
            {quoteLoading ? (
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', fontStyle: 'italic' }}>
                Loading quote...
              </p>
            ) : quoteError ? (
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', fontStyle: 'italic' }}>
                "The only way to do great work is to love what you do."
                <span style={{ display: 'block', marginTop: '8px', color: NEON_COLORS.cyan }}>
                  — Steve Jobs
                </span>
              </p>
            ) : quote ? (
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', fontStyle: 'italic' }}>
                "{quote.content}"
                <span style={{ display: 'block', marginTop: '8px', color: NEON_COLORS.cyan }}>
                  — {quote.author}
                </span>
              </p>
            ) : null}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontWeight: 'bold',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Contact
            </h4>
            <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '8px' }}>
                <span style={{ color: NEON_COLORS.cyan }}>Email:</span>{' '}
                <a
                  href="mailto:info@sochtechnologies.com"
                  style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  info@sochtechnologies.com
                </a>
              </p>
              <p style={{ marginBottom: '8px' }}>
                <span style={{ color: NEON_COLORS.cyan }}>Phone:</span>{' '}
                <a
                  href="tel:+919167021410"
                  style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  +91 9167021410
                </a>
              </p>
              <p>
                <span style={{ color: NEON_COLORS.cyan }}>Location:</span>{' '}
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: `1px solid ${NEON_COLORS.cyan}20`,
            paddingTop: '24px',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '14px',
          }}
        >
          {copyrightText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
