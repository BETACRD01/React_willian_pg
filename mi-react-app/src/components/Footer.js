import React from 'react';
import './Footer.css'; // Archivo CSS externo para mantener ordenados los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Estudia EDU. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <a href="/privacy-policy" className="footer-link">Política de Privacidad</a>
          <a href="/terms" className="footer-link">Términos y Condiciones</a>
          <a href="/contact" className="footer-link">Contáctanos</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
