import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    header: {
      background: 'linear-gradient(to right, #007BFF, #0056b3)', 
      color: '#fff',
      padding: '20px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderBottom: '5px solid #004085',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif",  // Cambié a Poppins para una fuente más moderna
      position: 'relative',
      zIndex: 2,
      marginTop: 0,
    },
    title: {
      fontSize: '3rem', // Hizo el título más grande para destacar
      fontWeight: '700',
      marginBottom: '5px',
      fontFamily: "'Poppins', sans-serif", // Usando la misma fuente en todo el título
      letterSpacing: '1px',
    },
    subtitle: {
      fontSize: '1.5rem', // Aumenté el tamaño de la fuente para el subtítulo
      margin: 0,
      fontFamily: "'Roboto', sans-serif",  // Usé una fuente sans-serif para mejor legibilidad
      opacity: 0.85,
      fontWeight: '400',
    },
    menuButton: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '2rem',  // Cambié el tamaño de la fuente para hacerlo más visible
      cursor: 'pointer',
      padding: '10px',
      transition: 'color 0.3s',
    },
    menuButtonHover: {
      color: '#FFD700', // Color dorado para el hover
    },
    menu: {
      position: 'absolute',
      top: '80px',
      right: '20px',
      background: '#003366',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: isMenuOpen ? 'block' : 'none',
      padding: '15px',
      width: '220px',
      zIndex: 10,
      maxHeight: '400px',
      overflowY: 'auto',
    },
    menuItem: {
      color: '#fff',
      padding: '12px 0',
      textAlign: 'center',
      borderBottom: '1px solid #004085',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontFamily: "'Roboto', sans-serif", // Fuente Roboto para los elementos del menú
      fontSize: '1.2rem', // Tamaño más adecuado para los elementos del menú
    },
    menuItemHover: {
      backgroundColor: '#004085',
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
          <div style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}>
            Opción 1
          </div>
          <div style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}>
            Opción 2
          </div>
          <div style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}>
            Opción 3
          </div>
          <div style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}>
            Opción 4
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
;


