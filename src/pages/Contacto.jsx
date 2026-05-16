import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Route } from 'lucide-react';
import {
  CONTACT_EMAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  ROUTES_URL,
  buildMailto,
  buildWhatsAppUrl,
  createSubmissionId,
  saveSubmission,
} from '../utils/submissions';
import './Contacto.css';

const initialContactForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: 'Reserva de Alojamiento',
  message: '',
};

const Contacto = () => {
  const [formData, setFormData] = useState(initialContactForm);
  const [confirmation, setConfirmation] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const submissionId = createSubmissionId('CON');
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const record = saveSubmission('contactMessages', {
      id: submissionId,
      type: 'contact_message',
      status: 'received',
      ...formData,
      fullName,
    });

    const emailBody = [
      `Mensaje de contacto ${submissionId}`,
      '',
      `Nombre: ${fullName}`,
      `Correo: ${formData.email}`,
      `Asunto: ${formData.subject}`,
      '',
      formData.message,
    ].join('\n');

    setConfirmation(record);
    window.location.href = buildMailto({
      to: CONTACT_EMAIL,
      cc: formData.email,
      subject: `${formData.subject} - ${submissionId}`,
      body: emailBody,
    });
  };

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
              <a className="info-item contact-action" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <MapPin aria-hidden="true" />
                <div>
                  <h4>Ubicación</h4>
                  <p>Hacienda Santa Filomena, Jají, Mérida, Venezuela.</p>
                </div>
              </a>
              <a className="info-item contact-action" href={`tel:${PHONE_TEL}`}>
                <Phone aria-hidden="true" />
                <div>
                  <h4>Teléfono</h4>
                  <p>{PHONE_DISPLAY}</p>
                </div>
              </a>
              <a className="info-item contact-action" href={`mailto:${CONTACT_EMAIL}`}>
                <Mail aria-hidden="true" />
                <div>
                  <h4>Correo</h4>
                  <p>{CONTACT_EMAIL}</p>
                </div>
              </a>
              <a
                className="info-item contact-action"
                href={buildWhatsAppUrl('Hola, me gustaría recibir información sobre Hacienda Santa Filomena.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare aria-hidden="true" />
                <div>
                  <h4>WhatsApp</h4>
                  <p>Atención inmediata vía chat.</p>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-container shadow-soft">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Nombre</label>
                  <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Su nombre" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Apellido</label>
                  <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Su apellido" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="correo@ejemplo.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                  <option>Reserva de Alojamiento</option>
                  <option>Tour del Café</option>
                  <option>Eventos y Bodas</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="¿En qué podemos ayudarle?" required />
              </div>
              <button type="submit" className="btn-primary w-100">Guardar mensaje y preparar correo</button>
              {confirmation && (
                <p className="form-success">Mensaje {confirmation.id} guardado localmente. Se abrió el correo para enviarlo.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-placeholder shadow">
            <img src="/gallery/17-valle-andino.png" alt="Vista del valle andino cercano a Hacienda Santa Filomena" />
            <div className="map-overlay">
              <MapPin size={40} color="var(--terracota-suave)" aria-hidden="true" />
              <h3>Encuéntranos en Google Maps</h3>
              <div className="route-actions">
                <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  Abrir ubicación
                </a>
                <a className="btn-primary" href={ROUTES_URL} target="_blank" rel="noopener noreferrer">
                  <Route size={18} aria-hidden="true" />
                  Ver rutas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
