iimport React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    header: {
      background: 'linear-gradient(to right, #4a90e2, #357ab7)', // Colores suaves y profesionales
      color: '#fff',
      padding: '20px 30px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderBottom: '5px solid #2c6f94',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '600',
      marginBottom: '5px',
      fontFamily: "'Montserrat', sans-serif", // Fuente más profesional
      letterSpacing: '1px', // Añadir un poco de espaciado para un look más limpio
    },
    subtitle: {
      fontSize: '1.2rem',
      margin: 0,
      fontFamily: "'Roboto', sans-serif",
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
      transition: 'color 0.3s',
    },
    menuButtonHover: {
      color: '#ffcc00', // Color que aparece cuando el botón es presionado
    },
    menu: {
      position: 'absolute',
      top: '70px',
      right: '30px',
      background: '#357ab7',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: isMenuOpen ? 'block' : 'none',
      padding: '15px',
      width: '220px',
    },
    menuItem: {
      color: '#fff',
      padding: '12px 0',
      textAlign: 'center',
      fontFamily: "'Roboto', sans-serif",
      cursor: 'pointer',
      borderBottom: '1px solid #2c6f94',
      transition: 'background-color 0.3s',
    },
    menuItemHover: {
      backgroundColor: '#2c6f94', // Cambiar el color de fondo al pasar el mouse
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
          <div style={styles.menuItem} className="menu-item">Opción 1</div>
          <div style={styles.menuItem} className="menu-item">Opción 2</div>
          <div style={styles.menuItem} className="menu-item">Opción 3</div>
          <div style={styles.menuItem} className="menu-item">Opción 4</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
