'use client';

import React from 'react';
import styles from './variation-2.module.css';
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
  dataId: string;
}

export default function Variation2Page() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Neural Interface Success',
      excerpt: 'Brain-machine communication reaches unprecedented accuracy levels in clinical trials.',
      category: 'Biotech',
      date: '2026.01.15',
      author: 'Dr. Sarah Chen',
      role: 'Research Lead',
      icon: '🧠',
      readTime: '8:24',
      dataId: 'ND-7842',
    },
    {
      id: 2,
      title: 'Quantum Network Live',
      excerpt: 'Global quantum internet backbone successfully activated across 50 major cities.',
      category: 'Computing',
      date: '2026.01.14',
      author: 'Marcus Webb',
      role: 'Senior Analyst',
      icon: '⚛️',
      readTime: '6:12',
      dataId: 'QN-9156',
    },
    {
      id: 3,
      title: 'Mars Dome Certified',
      excerpt: 'Self-sustaining biodome passes all safety protocols for human habitation.',
      category: 'Space',
      date: '2026.01.13',
      author: 'Elena Rodriguez',
      role: 'Architect',
      icon: '🏛️',
      readTime: '10:08',
      dataId: 'MD-2341',
    },
    {
      id: 4,
      title: 'AI Ethics Protocol',
      excerpt: 'International standards established for responsible artificial intelligence.',
      category: 'AI Research',
      date: '2026.01.12',
      author: 'Prof. James Liu',
      role: 'Philosopher',
      icon: '🤖',
      readTime: '7:45',
      dataId: 'AE-5623',
    },
    {
      id: 5,
      title: 'Ocean City Grounded',
      excerpt: 'First underwater metropolis foundation work begins in Pacific site.',
      category: 'Engineering',
      date: '2026.01.11',
      author: 'Nina Okonkwo',
      role: 'Marine Engineer',
      icon: '🌊',
      readTime: '9:33',
      dataId: 'OC-7891',
    },
    {
      id: 6,
      title: 'Gene Edit Laws Passed',
      excerpt: 'New legislation creates framework for safe human genetic modification.',
      category: 'Bioethics',
      date: '2026.01.10',
      author: 'Dr. Michael Park',
      role: 'Bioethicist',
      icon: '🧬',
      readTime: '5:18',
      dataId: 'GL-4452',
    },
    {
      id: 7,
      title: 'Fusion Energy Positive',
      excerpt: 'Commercial reactor achieves net energy gain in landmark achievement.',
      category: 'Energy',
      date: '2026.01.09',
      author: 'Dr. Alex Kim',
      role: 'Fusion Physicist',
      icon: '⚡',
      readTime: '11:52',
      dataId: 'FE-6628',
    },
    {
      id: 8,
      title: 'Mind Map Complete',
      excerpt: 'Full human neural connectome mapped with nanometer precision.',
      category: 'Technology',
      date: '2026.01.08',
      author: 'Dr. Sarah Chen',
      role: 'Research Lead',
      icon: '💫',
      readTime: '8:07',
      dataId: 'MM-3319',
    },
    {
      id: 9,
      title: 'Space Elevator Deployed',
      excerpt: 'Carbon nanotube tether reaches 100km altitude in test flight.',
      category: 'Space',
      date: '2026.01.07',
      author: 'Kenji Tanaka',
      role: 'Aerospace Engineer',
      icon: '🚀',
      readTime: '7:29',
      dataId: 'SE-8812',
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
          <div className={styles.scanlines} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Cyber Grid View</span>
          <h1 className={styles.heroTitle}>
            <span style={{ color: '#ff00ff' }}>Cyber</span> Grid Layout
          </h1>
          <p className={styles.heroSubtitle}>
            [ ANGULAR GEOMETRY // SCANLINE TEXTURES // GLITCH EFFECTS ]
          </p>
        </div>
      </section>

      {/* Cyber Grid */}
      <section className={styles.blogGrid}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.cardDataOverlay}>
                {post.dataId}
              </div>
              <div className={styles.cardGlitch} />
              <div className={styles.cardImage}>
                <span className={styles.cardIcon}>{post.icon}</span>
                <div className={styles.cardHoloLine} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardCategory}>{post.category}</span>
                  <span className={styles.cardDate}>{post.date}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardDataBar}>
                  <div className={styles.cardDataFill} />
                </div>
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
                  <div className={styles.cardMetaData}>
                    <span>T: {post.readTime}</span>
                  </div>
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
