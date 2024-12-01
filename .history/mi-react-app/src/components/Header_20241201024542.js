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
      zIndex: 1000, // Se asegura de que la barra de navegación esté encima de otros elementos
      width: '100%',
    }}
  >
    {['Sobre Nosotros', 'Recursos', 'Contáctanos'].map((item, idx) => (
      <a
        key={idx}
        href={`#${item.replace(' ', '').toLowerCase()}`}
        style={{
          color: '#fff',
          textDecoration: 'none',
          margin: '0 20px', // Espaciado entre los elementos del menú
          fontSize: '1.1rem', // Tamaño de texto adecuado
          transition: 'color 0.3s ease',
        }}
      >
        {item}
      </a>
    ))}
  </nav>
);

const MainContent = () => (
  <div style={{ paddingTop: '60px' }}> {/* Espacio para la barra de navegación */}
    <section id="sobre" style={{ height: '100vh' }}>
      <h1>Sobre Nosotros</h1>
    </section>
    <section id="recursos" style={{ height: '100vh' }}>
      <h1>Recursos</h1>
    </section>
    <section id="contactanos" style={{ height: '100vh' }}>
      <h1>Contáctanos</h1>
    </section>
  </div>
);

const App = () => (
  <div>
    <Navbar />
    <MainContent />
  </div>
);

export default App;

;


