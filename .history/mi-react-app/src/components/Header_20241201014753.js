import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    header: {
      background: 'linear-gradient(to right, #007BFF, #0056b3)', // Azul profesional y elegante
      color: '#fff',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sombra suave para mayor profundidad
      borderBottom: '5px solid #004085', // Color de borde más sutil
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: "'Arial', sans-serif", // Fuente más profesional y estándar
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '5px',
      fontFamily: "'Lora', serif", // Fuente elegante y profesional para el título
      letterSpacing: '1px',
    },
    subtitle: {
      fontSize: '1.2rem',
      margin: 0,
      fontFamily: "'Roboto', sans-serif", // Fuente sans-serif limpia y moderna
      opacity: 0.85,
      fontWeight: '400',
    },
    menuButton: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '1.8rem',
      cursor: 'pointer',
      padding: '10px',
      transition: 'color 0.3s', // Suaviza la transición del color al hacer hover
    },
    menuButtonHover: {
      color: '#FFD700', // Color dorado al pasar el ratón sobre el botón
    },
    menu: {
      position: 'absolute',
      top: '80px',
      right: '20px',
      background: '#003366', // Color azul oscuro
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: isMenuOpen ? 'block' : 'none',
      padding: '15px',
      width: '220px',
      zIndex: 10,
    },
    menuItem: {
      color: '#fff',
      padding: '12px 0',
      textAlign: 'center',
      borderBottom: '1px solid #004085',
      cursor: 'pointer',
      transition: 'background-color 0.3s', // Transición suave en el cambio de fondo
    },
    menuItemHover: {
      backgroundColor: '#004085', // Color de fondo cuando se pasa el ratón por encima
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.title}>Estudia EDU</h1>
        <p style={styles.subtitle}>Tu fuente de aprendizaje y conocimiento</p>
      </div>
      <div>
        <button 
          onClick={toggleMenu} 
          style={{ ...styles.menuButton, ...(isMenuOpen ? styles.menuButtonHover : {}) }}
        >
          ☰
        </button>
        <div style={styles.menu}>
          <div 
            style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}
          >
            Opción 1
          </div>
          <div 
            style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}
          >
            Opción 2
          </div>
          <div 
            style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}
          >
            Opción 3
          </div>
          <div 
            style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}
          >
            Opción 4
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
