import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Award, 
  Clock, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Lock, 
  Radio, 
  Anchor, 
  Building2, 
  Star,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  AlertTriangle
} from 'lucide-react';

// Import images
import aiimage from '../assets/ai-image.png';
import bio from '../assets/biometric.png';
import wearable from '../assets/warebles.png';
import security from '../assets/security-gaurds.png';
import cash from '../assets/cash-escort.png';
import consulting from '../assets/oonsulting.png';
import event from '../assets/event.png';
import cyber from '../assets/cybersecurity.png';
import cctv from '../assets/cctvv.png';
import GuardCCTVDefenseAnimation from '../components/GuardCCTVDefenseAnimation';
import Seo from '../components/Seo';
import { Analytics } from '@vercel/analytics/react';

// --- Reusable Animated Section Component ---
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

function Home() {
  // Interactive Quote Estimator State
  const [selectedService, setSelectedService] = useState('armed-guards');
  const [selectedFacility, setSelectedFacility] = useState('corporate');
  const [selectedTimeline, setSelectedTimeline] = useState('immediate');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Plan recommendations based on estimator selection
  const planDetails = {
    'armed-guards': {
      title: 'Tactical Armed & Physical Guard Unit',
      specs: 'Includes ex-military personnel, body-worn cameras, synchronized GPS check-ins & 24/7 supervisor rounds.',
      timeEstimate: 'Deployment within 12 - 24 hours.'
    },
    'maritime': {
      title: 'Anti-Piracy & Maritime Escort Detachment',
      specs: 'STCW & ISPS certified Sea Marshals equipped for High Risk Areas (HRA), Indian Ocean and Gulf passages.',
      timeEstimate: 'Port clearance & mobilization in 24 - 48 hours.'
    },
    'cash-solutions': {
      title: 'Armored Cash-In-Transit & Vault Escort',
      specs: 'Level IV ballistic armored vehicles, satellite telemetry tracking, and dual-custody cash handlers.',
      timeEstimate: 'Same-day schedule or immediate emergency reserve.'
    },
    'cctv-ai': {
      title: 'AI Smart Surveillance & Perimeter Guarding',
      specs: 'Facial recognition, thermal scanning, automated intrusion tripwires & remote command center link.',
      timeEstimate: 'Site assessment within 24 hours, installation in 48 hours.'
    },
    'vip-protection': {
      title: 'Executive Close Protection & VIP Escort',
      specs: 'Discreet or high-profile close protection officers, defensive motorcade drivers & threat counter-surveillance.',
      timeEstimate: 'Immediate tactical deployment available 24/7.'
    },
    'cyber-security': {
      title: 'Enterprise Cyber Threat & Risk Assessment',
      specs: 'Penetration testing, active SOC monitoring, ransomware mitigation and data encryption audit.',
      timeEstimate: 'Audit initiate within 24 hours.'
    }
  };

  const currentPlan = planDetails[selectedService] || planDetails['armed-guards'];
  const whatsappQuoteMsg = `Hello Sanic Security Ops, I generated a quote on your website for: ${currentPlan.title} (${selectedFacility} facility, ${selectedTimeline} timeline). Please provide pricing and availability.`;

  return (
    <div>
      <Seo 
        title="Sanic Security Services | Security Guards, CCTV & Maritime Security in Sri Lanka"
        description="Sanic Security Services & Investigation, Dehiwala, Sri Lanka. 24/7 security guards, AI CCTV surveillance, armored cash-in-transit, VIP protection, and Indian Ocean maritime security. Call (+94) 767 649 974."
        path="/"
      />
      <div className="container">
        
        {/* =========================================================
            HERO SECTION
            ========================================================= */}
        <section className="hero-wrapper">
          <div className="hero-radar-ring" aria-hidden="true"></div>
          
          <div className="hero-content">
            <div className="trust-pill">
              <Shield size={16} />
              <span>ELITE VETERAN FORCE &bull; GOVERNMENT LICENSED &bull; 24/7 TACTICAL READINESS</span>
            </div>

            <h1>
              Elite Tactical Security &amp; <br />
              <span className="gold-gradient-text">High-Risk Asset Protection</span>
            </h1>

            <p className="hero-subtitle">
              Sanic Security delivers battle-tested protection powered by ex-military personnel, 
              maritime sea marshals, armored logistics, and AI-driven surveillance across Sri Lanka and international maritime waters.
            </p>

            <div className="hero-cta-group">
              <a href="#estimator" className="button">
                <span>Calculate Security Plan</span>
                <ArrowRight size={18} />
              </a>

              <a href="tel:+94767649974" className="button button-secondary">
                <PhoneCall size={18} color="#f59e0b" />
                <span>24/7 Tactical Dispatch: (+94) 767 649 974</span>
              </a>
            </div>

            {/* High-Converting Stats Proof Bar */}
            <div className="stats-bar-wrapper">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Years of Industry Leadership</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Incident-Free Mission Record</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">&lt; 15m</div>
                  <div className="stat-label">Rapid Incident Dispatch Time</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Vetted Military &amp; Police Veterans</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            TRUST & CREDENTIAL STRIP
            ========================================================= */}
        <div className="trust-strip">
          <div className="trust-strip-title">Recognized Standards &amp; Operational Compliance</div>
          <div className="trust-badges-grid">
            <div className="trust-badge-pill">
              <Award size={16} color="#fbbf24" />
              <span>Ministry of Defence Registered</span>
            </div>
            <div className="trust-badge-pill">
              <Anchor size={16} color="#fbbf24" />
              <span>STCW &amp; ISPS Maritime Certified</span>
            </div>
            <div className="trust-badge-pill">
              <Lock size={16} color="#fbbf24" />
              <span>ISO 9001:2015 Operational Standard</span>
            </div>
            <div className="trust-badge-pill">
              <Radio size={16} color="#fbbf24" />
              <span>24/7 Live GPS Command Link</span>
            </div>
            <div className="trust-badge-pill">
              <Building2 size={16} color="#fbbf24" />
              <span>500+ Corporate Sites Safeguarded</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            INTERACTIVE SECURITY PLAN ESTIMATOR (High-Conversion Feature)
            ========================================================= */}
        <AnimatedSection threshold={0.15}>
          <div id="estimator" className="estimator-card">
            <h2 className="estimator-title">Instant Security Solution &amp; Deployment Estimator</h2>
            <p className="estimator-subtitle">
              Select your requirement below to calculate tactical equipment, personnel allocation, and immediate deployment availability.
            </p>

            <div className="estimator-grid">
              <div className="estimator-option-group">
                <label htmlFor="service-type">1. Required Security Service</label>
                <select 
                  id="service-type"
                  className="estimator-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="armed-guards">Tactical Guarding &amp; Armed Personnel</option>
                  <option value="maritime">Maritime Protection &amp; Sea Marshals</option>
                  <option value="cash-solutions">Armored Cash-In-Transit Logistics</option>
                  <option value="cctv-ai">AI Surveillance &amp; CCTV Monitoring</option>
                  <option value="vip-protection">VIP Close Protection &amp; Escort</option>
                  <option value="cyber-security">Corporate Cyber Threat Protection</option>
                </select>
              </div>

              <div className="estimator-option-group">
                <label htmlFor="facility-type">2. Facility / Asset Type</label>
                <select 
                  id="facility-type"
                  className="estimator-select"
                  value={selectedFacility}
                  onChange={(e) => setSelectedFacility(e.target.value)}
                >
                  <option value="corporate">Commercial Tower / Head Office</option>
                  <option value="banking">Financial Institution / Bank / ATM</option>
                  <option value="industrial">Factory, Warehouse &amp; Logistics Hub</option>
                  <option value="maritime-vessel">Cargo / Container Vessel / Tanker</option>
                  <option value="diplomatic">Embassy / VIP Private Residence</option>
                  <option value="event-venue">High-Capacity Event Venue</option>
                </select>
              </div>

              <div className="estimator-option-group">
                <label htmlFor="timeline-type">3. Deployment Urgency</label>
                <select 
                  id="timeline-type"
                  className="estimator-select"
                  value={selectedTimeline}
                  onChange={(e) => setSelectedTimeline(e.target.value)}
                >
                  <option value="immediate">Immediate Dispatch (Under 24 Hours)</option>
                  <option value="within-week">Mobilize Within 7 Days</option>
                  <option value="future">Tender / Scheduled Future Contract</option>
                </select>
              </div>

              {/* Dynamic Result Box */}
              <div className="estimator-result-box">
                <div>
                  <span className="result-badge">&bull; Recommended Allocation Protocol</span>
                  <div className="result-heading">{currentPlan.title}</div>
                  <p className="result-desc">{currentPlan.specs}</p>
                  <p className="result-desc" style={{ marginTop: '0.35rem', color: '#fbbf24' }}>
                    <strong>Mobilization Window:</strong> {currentPlan.timeEstimate}
                  </p>
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a 
                    href={`https://wa.me/94767649974?text=${encodeURIComponent(whatsappQuoteMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <MessageCircle size={18} />
                    <span>Get Fast Quote on WhatsApp</span>
                  </a>
                  <Link to="/contact" className="button button-secondary" style={{ whiteSpace: 'nowrap' }}>
                    <span>Official Proposal</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* =========================================================
            OUR SERVICES SECTION
            ========================================================= */}
        <AnimatedSection className="services-section" threshold={0.12}>
          <h2 className="section-title">Comprehensive Security Solutions</h2>
          <p className="section-subtitle">
            Tailored, multi-layered security infrastructure designed to neutralize threats before they impact your operations.
          </p>

          <div className="services-grid">
            
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-image-container">
                <img src={security} alt="Armed Security Personnel" className="service-image" />
              </div>
              <h2>
                <span>Physical &amp; Armed Guarding</span>
                <Shield size={20} color="#fbbf24" />
              </h2>
              <p>
                Stationed and mobile security personnel drawn exclusively from elite military and police veterans. 
                Trained in de-escalation, rapid tactical intervention, and perimeter control.
              </p>
              <div className="service-card-action">
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>&bull; 24/7 Armed Response</span>
                <Link to="/services" className="service-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-image-container">
                <img src={cash} alt="Armored Cash In Transit" className="service-image" />
              </div>
              <h2>
                <span>Cash Solutions &amp; Escort</span>
                <Lock size={20} color="#fbbf24" />
              </h2>
              <p>
                Armored transport vehicles with satellite GPS tracking, dual-custody verification, and armed escort officers. 
                Guaranteed zero-loss transit for bullion, cash, and high-value commodities.
              </p>
              <div className="service-card-action">
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>&bull; Armored Fleet</span>
                <Link to="/services" className="service-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-image-container">
                <img src={cctv} alt="AI CCTV Surveillance System" className="service-image" />
              </div>
              <h2>
                <span>AI CCTV &amp; Smart Remote Hub</span>
                <Radio size={20} color="#fbbf24" />
              </h2>
              <p>
                Advanced AI visual telemetry with facial recognition, license plate recognition, perimeter line tripwires, 
                and high-definition video beamed 24/7 to our central command desk.
              </p>
              <div className="service-card-action">
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>&bull; Remote Command Link</span>
                <Link to="/services" className="service-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-image-container">
                <img src={consulting} alt="Security Risk Consulting" className="service-image" />
              </div>
              <h2>
                <span>Tactical Security Consulting</span>
                <Users size={20} color="#fbbf24" />
              </h2>
              <p>
                Vulnerability assessments, crisis management protocols, counter-industrial espionage, and tailor-made emergency evacuation blueprints for corporate boards.
              </p>
              <div className="service-card-action">
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>&bull; Risk Audits</span>
                <Link to="/services" className="service-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="service-card">
              <div className="service-image-container">
                <img src={event} alt="Event VIP Security" className="service-image" />
              </div>
              <h2>
                <span>VIP &amp; High-Profile Events</span>
                <Building2 size={20} color="#fbbf24" />
              </h2>
              <p>
                Full-spectrum crowd dynamics management, VIP protection motorcades, metal-detection access arches, and discrete covert intelligence units for summits and major galas.
              </p>
              <div className="service-card-action">
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>&bull; Close Protection</span>
                <Link to="/services" className="service-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="service-card">
              <div className="service-image-container">
                <img src={cyber} alt="Cyber Security Defense" className="service-image" />
              </div>
              <h2>
                <span>Cyber &amp; Digital Defense</span>
                <Shield size={20} color="#fbbf24" />
              </h2>
              <p>
                Bridging physical and digital perimeter security with next-gen firewalls, real-time intrusion interception, 
                and data safeguard solutions against targeted corporate attacks.
              </p>
              <div className="service-card-action">
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>&bull; SOC Monitoring</span>
                <Link to="/services" className="service-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

          <div className="flex justify-center mt-8">
            <Link to="/services" className="button">
              <span>View Full Service Catalog</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>

        {/* =========================================================
            HOW TO SECURE WITH GUARD & CCTV (Interactive Animation)
            ========================================================= */}
        <AnimatedSection threshold={0.1}>
          <GuardCCTVDefenseAnimation />
        </AnimatedSection>

        {/* =========================================================
            WHY CLIENTS CHOOSE SANIC (The Pillars of Superiority)
            ========================================================= */}
        <AnimatedSection threshold={0.15}>
          <div className="why-us-section">
            <h2 className="section-title">Why Leading Enterprises Choose Sanic</h2>
            <p className="section-subtitle">
              We eliminate vulnerability with a military-grade approach, rigorous vetting, and unmatched field response times.
            </p>

            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Award />
                </div>
                <h3>100% Veteran Personnel</h3>
                <p>Every field operative is recruited from elite armed forces divisions, armed police units, or navy commando wings with spotless service records.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Clock />
                </div>
                <h3>Under 15-Min Response</h3>
                <p>Our rapid tactical units operate on roving 24/7 patrols, ready to reach client premises and neutralize alerts within minutes.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Anchor />
                </div>
                <h3>International Maritime Wing</h3>
                <p>Equipped and certified for vessel escort across the Indian Ocean and Gulf passages, ensuring compliance with international maritime laws.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Radio />
                </div>
                <h3>Live Command Link</h3>
                <p>Guard patrol verification, body-cam feeds, and real-time incident logging monitored centrally around the clock.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* =========================================================
            LATEST 2025 SECURITY TRENDS
            ========================================================= */}
        <AnimatedSection className="trends-section" threshold={0.15}>
          <h2 className="section-title">Latest Physical Security Trends in 2025</h2>
          <p className="section-subtitle">
            How Sanic integrates next-generation intelligence, biometric barriers, and wearable guard tech to protect your assets.
          </p>

          <div className="trends-grid">
            
            <div className="trend-card">
              <span className="trend-tag">Autonomous Defense</span>
              <img src={aiimage} alt="AI-Powered Surveillance Camera" className="trend-image" />
              <h2>AI-Powered Surveillance</h2>
              <p>
                In 2025, AI-driven cameras with behavioral anomaly detection and facial biometrics enable real-time threat neutralization with 95% precision in high-risk zones.
              </p>
            </div>

            <div className="trend-card">
              <span className="trend-tag">Biometric Zero-Trust</span>
              <img src={bio} alt="Biometric Access Control Scanner" className="trend-image" />
              <h2>Multi-Factor Biometrics</h2>
              <p>
                High-security iris, vein, and anti-spoof facial authentication integrate seamlessly with physical turnstiles, preventing unauthorized entry across corporate facilities.
              </p>
            </div>

            <div className="trend-card">
              <span className="trend-tag">Connected Guard Force</span>
              <img src={wearable} alt="Security Guard with Wearable Technology" className="trend-image" />
              <h2>Smart Body-Worn Guard Tech</h2>
              <p>
                Real-time biometric health monitoring, live streaming body-cams, and automated duress alerts empower our officers to react 30% faster during emergencies.
              </p>
            </div>

          </div>

          <div className="flex justify-center mt-8">
            <Link to="/services" className="button">
              <span>Explore Protective Technology</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>

        {/* =========================================================
            CLIENT TESTIMONIALS (Conversion Driver)
            ========================================================= */}
        <AnimatedSection className="testimonials-section" threshold={0.15}>
          <h2 className="section-title">Client Trust &amp; Endorsements</h2>
          <p className="section-subtitle">
            See why leading commercial enterprises, shipping lines, and industrial facilities depend on Sanic daily.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div>
                <div className="stars-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-text">
                  &ldquo;Sanic provided armed maritime escorts for our container fleet through the Indian Ocean corridor. Their sea marshals are thoroughly disciplined, professional, and kept our crews entirely safe.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MS</div>
                <div className="author-info">
                  <h4>Capt. M. Senanayake</h4>
                  <span>Fleet Operations Director &bull; Maritime Logistics</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="stars-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-text">
                  &ldquo;The difference between ordinary security and Sanic's ex-military personnel is night and day. Punctual, alert, highly trained, and their 24/7 command center gives our corporate headquarters total peace of mind.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">RF</div>
                <div className="author-info">
                  <h4>Rohan Fernando</h4>
                  <span>Head of Facilities &bull; Commercial Banking Group</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="stars-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-text">
                  &ldquo;Their armored cash transit and ATM replenishment teams operate with surgical precision. Over 3 years with zero security breaches or transit delays. Highly recommended.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">KP</div>
                <div className="author-info">
                  <h4>K. Perera</h4>
                  <span>Chief Risk Officer &bull; Retail Consortium</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* =========================================================
            EMERGENCY 24/7 DISPATCH CALLOUT (High Conversion)
            ========================================================= */}
        <AnimatedSection threshold={0.15}>
          <div className="emergency-dispatch-banner">
            <div className="dispatch-badge">
              <AlertTriangle size={15} />
              <span>Urgent Security Threat or Emergency?</span>
            </div>

            <h2 className="dispatch-title">
              Instant Tactical Deployment Available 24 Hours a Day
            </h2>

            <p className="dispatch-desc">
              Whether you require rapid on-site reinforcement, emergency cash transport, or urgent close protection, 
              our tactical command center is on standby for immediate mobilization.
            </p>

            <div className="dispatch-actions">
              <a href="tel:+94767649974" className="button dispatch-call-btn">
                <PhoneCall size={20} />
                <span>Call Emergency Ops: (+94) 767 649 974</span>
              </a>

              <a 
                href="https://wa.me/94767649974?text=URGENT%20SECURITY%20DEPLOYMENT%20REQUEST"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                <MessageCircle size={20} color="#25d366" />
                <span>Instant WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* =========================================================
            FREQUENTLY ASKED QUESTIONS (Removes Client Doubts)
            ========================================================= */}
        <AnimatedSection threshold={0.15}>
          <div style={{ maxWidth: '850px', margin: '4rem auto' }}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common questions clients ask when choosing Sanic for their protection requirements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  q: "How quickly can security personnel or guards be deployed?",
                  a: "For emergency assignments, our rapid-response teams can mobilize in under 24 hours (or within 15 minutes for locations within our active patrol zones). For planned commercial contracts, mobilization occurs within 3 to 7 business days following site risk assessment."
                },
                {
                  q: "Are Sanic guards armed and legally licensed?",
                  a: "Yes. Sanic Security Services is fully registered with the Ministry of Defence of Sri Lanka. We maintain licensed armed guards, certified sea marshals, and unarmed tactical personnel, all complying with national regulations and international standards."
                },
                {
                  q: "Can Sanic handle international maritime anti-piracy escorts?",
                  a: "Yes. Our maritime division deploys certified Sea Marshals holding STCW 95, firearms competency certificates, and maritime security training for voyages through the Indian Ocean, Red Sea, and international High Risk Areas (HRA)."
                },
                {
                  q: "What background checks do your security guards undergo?",
                  a: "All personnel undergo rigorous multi-tier vetting including criminal background clearance, former service record validation from military/police headquarters, drug screening, and continuous psychological evaluations."
                }
              ].map((faq, i) => (
                <div 
                  key={i}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleFaq(i)}
                >
                  <div style={{
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <span style={{ fontWeight: 600, color: '#fff', fontSize: '1.05rem' }}>{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={20} color="#f59e0b" /> : <ChevronDown size={20} color="#9ca3af" />}
                  </div>
                  {openFaq === i && (
                    <div style={{
                      padding: '0 1.5rem 1.25rem 1.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.98rem',
                      lineHeight: '1.6',
                      borderTop: '1px solid rgba(255,255,255,0.05)'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <Analytics />
      </div>
    </div>
  );
}

export default Home;