import React from 'react';

const Navbar = () => (
  <nav
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: '#333',
      padding: '15px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      flexWrap: 'wrap', // Permite que los elementos se ajusten si el espacio es insuficiente
    }}
  >
    {['Sobre Nosotros', 'Recursos', 'Contáctanos'].map((item, idx) => (
      <a
        key={idx}
        href={`#${item.replace(' ', '').toLowerCase()}`}
        style={{
          color: '#fff',
          textDecoration: 'none',
          margin: '0 20px',
          fontSize: '1.1rem',
          transition: 'color 0.3s ease',
        }}
      >
        {item}
      </a>
    ))}
  </nav>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    header: {
      background: 'linear-gradient(to right, #007BFF, #0056b3)', 
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
      marginTop: '80px',  // Asegura que no se solape con la barra de navegación
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
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
          <div style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}>
            Opción 1
          </div>
          <div style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}>
            Opción 2
          </div>
          <div style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}>
            Opción 3
          </div>
          <div style={{ ...styles.menuItem, ...(isMenuOpen ? styles.menuItemHover : {}) }}>
            Opción 4
          </div>
        </div>
      </div>
    </header>
  );
};

const App = () => (
  <div>
    <Navbar />
    <Header />
    {/* Aquí puedes agregar el contenido principal */}
  </div>
);

export default App;