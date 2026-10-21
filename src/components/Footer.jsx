import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, ArrowRight, Anchor } from 'lucide-react';
import logoImage from '../assets/sanic-log.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand & Overview */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img 
                src={logoImage} 
                alt="Sanic Security" 
                style={{ height: '48px', width: 'auto' }}
              />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#fff', fontFamily: 'var(--font-display)' }}>SANIC SECURITY</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--gold-400)', letterSpacing: '0.05em' }}>SERVICES &amp; INVESTIGATION</span>
              </div>
            </div>

            <p style={{ color: '#9ca3af', fontSize: '0.92rem', lineHeight: '1.6', maxWidth: '380px', marginBottom: '1.25rem' }}>
              Sri Lanka's leading provider of elite physical guarding, armed transit, maritime sea marshals, and AI-enabled surveillance. 
              Staffed exclusively by decorated ex-military and police veterans.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="trust-badge-pill" style={{ fontSize: '0.78rem', padding: '0.3rem 0.75rem' }}>
                &bull; Min. of Defence Approved
              </span>
              <span className="trust-badge-pill" style={{ fontSize: '0.78rem', padding: '0.3rem 0.75rem' }}>
                &bull; STCW-95 Maritime
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links-list">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Sanic &amp; Leadership</Link></li>
              <li><Link to="/services">Tactical Services</Link></li>
              <li><Link to="/contact">Contact &amp; 24/7 Hotline</Link></li>
              <li><Link to="/services">Maritime Protection Wing</Link></li>
            </ul>
          </div>

          {/* Operations & Dispatch */}
          <div className="footer-contact">
            <h3 className="footer-title">Tactical Command</h3>
            <p>
              <strong>24/7 Hotline:</strong><br />
              <a href="tel:+94767649974" style={{ color: 'var(--gold-400)', textDecoration: 'none' }}>
                (+94) 767 649 974
              </a>
            </p>
            <p>
              <strong>Inquiries:</strong><br />
              <a href="mailto:scanigamlath@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                scanigamlath@gmail.com
              </a>
            </p>
            <p>
              <strong>HQ Address:</strong><br />
              Lake Edge Residencies, Attidiya Rd, Dehiwala, Sri Lanka
            </p>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/contact" className="button" style={{ fontSize: '0.88rem', padding: '0.6rem 1.25rem' }}>
                <span>Request Proposal</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sanic Security Services &amp; Investigation. Powered by  <a style={{ color: "green", textDecoration: "none" }} href="https://invictustechno.com" target="_blank" rel="noopener noreferrer"> INVICTUS TECHNOLOGY</a> </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;