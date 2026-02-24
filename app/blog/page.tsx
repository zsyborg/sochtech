'use client';

import React from 'react';
import Link from 'next/link';
import styles from './blog.module.css';
import Navigation from '@/app/components/layout/Navigation';
import Footer from '@/app/components/layout/Footer';
import { NEON_COLORS, BG_COLORS } from '@/app/lib/theme';



import {
  ParticleBackground,
  ScanningLine,
  GridOverlay,
} from '../components';


export default function BlogPage() {
  const variations = [
    {
      id: 'variation-1',
      icon: '✨',
      name: 'Holographic Grid',
      description: 'Glass morphism cards with neon glowing borders and floating hover animations. Each card features subtle vertical oscillation for an ethereal effect.',
      features: ['Glass Morphism', 'Neon Glow', 'Floating Animation', 'Holographic Effect'],
      color: '#00ffff',
    },
    {
      id: 'variation-2',
      icon: '⚡',
      name: 'Cyber Grid',
      description: 'Angular geometric shapes with holographic data overlays, scanline textures, and interactive glitch effects on hover interactions.',
      features: ['Angular Geometry', 'Glitch Effects', 'Scanline Texture', 'Data Overlays'],
      color: '#ff00ff',
    },
    {
      id: 'variation-3',
      icon: '🧬',
      name: 'Timeline Helix',
      description: 'Blog posts spiral along a DNA-like vertical structure. Interactive nodes expand when clicked with particle effects and data stream animations.',
      features: ['Spiral Layout', 'Interactive Nodes', 'Particle Effects', 'Data Streams'],
      color: '#00ff88',
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'The Future of Neural Interfaces',
      excerpt: 'Exploring the latest breakthroughs in brain-computer interfaces and their implications for human cognition.',
      category: 'Technology',
      date: 'Jan 15, 2026',
      author: 'Dr. Sarah Chen',
      role: 'Research Lead',
      icon: '🧠',
    },
    {
      id: 2,
      title: 'Quantum Computing in 2026',
      excerpt: 'How quantum processors are revolutionizing cryptography, drug discovery, and complex problem solving.',
      category: 'Computing',
      date: 'Jan 12, 2026',
      author: 'Marcus Webb',
      role: 'Senior Analyst',
      icon: '⚛️',
    },
    {
      id: 3,
      title: 'Mars Colony Architecture',
      excerpt: 'Designing sustainable habitats for the first human settlements on the red planet.',
      category: 'Space',
      date: 'Jan 10, 2026',
      author: 'Elena Rodriguez',
      role: 'Architect',
      icon: '🏛️',
    },
    {
      id: 4,
      title: 'AI Consciousness Debate',
      excerpt: 'Leading researchers clash over whether artificial intelligence can achieve true sentience.',
      category: 'AI Research',
      date: 'Jan 8, 2026',
      author: 'Prof. James Liu',
      role: 'Philosopher',
      icon: '🤖',
    },
    {
      id: 5,
      title: 'Ocean City Designs',
      excerpt: 'Ambitious plans for floating metropolises that could house millions beneath the waves.',
      category: 'Engineering',
      date: 'Jan 6, 2026',
      author: 'Nina Okonkwo',
      role: 'Marine Engineer',
      icon: '🌊',
    },
    {
      id: 6,
      title: 'Bio-Enhanced Humans',
      excerpt: 'The ethical and practical considerations of genetic modifications for human enhancement.',
      category: 'Bioethics',
      date: 'Jan 4, 2026',
      author: 'Dr. Michael Park',
      role: 'Bioethicist',
      icon: '🧬',
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
          <span className={styles.heroTag}>Knowledge Hub</span>
          <h1 className={styles.heroTitle}>
            Explore Our <span style={{ color: NEON_COLORS.cyan }}>Blog</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Discover cutting-edge insights, futuristic innovations, and visionary perspectives on the technologies shaping tomorrow.
          </p>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll to explore</span>
          <div className={styles.scrollArrow} />
        </div>
      </section>

      {/* Layout Variations Section */}
      <section className={styles.variationsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Layout Styles</span>
            <h2 className={styles.sectionTitle}>
              Choose Your <span style={{ color: NEON_COLORS.magenta }}>View</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Three distinct blog grid layouts with unique futuristic aesthetics
            </p>
          </div>

          <div className={styles.variationsGrid}>
            {variations.map((variation) => (
              <Link
                key={variation.id}
                href={`/blog/${variation.id}`}
                className={styles.variationCard}
              >
                <div 
                  className={styles.variationIcon}
                  style={{ 
                    background: `${variation.color}15`,
                    border: `1px solid ${variation.color}40`
                  }}
                >
                  {variation.icon}
                </div>
                <h3 className={styles.variationName}>{variation.name}</h3>
                <p className={styles.variationDescription}>{variation.description}</p>
                <ul className={styles.variationFeatures}>
                  {variation.features.map((feature, index) => (
                    <li key={index} className={styles.variationFeature}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <span 
                  className={styles.variationLink}
                  style={{ 
                    background: `${variation.color}15`,
                    border: `1px solid ${variation.color}40`,
                    color: variation.color
                  }}
                >
                  View Layout →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className={styles.recentSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Latest Articles</span>
            <h2 className={styles.sectionTitle}>
              Recent <span style={{ color: NEON_COLORS.cyan }}>Publications</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Stay updated with the newest insights from our research team
            </p>
          </div>

          <div className={styles.postsGrid}>
            {recentPosts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.postImage}>
                  {post.icon}
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.postCategory}>{post.category}</span>
                    <span className={styles.postDate}>{post.date}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postAuthor}>
                    <div className={styles.authorAvatar}>
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className={styles.authorName}>{post.author}</div>
                      <div className={styles.authorRole}>{post.role}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Share Your <span style={{ color: NEON_COLORS.cyan }}>Perspective</span>
          </h2>
          <p className={styles.ctaSubtitle}>
            Have insights to contribute? We're always looking for visionary writers to join our community.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className={styles.ctaPrimaryButton}>
              Submit an Article
            </a>
            <a href="#" className={styles.ctaSecondaryButton}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
