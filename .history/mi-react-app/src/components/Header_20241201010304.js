import React from 'react';

const Header = () => {
  const styles = {
    header: {
      background: 'linear-gradient(to right, #0066cc, #003d99)', // Degradado más profesional
      color: '#fff',
      padding: '30px 15px', // Más espaciado
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para separación
      borderBottom: '5px solid #004080', // Borde inferior para destacar
    },
    title: {
      fontSize: '2.8rem', // Tamaño de texto más grande
      fontWeight: 'bold',
      margin: '0 0 10px 0',
      fontFamily: "'Poppins', sans-serif", // Tipografía profesional
    },
    subtitle: {
      fontSize: '1.3rem',
      margin: 0,
      fontFamily: "'Roboto', sans-serif",
      opacity: 0.9, // Color ligeramente más tenue
    },
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Estudia EDU</h1>
      <p style={styles.subtitle}>Tu fuente de aprendizaje y conocimiento</p>
    </header>
  );
};

export default Header;

