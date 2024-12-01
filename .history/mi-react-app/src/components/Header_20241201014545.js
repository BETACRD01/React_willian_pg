import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const styles = {
    header: {
      background: 'linear-gradient(to right, #4a90e2, #357ab7)', 
      color: '#fff',
      padding: '20px 30px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderBottom: '5px solid #2c6f94',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1, // Aseguramos que el header quede en la parte superior
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '600',
      marginBottom: '5px',
      fontFamily: "'Montserrat', sans-serif", 
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
      fontSize: '1.8rem',
      cursor: 'pointer',
      padding: '10px',
      transition: 'color 0.3s',
    },
    menuButtonHover: {
      color: '#ffcc00',
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
      zIndex: 2, // El menú debe estar por encima del contenido
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
      backgroundColor: '#2c6f94',
    },
    content: {
      marginTop: '30px',
      padding: '20px',
      textAlign: 'center',
      minHeight: '300px', // Aseguramos que el contenido tenga un tamaño adecuado
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
    },
    optionContent: {
      padding: '20px',
      fontSize: '1.5rem',
      color: '#333',
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false); // Cerrar el menú automáticamente
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Opción 1':
        return <div style={styles.optionContent}>Contenido de la Opción 1</div>;
      case 'Opción 2':
        return <div style={styles.optionContent}>Contenido de la Opción 2</div>;
      case 'Opción 3':
        return <div style={styles.optionContent}>Contenido de la Opción 3</div>;
      case 'Opción 4':
        return <div style={styles.optionContent}>Contenido de la Opción 4</div>;
      default:
        return <div style={styles.optionContent}>Selecciona una opción</div>;
    }
  };

  return (
    <div>
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
              style={styles.menuItem} 
              onClick={() => handleOptionClick('Opción 1')}
            >
              Opción 1
            </div>
            <div 
              style={styles.menuItem} 
              onClick={() => handleOptionClick('Opción 2')}
            >
              Opción 2
            </div>
            <div 
              style={styles.menuItem} 
              onClick={() => handleOptionClick('Opción 3')}
            >
              Opción 3
            </div>
            <div 
              style={styles.menuItem} 
              onClick={() => handleOptionClick('Opción 4')}
            >
              Opción 4
            </div>
          </div>
        </div>
      </header>
      <div style={styles.content}>
        {renderContent()} {/* Mostrar el contenido de la opción seleccionada */}
      </div>
    </div>
  );
};

export default Header;
