import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto">
      <section className="page-header contact-header">
        <div className="container">
          <span className="subtitle">Estamos para Atenderle</span>
          <h1>Contáctenos</h1>
        </div>
      </section>

      <section className="section-padding container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Hablemos</h2>
            <p>Ya sea para una reserva, un evento especial o simplemente para saber más sobre nuestro café, nuestro equipo está listo para responder sus inquietudes.</p>
            
            <div className="info-list">
              <div className="info-item">
                <MapPin />
                <div>
                  <h4>Ubicación</h4>
                  <p>Hacienda Santa Filomena, Pueblo Llano, Mérida, Venezuela.</p>
                </div>
              </div>
              <div className="info-item">
                <Phone />
                <div>
                  <h4>Teléfono</h4>
                  <p>+58 412 345 6789</p>
                </div>
              </div>
              <div className="info-item">
                <Mail />
                <div>
                  <h4>Correo</h4>
                  <p>reservas@haciendasantafilomena.com</p>
                </div>
              </div>
              <div className="info-item">
                <MessageSquare />
                <div>
                  <h4>WhatsApp</h4>
                  <p>Atención inmediata vía chat.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container shadow-soft">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" placeholder="Su nombre" />
                </div>
                <div className="form-group">
                  <label>Apellido</label>
                  <input type="text" placeholder="Su apellido" />
                </div>
              </div>
              <div className="form-group">
                <label>Correo Electrónico</label>
                <input type="email" placeholder="correo@ejemplo.com" />
              </div>
              <div className="form-group">
                <label>Asunto</label>
                <select>
                  <option>Reserva de Alojamiento</option>
                  <option>Tour del Café</option>
                  <option>Eventos y Bodas</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea rows="5" placeholder="¿En qué podemos ayudarle?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-100">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="map-section">
        <div className="container">
           <div className="map-placeholder shadow">
              <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200" alt="Mapa" />
              <div className="map-overlay">
                <MapPin size={40} color="var(--terracota-suave)" />
                <h3>Encuéntranos en Google Maps</h3>
                <button className="btn-outline">Ver Ruta</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
