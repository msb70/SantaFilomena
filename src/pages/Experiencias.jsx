import React from 'react';
import { Leaf, Droplets, Flame, Coffee, Camera } from 'lucide-react';
import './Experiencias.css';

const Experiencias = () => {
  const activities = [
    {
      title: "Recolección Manual",
      desc: "Acompaña a nuestros recolectores y aprende a identificar los granos 'cereza' en su punto exacto de madurez.",
      icon: <Leaf />,
      time: "2 Horas"
    },
    {
      title: "Procesado y Secado",
      desc: "Conoce el despulpado, fermentación y el secado al sol en nuestros patios tradicionales.",
      icon: <Droplets />,
      time: "1 Hora"
    },
    {
      title: "Tostado Artesanal",
      desc: "Siente el aroma del café mientras se tuesta a leña, una técnica que preservamos por generaciones.",
      icon: <Flame />,
      time: "45 Min"
    },
    {
      title: "Cata de Especialidad",
      desc: "Desarrolla tu paladar identificando notas de chocolate, cítricos y frutos rojos en nuestro laboratorio.",
      icon: <Coffee />,
      time: "1.5 Horas"
    }
  ];

  return (
    <div className="experiencias">
      <section className="page-header coffee-header">
        <div className="container">
          <span className="subtitle">El Alma de la Tierra</span>
          <h1>La Ruta del Café</h1>
        </div>
      </section>

      <section className="section-padding container">
        <div className="experience-intro grid-2">
          <div className="experience-text">
            <h2 className="section-title">Una Travesía Sensorial</h2>
            <p>En Hacienda Santa Filomena, el café no es solo una bebida, es una forma de vida. Te invitamos a sumergirte en un recorrido que abarca más de cien años de tradición.</p>
            <p>Caminarás entre cafetales centenarios, bajo la sombra de guamos y bucares, respirando el aire más puro de los Andes venezolanos.</p>
            <div className="info-box">
              <Camera size={20} />
              <p>Recomendamos traer calzado cómodo y cámara fotográfica.</p>
            </div>
          </div>
          <div className="experience-img">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" alt="Plantación de Café" className="rounded shadow" />
          </div>
        </div>
      </section>

      <section className="timeline-section section-padding crema-bg">
        <div className="container">
          <h2 className="section-title text-center">Etapas del Recorrido</h2>
          <div className="timeline-grid">
            {activities.map((act, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-icon">{act.icon}</div>
                <div className="timeline-content">
                  <h3>{act.title}</h3>
                  <span className="time-tag">{act.time}</span>
                  <p>{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-padding text-center">
        <div className="container">
          <h2>¿Listo para vivir la experiencia?</h2>
          <p>Los tours se realizan todos los días a las 9:00 AM y 2:00 PM.</p>
          <button className="btn-primary mt-30">Agendar Visita</button>
        </div>
      </section>
    </div>
  );
};

export default Experiencias;
