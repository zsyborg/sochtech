'use client';

import React, { useState } from 'react';
import styles from './variation-3.module.css';
import Navigation from '@/app/components/layout/Navigation';
import Footer from '@/app/components/layout/Footer';
import { NEON_COLORS } from '@/app/lib/theme';

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

export default function Variation3Page() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Neural Interface Success',
      excerpt: 'Brain-machine communication reaches unprecedented accuracy levels in clinical trials.',
      category: 'Biotech',
      date: 'Jan 15, 2026',
      author: 'Dr. Sarah Chen',
      role: 'Research Lead',
      icon: '🧠',
      readTime: '8 min',
    },
    {
      id: 2,
      title: 'Quantum Network Live',
      excerpt: 'Global quantum internet backbone successfully activated across 50 major cities.',
      category: 'Computing',
      date: 'Jan 14, 2026',
      author: 'Marcus Webb',
      role: 'Senior Analyst',
      icon: '⚛️',
      readTime: '6 min',
    },
    {
      id: 3,
      title: 'Mars Dome Certified',
      excerpt: 'Self-sustaining biodome passes all safety protocols for human habitation.',
      category: 'Space',
      date: 'Jan 13, 2026',
      author: 'Elena Rodriguez',
      role: 'Architect',
      icon: '🏛️',
      readTime: '10 min',
    },
    {
      id: 4,
      title: 'AI Ethics Protocol',
      excerpt: 'International standards established for responsible artificial intelligence.',
      category: 'AI Research',
      date: 'Jan 12, 2026',
      author: 'Prof. James Liu',
      role: 'Philosopher',
      icon: '🤖',
      readTime: '7 min',
    },
    {
      id: 5,
      title: 'Ocean City Grounded',
      excerpt: 'First underwater metropolis foundation work begins in Pacific site.',
      category: 'Engineering',
      date: 'Jan 11, 2026',
      author: 'Nina Okonkwo',
      role: 'Marine Engineer',
      icon: '🌊',
      readTime: '9 min',
    },
    {
      id: 6,
      title: 'Gene Edit Laws Passed',
      excerpt: 'New legislation creates framework for safe human genetic modification.',
      category: 'Bioethics',
      date: 'Jan 10, 2026',
      author: 'Dr. Michael Park',
      role: 'Bioethicist',
      icon: '🧬',
      readTime: '5 min',
    },
    {
      id: 7,
      title: 'Fusion Energy Positive',
      excerpt: 'Commercial reactor achieves net energy gain in landmark achievement.',
      category: 'Energy',
      date: 'Jan 9, 2026',
      author: 'Dr. Alex Kim',
      role: 'Fusion Physicist',
      icon: '⚡',
      readTime: '11 min',
    },
    {
      id: 8,
      title: 'Mind Map Complete',
      excerpt: 'Full human neural connectome mapped with nanometer precision.',
      category: 'Technology',
      date: 'Jan 8, 2026',
      author: 'Dr. Sarah Chen',
      role: 'Research Lead',
      icon: '💫',
      readTime: '8 min',
    },
  ];

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleClose = () => {
    setExpandedId(null);
  };

  return (
    <div className={styles.container}>
      
      
      <Navigation />

      {/* Background Effects */}
      <ParticleBackground />
      <ScanningLine />
      <GridOverlay />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Helix View</span>
          <h1 className={styles.heroTitle}>
            Timeline <span style={{ color: NEON_COLORS.green }}>Helix</span> Design
          </h1>
          <p className={styles.heroSubtitle}>
            Interactive DNA-like spiral structure with particle effects
          </p>
        </div>
      </section>

      {/* Data Streams */}
      <div className={`${styles.dataStream} ${styles.dataStreamLeft}`} />
      <div className={`${styles.dataStream} ${styles.dataStreamRight}`} />

      {/* Helix Timeline */}
      <section className={styles.helixContainer}>
        <div className={styles.helixSpine} />
        
        <div className={styles.timeline}>
          {posts.map((post, index) => (
            <div key={post.id} className={styles.timelineNode}>
              <div className={styles.nodePoint} />
              
              <div className={styles.cardWrapper}>
                <div 
                  className={`${styles.card} ${expandedId === post.id ? styles.cardExpanded : ''}`}
                  onClick={() => handleCardClick(post.id)}
                >
                  <div className={styles.cardParticles}>
                    <div className={styles.particle} />
                    <div className={styles.particle} />
                    <div className={styles.particle} />
                    <div className={styles.particle} />
                  </div>
                  
                  <div className={styles.cardImage}>
                    <span className={styles.cardIcon}>{post.icon}</span>
                  </div>
                  
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
                    <span className={styles.cardReadTime}>⏱ {post.readTime}</span>
                  </div>
                </div>
                
                <div className={styles.cardConnector} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expanded Card Overlay */}
      {expandedId !== null && (
        <>
          <div className={styles.cardOverlay} onClick={handleClose} />
        </>
      )}

      <Footer />
    </div>
  );
}
