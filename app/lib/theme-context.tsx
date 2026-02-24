'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ThemeConfig, THEMES, DEFAULT_THEME } from './theme';

/**
 * Theme context type definition
 */
interface ThemeContextType {
  currentTheme: ThemeConfig;
  setTheme: (themeName: string) => void;
  themeName: string;
}

/**
 * Theme context for managing theme state across the application
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme provider component
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<string>('mars');

  const currentTheme = THEMES[themeName] || DEFAULT_THEME;

  const setTheme = useCallback((name: string) => {
    if (THEMES[name]) {
      setThemeName(name);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
