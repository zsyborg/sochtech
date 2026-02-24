"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

import {
  ParticleBackground,
  ScanningLine,
  GridOverlay,
} from '../components';


// Animation hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return isVisible;
};

// Section Title Component
const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-cyan-400 mb-4 tracking-wider uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: string;
}) => {
  return (
    <div className="bg-gray-900/50 border border-cyan-500/30 p-6 rounded-lg text-center hover:border-cyan-500/70 transition-all duration-300">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-cyan-400 mb-1">{number}</div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

// Team Member Card
const TeamMemberCard = ({
  name,
  role,
  bio,
}: {
  name: string;
  role: string;
  bio: string;
}) => {
  return (
    <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/70 transition-all duration-300 group">
      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
        {name.charAt(0)}
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-1">{name}</h3>
      <p className="text-cyan-400 text-center text-sm uppercase tracking-wider mb-3">
        {role}
      </p>
      <p className="text-gray-400 text-center text-sm">{bio}</p>
    </div>
  );
};

export default function AboutPage() {
  const isVisible = useScrollAnimation();

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: "🚀" },
    { number: "150+", label: "Clients Worldwide", icon: "🌍" },
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "10+", label: "Years Experience", icon: "⭐" },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in aerospace and technology innovation.",
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      bio: "Former NASA engineer specializing in advanced propulsion systems.",
    },
    {
      name: "Dr. James Okonkwo",
      role: "Head of Research",
      bio: "PhD in Quantum Physics from MIT, pioneering new energy solutions.",
    },
    {
      name: "Emily Zhang",
      role: "Design Director",
      bio: "Award-winning designer creating next-generation user experiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      {/* Background Effects */}
      <ParticleBackground />
      <ScanningLine />
      <GridOverlay />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-gray-950 to-gray-950"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/30 via-transparent to-transparent"></div>
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ABOUT US
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Pioneering the future of technology through innovation, collaboration,
            and relentless pursuit of excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        id="mission"
        className="py-20 px-4 animate-on-scroll"
        style={{
          opacity: isVisible["mission"] ? 1 : 0,
          transform: isVisible["mission"] ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Mission & Vision"
            subtitle="Driving innovation to shape a better tomorrow"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-900/50 border border-cyan-500/30 p-8 rounded-lg hover:border-cyan-500/70 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To develop cutting-edge technological solutions that address
                humanity's greatest challenges. We strive to create innovative
                products and services that push the boundaries of what's
                possible, while maintaining our commitment to sustainability and
                ethical development.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-cyan-500/30 p-8 rounded-lg hover:border-cyan-500/70 transition-all duration-300">
              <div className="text-5xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where advanced technology seamlessly enhances human
                potential. We envision a future where our innovations contribute
                to building smarter cities, cleaner energy solutions, and more
                connected communities across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values"
        className="py-20 px-4 bg-gray-900/30 animate-on-scroll"
        style={{
          opacity: isVisible["values"] ? 1 : 0,
          transform: isVisible["values"] ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: "💡",
                title: "Innovation",
                desc: "Constantly pushing boundaries and exploring new possibilities",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                desc: "Working together to achieve extraordinary results",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "Building solutions that benefit both people and planet",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-cyan-500/30 p-6 rounded-lg text-center hover:border-cyan-500/70 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-cyan-400 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        className="py-20 px-4 animate-on-scroll"
        style={{
          opacity: isVisible["stats"] ? 1 : 0,
          transform: isVisible["stats"] ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our Impact"
            subtitle="Numbers that tell our story"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section
        id="team"
        className="py-20 px-4 bg-gray-900/30 animate-on-scroll"
        style={{
          opacity: isVisible["team"] ? 1 : 0,
          transform: isVisible["team"] ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The visionaries behind our success"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Note from CEO */}
      <section
        id="ceo-note"
        className="py-20 px-4 animate-on-scroll"
        style={{
          opacity: isVisible["ceo-note"] ? 1 : 0,
          transform: isVisible["ceo-note"] ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="A Note From Our CEO"
            subtitle="Leadership thoughts on our journey"
          />

          <div className="bg-gray-900/50 border border-cyan-500/30 p-8 rounded-lg mt-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-3xl font-bold text-white">
                AC
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed mb-4 italic">
                  "Ten years ago, we started with a simple idea: what if we
                  could combine the most advanced technologies with human
                  creativity to solve problems that seemed impossible? Today,
                  I'm proud to say that our team has turned that vision into
                  reality, delivering solutions that impact millions of lives
                  around the world."
                </p>
                <p className="text-gray-300 leading-relaxed mb-4 italic">
                  "But this is just the beginning. As we look to the future,
                  I'm more excited than ever about what we'll achieve
                  together. Our commitment to innovation, sustainability, and
                  excellence remains unwavering, and I can't wait to see
                  what the next decade brings."
                </p>
                <div className="text-cyan-400 font-semibold">
                  — Zahid Shaikh, CEO & Founder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact-cta"
        className="py-20 px-4 bg-gradient-to-b from-gray-950 to-cyan-900/20 animate-on-scroll"
        style={{
          opacity: isVisible["contact-cta"] ? 1 : 0,
          transform: isVisible["contact-cta"] ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Collaborate
            </span>
            ?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Our team is
            ready to help you build the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="/services"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold rounded-lg transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
