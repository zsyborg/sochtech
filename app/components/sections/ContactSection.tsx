import React, { type ReactElement } from 'react';
import { GlowContainer } from '../ui/GlowContainer';
import { NeonButton } from '../ui/NeonButton';
import { NEON_COLORS } from '../../lib/theme';

/**
 * Form field configuration.
 */
export interface FormField {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  required?: boolean;
}

/**
 * Props for the ContactSection component.
 */
export interface ContactSectionProps {
  /** Section ID for navigation and scrolling */
  id?: string;
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Form fields to display */
  fields?: FormField[];
  /** Submit button text */
  submitButtonText?: string;
  /** Submit button click handler */
  onSubmit?: (data: Record<string, string>) => void;
}

/**
 * ContactSection - A contact form section with neon styling.
 * 
 * Features:
 * - Neon-styled input fields
 * - Focus effects with glow
 * - Responsive layout
 * - Glowing container effect
 * 
 * @param props - Component props
 * @returns ReactElement with contact section
 * 
 * @example
 * ```tsx
 * <ContactSection
 *   title="CONTACT"
 *   description="Get in touch today"
 *   onSubmit={(data) => console.log(data)}
 * />
 * ```
 */
export const ContactSection = ({
  id = 'contact',
  title = 'CONTACT',
  description = 'Ready to transform your digital presence? Get in touch today.',
  fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message', required: true },
  ],
  submitButtonText = 'Send Message',
  onSubmit,
}: ContactSectionProps): ReactElement => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    onSubmit?.(data);
  };

  return (
    <section id={id} className="py-12 sm:py-16 lg:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
            style={{
              color: NEON_COLORS.green,
            }}
          >
            {title}
          </h2>
          <p
            className="text-sm sm:text-base lg:text-lg max-w-lg sm:max-w-xl mx-auto"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            {description}
          </p>
        </div>

        {/* Contact Form */}
        <GlowContainer color={NEON_COLORS.green} intensity="high">
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8" style={{ background: 'rgba(20, 20, 40, 0.6)', borderRadius: '8px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {fields
                .filter((f) => f.type !== 'textarea')
                .map((field) => (
                  <div key={field.name}>
                    <label
                      className="block text-xs sm:text-sm uppercase tracking-wider mb-2"
                      style={{ color: NEON_COLORS.green }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: `1px solid ${NEON_COLORS.green}50`,
                        borderRadius: '4px',
                        color: '#fff',
                        outline: 'none',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = NEON_COLORS.green;
                        e.target.style.boxShadow = `0 0 10px ${NEON_COLORS.green}30`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = `${NEON_COLORS.green}50`;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}
            </div>
            {fields
              .filter((f) => f.type === 'textarea')
              .map((field) => (
                <div key={field.name} className="mb-4 sm:mb-6">
                  <label
                    className="block text-xs sm:text-sm uppercase tracking-wider mb-2"
                    style={{ color: NEON_COLORS.green }}
                  >
                    {field.label}
                  </label>
                  <textarea
                    name={field.name}
                    rows={3}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: `1px solid ${NEON_COLORS.green}50`,
                      borderRadius: '4px',
                      color: '#fff',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = NEON_COLORS.green;
                      e.target.style.boxShadow = `0 0 10px ${NEON_COLORS.green}30`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = `${NEON_COLORS.green}50`;
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              ))}
            <div className="flex justify-center">
              <NeonButton
                color={NEON_COLORS.green}
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                {submitButtonText}
              </NeonButton>
            </div>
          </form>
        </GlowContainer>
      </div>
    </section>
  );
};

export default ContactSection;
