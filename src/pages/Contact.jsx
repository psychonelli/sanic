import React from 'react';
import { useInView } from 'react-intersection-observer'; // <-- Import for animation

// --- Reusable Animated Section Component ---
const AnimatedSection = ({ children, className, threshold = 0.1 }) => {
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
// ---------------------------------------------


function Contact() {
  return (
    <div>
      <div className="container">
        <AnimatedSection className="contact-header" threshold={0.1}>
            <h1>Contact Sanic Security</h1>
            <p className="section-subtitle">We are ready to respond to your security needs 24/7.</p>
        </AnimatedSection>

        <div className="contact-layout">
            
            {/* 1. Contact Form Section */}
            <AnimatedSection className="contact-form-section" threshold={0.2} delay={0.2}>
                <h2 className="section-title-small">Send Us a Message</h2>
                <div className="contact-form-box">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Security Inquiry, Quote Request, etc." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your Message"></textarea>
                    </div>
                    <button>Send Message</button>
                </div>
            </AnimatedSection>
            
            {/* 2. Contact Info & Location Map Section */}
            <AnimatedSection className="contact-info-map" threshold={0.2} delay={0.4}>
                <h2 className="section-title-small">Our Headquarters</h2>
                
                {/* Contact Info */}
                <div className="contact-info">
                    <p><strong>Phone:</strong>  (+94) 767 649 974</p>
                    <p><strong>Email:</strong>scanigamlath@gmail.com</p>
                    <p><strong>Address:</strong>  Lake Edge Residencis, Attidiya road, Dehiwala,Sri Lanka</p>
                </div>

                {/* Location Map Placeholder */}
                <div className="location-map">
                    {/* Placeholder for Google Maps Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.468249688755!2d79.8661642!3d6.891391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4e13.1!3m3!1m2!1s0x3ae253f191b40285%3A0x6b772c7262c5b3d6!2sDehiwala-Mount%20Lavinia!5e0!3m2!1sen!2slk!4v1699999999999!5m2!1sen!2slk" 
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Company Location Map"
                    ></iframe>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

export default Contact;