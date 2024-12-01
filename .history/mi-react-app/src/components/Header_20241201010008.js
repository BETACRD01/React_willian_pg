import React from 'react';

const Header = () => {
  const styles = {
    header: {
      background: 'linear-gradient(to right, var(--header-start-color, #4a90e2), var(--header-end-color, #357ab9))',
      color: 'var(--header-text-color, #fff)',
      padding: '20px 0',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      borderBottom: '2px solid var(--header-border-color, #fff)',
      transition: 'background 0.3s ease, color 0.3s ease',
    },
    title: {
      fontSize: '2.5rem',
      margin: 0,
    },
    subtitle: {
      fontSize: '1.2rem',
      margin: 0,
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
