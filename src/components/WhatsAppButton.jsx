import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/submissions';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const whatsappUrl = buildWhatsAppUrl('Hola, me gustaría recibir más información sobre Hacienda Santa Filomena.');

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float fade-in"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} aria-hidden="true" />
      <span className="tooltip">¡Hablemos!</span>
    </a>
  );
};

export default WhatsAppButton;
