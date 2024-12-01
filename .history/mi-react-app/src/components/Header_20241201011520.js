import React from 'react';

const Header = () => {
  const styles = {
    header: {
      background: 'linear-gradient(to right, #0066cc, #003d99)',
      color: '#fff',
      padding: '30px 15px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderBottom: '5px solid #004080',
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
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Estudia EDU</h1>
      <p style={styles.subtitle}>Tu fuente de aprendizaje y conocimiento</p>
    </header>
  );
};

export default Header;
