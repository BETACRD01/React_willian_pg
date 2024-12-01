import React from 'react';

const Navbar = () => (
  <nav
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: '#333',
      padding: '15px 0',
      position: 'sticky',  // La barra se quedará pegada en la parte superior
      top: 0,  // Asegura que siempre esté arriba
      zIndex: 1000,  // Asegura que esté encima de otros elementos
      width: '100%',
      flexWrap: 'wrap',  // Permite que los elementos se ajusten si el espacio es insuficiente
    }}
  >
    {['Sobre Nosotros', 'Recursos', 'Contáctanos'].map((item, idx) => (
      <a
        key={idx}
        href={`#${item.replace(' ', '').toLowerCase()}`}
        style={{
          color: '#fff',
          textDecoration: 'none',
          margin: '0 20px',  // Espaciado entre los elementos
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

