import React from 'react';

// Componente Footer con tema dinámico
const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: 'var(--footer-bg-color, #333)', // Variable para colores dinámicos
      color: 'var(--footer-text-color, #fff)', // Variable para colores dinámicos
      textAlign: 'center',
      padding: '1rem 0',
      fontSize: '0.9rem',
      width: '100%',
      position: 'relative',
      bottom: 0,
    },
    text: {
      margin: 0,
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 Estudia EDU. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

