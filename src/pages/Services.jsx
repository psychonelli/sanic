import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // <-- Import for animation

// Import images (keeping your existing structure)
import cctv from '../assets/cctvv.png'; 
import cybersecurity from '../assets/cybersecurity.png'; 
import counslting from '../assets/oonsulting.png'; 
import event from '../assets/event.png'; 
import security from '../assets/security-gaurds.png'; 
import cash from '../assets/cash-escort.png'; 

// --- Animated Service Card Component ---
// This component applies the animation logic to a single card.
const AnimatedServiceCard = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Trigger when 10% of the card is visible
    });

    return (
        <div
            ref={ref}
            className={`service-card service-animation-target ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${delay}s` }} // Apply stagger delay
        >
            {children}
        </div>
    );
};
// ---------------------------------------------


function Services() {
  return (
    <div>
      <div className="container">
        <h1>Our Services</h1>
        <p className="section-subtitle">Comprehensive security solutions tailored to your needs.</p>
        
        <div className="services-grid">
            {/* Card 1: Security Services (0s delay) */}
            <AnimatedServiceCard delay={0}> 
                <img
                    src={security}
                    alt="Security Services Personnel"
                    className="service-image"
                />
                <h2>Security Services</h2>
                <p>Highly trained security personnel providing 24/7 protection for businesses, residences, and public spaces, ensuring safety with rapid response capabilities.</p>
            </AnimatedServiceCard>

            {/* Card 2: Cash Solutions (0.1s delay) */}
            <AnimatedServiceCard delay={0.1}>
                <img
                    src={cash}
                    alt="Cash Transport Vehicle"
                    className="service-image"
                />
                <h2>Cash Solutions</h2>
                <p>Secure cash-in-transit services and ATM management, using armored vehicles and advanced tracking to safeguard financial assets.</p>
            </AnimatedServiceCard>

            {/* Card 3: Consulting Services (0.2s delay) */}
            <AnimatedServiceCard delay={0.2}>
                <img
                    src={counslting}
                    alt="Security Consulting Meeting"
                    className="service-image"
                />
                <h2>Consulting Services</h2>
                <p>Expert risk assessments and customized security plans to identify vulnerabilities and implement effective physical and operational safeguards.</p>
            </AnimatedServiceCard>

            {/* Card 4: Event Security (0.3s delay) */}
            <AnimatedServiceCard delay={0.3}>
                <img
                    src={event}
                    alt="Event Security Team"
                    className="service-image"
                />
                <h2>Event Security</h2>
                <p>Specialized security for events of all sizes, with crowd management, VIP protection, and real-time monitoring to ensure safety.</p>
            </AnimatedServiceCard>

            {/* Card 5: CCTV (0.4s delay) */}
            <AnimatedServiceCard delay={0.4}>
                <img
                    src={cctv}
                    alt="CCTV Surveillance System"
                    className="service-image"
                />
                <h2>CCTV</h2>
                <p>State-of-the-art CCTV systems with AI-enhanced monitoring, offering real-time alerts and high-resolution footage for comprehensive surveillance.</p>
            </AnimatedServiceCard>

            {/* Card 6: Cyber Security (0.5s delay) */}
            <AnimatedServiceCard delay={0.5}>
                <img
                    src={cybersecurity}
                    alt="Cyber Security Dashboard"
                    className="service-image"
                />
                <h2>Cyber Security</h2>
                <p>Advanced protection against digital threats, including firewalls, intrusion detection, and data encryption to secure your digital assets.</p>
            </AnimatedServiceCard>
            
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/contact" className="button">Contact Us to Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export default Services;