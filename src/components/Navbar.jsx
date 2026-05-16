import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'La Hacienda', path: '/la-hacienda' },
    { name: 'Alojamiento', path: '/alojamiento' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Experiencias', path: '/experiencias' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-main">Hacienda</span>
          <span className="logo-sub">Santa Filomena</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" className="btn-primary nav-cta">
            <Calendar size={18} aria-hidden="true" />
            <span>Reservar</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contacto" className="btn-primary mobile-cta" onClick={() => setIsOpen(false)}>
          <Calendar size={18} aria-hidden="true" />
          <span>Reservar</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
