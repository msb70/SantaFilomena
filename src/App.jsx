import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Alojamiento from './pages/Alojamiento';
import LaHacienda from './pages/LaHacienda';
import Eventos from './pages/Eventos';
import Experiencias from './pages/Experiencias';
import Contacto from './pages/Contacto';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/la-hacienda" element={<LaHacienda />} />
            <Route path="/alojamiento" element={<Alojamiento />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/experiencias" element={<Experiencias />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
