import React from 'react';
import { Coffee, Wind, Sun, Users, CheckCircle } from 'lucide-react';
import './Alojamiento.css';

const Alojamiento = () => {
  const rooms = [
    {
      id: 1,
      name: "Suite del Fundador",
      type: "Premium Colonial",
      price: "$120 / noche",
      features: ["Cama King Size", "Chimenea Privada", "Vista a la Plantación", "Desayuno Andino"],
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      desc: "Nuestra habitación más exclusiva, conservando el mobiliario original de cedro y una vista inigualable al valle del café."
    },
    {
      id: 2,
      name: "Habitación del Patio",
      type: "Confort Tradicional",
      price: "$85 / noche",
      features: ["2 Camas Queen", "Acceso Directo al Patio Central", "Baño de Época", "Wifi Satelital"],
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
      desc: "Ubicada frente al patio de los jazmines, ideal para quienes buscan despertar con el canto de las aves y el rocío matutino."
    },
    {
      id: 3,
      name: "Cabaña de la Montaña",
      type: "Privacidad Total",
      price: "$150 / noche",
      features: ["Casa Independiente", "Cocina Equipada", "Terraza con Hamacas", "Capacidad 4-6 pers."],
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      desc: "Una estructura de piedra y madera alejada de la casa principal para una desconexión total bajo el cielo estrellado de los Andes."
    }
  ];

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
                  <span className="price">{room.price}</span>
                </div>
                <p className="room-desc">{room.desc}</p>
                <div className="room-features">
                  {room.features.map((f, i) => (
                    <span key={i} className="feature-tag"><CheckCircle size={14} /> {f}</span>
                  ))}
                </div>
                <button className="btn-primary w-100 mt-20">Reservar Ahora</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities section-padding crema-bg">
        <div className="container text-center">
          <h2 className="section-title">Comodidades Incluidas</h2>
          <div className="amenities-grid">
            <div className="amenity">
              <Coffee />
              <h4>Barra de Café</h4>
              <p>Café de especialidad ilimitado durante su estancia.</p>
            </div>
            <div className="amenity">
              <Sun />
              <h4>Senderos</h4>
              <p>Acceso a todas las rutas de la hacienda y plantaciones.</p>
            </div>
            <div className="amenity">
              <Wind />
              <h4>Clima de Montaña</h4>
              <p>Aire puro y temperaturas frescas todo el año.</p>
            </div>
            <div className="amenity">
              <Users />
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
