'use client';

import React from 'react';
import styles from './services.module.css';
import Navigation from '@/app/components/layout/Navigation';
import Footer from '@/app/components/layout/Footer';
import { NEON_COLORS, BG_COLORS } from '@/app/lib/theme';
import {
  ParticleBackground,
  ScanningLine,
  GridOverlay,
} from '../components';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  services: Service[];
}

export default function ServicesPage() {
  const categories: ServiceCategory[] = [
    {
      id: 'it-development',
      name: 'IT Development Services',
      description: 'Comprehensive technology solutions powering your digital infrastructure with cutting-edge development practices.',
      icon: '💻',
      color: '#00ffff',
      services: [
        {
          id: 'full-stack',
          title: 'Full-Stack Development',
          description: 'End-to-end web and application development spanning frontend interfaces, backend systems, and database architecture. Our team delivers scalable, maintainable code using modern frameworks and best practices.',
          icon: '⚙️',
          features: ['React & Next.js', 'Node.js & Express', 'PostgreSQL & MongoDB', 'REST & GraphQL APIs'],
        },
        {
          id: 'cloud-solutions',
          title: 'Cloud Infrastructure',
          description: 'Enterprise-grade cloud architecture design and implementation across major platforms. We optimize for performance, security, and cost-efficiency while ensuring seamless scalability.',
          icon: '☁️',
          features: ['AWS & Azure', 'Kubernetes Orchestration', 'Serverless Computing', 'CI/CD Pipelines'],
        },
        {
          id: 'cybersecurity',
          title: 'Cybersecurity Solutions',
          description: 'Comprehensive security assessments, penetration testing, and implementation of defense-in-depth strategies to protect your digital assets from emerging threats.',
          icon: '🔐',
          features: ['Penetration Testing', 'Security Audits', 'Zero-Trust Architecture', 'Incident Response'],
        },
      ],
    },
    {
      id: 'software-solutions',
      name: 'Software Solutions',
      description: 'Tailored software products designed to address your unique business challenges and drive operational efficiency.',
      icon: '📦',
      color: '#ff00ff',
      services: [
        {
          id: 'enterprise-erp',
          title: 'Enterprise ERP Systems',
          description: 'Integrated enterprise resource planning solutions that streamline operations, manage resources, and provide real-time visibility across your organization.',
          icon: '🏢',
          features: ['Finance & Accounting', 'Supply Chain Management', 'HR & Payroll', 'Business Intelligence'],
        },
        {
          id: 'crm-platforms',
          title: 'Customer Relationship Management',
          description: 'Sophisticated CRM platforms that enhance customer engagement, automate sales processes, and deliver actionable insights for business growth.',
          icon: '🤝',
          features: ['Sales Automation', 'Marketing Integration', 'Customer Analytics', 'Support Ticketing'],
        },
        {
          id: 'mobile-apps',
          title: 'Mobile Application Development',
          description: 'Native and cross-platform mobile applications delivering exceptional user experiences across iOS and Android devices.',
          icon: '📱',
          features: ['iOS & Android', 'React Native', 'Flutter Development', 'App Store Optimization'],
        },
      ],
    },
    {
      id: 'animation',
      name: 'Animation Services',
      description: 'Captivating visual storytelling through state-of-the-art animation and motion graphics.',
      icon: '🎬',
      color: '#00ff88',
      services: [
        {
          id: '3d-animation',
          title: '3D Character Animation',
          description: 'High-fidelity 3D character animation bringing your concepts to life with realistic movement, expression, and personality.',
          icon: '🎭',
          features: ['Character Rigging', 'Motion Capture', 'Facial Animation', 'Physics Simulation'],
        },
        {
          id: 'motion-graphics',
          title: 'Motion Graphics & VFX',
          description: 'Dynamic motion graphics and visual effects that enhance storytelling and create memorable brand experiences.',
          icon: '✨',
          features: ['Logo Animation', 'Explainer Videos', 'Title Sequences', 'Compositing'],
        },
        {
          id: 'interactive',
          title: 'Interactive Experiences',
          description: 'Immersive interactive installations and experiences leveraging AR/VR technologies to engage audiences in innovative ways.',
          icon: '🌐',
          features: ['AR/VR Development', 'Interactive Kiosks', 'Gamification', 'Virtual Tours'],
        },
      ],
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Intelligent automation and machine learning solutions that transform data into competitive advantage.',
      icon: '🧠',
      color: '#0088ff',
      services: [
        {
          id: 'ml-solutions',
          title: 'Machine Learning Solutions',
          description: 'Custom machine learning models engineered to solve complex business problems, from predictive analytics to pattern recognition.',
          icon: '🧬',
          features: ['Deep Learning', 'NLP & Text Analysis', 'Computer Vision', 'Predictive Models'],
        },
        {
          id: 'nlp',
          title: 'Natural Language Processing',
          description: 'Advanced NLP capabilities enabling intelligent document processing, sentiment analysis, and conversational interfaces.',
          icon: '💬',
          features: ['Chatbot Development', 'Text Summarization', 'Language Translation', 'Voice Recognition'],
        },
        {
          id: 'automation',
          title: 'Intelligent Automation',
          description: 'AI-powered automation solutions that streamline workflows, reduce manual effort, and increase operational efficiency.',
          icon: '⚡',
          features: ['Process Automation', 'Document Processing', 'Decision Support', 'Workflow Optimization'],
        },
      ],
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
          <span className={styles.heroTag}>Our Expertise</span>
          <h1 className={styles.heroTitle}>
            Professional <span style={{ color: NEON_COLORS.cyan }}>Services</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Comprehensive technology solutions delivering innovation, quality, and results across every aspect of your digital transformation journey.
          </p>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll to explore</span>
          <div className={styles.scrollArrow} />
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection} >
        {categories.map((category, categoryIndex) => (
          <div key={category.id} className={styles.categorySection} id={category.id}>
            {/* Category Header */}
            <div className={styles.categoryHeader}>
              <div 
                className={styles.categoryIcon}
                style={{ 
                  background: `${category.color}15`,
                  border: `1px solid ${category.color}40`
                }}
              >
                {category.icon}
              </div>
              <div className={styles.categoryTitleWrapper}>
                <h2 className={styles.categoryTitle}>
                  <span style={{ color: category.color }}>{category.name}</span>
                </h2>
                <p className={styles.categoryDescription}>{category.description}</p>
              </div>
            </div>

            {/* Services Grid */}
            <div className={styles.servicesGrid}>
              {category.services.map((service) => (
                <article key={service.id} className={styles.serviceCard}>
                  <div 
                    className={styles.serviceIcon}
                    style={{ 
                      background: `${category.color}10`,
                      border: `1px solid ${category.color}30`
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, index) => (
                      <li key={index} className={styles.serviceFeature}>
                        <span 
                          className={styles.featureDot}
                          style={{ background: category.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={styles.serviceCta}
                    style={{ 
                      background: `${category.color}15`,
                      border: `1px solid ${category.color}40`,
                      color: category.color
                    }}
                  >
                    Learn More
                  </button>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.processContainer}>
          <div className={styles.processHeader}>
            <span className={styles.processTag}>Our Process</span>
            <h2 className={styles.processTitle}>
              How We <span style={{ color: NEON_COLORS.magenta }}>Deliver</span>
            </h2>
            <p className={styles.processSubtitle}>
              A systematic approach ensuring quality, transparency, and results
            </p>
          </div>

          <div className={styles.processSteps}>
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision, requirements, and objectives through collaborative consultation.' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive roadmap aligned with your business goals and technical needs.' },
              { step: '03', title: 'Development', description: 'Agile implementation with regular milestones, reviews, and continuous feedback integration.' },
              { step: '04', title: 'Delivery', description: 'Rigorous testing, deployment, and ongoing support to ensure long-term success.' },
            ].map((item, index) => (
              <div key={item.step} className={styles.processStep}>
                <div className={styles.stepNumber}>{item.step}</div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to <span style={{ color: NEON_COLORS.cyan }}>Transform</span> Your Business?
          </h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss how our services can accelerate your digital evolution and drive meaningful results.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className={styles.ctaPrimaryButton}>
              Get in Touch
            </a>
            <a href="#" className={styles.ctaSecondaryButton}>
              Download Portfolio
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
