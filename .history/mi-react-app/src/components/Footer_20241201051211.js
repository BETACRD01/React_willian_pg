import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail('');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado correctamente');
    setMessage('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Estudia EDU. Todos los derechos reservados.</p>

        {/* Navegación de enlaces */}
        <nav className="footer-nav">
          <a href="/privacy-policy" className="footer-link">Política de Privacidad</a>
          <a href="/terms" className="footer-link">Términos y Condiciones</a>
          <a href="/cookies" className="footer-link">Política de Cookies</a>
          <a href="/faq" className="footer-link">Preguntas Frecuentes</a>
        </nav>

        {/* Formulario de suscripción */}
        <div className="footer-subscribe">
          <form onSubmit={handleSubscription}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Suscríbete a nuestro boletín"
              className="footer-input"
              required
            />
            <button type="submit" className="footer-button">Suscribirse</button>
          </form>
          {success && <p className="footer-success">¡Suscripción exitosa!</p>}
        </div>

        {/* Formulario de contacto rápido */}
        <div className="footer-contact">
          <form onSubmit={handleContactSubmit}>
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Deja tu mensaje"
              className="footer-textarea"
              required
            ></textarea>
            <button type="submit" className="footer-button">Enviar mensaje</button>
          </form>
        </div>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Mapa de ubicación */}
        <div className="footer-map">
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="footer-map-link">
            Ver ubicación en Google Maps
          </a>
        </div>

        {/* Selector de idioma */}
        <div className="footer-language">
          <select className="footer-language-select">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
