import { useRef, useState } from 'react';
import { Leaf, Droplets, Flame, Coffee, Camera } from 'lucide-react';
import {
  CONTACT_EMAIL,
  buildMailto,
  createSubmissionId,
  saveSubmission,
} from '../utils/submissions';
import './Experiencias.css';

const activities = [
  {
    title: 'Recolección Manual',
    desc: "Acompaña a nuestros recolectores y aprende a identificar los granos 'cereza' en su punto exacto de madurez.",
    icon: <Leaf aria-hidden="true" />,
    time: '2 Horas',
  },
  {
    title: 'Procesado y Secado',
    desc: 'Conoce el despulpado, fermentación y el secado al sol en nuestros patios tradicionales.',
    icon: <Droplets aria-hidden="true" />,
    time: '1 Hora',
  },
  {
    title: 'Tostado Artesanal',
    desc: 'Siente el aroma del café mientras se tuesta a leña, una técnica que preservamos por generaciones.',
    icon: <Flame aria-hidden="true" />,
    time: '45 Min',
  },
  {
    title: 'Cata de Especialidad',
    desc: 'Desarrolla tu paladar identificando notas de chocolate, cítricos y frutos rojos en nuestro laboratorio.',
    icon: <Coffee aria-hidden="true" />,
    time: '1.5 Horas',
  },
];

const initialVisitForm = {
  contactName: '',
  email: '',
  phone: '',
  visitDate: '',
  timeSlot: '9:00 AM',
  adults: '2',
  children: '0',
  experience: 'Ruta completa del café',
  language: 'Español',
  transportation: 'Llegaremos por cuenta propia',
  mobility: 'Sin requerimientos especiales',
  notes: '',
};

const Experiencias = () => {
  const [formData, setFormData] = useState(initialVisitForm);
  const [confirmation, setConfirmation] = useState(null);
  const visitRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const scrollToVisit = () => {
    visitRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const submissionId = createSubmissionId('VIS');
    const record = saveSubmission('experienceBookings', {
      id: submissionId,
      type: 'experience_booking',
      status: 'visit_requested',
      ...formData,
      people: Number(formData.adults) + Number(formData.children),
    });

    const emailBody = [
      `Solicitud de visita ${submissionId}`,
      '',
      `Contacto: ${formData.contactName}`,
      `Correo: ${formData.email}`,
      `Teléfono: ${formData.phone}`,
      `Experiencia: ${formData.experience}`,
      `Fecha: ${formData.visitDate}`,
      `Horario: ${formData.timeSlot}`,
      `Grupo: ${formData.adults} adulto(s), ${formData.children} niño(s)`,
      `Idioma: ${formData.language}`,
      `Transporte: ${formData.transportation}`,
      `Movilidad: ${formData.mobility}`,
      '',
      `Notas: ${formData.notes || 'Sin notas adicionales.'}`,
    ].join('\n');

    setConfirmation(record);
    window.location.href = buildMailto({
      to: CONTACT_EMAIL,
      cc: formData.email,
      subject: `Solicitud de visita ${submissionId} - Hacienda Santa Filomena`,
      body: emailBody,
    });
  };

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
              <Camera size={20} aria-hidden="true" />
              <p>Recomendamos traer calzado cómodo y cámara fotográfica.</p>
            </div>
          </div>
          <div className="experience-img">
            <img src="/gallery/03-cosecha-cafe.png" alt="Cosecha manual de café" className="rounded shadow" />
          </div>
        </div>
      </section>

      <section className="timeline-section section-padding crema-bg">
        <div className="container">
          <h2 className="section-title text-center">Etapas del Recorrido</h2>
          <div className="timeline-grid">
            {activities.map((activity) => (
              <div key={activity.title} className="timeline-item">
                <div className="timeline-icon">{activity.icon}</div>
                <div className="timeline-content">
                  <h3>{activity.title}</h3>
                  <span className="time-tag">{activity.time}</span>
                  <p>{activity.desc}</p>
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
          <button type="button" className="btn-primary mt-30" onClick={scrollToVisit}>Agendar Visita</button>
        </div>
      </section>

      <section className="visit-booking section-padding crema-bg" ref={visitRef}>
        <div className="container visit-layout">
          <div>
            <span className="subtitle">Agenda tu visita</span>
            <h2 className="section-title">Datos para preparar la experiencia</h2>
            <p>
              Indícanos fecha, horario, tamaño del grupo y cualquier necesidad especial para confirmar
              disponibilidad y adaptar el recorrido.
            </p>
          </div>

          <form className="visit-form shadow-soft" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactName">Nombre completo</label>
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
                <label htmlFor="experience">Experiencia</label>
                <select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
                  <option>Ruta completa del café</option>
                  <option>Recolección y secado</option>
                  <option>Cata de café</option>
                  <option>Visita familiar a la hacienda</option>
                  <option>Experiencia privada</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="visitDate">Fecha</label>
                <input id="visitDate" type="date" name="visitDate" value={formData.visitDate} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="timeSlot">Horario</label>
                <select id="timeSlot" name="timeSlot" value={formData.timeSlot} onChange={handleChange}>
                  <option>9:00 AM</option>
                  <option>2:00 PM</option>
                  <option>Horario privado por confirmar</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="adults">Adultos</label>
                <input id="adults" type="number" min="1" name="adults" value={formData.adults} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="children">Niños</label>
                <input id="children" type="number" min="0" name="children" value={formData.children} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="language">Idioma</label>
                <select id="language" name="language" value={formData.language} onChange={handleChange}>
                  <option>Español</option>
                  <option>Inglés</option>
                  <option>Bilingüe</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="transportation">Transporte</label>
                <select id="transportation" name="transportation" value={formData.transportation} onChange={handleChange}>
                  <option>Llegaremos por cuenta propia</option>
                  <option>Necesitamos orientación de ruta</option>
                  <option>Solicitamos apoyo de transporte</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mobility">Movilidad o alimentación</label>
              <input id="mobility" name="mobility" value={formData.mobility} onChange={handleChange} placeholder="Alergias, movilidad reducida, adultos mayores, etc." />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Comentarios</label>
              <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder="Motivo de la visita, celebración, intereses del grupo, etc." />
            </div>
            <button type="submit" className="btn-primary w-100">Guardar visita y preparar confirmación</button>
            {confirmation && (
              <p className="form-success">Solicitud {confirmation.id} guardada localmente. Se abrió el correo de confirmación.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Experiencias;
