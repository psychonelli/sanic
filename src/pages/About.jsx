import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Shield, Award, Users, Anchor, CheckCircle2, Target, Eye, PhoneCall, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

// Sample data for the Director Board
const directors = [
  { id: 1, name: "Saman Wedagama", title: "CEO & Founder", img: "/images/director1.jpg" },
  { id: 2, name: "Dilshan Wedagama", title: "Chief Technology Officer", img: "/images/director2.jpg" },
  { id: 3, name: "Sampath Adikari", title: "Head of Operations", img: "/images/director3.jpg" },
  { id: 4, name: "Chandima Premachandra", title: "Chief Financial Officer", img: "/images/director4.jpg" },
];

const AnimatedSection = ({ children, className = '', threshold = 0.15 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  return (
    <div
      ref={ref}
      className={`${className} animation-target ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

function About() {
  return (
    <div className="about-page">
      <Seo 
        title="About Sanic Security | 20+ Years Elite Tactical & Maritime Protection in Sri Lanka"
        description="Learn about Sanic Security Services & Investigation. Founded by defense veterans with over 20 years of experience protecting corporations, diplomatic missions, and maritime fleets in Sri Lanka."
        path="/about"
      />
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', padding: '3.5rem 0 2rem 0' }}>
          <div className="trust-pill">
            <Award size={16} />
            <span>20+ YEARS OF DEDICATED PROTECTION &bull; SRI LANKA &bull; GLOBAL SEAS</span>
          </div>
          <h1>
            About Sanic Security &amp; <br />
            <span className="gold-gradient-text">Tactical Investigation</span>
          </h1>
          <p className="section-subtitle">
            Founded on military discipline, integrity, and proactive risk mitigation, Sanic Security stands as the gold standard in private protection.
          </p>
        </div>

        {/* Experience Focus Section */}
        <AnimatedSection threshold={0.1}>
          <div className="experience-focus">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Shield size={26} color="#fbbf24" />
              <h2 style={{ margin: 0, fontSize: '1.85rem', color: '#fff' }}>
                Unrivaled Experience: The Sanic Advantage
              </h2>
            </div>
            
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              The cornerstone of Sanic Security is the caliber, discipline, and pedigree of our personnel. 
              Our protective details are drawn from <strong>veterans of elite armed forces commandos, special boat squadrons, and veteran police officers</strong>. 
              This brings a level of tactical precision, de-escalation expertise, and crisis composure impossible to find in standard civilian guard companies.
            </p>

            <ul className="bullet-list">
              <li>
                <strong>Ex-Military &amp; Police Tactical Expertise:</strong> Decades of high-stakes, real-world experience in threat assessment, executive motorcades, armed intervention, and incident control.
              </li>
              <li>
                <strong>Intelligence-Led Strategy:</strong> We apply strategic intelligence methodologies honed in state service to pre-empt security risks, identify vulnerabilities, and prevent incidents before they manifest.
              </li>
              <li>
                <strong>Rigorous Background Screening:</strong> Zero criminal record policy, psychological fitness tests, drug screenings, and regular refresher tactical drills.
              </li>
            </ul>

            {/* Maritime Section */}
            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Anchor size={24} color="#fbbf24" />
                <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#fff' }}>
                  Global Reach: Maritime Protection Initiative
                </h2>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Recognizing the critical vulnerability of maritime commerce, Sanic Security maintains an elite maritime detachment providing anti-piracy escorts for merchant shipping, tankers, and offshore platforms navigating high-risk waterways.
              </p>
              <ul className="bullet-list">
                <li>
                  <strong>STCW Certified Sea Marshals:</strong> Fully trained in international maritime regulations, weapon safety at sea, ISPS code compliance, and onboard defensive hardening.
                </li>
                <li>
                  <strong>Full Legal &amp; Port Clearance:</strong> End-to-end logistics handling across Sri Lankan maritime gates (Colombo, Galle, Hambantota) and overseas embarkation points.
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Vision & Mission */}
        <AnimatedSection className="vision-mission" threshold={0.15}>
          <h2 className="section-title">Our Strategic Principles</h2>
          <p className="section-subtitle">
            Governing every deployment, patrol, and operational mandate with absolute integrity.
          </p>

          <div className="vm-grid">
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Eye size={24} color="#fbbf24" />
                <h2 style={{ margin: 0, color: '#fff' }}>Our Vision</h2>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: '1.7' }}>
                To be the most reputable, trusted, and technologically advanced security organization in South Asia and the Indian Ocean, 
                setting the benchmark for ethical private protection, zero-incident track records, and operational excellence.
              </p>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Target size={24} color="#fbbf24" />
                <h2 style={{ margin: 0, color: '#fff' }}>Our Mission</h2>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: '1.7' }}>
                To provide impenetrable safety to our clients' assets, staff, and maritime voyages by uniting military-grade discipline, 
                uncompromising integrity, and next-generation AI telemetry into one responsive protection ecosystem.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Board of Directors */}
        <AnimatedSection className="director-board" threshold={0.1}>
          <h2 className="section-title">Board of Directors &amp; Leadership</h2>
          <p className="section-subtitle">
            Guiding Sanic Security with decades of strategic foresight, military doctrine, and technical innovation.
          </p>

          <div className="directors-grid">
            {directors.map((director) => (
              <div key={director.id} className="director-card">
                <img
                  src={director.img}
                  alt={director.name}
                  className="director-img"
                  onError={(e) => {
                    // Fallback to avatar placeholder if local image is missing
                    e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80";
                  }}
                />
                <h3>{director.name}</h3>
                <p className="title">{director.title}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact CTA */}
        <div style={{
          textAlign: 'center',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2rem',
          margin: '4rem 0'
        }}>
          <h2 style={{ color: '#fff', fontSize: '1.85rem', marginBottom: '0.75rem' }}>
            Partner with Sanic Security Today
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Connect with our executive leadership to discuss custom security staffing, facility protection, or maritime deployments.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button">
              <span>Initiate Consultation</span>
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+94767649974" className="button button-secondary">
              <PhoneCall size={18} color="#f59e0b" />
              <span>Call (+94) 767 649 974</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;