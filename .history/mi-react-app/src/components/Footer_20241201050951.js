import React, { useState } from 'react';
import './Footer.css'; // Archivo CSS externo para mantener ordenados los estilos
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Texto de derechos reservados */}
        <p className="footer-text">© 2024 Estudia EDU. Todos los derechos reservados.</p>

        {/* Navegación con enlaces */}
        <nav className="footer-nav">
          <a href="/privacy-policy" className="footer-link" aria-label="Política de Privacidad">Política de Privacidad</a>
          <a href="/terms" className="footer-link" aria-label="Términos y Condiciones">Términos y Condiciones</a>
          <a href="/contact" className="footer-link" aria-label="Contáctanos">Contáctanos</a>
        </nav>

        {/* Formulario de suscripción al boletín */}
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

        {/* Redes Sociales con iconos */}
        <div className="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=100076599633499" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/willian_crd_01/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/willian-cerda-62a259300/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Botón para volver al inicio */}
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="footer-back-to-top"
          aria-label="Volver al inicio"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
