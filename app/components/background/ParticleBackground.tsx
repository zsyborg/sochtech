import React, { useRef, useEffect, type ReactElement } from 'react';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Particle data structure for the particle system.
 */
interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

/**
 * Custom hook that generates and manages floating particle data.
 */
const useParticles = (count: number): Particle[] => {
  const [particles, setParticles] = React.useState<Particle[]>([]);

  React.useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, [count]);

  return particles;
};

/**
 * Props for the ParticleBackground component.
 */
export interface ParticleBackgroundProps {
  /** Number of particles to display */
  particleCount?: number;
  /** Color of the particles */
  color?: string;
  /** Speed multiplier for particle movement */
  speedMultiplier?: number;
  /** Whether the animation is active */
  active?: boolean;
}

/**
 * ParticleBackground - Canvas-based floating particle animation.
 * 
 * Renders animated particles that float upward on a dark background,
 * creating a space-like atmosphere. Perfect for sci-fi backgrounds.
 * 
 * @param props - Component props
 * @returns ReactElement with particle canvas
 * 
 * @example
 * ```tsx
 * <ParticleBackground particleCount={50} color="#00ffff" />
 * ```
 */
export const ParticleBackground = ({
  particleCount = 50,
  color = NEON_COLORS.cyan,
  speedMultiplier = 1,
  active = true,
}: ParticleBackgroundProps): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useParticles(active ? particleCount : 0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const render = () => {
      if (!active) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle: Particle) => {
        ctx.beginPath();
        ctx.arc(
          (particle.x / 100) * canvas.width,
          (particle.y / 100) * canvas.height,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Update position
        particle.y -= particle.speed * speedMultiplier;
        if (particle.y < 0) {
          particle.y = 100;
          particle.x = Math.random() * 100;
        }
      });

      animationId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [particles, color, speedMultiplier, active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground;
