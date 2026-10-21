import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export default function FloatingActions() {
  const whatsappUrl = "https://wa.me/94767649974?text=" + encodeURIComponent("Hello Sanic Security, I would like to request an urgent security consultation / service quotation.");

  return (
    <div className="floating-actions-container" aria-label="Quick Contact Assistance">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn floating-btn-whatsapp"
        title="Chat on WhatsApp with Security Ops"
      >
        <MessageCircle size={18} />
        <span>WhatsApp Ops</span>
      </a>

      <a 
        href="tel:+94767649974" 
        className="floating-btn floating-btn-call"
        title="Call 24/7 Tactical Hotline"
      >
        <Phone size={18} />
        <span>24/7 Hotline</span>
      </a>
    </div>
  );
}
