import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  MessageCircle, 
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import Seo from '../components/Seo';

const AnimatedSection = ({ children, className = '', threshold = 0.1 }) => {
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

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Physical Armed Guarding',
    urgency: 'Standard Request',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const directWhatsappText = `Hello Sanic Security, I am submitting an inquiry:
Name: ${formData.name || 'Client'}
Service: ${formData.service}
Urgency: ${formData.urgency}
Notes: ${formData.message || 'Please contact me regarding security solutions.'}`;

  return (
    <div>
      <Seo 
        title="Contact Sanic Security | 24/7 Tactical Operations & Security Quotes in Dehiwala, Sri Lanka"
        description="Contact Sanic Security Services in Dehiwala, Colombo, Sri Lanka. 24/7 Tactical hotline: (+94) 767 649 974. Request a confidential security proposal, guard deployment, or maritime escort."
        path="/contact"
      />
      <div className="container">
        
        {/* Header */}
        <AnimatedSection className="contact-header" threshold={0.1}>
          <div style={{ textAlign: 'center', padding: '3.5rem 0 2rem 0' }}>
            <div className="trust-pill">
              <Clock size={16} />
              <span>24/7 COMMAND DESK OPERATIONAL &bull; IMMEDIATE DISPATCH AVAILABLE</span>
            </div>
            <h1>
              Contact Sanic Security &amp; <br />
              <span className="gold-gradient-text">Tactical Operations</span>
            </h1>
            <p className="section-subtitle">
              Reach our 24/7 Operations Desk for emergency security mobilization, bespoke corporate quotes, or maritime voyage escorts.
            </p>
          </div>
        </AnimatedSection>

        {/* Emergency Alert Bar */}
        <div style={{
          background: 'rgba(220, 38, 38, 0.15)',
          border: '1px solid rgba(220, 38, 38, 0.4)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <AlertTriangle size={24} color="#ef4444" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ color: '#fff', fontWeight: 700 }}>Facing an Active Security Emergency or Urgent Threat?</div>
              <div style={{ color: '#fca5a5', fontSize: '0.9rem' }}>Do not wait for form replies. Call our 24/7 Tactical Response Hotline directly.</div>
            </div>
          </div>
          <a 
            href="tel:+94767649974" 
            className="button"
            style={{ 
              background: '#dc2626', 
              borderColor: '#ef4444', 
              color: '#fff',
              fontSize: '0.95rem',
              padding: '0.65rem 1.5rem'
            }}
          >
            <Phone size={16} />
            <span>Call (+94) 767 649 974</span>
          </a>
        </div>

        <div className="contact-layout">
          
          {/* 1. Contact Form Section */}
          <AnimatedSection className="contact-form-section" threshold={0.15}>
            <div className="contact-form-box">
              <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>
                Request a Proposal / Security Audit
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                Fill out the confidential form below and our operations director will respond within 2 to 4 hours.
              </p>

              {submitted ? (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                    Inquiry Received Successfully
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our tactical duty officer has received your request and will contact you shortly.
                  </p>
                  <a 
                    href={`https://wa.me/94767649974?text=${encodeURIComponent(directWhatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <MessageCircle size={18} />
                    <span>Speed Up Response via WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name / Organization *</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="e.g. Johnathan Silva / Apex Marine Corp" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="email">Work Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="name@company.com" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="(+94) 7X XXX XXXX" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="service">Service Required</label>
                      <select id="service" value={formData.service} onChange={handleChange}>
                        <option value="Physical Armed Guarding">Physical Armed &amp; Static Guarding</option>
                        <option value="Maritime Sea Marshals">Maritime Sea Marshals &amp; Vessel Escort</option>
                        <option value="Armored Cash In Transit">Armored Cash-In-Transit Logistics</option>
                        <option value="AI CCTV Surveillance">AI CCTV Surveillance &amp; Remote Hub</option>
                        <option value="VIP Executive Protection">VIP Close Protection &amp; Motorcade</option>
                        <option value="Security Risk Audit">Security Vulnerability Audit / Survey</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="urgency">Deployment Timeline</label>
                      <select id="urgency" value={formData.urgency} onChange={handleChange}>
                        <option value="Immediate Emergency (<24 Hours)">Immediate Emergency (&lt; 24h)</option>
                        <option value="Within 7 Days">Within 7 Days</option>
                        <option value="Future Contract / Tender">Future Contract / Tender</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Scope &amp; Specific Requirements</label>
                    <textarea 
                      id="message" 
                      placeholder="Brief details about location, hours, number of personnel or vessels..."
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button type="submit" className="button" style={{ flex: 1 }}>
                      <Send size={18} />
                      <span>Submit Confidential Inquiry</span>
                    </button>

                    <a 
                      href={`https://wa.me/94767649974?text=${encodeURIComponent(directWhatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-secondary"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      <MessageCircle size={18} color="#25d366" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* 2. Contact Info & Location Map Section */}
          <AnimatedSection className="contact-info-map" threshold={0.15}>
            <div className="contact-info-box">
              <h2 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.25rem' }}>
                Operational Command Center
              </h2>

              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>24/7 Tactical Hotline</h4>
                  <p><a href="tel:+94767649974">(+94) 767 649 974</a></p>
                  <span style={{ fontSize: '0.8rem', color: '#10b981' }}>&bull; Live dispatch officer on duty</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Official Inquiries &amp; Tenders</h4>
                  <p><a href="mailto:scanigamlath@gmail.com">scanigamlath@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Headquarters Address</h4>
                  <p>Lake Edge Residencies, Attidiya Road, Dehiwala, Sri Lanka</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4>Coverage &amp; Jurisdiction</h4>
                  <p>Island-Wide Sri Lanka &bull; Ports of Colombo, Galle &amp; Hambantota &bull; Indian Ocean High-Risk Waterways</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.468249688755!2d79.8661642!3d6.891391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4e13.1!3m3!1m2!1s0x3ae253f191b40285%3A0x6b772c7262c5b3d6!2sDehiwala-Mount%20Lavinia!5e0!3m2!1sen!2slk!4v1699999999999!5m2!1sen!2slk" 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanic Security Headquarters Map"
              ></iframe>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
}

export default Contact;