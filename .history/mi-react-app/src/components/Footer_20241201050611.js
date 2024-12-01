import React from 'react';
import './Footer.css'; // Archivo CSS externo para mantener ordenados los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Estudia EDU. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <a href="/privacy-policy" className="footer-link" aria-label="Política de Privacidad">Política de Privacidad</a>
          <a href="/terms" className="footer-link" aria-label="Términos y Condiciones">Términos y Condiciones</a>
          <a href="/contact" className="footer-link" aria-label="Contáctanos">Contáctanos</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
