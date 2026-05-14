import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Share2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Hacienda Santa Filomena</h3>
          <p>Un refugio colonial en las montañas de Mérida, donde la tradición cafetalera cobra vida.</p>
          <div className="social-links">
            <a href="#"><ExternalLink size={20} /></a>
            <a href="#"><Share2 size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Explorar</h4>
          <ul>
            <li><a href="/la-hacienda">Nuestra Historia</a></li>
            <li><a href="/alojamiento">Alojamiento</a></li>
            <li><a href="/experiencias">Experiencias</a></li>
            <li><a href="/eventos">Eventos</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li><MapPin size={18} /> Pueblo Llano, Mérida, Venezuela</li>
            <li><Phone size={18} /> +58 412 345 6789</li>
            <li><Mail size={18} /> info@haciendasantafilomena.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hacienda Santa Filomena. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
