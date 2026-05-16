import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Home as HomeIcon, MapPin, Star } from 'lucide-react';
import PhotoCarousel from '../components/PhotoCarousel';
import { galleryPhotos } from '../data/galleryPhotos';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: 'Alojamiento Real',
      desc: 'Habitaciones coloniales con vistas a las montañas y el aroma del café fresco.',
      icon: <HomeIcon size={24} />,
      img: '/gallery/16-patio-central.png',
    },
    {
      title: 'Ruta del Café',
      desc: 'Descubre el proceso artesanal desde la semilla hasta la taza en nuestras plantaciones.',
      icon: <Coffee size={24} />,
      img: '/gallery/03-cosecha-cafe.png',
    },
    {
      title: 'Eventos Exclusivos',
      desc: 'El escenario perfecto para bodas y celebraciones rodeados de naturaleza.',
      icon: <Star size={24} />,
      img: '/gallery/10-patio-nocturno.png',
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in">
          <span className="hero-tag">Tradición desde 1885</span>
          <h1>Donde la Historia se Mezcla con el Aroma del Café</h1>
          <p>Vive una experiencia colonial auténtica en el corazón de los Andes.</p>
          <div className="hero-btns">
            <Link to="/la-hacienda" className="btn-primary">Descubrir la Hacienda</Link>
            <Link to="/experiencias" className="btn-outline">Nuestras Experiencias</Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story section-padding">
        <div className="container story-grid">
          <div className="story-image">
            <img src="/gallery/14-fuente-jardin.png" alt="Patio interior de Hacienda Santa Filomena" className="img-fluid rounded shadow" />
          </div>
          <div className="story-text">
            <h2 className="section-title">Nuestra Esencia</h2>
            <p>Hacienda Santa Filomena no es solo un destino, es un legado vivo. Ubicada en las tierras altas de Venezuela, nuestra casa colonial ha guardado los secretos del mejor café por más de un siglo.</p>
            <p>Hoy, abrimos nuestras puertas para que vivas el confort de antaño con la hospitalidad de hoy.</p>
            <Link to="/la-hacienda" className="link-more">Leer nuestra historia <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <PhotoCarousel photos={galleryPhotos} />

      {/* Services Grid */}
      <section className="services section-padding crema-bg">
        <div className="container text-center">
          <h2 className="section-title">Experiencias Santa Filomena</h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card shadow-soft">
                <div className="service-img-container">
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="service-body">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Location Preview */}
      <section className="location-bar">
        <div className="container location-flex">
          <div className="location-item">
            <MapPin size={24} />
            <span>Jají, Mérida, Venezuela</span>
          </div>
          <div className="location-item">
            <Star size={24} />
            <span>4.9/5 Calificación de Huéspedes</span>
          </div>
          <div className="location-item">
            <Coffee size={24} />
            <span>+100 Hectáreas de Café</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
