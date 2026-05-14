import React from 'react';
import './LaHacienda.css';

const LaHacienda = () => {
  return (
    <div className="hacienda-page">
      {/* Hero Section */}
      <section className="hacienda-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in">
          <h1>Nuestra Historia</h1>
          <p>Un legado que perdura entre montañas y cafetales desde 1885.</p>
        </div>
      </section>

      {/* History Content */}
      <section className="hacienda-content section-padding">
        <div className="container">
          <div className="history-grid">
            <div className="history-text">
              <h2 className="section-title">Con Aires de la Colonia y Aroma de Café</h2>
              <p>
                Santa Filomena es un perfecto balance entre lo pintoresco colonial y el confort moderno. 
                Ubicada en la cima de los Andes Venezolanos, en Jají, nuestra casona fue construida en 1885 
                respondiendo a las necesidades del floreciente negocio cafetalero de la época.
              </p>
              <p>
                Desde su imponente fachada hasta el antiguo patio de secado de café en la parte central, 
                cada rincón de la hacienda delata las funciones de días lejanos, cuando en estos corredores 
                se hablaba de granos de café, quintales y rumias.
              </p>
            </div>
            <div className="history-image">
              <div className="image-card">
                <img src="/src/assets/hacienda_colonial_facade.png" alt="Fachada de la Hacienda" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Section */}
      <section className="restoration-section section-padding alt-bg">
        <div className="container">
          <div className="history-grid reverse">
            <div className="history-text">
              <h2 className="section-title">Preservando la Tradición</h2>
              <p>
                En 1986, la Casona de Santa Filomena fue cuidadosamente restaurada para convertirse en un 
                agradable Centro de Convenciones y Reuniones, manteniendo su presencia señorial y cálida elegancia.
              </p>
              <p>
                A diferencia de los centros de reuniones tradicionales, nuestra infraestructura ofrece privacidad, 
                concentración y un ambiente cálido rodeado de paisajes majestuosos, convirtiéndonos en el 
                sitio ideal para el trabajo en equipo y la desconexión.
              </p>
            </div>
            <div className="history-image">
              <div className="image-card accent">
                <div className="placeholder-image">
                  <span>Arquitectura & Paisaje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Features */}
      <section className="hacienda-values section-padding">
        <div className="container">
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">☕</div>
              <h3>Esencia Cafetera</h3>
              <p>Vivimos la cultura del café en cada detalle, desde el patio de secado hasta la taza perfecta.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">⛰️</div>
              <h3>Entorno Andino</h3>
              <p>Situados en el corazón de los Andes, ofrecemos vistas inigualables y un clima de eterna primavera.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🏛️</div>
              <h3>Patrimonio Vivo</h3>
              <p>Cuidamos cada viga y baldosa de nuestra casona histórica para que su estancia sea un viaje en el tiempo.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaHacienda;
