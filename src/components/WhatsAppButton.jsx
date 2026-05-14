import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "584123456789"; // Número de ejemplo
  const message = encodeURIComponent("Hola, me gustaría recibir más información sobre Hacienda Santa Filomena.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float fade-in"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="tooltip">¡Hablemos!</span>
    </a>
  );
};

export default WhatsAppButton;
