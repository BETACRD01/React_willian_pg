import React from 'react';

const Navbar = () => (
  <nav
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: '#333',
      padding: '15px 0',
      position: 'sticky',
      top: '80px', // Asegura que el navbar quede por debajo del header
      zIndex: 1000,
      width: '100%',
      flexWrap: 'wrap',
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

export default Navbar;
