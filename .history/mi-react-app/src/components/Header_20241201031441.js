import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al contenedor del menú
  const buttonRef = useRef(null); // Referencia al botón

  const styles = {
    header: {
      background: 'linear-gradient(to right, #007BFF, #0056b3)', // Fondo degradado
      color: '#fff',
      padding: '20px 20px',
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
      height: '150px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      width: '50px', // Ajustar tamaño del logo
      height: 'auto',
      marginRight: '10px', // Espacio entre el logo y el texto
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '5px',
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: '1px',
    },
    subtitle: {
      fontSize: '1.5rem',
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
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1.2rem',
    },
    menuItemHover: {
      backgroundColor: '#004085',
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar el estado del menú
  };

  const handleClickOutside = (event) => {
    // Verificamos si el clic ocurrió fuera del menú y el botón
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false); // Cerrar el menú si el clic es fuera de ambos
    }
  };

  useEffect(() => {
    // Agregar el evento para detectar clics fuera del menú
    document.addEventListener('click', handleClickOutside);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        {/* Logo */}
        <img src="path_to_your_logo.png" alt="Logo" style={styles.logo} />
        <div>
          <h1 style={styles.title}>Estudia EDU</h1>
          <p style={styles.subtitle}>Tu fuente de aprendizaje y conocimiento</p>
        </div>
      </div>
      <div>
        <button
          ref={buttonRef} // Asociamos el botón con la referencia
          onClick={toggleMenu}
          style={{ ...styles.menuButton, ...(isMenuOpen ? styles.menuButtonHover : {}) }}
        >
          ☰
        </button>
        <div ref={menuRef} style={styles.menu}>
          <div style={styles.menuItem}>
            Opción 1
          </div>
          <div style={styles.menuItem}>
            Opción 2
          </div>
          <div style={styles.menuItem}>
            Opción 3
          </div>
          <div style={styles.menuItem}>
            Opción 4
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
