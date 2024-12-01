import React, { useState, useEffect, useRef } from 'react';
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
    },
    logo: {
      width: '80px', // Ajustamos el tamaño del logo
      height: 'auto',
      marginRight: '15px', // Espacio entre el logo y el texto
      borderRadius: '15px', // Bordes redondeados
      opacity: 0.8, // Hacer el logo semi-transparente
    },
    title: {
      fontSize: '2.5rem', // Ajustamos el tamaño del título
      fontWeight: '700',
      marginBottom: '5px',
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: '1px',
    },
    subtitle: {
      fontSize: '1.2rem', // Ajustamos el tamaño del subtítulo
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
      color: '#FFD700', // Color dorado al pasar el ratón
    },
    menu: {
      position: 'absolute',
      top: '80px',
      right: '20px',
      background: '#003366', // Fondo del menú que combina con el logo
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: isMenuOpen ? 'block' : 'none',
      padding: '12px',
      width: '200px', // Ajustamos el ancho del menú
      zIndex: 10,
      maxHeight: '400px',
      overflowY: 'auto',
    },
    menuItem: {
      color: '#fff',
      padding: '10px 0', // Ajustamos el padding de los elementos del menú
      textAlign: 'center',
      borderBottom: '1px solid #004085',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1.1rem', // Ajustamos el tamaño de las letras
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
        <img src={logo} alt="Logo" style={styles.logo} />
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
            Inicio
          </div>
          <div style={styles.menuItem}>
            Cursos
          </div>
          <div style={styles.menuItem}>
            Recursos
          </div>
          <div style={styles.menuItem}>
            Blog
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;