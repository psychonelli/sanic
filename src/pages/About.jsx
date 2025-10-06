import React from 'react';
import { useInView } from 'react-intersection-observer'; // For scroll-based animation

// Sample data for the Director Board
const directors = [
  { id: 1, name: "Saman Wedagama", title: "CEO & Founder", img: "/images/director1.jpg" },
  { id: 2, name: "Dilshan Wedagama", title: "Chief Technology Officer", img: "/images/director2.jpg" },
  { id: 3, name: "Sampath Adikari", title: "Head of Operations", img: "/images/director3.jpg" },
  { id: 4, name: "Chandima Premachandra", title: "Chief Financial Officer", img: "/images/director4.jpg" },
];

// Reusable component for animating sections
const AnimatedSection = ({ children, className, threshold = 0.15 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only happens once
    threshold: threshold, // Trigger when 15% of the element is visible
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
      <div className="container">
        <h1 className="text-center">About Sanic Security</h1>

        {/* Introduction Section */}
        <AnimatedSection className="about-intro" threshold={0.1}>
          <p>
            **Sanic Security** is a leading provider of security services with over 20 years of experience. We specialize in personalized security solutions, ensuring peace of mind for businesses and individuals alike.
          </p>

          <div className="experience-focus mt-8">
            <h2>Unrivaled Experience: The Sanic Advantage</h2>

            <p>
              The strength of Sanic Security lies in the caliber of our personnel. Our security teams are primarily composed of **veterans from elite military units and seasoned former law enforcement officers.** This background instills a level of discipline, tactical awareness, and crisis management expertise that is unmatched in the private security sector.
            </p>

            <ul className="bullet-list">
              <li>
                <strong>Ex-Military & Police Expertise:</strong> Our guards leverage years of high-stakes, real-world training in threat assessment, de-escalation, and rapid response, ensuring highly professional and disciplined security at all times.
              </li>
              <li>
                <strong>Tactical & Strategic Planning:</strong> We apply the operational planning and intelligence gathering skills honed in government service to develop proactive security strategies for our clients, moving beyond simple surveillance.
              </li>
            </ul>

            <h2 className="mt-8">Global Reach: Maritime Security Initiative</h2>
            <p>
              Recognizing the evolving nature of global risk, Sanic Security has established a specialized **Maritime Security Initiative.** We provide comprehensive protection for commercial vessels and offshore assets operating in high-risk zones, including the Indian Ocean and Gulf of Guinea.
            </p>
            <ul className="bullet-list">
              <li>
                <strong>Certified Sea Marshals:</strong> Our maritime teams are staffed by former Naval and Marine personnel, holding international certifications (e.g., STCW) required for international waters.
              </li>
              <li>
                <strong>Anti-Piracy & Asset Protection:</strong> We offer complete anti-piracy solutions, voyage risk analysis, and armed/unarmed escorts, ensuring compliance with all ISPS Code and international maritime laws.
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Vision and Mission Section */}
        <AnimatedSection className="vision-mission" threshold={0.2}>
          <div className="section-title">Our Core Principles</div>
          <div className="vm-grid">
            <div className="card">
              <h2>Our Vision</h2>
              <p>To be the world's most trusted security partner, pioneering proactive protection and setting the global standard for safety and integrity.</p>
            </div>
            <div className="card">
              <h2>Our Mission</h2>
              <p>To deliver seamless, intelligent, and effective security solutions powered by cutting-edge technology and highly trained professionals, ensuring the absolute safety of our clients' assets and people.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Director Board Section */}
        <AnimatedSection className="director-board" threshold={0.1}>
          <div className="section-title">The Director Board</div>
          <p className="section-subtitle">Guiding Sanic Security with experience and strategic foresight.</p>

          <div className="directors-grid">
            {directors.map((director) => (
              <div key={director.id} className="director-card">
                <img
                  src={director.img}
                  alt={director.name}
                  className="director-img"
                />
                <h3>{director.name}</h3>
                <p className="title">{director.title}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

export default About;