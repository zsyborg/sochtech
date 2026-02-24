'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './variation-1.module.css';
import Navigation from '@/app/components/layout/Navigation';
import Footer from '@/app/components/layout/Footer';
import { NEON_COLORS, BG_COLORS } from '@/app/lib/theme';

import {
  ParticleBackground,
  ScanningLine,
  GridOverlay,
} from '@/app/components';




interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  role: string;
  icon: string;
  readTime: string;
}

export default function Variation1Page() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Neural Link Breakthrough',
      excerpt: 'Scientists achieve 99.9% accuracy in bidirectional brain-machine communication, opening new frontiers for human augmentation.',
      category: 'Biotech',
      date: 'Jan 15, 2026',
      author: 'Dr. Sarah Chen',
      role: 'Research Lead',
      icon: '🧠',
      readTime: '8 min',
    },
    {
      id: 2,
      title: 'Quantum Internet Launch',
      excerpt: 'First global quantum network connects 50 cities, promising unbreakable encryption and instantaneous data transfer.',
      category: 'Computing',
      date: 'Jan 14, 2026',
      author: 'Marcus Webb',
      role: 'Senior Analyst',
      icon: '⚛️',
      readTime: '6 min',
    },
    {
      id: 3,
      title: 'Mars Habitat Prototype',
      excerpt: 'Self-sustaining biodome design passes all tests, ready for first colonists arriving in Q4 2026.',
      category: 'Space',
      date: 'Jan 13, 2026',
      author: 'Elena Rodriguez',
      role: 'Architect',
      icon: '🏛️',
      readTime: '10 min',
    },
    {
      id: 4,
      title: 'AI Ethics Framework',
      excerpt: 'International coalition establishes guidelines for responsible AI development and deployment.',
      category: 'AI Research',
      date: 'Jan 12, 2026',
      author: 'Prof. James Liu',
      role: 'Philosopher',
      icon: '🤖',
      readTime: '7 min',
    },
    {
      id: 5,
      title: 'Ocean City Foundation',
      excerpt: 'Construction begins on the first underwater metropolis, housing 10,000 residents by 2028.',
      category: 'Engineering',
      date: 'Jan 11, 2026',
      author: 'Nina Okonkwo',
      role: 'Marine Engineer',
      icon: '🌊',
      readTime: '9 min',
    },
    {
      id: 6,
      title: 'Genetic Enhancement Laws',
      excerpt: 'New legislation balances personal choice with safety in human genetic modification treatments.',
      category: 'Bioethics',
      date: 'Jan 10, 2026',
      author: 'Dr. Michael Park',
      role: 'Bioethicist',
      icon: '🧬',
      readTime: '5 min',
    },
    {
      id: 7,
      title: 'Fusion Power Milestone',
      excerpt: 'Commercial fusion reactor achieves net positive energy output for the first time in history.',
      category: 'Energy',
      date: 'Jan 9, 2026',
      author: 'Dr. Alex Kim',
      role: 'Fusion Physicist',
      icon: '⚡',
      readTime: '11 min',
    },
    {
      id: 8,
      title: 'Mind Upload Progress',
      excerpt: 'Complete neural mapping achieved, bringing digital consciousness transfer one step closer to reality.',
      category: 'Technology',
      date: 'Jan 8, 2026',
      author: 'Dr. Sarah Chen',
      role: 'Research Lead',
      icon: '💫',
      readTime: '8 min',
    },
    {
      id: 9,
      title: 'Space Elevator Test',
      excerpt: 'Carbon nanotube tether successfully deploys to 100km altitude in landmark test flight.',
      category: 'Space',
      date: 'Jan 7, 2026',
      author: 'Kenji Tanaka',
      role: 'Aerospace Engineer',
      icon: '🚀',
      readTime: '7 min',
    },
  ];

  return (
    <div className={styles.container}>


      <Navigation />


       {/* Background Effects */}
      <ParticleBackground />
      <ScanningLine />
      <GridOverlay />



      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gridOverlay} />
          <div className={styles.glowOrb} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Holographic View</span>
          <h1 className={styles.heroTitle}>
            Glass <span style={{ color: NEON_COLORS.cyan }}>Morphism</span> Grid
          </h1>
          <p className={styles.heroSubtitle}>
            Floating holographic cards with ethereal glass effects and neon glow
          </p>
        </div>
      </section>

      {/* Holographic Blog Grid */}
      <section className={styles.blogGrid}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article
              key={post.id}
              className={styles.card}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.cardGlass} />
              <div className={styles.cardImage}>
                <span className={styles.cardIcon}>{post.icon}</span>
                <div className={styles.cardGlow} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>{post.category}</span>
                  <span className={styles.cardDate}>{post.date}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.cardAuthor}>
                    <div className={styles.cardAvatar}>
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={styles.cardAuthorInfo}>
                      <span className={styles.cardAuthorName}>{post.author}</span>
                      <span className={styles.cardAuthorRole}>{post.role}</span>
                    </div>
                  </div>
                  <span className={styles.cardReadTime}>
                    ⏱ {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
