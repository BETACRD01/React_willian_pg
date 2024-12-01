import React from 'react';

const Header = () => {
  const styles = {
    header: {
      background: 'linear-gradient(to right, #0066cc, #003d99)',
      color: '#fff',
      padding: '20px 15px',
      textAlign: 'left', // Align text to the left
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderBottom: '5px solid #004080',
      display: 'flex', // Use flexbox for layout
      justifyContent: 'space-between', // Space elements evenly
    },
    title: {
      fontSize: '2rem', // Reduced font size
      fontWeight: 'bold',
      marginBottom: '5px',
      fontFamily: "'Poppins', sans-serif",
    },
    subtitle: {
      fontSize: '1rem', // Reduced font size
      margin: 0,
      fontFamily: "'Roboto', sans-serif',
      opacity: 0.9,
    },
    optionsButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  };

  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.title}>Estudia EDU</h1>
        <p style={styles.subtitle}>Tu fuente de aprendizaje y conocimiento</p>
      </div>
      <button style={styles.optionsButton}>
        {/* Add an icon or text for options here */}
        <i className="fa fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;