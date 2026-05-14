import React from 'react';
import './Eventos.css';

const Eventos = () => {
  const eventTypes = [
    {
      title: 'Convenciones Corporativas',
      description: 'Un espacio de paz y concentración para sus retiros empresariales, juntas directivas y talleres de equipo.',
      icon: '💼',
      features: ['Salones equipados', 'Privacidad absoluta', 'Catering personalizado', 'Wi-Fi de alta velocidad']
    },
    {
      title: 'Celebraciones Sociales',
      description: 'Bodas, aniversarios y encuentros familiares rodeados de la elegancia colonial y paisajes andinos.',
      icon: '🥂',
      features: ['Jardines majestuosos', 'Cena de gala', 'Alojamiento para invitados', 'Coordinación de eventos']
    },
    {
      title: 'Experiencias de Campo',
      description: 'Actividades al aire libre que fomentan la integración y el bienestar en contacto con la naturaleza.',
      icon: '🌿',
      features: ['Caminatas guiadas', 'Tour del café', 'Fogatas nocturnas', 'Talleres artesanales']
    }
  ];

  return (
    <div className="eventos-page">
      {/* Hero Section */}
      <section className="eventos-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in">
          <h1>Eventos & Convenciones</h1>
          <p>Donde la elegancia colonial se encuentra con la productividad y la celebración.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="eventos-intro section-padding">
        <div className="container text-center">
          <h2 className="section-title centered">Un Escenario Inigualable</h2>
          <p className="intro-text">
            El Centro de Convenciones Santa Filomena se diferencia de los tradicionales centros de reuniones 
            por contar con una infraestructura completa donde la privacidad y la calidez son protagonistas.
          </p>
        </div>
      </section>

      {/* Event Cards */}
      <section className="event-cards section-padding alt-bg">
        <div className="container">
          <div className="events-grid">
            {eventTypes.map((event, index) => (
              <div key={index} className="event-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="event-icon">{event.icon}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <ul className="event-features">
                  {event.features.map((feature, fIndex) => (
                    <li key={fIndex}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="eventos-cta section-padding">
        <div className="container glass cta-box">
          <h2>¿Planea su próximo gran evento?</h2>
          <p>Permítanos ayudarle a crear una experiencia memorable en el corazón de los Andes.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Solicitar Presupuesto</button>
            <button className="btn-secondary">Descargar Dossier</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventos;
