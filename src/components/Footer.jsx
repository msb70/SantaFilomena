import { Link } from 'react-router-dom';
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
            <a href="#" aria-label="Abrir perfil externo"><ExternalLink size={20} aria-hidden="true" /></a>
            <a href="#" aria-label="Compartir Hacienda Santa Filomena"><Share2 size={20} aria-hidden="true" /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Explorar</h4>
          <ul>
            <li><Link to="/la-hacienda">Nuestra Historia</Link></li>
            <li><Link to="/alojamiento">Alojamiento</Link></li>
            <li><Link to="/experiencias">Experiencias</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li><MapPin size={18} aria-hidden="true" /> Jají, Mérida, Venezuela</li>
            <li><Phone size={18} aria-hidden="true" /> +58 412 345 6789</li>
            <li><Mail size={18} aria-hidden="true" /> info@haciendasantafilomena.com</li>
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
