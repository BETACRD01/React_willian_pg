import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa'; // Librería de iconos
import logo from './img/logo/logo2.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al contenedor del menú
  const buttonRef = useRef(null); // Referencia al botón

  const styles = {
    header: {
      background: 'linear-gradient(to right, #0056b3, #003366)', // Fondo degradado que coincide con el logo
      color: '#fff',
      padding: '15px 20px', // Ajustamos el padding
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderBottom: '5px solid #004085',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      zIndex: 2,
      marginTop: 0,
      height: '120px', // Reducido para que no sea tan grande
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      transition: 'transform 0.3s', // Agregar transición al logo
    },
    logo: {
      width: '80px',
      height: 'auto',
      marginRight: '15px',
      borderRadius: '15px',
      opacity: 0.8,
    },
    logoHover: {
      transform: 'scale(1.1)', // Efecto de hover en el logo
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '5px',
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: '1px',
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
      fontSize: '2rem',
      cursor: 'pointer',
      padding: '10px',
      transition: 'color 0.3s',
    },
    menuButtonHover: {
      color: '#FFD700',
    },
    menu: {
      position: 'absolute',
      top: '80px',
      right: '20px',
      background: '#003366',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: isMenuOpen ? 'block' : 'none',
      padding: '12px',
      width: '200px',
      zIndex: 10,
      maxHeight: '400px',
      overflowY: 'auto',
    },
    menuItem: {
      color: '#fff',
      padding: '10px 0',
      textAlign: 'center',
      borderBottom: '1px solid #004085',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1.1rem',
    },
    menuItemHover: {
      backgroundColor: '#004085',
    },
    searchButton: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      marginLeft: '10px',
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer} className="logo-container">
        <img
          src={logo}
          alt="Logo"
          style={{ ...styles.logo, ...(isMenuOpen ? styles.logoHover : {}) }} // Aplicar efecto de hover al logo
        />
        <div>
          <h1 style={styles.title}>Estudia EDU</h1>
          <p style={styles.subtitle}>Tu fuente de aprendizaje y conocimiento</p>
        </div>
      </div>
      <div>
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          style={{ ...styles.menuButton, ...(isMenuOpen ? styles.menuButtonHover : {}) }}
        >
          ☰
        </button>
        <div ref={menuRef} style={styles.menu}>
          <div style={styles.menuItem}>Inicio</div>
          <div style={styles.menuItem}>Cursos</div>
          <div style={styles.menuItem}>Recursos</div>
          <div style={styles.menuItem}>Blog</div>
        </div>
        <button
          style={styles.searchButton}
        >
          <FaSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
