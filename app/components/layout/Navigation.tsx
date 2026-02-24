import React, { useState, useEffect, useRef, type ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NeonButton } from '../ui/NeonButton';
import { NEON_COLORS, BG_COLORS } from '../../lib/theme';
import {convertAniBinaryToCSS} from 'ani-cursor';



async function applyCursor(selector: string, aniUrl: string | URL | Request) {
    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());

    const style = document.createElement('style');
    style.innerText = convertAniBinaryToCSS(selector, data);

    document.head.appendChild(style);
}



/**
 * Navigation item configuration.
 */
export interface NavItem {
  id: string;
  label: string;
  href: string;
  dropdown?: NavItem[];
}

/**
 * Props for the Navigation component.
 */
export interface NavigationProps {
  /** Navigation items to display */
  items?: NavItem[];
  /** Logo text */
  logoText?: string;
  /** Active section ID */
  activeSection?: string;
  /** Callback when a nav item is clicked */
  onItemClick?: (id: string) => void;
  /** CTA button text */
  ctaText?: string;
  /** CTA button click handler */
  onCtaClick?: () => void;
}

/**
 * Navigation - A responsive navigation bar with sci-fi styling.
 * 
 * Features:
 * - Smooth scroll navigation to sections
 * - Clickable navigation links targeting section IDs
 * - Active section indicator
 * - Sticky header with blur effect on scroll
 * - Glowing border effect when scrolled
 * - Responsive CTA button
 * - Dropdown menu support
 * 
 * @param props - Component props
 * @returns ReactElement with navigation bar
 * 
 * @example
 * ```tsx
 * <Navigation
 *   items={[{ id: 'home', label: 'HOME', href: '/' }]}
 *   logoText="NEXUSCORE"
 * />
 * ```
 */
// dropdown: [
//   { id: 'home-main', label: 'Main Home', href: '/' },
//   { id: 'home-v1', label: 'Home 1 — Split', href: '/home/variation-1' },
//   { id: 'home-v2', label: 'Home 2 — Centered', href: '/home/variation-2' },
//   { id: 'home-v3', label: 'Home 3 — Mosaic', href: '/home/variation-3' },
// ]
export const Navigation = ({
  items = [
    {
      id: 'home',
      label: 'HOME',
      href: '/',
    },
    {
      id: 'about',
      label: 'ABOUT US',
      href: '/about',
    },
    { id: 'services', label: 'SERVICES', href: '/services' },
    { id: 'contact', label: 'CONTACT US', href: '/contact' },
    { 
      id: 'blog', 
      label: 'BLOG', 
      href: '/blog',
      // dropdown: [
      //   { id: 'blog-main', label: 'Blog Home', href: '/blog' },
      //   { id: 'blog-v1', label: 'Holographic Grid', href: '/blog/variation-1' },
      //   { id: 'blog-v2', label: 'Cyber Grid', href: '/blog/variation-2' },
      //   { id: 'blog-v3', label: 'Timeline Helix', href: '/blog/variation-3' },
      // ]
    },
  ],
  logoText = 'SOCH',
  activeSection = 'home',
  onItemClick,
  ctaText = 'Get Started',
  onCtaClick,
}: NavigationProps): ReactElement => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applyCursor('.linked', '/cursors/16.ani');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // For external links or different pages, allow default navigation
    if (sectionId.startsWith('http') || sectionId.startsWith('/')) {
      return;
    }
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    onItemClick?.(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownEnter = (id: string) => {
    setOpenDropdown(id);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  const isActive = (href: string) => {
    // Exact match for home page
    if (href === '/') {
      return pathname === '/';
    }
    // Check if current path starts with href (for nested routes)
    return pathname.startsWith(href);
  };

  const isDropdownActive = (dropdown: typeof items[0]['dropdown']) => {
    if (!dropdown) return false;
    return dropdown.some(item => pathname.startsWith(item.href));
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 32px',
        background: isScrolled ? `${BG_COLORS.dark}ee` : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? `1px solid ${NEON_COLORS.cyan}30` : 'none',
        transition: 'all 0.3s ease-out',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: NEON_COLORS.cyan,
            textShadow: `0 0 10px ${NEON_COLORS.cyan}80`,
            letterSpacing: '0.1em',
          }}
        >
          {logoText}
          <span className='uppercase' style={{ color: NEON_COLORS.magenta }}>Technologies</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6" role="menubar" ref={dropdownRef}>
          {items.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => item.dropdown && handleDropdownEnter(item.id)}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href={item.href}
                role="menuitem"
                aria-haspopup={item.dropdown ? 'true' : undefined}
                aria-expanded={item.dropdown ? (openDropdown === item.id ? 'true' : 'false') : undefined}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className="relative linked px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300"
                style={{
                  color: isActive(item.href) || openDropdown === item.id || isDropdownActive(item.dropdown)
                    ? NEON_COLORS.cyan 
                    : 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onKeyDown={(e) => {
                  if (item.dropdown && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    setOpenDropdown(openDropdown === item.id ? null : item.id);
                  }
                }}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    style={{
                      transform: openDropdown === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <path
                      d="M1 3L5 7L9 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {(isActive(item.href) || openDropdown === item.id || isDropdownActive(item.dropdown)) && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      border: `1px solid ${NEON_COLORS.cyan}`,
                      boxShadow: `0 0 10px ${NEON_COLORS.cyan}40`,
                      borderRadius: '4px',
                    }}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && openDropdown === item.id && (
                <div
                  role="menu"
                  aria-label={`${item.label} submenu`}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '0px',
                    minWidth: '220px',
                    background: `${BG_COLORS.dark}f0`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${NEON_COLORS.cyan}30`,
                    borderRadius: '8px',
                    padding: '8px 0',
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px ${NEON_COLORS.cyan}10`,
                    zIndex: 50,
                  }}
                >
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      href={dropdownItem.href}
                      role="menuitem"
                      aria-current={isActive(dropdownItem.href) ? 'page' : undefined}
                      className="block px-4 py-3 text-sm uppercase tracking-wider transition-all duration-200"
                      style={{
                        color: isActive(dropdownItem.href) ? NEON_COLORS.cyan : 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        borderLeft: `2px solid ${isActive(dropdownItem.href) ? NEON_COLORS.cyan : 'transparent'}`,
                        background: isActive(dropdownItem.href) ? 'rgba(0, 255, 255, 0.08)' : 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = NEON_COLORS.cyan;
                        e.currentTarget.style.borderLeftColor = NEON_COLORS.cyan;
                        e.currentTarget.style.background = 'rgba(0, 255, 255, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                        e.currentTarget.style.borderLeftColor = 'transparent';
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button - Hidden on mobile */}
        {/* <div className="hidden md:block">
          <NeonButton color={NEON_COLORS.magenta} onClick={onCtaClick}>
            {ctaText}
          </NeonButton>
        </div> */}

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="lg:hidden lg:invisible"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span
            style={{
              width: '24px',
              height: '2px',
              background: NEON_COLORS.cyan,
              transition: 'transform 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              width: '24px',
              height: '2px',
              background: NEON_COLORS.cyan,
              opacity: isMobileMenuOpen ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          />
          <span
            style={{
              width: '24px',
              height: '2px',
              background: NEON_COLORS.cyan,
              transition: 'transform 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: `${BG_COLORS.dark}ee`,
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${NEON_COLORS.cyan}30`,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {items.map((item) => (
            <div key={item.id}>
              <Link
                href={item.href}
                aria-haspopup={item.dropdown ? 'true' : undefined}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className="relative px-4 py-3 text-sm uppercase tracking-wider transition-all duration-300"
                style={{
                  color: isActive(item.href) || isDropdownActive(item.dropdown) ? NEON_COLORS.cyan : 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  display: 'block',
                  border: isActive(item.href) || isDropdownActive(item.dropdown) ? `1px solid ${NEON_COLORS.cyan}` : '1px solid transparent',
                  boxShadow: isActive(item.href) || isDropdownActive(item.dropdown) ? `0 0 10px ${NEON_COLORS.cyan}40` : 'none',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
              
              {/* Mobile Dropdown */}
              {item.dropdown && (
                <div style={{ paddingLeft: '20px', marginTop: '8px' }}>
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      href={dropdownItem.href}
                      aria-current={isActive(dropdownItem.href) ? 'page' : undefined}
                      className="block px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300"
                      style={{
                        color: isActive(dropdownItem.href) ? NEON_COLORS.cyan : 'rgba(255, 255, 255, 0.5)',
                        textDecoration: 'none',
                        display: 'block',
                        background: isActive(dropdownItem.href) ? 'rgba(0, 255, 255, 0.05)' : 'transparent',
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* CTA Button in Mobile Menu */}
          <div style={{ marginTop: '8px' }}>
            <NeonButton color={NEON_COLORS.magenta} onClick={() => { onCtaClick?.(); setIsMobileMenuOpen(false); }}>
              {ctaText}
            </NeonButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
