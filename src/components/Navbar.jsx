import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Shield, Menu, X, ArrowRight, Clock } from 'lucide-react';
import logoImage from '../assets/sanic-log.png';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMobile = () => setMobileOpen(prev => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Top Notice Status Bar */}
      <div className="top-notice-bar">
        <div className="top-notice-container">
          <div className="status-indicator">
            <span className="pulse-dot"></span>
            <span><strong>24/7 Tactical Command:</strong> All Units Operational & Ready for Immediate Deployment</span>
          </div>
          <div className="top-notice-right">
            <a href="tel:+94767649974" className="top-phone-link">
              <Phone size={14} />
              <span>Hotline: (+94) 767 649 974</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav>
        <div className="container">
          <Link to="/" className="logo-link" onClick={closeMobile}>
            <div className="logo">
              <img 
                src={logoImage} 
                alt="Sanic Security Services Logo" 
                className="logo-image" 
              />
              <div className="brand-text-block">
                <span className="brand-name">SANIC SECURITY</span>
                <span className="brand-tagline">Elite Tactical & Corporate Protection</span>
              </div>
            </div>
          </Link>

          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobile}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMobile}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMobile}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
              onClick={closeMobile}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={closeMobile}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="nav-cta-btn"
              onClick={closeMobile}
            >
              <span>Request Quote</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;