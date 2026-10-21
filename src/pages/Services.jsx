import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Lock, 
  Radio, 
  Users, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Anchor, 
  PhoneCall, 
  MessageCircle,
  FileText,
  Clock,
  Award
} from 'lucide-react';

// Import images
import cctv from '../assets/cctvv.png'; 
import cybersecurity from '../assets/cybersecurity.png'; 
import counslting from '../assets/oonsulting.png'; 
import event from '../assets/event.png'; 
import security from '../assets/security-gaurds.png'; 
import cash from '../assets/cash-escort.png'; 
import Seo from '../components/Seo'; 

// Animated Service Card Component
const AnimatedServiceCard = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`service-card service-animation-target ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

function Services() {
  const servicesList = [
    {
      title: "Tactical & Armed Guarding",
      icon: <Shield size={22} color="#fbbf24" />,
      tag: "Physical Defense",
      img: security,
      desc: "Stationed and roving security details staffed by former military commando and police personnel. Providing round-the-clock physical access control, deterrence, and rapid tactical suppression.",
      features: [
        "24/7 Armed & Unarmed Static Guards",
        "Synchronized Electronic Patrol Wand System",
        "Body-Worn Live Audio/Video Recording",
        "Immediate Motorized QRF (Quick Reaction Force)"
      ],
      whatsappMsg: "Hello Sanic Security, I would like to inquire about Tactical & Armed Guarding services for our premises."
    },
    {
      title: "Armored Cash Solutions & Transit",
      icon: <Lock size={22} color="#fbbf24" />,
      tag: "Asset Logistics",
      img: cash,
      desc: "Certified cash-in-transit (CIT) and ATM replenishment solutions utilizing ballistic armored vehicles with satellite telemetry, remote vehicle disabling capabilities, and bonded armed officers.",
      features: [
        "Level IV Ballistic Armored Vehicles",
        "Dual-Key Vault Custody & Real-Time Weight Tracking",
        "Satellite GPS Geo-Fencing & Panic Alerts",
        "Comprehensive Transit Loss Insurance Coverage"
      ],
      whatsappMsg: "Hello Sanic Security, I would like to inquire about Armored Cash Solutions & High-Value Transit."
    },
    {
      title: "AI CCTV & Central Command Hub",
      icon: <Radio size={22} color="#fbbf24" />,
      tag: "Surveillance Technology",
      img: cctv,
      desc: "State-of-the-art optical and thermal CCTV networks powered by artificial intelligence for automated perimeter breach detection, automatic number plate recognition (ANPR), and 24/7 live remote command desk monitoring.",
      features: [
        "AI Tripwire & Loitering Intrusion Detection",
        "Thermal Perimeter Cameras & Night Vision",
        "Instant Remote Audio Intervention & Sirens",
        "Cloud Redundancy & Forensic Video Retrieval"
      ],
      whatsappMsg: "Hello Sanic Security, I would like to inquire about AI CCTV & Smart Remote Surveillance systems."
    },
    {
      title: "Security Risk & Crisis Consulting",
      icon: <Users size={22} color="#fbbf24" />,
      tag: "Strategic Intelligence",
      img: counslting,
      desc: "Comprehensive threat analysis and vulnerability audits for corporate headquarters, manufacturing hubs, and executive residences. We create actionable emergency blueprints that keep your personnel and assets secure.",
      features: [
        "Independent Facility Vulnerability Surveys",
        "Crisis Management & Evacuation Plans",
        "Executive Counter-Surveillance & Bug Sweeping",
        "Corporate Background Screening & Due Diligence"
      ],
      whatsappMsg: "Hello Sanic Security, I would like to inquire about Security Risk Consulting & Site Audits."
    },
    {
      title: "VIP Executive Protection & Events",
      icon: <Building2 size={22} color="#fbbf24" />,
      tag: "Close Protection",
      img: event,
      desc: "Discreet personal security details for visiting diplomats, corporate executives, high-net-worth families, and large-scale summits. We provide armored convoy driving, route reconnaissance, and crowd management.",
      features: [
        "Certified Close Protection Officers (CPOs)",
        "Armored SUV Motorcade & Defensive Drivers",
        "Event Access Control & Walkthrough Metal Detectors",
        "Discreet Covert & Plainclothes Reconnaissance"
      ],
      whatsappMsg: "Hello Sanic Security, I would like to inquire about VIP Executive Protection & Event Security."
    },
    {
      title: "Corporate Cyber & Digital Defense",
      icon: <Shield size={22} color="#fbbf24" />,
      tag: "Digital Perimeter",
      img: cybersecurity,
      desc: "Protecting critical business infrastructure against digital infiltration, ransomware, and insider sabotage. Bridging physical access security with digital surveillance and endpoint protection.",
      features: [
        "Network Penetration Testing & Threat Hunting",
        "Security Operations Center (SOC) Log Monitoring",
        "Employee Phishing Simulations & Security Training",
        "GDPR & Data Compliance Security Audits"
      ],
      whatsappMsg: "Hello Sanic Security, I would like to inquire about Corporate Cyber Security solutions."
    }
  ];

  return (
    <div>
      <Seo 
        title="Security Services in Sri Lanka | Armed Guards, CCTV, Cash Escort & Maritime Protection"
        description="Specialized security solutions across Sri Lanka: 24/7 armed & unarmed static guards, Level IV cash-in-transit, AI CCTV surveillance, Indian Ocean maritime sea marshals, and VIP close protection."
        path="/services"
      />
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', padding: '3.5rem 0 2rem 0' }}>
          <div className="trust-pill">
            <Award size={16} />
            <span>CERTIFIED TACTICAL EXCELLENCE &bull; DEFENCE MINISTRY APPROVED</span>
          </div>
          <h1>
            Specialized Protection &amp; <br />
            <span className="gold-gradient-text">Security Solutions</span>
          </h1>
          <p className="section-subtitle">
            Engineered to mitigate risk, protect capital, and ensure uninterrupted operations for commercial, industrial, and high-profile clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesList.map((srv, idx) => (
            <AnimatedServiceCard key={idx} delay={idx * 0.1}>
              <div className="service-image-container">
                <img src={srv.img} alt={srv.title} className="service-image" />
              </div>
              <span className="trend-tag" style={{ width: 'fit-content' }}>{srv.tag}</span>
              <h2>
                <span>{srv.title}</span>
                {srv.icon}
              </h2>
              <p>{srv.desc}</p>
              
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '0 0 1.25rem 0' }}>
                {srv.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    fontSize: '0.86rem', 
                    color: '#9ca3af',
                    marginBottom: '0.4rem'
                  }}>
                    <CheckCircle2 size={14} color="#10b981" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-action">
                <a 
                  href={`https://wa.me/94767649974?text=${encodeURIComponent(srv.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card-link"
                >
                  <MessageCircle size={15} color="#25d366" />
                  <span>Request Quote</span>
                </a>

                <Link to="/contact" className="service-card-link">
                  <span>Inquire Now</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedServiceCard>
          ))}
        </div>

        {/* =========================================================
            MARITIME SECURITY INITIATIVE SPOTLIGHT
            ========================================================= */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(13, 21, 38, 0.95) 0%, rgba(30, 58, 138, 0.25) 100%)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2rem',
          margin: '5rem 0',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Anchor size={28} color="#fbbf24" />
            <h2 style={{ margin: 0, fontSize: '1.85rem', color: '#fff' }}>
              International Maritime Security &amp; Anti-Piracy Detachments
            </h2>
          </div>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '850px', marginBottom: '1.5rem' }}>
            Operating in international High Risk Areas (HRA) including the Indian Ocean, Gulf of Aden, and Red Sea corridors. 
            Sanic provides certified, weapon-trained Sea Marshals compliant with BIMCO Guardcon and IMO circulars.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{ background: 'rgba(5, 8, 17, 0.6)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ color: '#fbbf24', fontWeight: 700, marginBottom: '0.35rem' }}>STCW-95 Certified Personnel</div>
              <p style={{ fontSize: '0.88rem', color: '#9ca3af', margin: 0 }}>Former naval special forces trained in maritime counter-piracy tactics, vessel hardening, and onboard safety.</p>
            </div>
            <div style={{ background: 'rgba(5, 8, 17, 0.6)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ color: '#fbbf24', fontWeight: 700, marginBottom: '0.35rem' }}>Full ISPS Code Compliance</div>
              <p style={{ fontSize: '0.88rem', color: '#9ca3af', margin: 0 }}>Seamless integration with shipmasters, company security officers (CSO), and regional maritime security centers.</p>
            </div>
            <div style={{ background: 'rgba(5, 8, 17, 0.6)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ color: '#fbbf24', fontWeight: 700, marginBottom: '0.35rem' }}>Armory &amp; Port Clearance</div>
              <p style={{ fontSize: '0.88rem', color: '#9ca3af', margin: 0 }}>Smooth embarkation and disembarkation protocols across Sri Lankan ports (Colombo, Galle, Hambantota) and overseas hubs.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button">
              <span>Book Maritime Security Team</span>
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+94767649974" className="button button-secondary">
              <PhoneCall size={18} color="#f59e0b" />
              <span>Direct Maritime Ops: (+94) 767 649 974</span>
            </a>
          </div>
        </div>

        {/* =========================================================
            HOW WE WORK / 4 STEP ONBOARDING PROCESS
            ========================================================= */}
        <div style={{ margin: '5rem 0', textAlign: 'center' }}>
          <h2 className="section-title">Seamless Deployment in 4 Steps</h2>
          <p className="section-subtitle">
            From initial threat audit to full tactical deployment, our process is rapid, transparent, and legally compliant.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginTop: '2.5rem'
          }}>
            {[
              {
                step: "01",
                title: "Threat & Site Survey",
                desc: "Our risk consultants inspect entryways, perimeter barriers, blind spots, and operational vulnerabilities."
              },
              {
                step: "02",
                title: "Custom Security Blueprint",
                desc: "We design a detailed staffing matrix, camera layout, post orders, and emergency response escalation rules."
              },
              {
                step: "03",
                title: "Tactical Deployment",
                desc: "Vetted guards and officers are briefed, equipped, and deployed on-site with synchronized GPS wand tracking."
              },
              {
                step: "04",
                title: "24/7 Command Oversight",
                desc: "Continuous supervision, daily digital occurrence logs, and mobile patrol check-ins ensure flawless security."
              }
            ].map((st, sIdx) => (
              <div key={sIdx} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'rgba(245, 158, 11, 0.35)',
                  lineHeight: 1,
                  marginBottom: '0.75rem'
                }}>
                  {st.step}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.5rem' }}>{st.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#9ca3af', margin: 0 }}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          textAlign: 'center',
          background: 'radial-gradient(circle at 50% 50%, rgba(30,58,138,0.2) 0%, rgba(10,16,31,0.9) 100%)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2rem',
          margin: '4rem 0'
        }}>
          <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.75rem' }}>
            Ready to Protect What Matters Most?
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Contact our operations team today for a confidential, no-obligation security consultation and quote.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button">
              <span>Contact Us for Custom Proposal</span>
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+94767649974" className="button button-secondary">
              <PhoneCall size={18} color="#f59e0b" />
              <span>Call Us: (+94) 767 649 974</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;