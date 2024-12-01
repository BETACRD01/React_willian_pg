import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    header: {
      background: 'linear-gradient(to right, #0066cc, #003d99)',
      color: '#fff',
      padding: '30px 15px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderBottom: '5px solid #004080',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      fontFamily: "'Poppins', sans-serif",
    },
    subtitle: {
      fontSize: '1.3rem',
      margin: 0,
      fontFamily: "'Roboto', sans-serif",
      opacity: 0.9,
    },
    menuButton: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    menu: {
      position: 'absolute',
      top: '70px',
      right: '15px',
      background: '#003d99',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: isMenuOpen ? 'block' : 'none',
      padding: '10px',
      width: '200px',
    },
    menuItem: {
      color: '#fff',
      padding: '10px 0',
      textAlign: 'center',
      borderBottom: '1px solid #004080',
      cursor: 'pointer',
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
        <button onClick={toggleMenu} style={styles.menuButton}>☰</button>
        <div style={styles.menu}>
          <div style={styles.menuItem}>Opción 1</div>
          <div style={styles.menuItem}>Opción 2</div>
          <div style={styles.menuItem}>Opción 3</div>
          <div style={styles.menuItem}>Opción 4</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
