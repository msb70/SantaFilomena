import { useRef, useState } from 'react';
import {
  CONTACT_EMAIL,
  buildMailto,
  createSubmissionId,
  saveSubmission,
} from '../utils/submissions';
import './Eventos.css';

const eventTypes = [
  {
    title: 'Convenciones Corporativas',
    description: 'Un espacio de paz y concentración para sus retiros empresariales, juntas directivas y talleres de equipo.',
    icon: '💼',
    features: ['Salones equipados', 'Privacidad absoluta', 'Catering personalizado', 'Wi-Fi de alta velocidad'],
  },
  {
    title: 'Celebraciones Sociales',
    description: 'Bodas, aniversarios y encuentros familiares rodeados de la elegancia colonial y paisajes andinos.',
    icon: '🥂',
    features: ['Jardines majestuosos', 'Cena de gala', 'Alojamiento para invitados', 'Coordinación de eventos'],
  },
  {
    title: 'Experiencias de Campo',
    description: 'Actividades al aire libre que fomentan la integración y el bienestar en contacto con la naturaleza.',
    icon: '🌿',
    features: ['Caminatas guiadas', 'Tour del café', 'Fogatas nocturnas', 'Talleres artesanales'],
  },
];

const initialEventForm = {
  contactName: '',
  email: '',
  phone: '',
  eventType: 'Boda / celebración social',
  eventDate: '',
  alternateDate: '',
  startTime: '',
  endTime: '',
  guests: '',
  lodging: 'No',
  catering: 'Almuerzo o cena',
  beverage: 'Sin alcohol',
  setup: 'Auditorio',
  budget: '',
  notes: '',
};

const Eventos = () => {
  const [formData, setFormData] = useState(initialEventForm);
  const [confirmation, setConfirmation] = useState(null);
  const quoteRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const scrollToQuote = () => {
    quoteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const submissionId = createSubmissionId('EVT');
    const record = saveSubmission('eventQuotes', {
      id: submissionId,
      type: 'event_quote',
      status: 'quote_requested',
      ...formData,
    });

    const emailBody = [
      `Solicitud de presupuesto ${submissionId}`,
      '',
      `Contacto: ${formData.contactName}`,
      `Correo: ${formData.email}`,
      `Teléfono: ${formData.phone}`,
      `Tipo de evento: ${formData.eventType}`,
      `Fecha tentativa: ${formData.eventDate}`,
      `Fecha alternativa: ${formData.alternateDate || 'No indicada'}`,
      `Horario: ${formData.startTime || 'Por definir'} - ${formData.endTime || 'Por definir'}`,
      `Invitados estimados: ${formData.guests}`,
      `Alojamiento requerido: ${formData.lodging}`,
      `Servicio de comida: ${formData.catering}`,
      `Bebidas: ${formData.beverage}`,
      `Montaje: ${formData.setup}`,
      `Presupuesto referencial: ${formData.budget || 'No indicado'}`,
      '',
      `Notas: ${formData.notes || 'Sin notas adicionales.'}`,
    ].join('\n');

    setConfirmation(record);
    window.location.href = buildMailto({
      to: CONTACT_EMAIL,
      cc: formData.email,
      subject: `Solicitud de presupuesto ${submissionId} - ${formData.eventType}`,
      body: emailBody,
    });
  };

  return (
    <div className="eventos-page">
      <section className="eventos-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in">
          <h1>Eventos & Convenciones</h1>
          <p>Donde la elegancia colonial se encuentra con la productividad y la celebración.</p>
        </div>
      </section>

      <section className="eventos-intro section-padding">
        <div className="container text-center">
          <h2 className="section-title centered">Un Escenario Inigualable</h2>
          <p className="intro-text">
            El Centro de Convenciones Santa Filomena se diferencia de los tradicionales centros de reuniones
            por contar con una infraestructura completa donde la privacidad y la calidez son protagonistas.
          </p>
        </div>
      </section>

      <section className="event-cards section-padding alt-bg">
        <div className="container">
          <div className="events-grid">
            {eventTypes.map((event, index) => (
              <div key={event.title} className="event-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="event-icon">{event.icon}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <ul className="event-features">
                  {event.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="eventos-cta section-padding">
        <div className="container glass cta-box">
          <h2>¿Planea su próximo gran evento?</h2>
          <p>Permítanos ayudarle a crear una experiencia memorable en el corazón de los Andes.</p>
          <div className="cta-buttons">
            <button type="button" className="btn-primary" onClick={scrollToQuote}>Solicitar Presupuesto</button>
            <a className="btn-secondary" href="/dossier-eventos-santa-filomena.html" download>
              Descargar Dossier
            </a>
          </div>
        </div>
      </section>

      <section className="event-quote-section section-padding alt-bg" ref={quoteRef}>
        <div className="container quote-layout">
          <div>
            <span className="subtitle">Presupuesto de evento</span>
            <h2 className="section-title">Cuéntanos lo esencial</h2>
            <p className="intro-text quote-intro">
              Estas son las preguntas base que normalmente se necesitan para cotizar un evento en hotel:
              fecha, horario, invitados, montaje, alimentos, bebidas y alojamiento.
            </p>
          </div>

          <form className="event-form shadow-soft" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactName">Nombre de contacto</label>
                <input id="contactName" name="contactName" value={formData.contactName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Teléfono / WhatsApp</label>
                <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="eventType">Tipo de evento</label>
                <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                  <option>Boda / celebración social</option>
                  <option>Convención corporativa</option>
                  <option>Retiro ejecutivo</option>
                  <option>Cumpleaños o aniversario</option>
                  <option>Experiencia de integración</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventDate">Fecha tentativa</label>
                <input id="eventDate" type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="alternateDate">Fecha alternativa</label>
                <input id="alternateDate" type="date" name="alternateDate" value={formData.alternateDate} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startTime">Hora inicio</label>
                <input id="startTime" type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="endTime">Hora cierre</label>
                <input id="endTime" type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="guests">Invitados estimados</label>
                <input id="guests" type="number" min="1" name="guests" value={formData.guests} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="lodging">¿Requiere alojamiento?</label>
                <select id="lodging" name="lodging" value={formData.lodging} onChange={handleChange}>
                  <option>No</option>
                  <option>Sí, para organizadores</option>
                  <option>Sí, para invitados</option>
                  <option>Por definir</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="catering">Alimentos</label>
                <select id="catering" name="catering" value={formData.catering} onChange={handleChange}>
                  <option>Coffee break</option>
                  <option>Almuerzo o cena</option>
                  <option>Cóctel</option>
                  <option>Menú completo</option>
                  <option>Por definir</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="beverage">Bebidas</label>
                <select id="beverage" name="beverage" value={formData.beverage} onChange={handleChange}>
                  <option>Sin alcohol</option>
                  <option>Con alcohol</option>
                  <option>Mixto</option>
                  <option>Por definir</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="setup">Montaje</label>
                <select id="setup" name="setup" value={formData.setup} onChange={handleChange}>
                  <option>Auditorio</option>
                  <option>Escuela</option>
                  <option>Banquete</option>
                  <option>Cóctel</option>
                  <option>Mesa imperial</option>
                  <option>Por definir</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Presupuesto referencial</label>
                <input id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="Ej. $2.000 - $3.000" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="notes">Necesidades adicionales</label>
              <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder="Sonido, decoración, fotografía, transporte, restricciones alimentarias, agenda, etc." />
            </div>
            <button type="submit" className="btn-primary w-100">Guardar solicitud y preparar correo</button>
            {confirmation && (
              <p className="form-success">Solicitud {confirmation.id} guardada localmente. Se abrió el correo para enviar el presupuesto.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Eventos;
