import { useMemo, useRef, useState } from 'react';
import { Coffee, Wind, Sun, Users, CheckCircle, CreditCard } from 'lucide-react';
import {
  CONTACT_EMAIL,
  buildMailto,
  createSubmissionId,
  formatCurrency,
  getNights,
  saveSubmission,
} from '../utils/submissions';
import './Alojamiento.css';

const rooms = [
  {
    id: 1,
    name: 'Suite del Fundador',
    type: 'Premium Colonial',
    price: 120,
    features: ['Cama King Size', 'Chimenea Privada', 'Vista a la Plantación', 'Desayuno Andino'],
    img: '/gallery/16-patio-central.png',
    desc: 'Nuestra habitación más exclusiva, conservando el mobiliario original de cedro y una vista inigualable al valle del café.',
  },
  {
    id: 2,
    name: 'Habitación del Patio',
    type: 'Confort Tradicional',
    price: 85,
    features: ['2 Camas Queen', 'Acceso Directo al Patio Central', 'Baño de Época', 'Wifi Satelital'],
    img: '/gallery/14-fuente-jardin.png',
    desc: 'Ubicada frente al patio de los jazmines, ideal para quienes buscan despertar con el canto de las aves y el rocío matutino.',
  },
  {
    id: 3,
    name: 'Cabaña de la Montaña',
    type: 'Privacidad Total',
    price: 150,
    features: ['Casa Independiente', 'Cocina Equipada', 'Terraza con Hamacas', 'Capacidad 4-6 pers.'],
    img: '/gallery/17-valle-andino.png',
    desc: 'Una estructura de piedra y madera alejada de la casa principal para una desconexión total bajo el cielo estrellado de los Andes.',
  },
];

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  documentId: '',
  roomId: '1',
  checkIn: '',
  checkOut: '',
  adults: '2',
  children: '0',
  paymentMethod: 'online_pending',
  notes: '',
};

const Alojamiento = () => {
  const [formData, setFormData] = useState(initialForm);
  const [confirmation, setConfirmation] = useState(null);
  const formRef = useRef(null);

  const selectedRoom = rooms.find((room) => String(room.id) === formData.roomId) || rooms[0];
  const nights = getNights(formData.checkIn, formData.checkOut);
  const total = useMemo(() => selectedRoom.price * nights, [nights, selectedRoom.price]);
  const deposit = Math.ceil(total * 0.3);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const selectRoom = (roomId) => {
    setFormData((current) => ({ ...current, roomId: String(roomId) }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const submissionId = createSubmissionId('ALOJ');
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const record = saveSubmission('roomReservations', {
      id: submissionId,
      type: 'room_reservation',
      status: 'payment_pending',
      guest: {
        name: fullName,
        email: formData.email,
        phone: formData.phone,
        documentId: formData.documentId,
      },
      stay: {
        room: selectedRoom.name,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        nights,
        adults: Number(formData.adults),
        children: Number(formData.children),
      },
      payment: {
        method: formData.paymentMethod,
        total,
        deposit,
        currency: 'USD',
        providerStatus: 'pending_backend_connection',
      },
      notes: formData.notes,
    });

    const emailBody = [
      `Hola ${fullName},`,
      '',
      `Recibimos tu solicitud de reserva ${submissionId} para ${selectedRoom.name}.`,
      `Fechas: ${formData.checkIn} al ${formData.checkOut} (${nights} noche${nights === 1 ? '' : 's'}).`,
      `Huéspedes: ${formData.adults} adulto(s), ${formData.children} niño(s).`,
      `Total estimado: ${formatCurrency(total)}. Depósito sugerido: ${formatCurrency(deposit)}.`,
      '',
      'El pago en línea quedará pendiente hasta conectar la pasarela. Nuestro equipo confirmará disponibilidad y próximos pasos.',
      '',
      'Hacienda Santa Filomena',
      CONTACT_EMAIL,
    ].join('\n');

    setConfirmation(record);
    window.location.href = buildMailto({
      to: formData.email,
      cc: CONTACT_EMAIL,
      subject: `Confirmación de solicitud ${submissionId} - Hacienda Santa Filomena`,
      body: emailBody,
    });
  };

  return (
    <div className="alojamiento">
      <section className="page-header">
        <div className="container">
          <span className="subtitle">Descanso y Silencio</span>
          <h1>Alojamiento Colonial</h1>
        </div>
      </section>

      <section className="section-padding container">
        <div className="rooms-intro text-center mb-60">
          <p>Cada una de nuestras habitaciones ha sido restaurada respetando la arquitectura original, ofreciendo un refugio donde el tiempo parece detenerse.</p>
        </div>

        <div className="rooms-list">
          {rooms.map((room) => (
            <div key={room.id} className="room-card shadow-soft">
              <div className="room-image">
                <img src={room.img} alt={room.name} />
                <div className="room-badge">{room.type}</div>
              </div>
              <div className="room-details">
                <div className="room-header">
                  <h2>{room.name}</h2>
                  <span className="price">{formatCurrency(room.price)} / noche</span>
                </div>
                <p className="room-desc">{room.desc}</p>
                <div className="room-features">
                  {room.features.map((feature) => (
                    <span key={feature} className="feature-tag"><CheckCircle size={14} aria-hidden="true" /> {feature}</span>
                  ))}
                </div>
                <button type="button" className="btn-primary w-100 mt-20" onClick={() => selectRoom(room.id)}>
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="booking-section section-padding crema-bg" ref={formRef}>
        <div className="container booking-layout">
          <div className="booking-copy">
            <span className="subtitle">Reserva de alojamiento</span>
            <h2 className="section-title">Datos del huésped y pago</h2>
            <p>
              Completa la solicitud para guardar tus datos y preparar la confirmación. El pago en línea queda
              listo para conectar cuando definamos la pasarela.
            </p>
            <div className="payment-summary">
              <CreditCard aria-hidden="true" />
              <div>
                <strong>{selectedRoom.name}</strong>
                <span>{nights} noche{nights === 1 ? '' : 's'} · {formatCurrency(total)} estimado</span>
                <small>Depósito sugerido para reservar: {formatCurrency(deposit)}</small>
              </div>
            </div>
          </div>

          <form className="reservation-form shadow-soft" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono / WhatsApp</label>
                <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="documentId">Documento de identidad</label>
              <input id="documentId" name="documentId" value={formData.documentId} onChange={handleChange} placeholder="Cédula, pasaporte o RIF" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="roomId">Habitación</label>
                <select id="roomId" name="roomId" value={formData.roomId} onChange={handleChange}>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>{room.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Método de pago</label>
                <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                  <option value="online_pending">Pago en línea pendiente de conexión</option>
                  <option value="bank_transfer">Transferencia bancaria</option>
                  <option value="on_arrival">Pago al llegar</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="checkIn">Llegada</label>
                <input id="checkIn" type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="checkOut">Salida</label>
                <input id="checkOut" type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
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
            <div className="form-group">
              <label htmlFor="notes">Solicitudes especiales</label>
              <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder="Hora estimada de llegada, alimentación, movilidad, celebración, etc." />
            </div>
            <button type="submit" className="btn-primary w-100">Guardar reserva y preparar confirmación</button>
            {confirmation && (
              <p className="form-success">Solicitud {confirmation.id} guardada localmente. Se abrió el correo de confirmación para enviarlo.</p>
            )}
          </form>
        </div>
      </section>

      <section className="amenities section-padding crema-bg">
        <div className="container text-center">
          <h2 className="section-title">Comodidades Incluidas</h2>
          <div className="amenities-grid">
            <div className="amenity">
              <Coffee aria-hidden="true" />
              <h4>Barra de Café</h4>
              <p>Café de especialidad ilimitado durante su estancia.</p>
            </div>
            <div className="amenity">
              <Sun aria-hidden="true" />
              <h4>Senderos</h4>
              <p>Acceso a todas las rutas de la hacienda y plantaciones.</p>
            </div>
            <div className="amenity">
              <Wind aria-hidden="true" />
              <h4>Clima de Montaña</h4>
              <p>Aire puro y temperaturas frescas todo el año.</p>
            </div>
            <div className="amenity">
              <Users aria-hidden="true" />
              <h4>Atención</h4>
              <p>Hospitalidad andina personalizada 24/7.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alojamiento;
