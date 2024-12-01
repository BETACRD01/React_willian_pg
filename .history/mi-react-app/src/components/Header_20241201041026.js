import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa'; // Librería de iconos
import logo from './img/logo/logo2.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef(null); // Referencia al contenedor del menú
  const buttonRef = useRef(null); // Referencia al botón
  const headerRef = useRef(null); // Referencia al header para aplicar animaciones
  const [scrolling, setScrolling] = useState(false); // Estado para detectar el scroll

  const styles = {
    header: {
      background: 'linear-gradient(to right, #0056b3, #003366)', // Fondo degradado que coincide con el logo
      color: '#fff',
      padding: '15px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderBottom: '5px solid #004085',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif",
      position: 'fixed', // Fijar el header en la parte superior
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      marginTop: 0,
      height: '120px',
      transition: 'all 0.3s ease-in-out', // Transición suave
      transform: scrolling ? 'translateY(0)' : 'translateY(-100px)', // Movimiento suave hacia abajo al hacer scroll
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      transition: 'transform 0.3s ease',
    },
    logo: {
      width: '90px',
      height: 'auto',
      marginRight: '15px',
      borderRadius: '15px',
      opacity: 0.9,
      transition: 'transform 0.3s ease-in-out', // Transición suave en el logo
    },
    logoHover: {
      transform: 'scale(1.1)', // Efecto de hover
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '5px',
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: '1px',
      transition: 'none', // Sin transición en el título
    },
    subtitle: {
      fontSize: '1.2rem',
      margin: 0,
      fontFamily: "'Roboto', sans-serif",
      opacity: 0.85,
      fontWeight: '400',
      transition: 'none', // Sin transición en el subtítulo
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
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '20px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      padding: '5px 10px',
    },
    searchInput: {
      border: 'none',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '1rem',
      outline: 'none',
      width: '180px',
    },
    loginButton: {
      backgroundColor: '#FFD700',
      color: '#003366',
      border: 'none',
      fontSize: '1.1rem',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginLeft: '20px',
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
    window.addEventListener('scroll', () => {
      setScrolling(window.scrollY > 50); // Detectar cuando el usuario hace scroll
    });
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', () => {
        setScrolling(window.scrollY > 50);
      });
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    alert(`Buscando: ${searchQuery}`);
  };

  return (
    <header ref={headerRef} style={styles.header}>
      <div style={styles.logoContainer}>
        <img
          src={logo}
          alt="Logo"
          style={{ ...styles.logo, ...(isMenuOpen ? styles.logoHover : {}) }}
        />
        <div>
          <h1 style={styles.title}>Estudia EDU</h1>
          <p style={styles.subtitle}>Tu fuente de aprendizaje y conocimiento</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
          <button onClick={handleSearchSubmit} style={styles.searchButton}>
            <FaSearch />
          </button>
        </div>
        <button style={styles.loginButton}>Iniciar sesión</button>
      </div>
    </header>
  );
};

export default Header;
