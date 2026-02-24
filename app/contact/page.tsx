'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import Navigation from '@/app/components/layout/Navigation';
import Footer from '@/app/components/layout/Footer';
import { NEON_COLORS, BG_COLORS } from '@/app/lib/theme';

import {
  ParticleBackground,
  ScanningLine,
  GridOverlay,
} from '../components';



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'info@sochtechnologies.com',
      description: '',
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 9167021410',
      description: '',
    },
    {
      icon: '📍',
      title: 'Headquarters',
      value: 'Mumbai, India',
      description: '',
    },
  ];

  const offices = [
    { city: 'New York', address: '350 Fifth Avenue, Empire State', country: 'USA' },
    { city: 'Tokyo', address: '1-1-1 Shibuya, Shibuya City', country: 'Japan' },
    { city: 'London', address: '10 Downing Street', country: 'UK' },
    { city: 'Singapore', address: '1 Raffles Place', country: 'Singapore' },
  ];

  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: 'We typically respond to all inquiries within 24 business hours. For urgent matters, please call our support line.',
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes! We specialize in tailoring our services to meet your specific requirements. Contact us to discuss your needs.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including technology, healthcare, finance, aerospace, and entertainment.',
    },
    {
      question: 'How can I schedule a demo?',
      answer: 'Fill out the contact form above and select "Request Demo" as the subject. Our team will reach out to schedule a personalized demonstration.',
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
          <span className={styles.heroTag}>Get in Touch</span>
          <h1 className={styles.heroTitle}>
            Contact <span style={{ color: NEON_COLORS.cyan }}>Us</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Ready to transform your vision into reality? Our team of experts is here to guide you through your sci-fi journey.
          </p>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll to explore</span>
          <div className={styles.scrollArrow} />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={styles.contactInfoSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactInfoGrid}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.contactInfoCard}>
                <div className={styles.contactInfoIcon}>{info.icon}</div>
                <h3 className={styles.contactInfoTitle}>{info.title}</h3>
                <p className={styles.contactInfoValue}>{info.value}</p>
                <p className={styles.contactInfoDescription}>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section className={styles.formSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <span className={styles.formTag}>Send us a Message</span>
              <h2 className={styles.formTitle}>
                Let's Start a <span style={{ color: NEON_COLORS.magenta }}>Conversation</span>
              </h2>
              <p className={styles.formSubtitle}>
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button 
                  className={styles.resetButton}
                  onClick={() => setFormStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales & Partnerships</option>
                    <option value="demo">Request Demo</option>
                    <option value="careers">Careers</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.formTextarea}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section> */}

      {/* Office Locations */}
      {/* <section className={styles.officesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.officesHeader}>
            <span className={styles.officesTag}>Global Presence</span>
            <h2 className={styles.officesTitle}>
              Our <span style={{ color: NEON_COLORS.green }}>Offices</span>
            </h2>
            <p className={styles.officesSubtitle}>
              Connect with our teams around the world
            </p>
          </div>

          <div className={styles.officesGrid}>
            {offices.map((office, index) => (
              <div key={index} className={styles.officeCard}>
                <div className={styles.officeCity}>{office.city}</div>
                <div className={styles.officeAddress}>{office.address}</div>
                <div className={styles.officeCountry}>{office.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className={styles.faqSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.faqHeader}>
            <span className={styles.faqTag}>FAQ</span>
            <h2 className={styles.faqTitle}>
              Frequently Asked <span style={{ color: NEON_COLORS.cyan }}>Questions</span>
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to <span style={{ color: NEON_COLORS.cyan }}>Transform</span> Your Future?
            </h2>
            <p className={styles.ctaSubtitle}>
              Join thousands of clients who have already experienced the future with SciFi Corp.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/services" className={styles.ctaPrimaryButton}>
                Explore Services
              </a>
              <a href="/about" className={styles.ctaSecondaryButton}>
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
