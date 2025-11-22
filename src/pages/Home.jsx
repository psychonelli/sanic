import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // <-- Import for animation

// Import images (keeping your existing structure)
import aiimage from '../assets/ai-image.png';
import bio from '../assets/biometric.png';
import wearable from '../assets/warebles.png';
import security from '../assets/security-gaurds.png';
import cash from '../assets/cash-escort.png';
import consulting from '../assets/oonsulting.png';
import event from '../assets/event.png';
import cyber from '../assets/cybersecurity.png';
import cctv from '../assets/cctvv.png';
import { Analytics } from '@vercel/analytics/react';
// --- Reusable Animated Section Component ---
const AnimatedSection = ({ children, className, threshold = 0.15 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation only happens once
        threshold: threshold, // Trigger when this percentage of the element is visible
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
// ---------------------------------------------


function Home() {
  return (
    <div>
      <div className="container">
        {/* Simple Fade-In for Header */}
        <AnimatedSection className="header-animation" threshold={0.1}> 
            <h1>Welcome to Sanic Security Services & Investigation</h1>
            <p className="text-center">Your trusted partner in comprehensive security solutions.</p>
            <div className="flex justify-center">
              <Link to="/services" className="button">Explore Our Services</Link>
            </div>
        </AnimatedSection>
        
        {/* Latest Physical Security Trends Section - Animated as a whole block */}
        <AnimatedSection className="trends-section" threshold={0.2}>
          <h1 className="section-title">Latest Physical Security Trends in 2025</h1>
          <p className="section-subtitle">Discover cutting-edge advancements in physical security. Sanic Security leads with innovative solutions.</p>
          <div className="trends-grid">
            {/* Trend Card 1 */}
            <div className="trend-card">
              <img src={aiimage} alt="AI-Powered Surveillance Camera" className="trend-image" />
              <h2>AI-Powered Surveillance Systems</h2>
              <p>In 2025, AI-driven cameras with facial recognition and behavioral analysis are transforming surveillance, enabling real-time threat detection with 95% accuracy in high-traffic areas like malls and airports.</p>
            </div>
            {/* Trend Card 2 */}
            <div className="trend-card">
              <img src={bio} alt="Biometric Access Control Scanner" className="trend-image" />
              <h2>Biometric Access Control</h2>
              <p>Advanced biometric systems, including fingerprint and iris scanning, are securing 70% of corporate facilities in 2025, reducing unauthorized access incidents by integrating with smart locks.</p>
            </div>
            {/* Trend Card 3 */}
            <div className="trend-card">
              <img src={wearable} alt="Security Guard with Wearable Technology" className="trend-image" />
              <h2>Integrated Security Personnel Tech</h2>
              <p>Wearable devices like smart badges and real-time communication tools are enhancing guard efficiency in 2025, improving response times by 30% during incidents at large venues.</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/services" className="button">Learn How We Protect You</Link>
          </div>
        </AnimatedSection>

        {/* Our Services Section - Animated as a whole block */}
        <AnimatedSection className="services-section" threshold={0.15}>
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">Comprehensive security solutions tailored to your needs.</p>
          <div className="services-grid">
            
            {/* Service Card 1 */}
            <div className="service-card">
              <img src={security} alt="Security Services Personnel" className="service-image" />
              <h2>Security Services</h2>
              <p>Highly trained security personnel providing 24/7 protection for businesses, residences, and public spaces, ensuring safety with rapid response capabilities.</p>
            </div>
            {/* Service Card 2 */}
            <div className="service-card">
              <img src={cash} alt="Cash Transport Vehicle" className="service-image" />
              <h2>Cash Solutions</h2>
              <p>Secure cash-in-transit services and ATM management, using armored vehicles and advanced tracking to safeguard financial assets.</p>
            </div>
            {/* Service Card 3 */}
            <div className="service-card">
              <img src={consulting} alt="Security Consulting Meeting" className="service-image" />
              <h2>Consulting Services</h2>
              <p>Expert risk assessments and customized security plans to identify vulnerabilities and implement effective physical and operational safeguards.</p>
            </div>
            {/* Service Card 4 */}
            <div className="service-card">
              <img src={event} alt="Event Security Team" className="service-image" />
              <h2>Event Security</h2>
              <p>Specialized security for events of all sizes, with crowd management, VIP protection, and real-time monitoring to ensure safety.</p>
            </div>
            {/* Service Card 5 */}
            <div className="service-card">
              <img src={cctv} alt="CCTV Surveillance System" className="service-image" />
              <h2>CCTV</h2>
              <p>State-of-the-art CCTV systems with AI-enhanced monitoring, offering real-time alerts and high-resolution footage for comprehensive surveillance.</p>
            </div>
            {/* Service Card 6 */}
            <div className="service-card">
              <img src={cyber} alt="Cyber Security Dashboard" className="service-image" />
              <h2>Cyber Security</h2>
              <p>Advanced protection against digital threats, including firewalls, intrusion detection, and data encryption to secure your digital assets.</p>
            </div>
            
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/services" className="button">Explore All Services</Link>
          </div>
        </AnimatedSection>
        <Analytics />
      </div>
    </div>
  );
}

export default Home;