import React, { useState, useCallback, type ReactElement } from 'react';
import { GlowContainer } from './GlowContainer';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Props for the CodeSnippet component.
 */
export interface CodeSnippetProps {
  /** Code content to display */
  code: string;
  /** Color theme for the code block */
  theme?: {
    colors: {
      surface: string;
      primary: string;
      background: string;
      text: string;
    };
  };
  /** Language label for syntax highlighting (placeholder) */
  language?: string;
}

/**
 * CodeSnippet - A copyable code display component.
 * 
 * Features:
 * - Syntax highlighting styling
 * - Copy-to-clipboard functionality
 * - Visual feedback on copy
 * - Glowing border effect
 * 
 * @param props - Component props
 * @returns ReactElement with code snippet styling
 * 
 * @example
 * ```tsx
 * <CodeSnippet
 *   code="<NeonButton color='#00ffff'>Click</NeonButton>"
 *   language="tsx"
 * />
 * ```
 */
export const CodeSnippet = ({
  code,
  theme = {
    colors: {
      surface: 'rgba(10, 20, 30, 0.9)',
      primary: NEON_COLORS.cyan,
      background: 'rgba(10, 10, 20, 0.95)',
      text: 'rgba(255, 255, 255, 0.9)',
    },
  },
  language = 'tsx',
}: CodeSnippetProps): ReactElement => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <GlowContainer color={theme.colors.primary} intensity="low">
      <div
        style={{
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.primary}`,
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: theme.colors.background,
            padding: '8px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: `1px solid ${theme.colors.primary}`,
          }}
        >
          <ThemedText theme={theme} size="small">
            {language}
          </ThemedText>
          <button
            onClick={handleCopy}
            style={{
              backgroundColor: copied ? theme.colors.primary : 'transparent',
              color: '#fff',
              border: `1px solid ${theme.colors.primary}`,
              padding: '4px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              transition: 'all 0.2s ease-out',
            }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        {/* Code content */}
        <pre
          style={{
            margin: 0,
            padding: '16px',
            overflow: 'auto',
            fontSize: '12px',
            fontFamily: 'monospace',
            color: theme.colors.text,
            lineHeight: 1.5,
          }}
        >
          {code}
        </pre>
      </div>
    </GlowContainer>
  );
};

/**
 * ThemedText - Simple text component with theme support.
 * Created inline for CodeSnippet to avoid circular dependencies.
 */
const ThemedText = ({
  children,
  theme,
  size = 'medium',
}: {
  children: React.ReactNode;
  theme: CodeSnippetProps['theme'];
  size?: 'small' | 'medium' | 'large';
}) => {
  const sizes = { small: '12px', medium: '14px', large: '18px' };
  
  return (
    <span style={{ color: theme?.colors.text, fontSize: sizes[size], margin: 0 }}>
      {children}
    </span>
  );
};

export default CodeSnippet;
