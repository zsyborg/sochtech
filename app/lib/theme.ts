/**
 * Theme configuration for the sci-fi futuristic design system.
 * Centralized color palette and styling constants for consistent theming.
 */

/** Main color palette for neon effects */
export const NEON_COLORS = {
  cyan: '#00ffff',
  magenta: '#ff00ff',
  green: '#00ff88',
  blue: '#0088ff',
} as const;

/** Background and surface colors */
export const BG_COLORS = {
  dark: '#0a0a0f',
  surface: 'rgba(10, 10, 20, 0.85)',
  glass: 'rgba(20, 20, 40, 0.6)',
} as const;

/** Theme configuration interface */
export interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    accent: string;
  };
  animation: {
    duration: number;
    easing: string;
  };
}

/** Predefined themes for Arwes components */
export const THEMES: Record<string, ThemeConfig> = {
  mars: {
    name: 'Mars',
    colors: {
      primary: 'hsl(10, 80%, 55%)',
      secondary: 'hsl(20, 80%, 60%)',
      background: 'hsl(10, 20%, 10%)',
      surface: 'hsl(10, 20%, 15%)',
      text: 'hsl(20, 20%, 90%)',
      accent: 'hsl(30, 80%, 60%)',
    },
    animation: { duration: 0.3, easing: 'ease-out' },
  },
  laser: {
    name: 'Laser',
    colors: {
      primary: 'hsl(280, 80%, 60%)',
      secondary: 'hsl(300, 80%, 60%)',
      background: 'hsl(280, 20%, 10%)',
      surface: 'hsl(280, 20%, 15%)',
      text: 'hsl(300, 20%, 90%)',
      accent: 'hsl(320, 80%, 60%)',
    },
    animation: { duration: 0.25, easing: 'ease-out' },
  },
  ocean: {
    name: 'Ocean',
    colors: {
      primary: 'hsl(180, 80%, 50%)',
      secondary: 'hsl(200, 80%, 60%)',
      background: 'hsl(180, 20%, 10%)',
      surface: 'hsl(180, 20%, 15%)',
      text: 'hsl(200, 20%, 90%)',
      accent: 'hsl(220, 80%, 60%)',
    },
    animation: { duration: 0.35, easing: 'ease-out' },
  },
  forest: {
    name: 'Forest',
    colors: {
      primary: 'hsl(120, 60%, 50%)',
      secondary: 'hsl(140, 60%, 55%)',
      background: 'hsl(120, 15%, 10%)',
      surface: 'hsl(120, 15%, 15%)',
      text: 'hsl(140, 20%, 90%)',
      accent: 'hsl(160, 60%, 50%)',
    },
    animation: { duration: 0.3, easing: 'ease-out' },
  },
} as const;

/** Default theme for the application */
export const DEFAULT_THEME = THEMES.mars;

/** Glow intensity levels */
export const GLOW_INTENSITIES = {
  low: { blur: 4, hoverBlur: 8 },
  medium: { blur: 8, hoverBlur: 16 },
  high: { blur: 12, hoverBlur: 24 },
} as const;

/** Component size options */
export const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export type Size = keyof typeof SIZES;
export type GlowIntensity = keyof typeof GLOW_INTENSITIES;
