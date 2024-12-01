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
    }}
  >
    {['Sobre Nosotros', 'Recursos', 'Contáctanos'].map((item, idx) => (
      <a
        key={idx}
        href={`#${item.replace(' ', '').toLowerCase()}`}
        style={{
          color: '#fff',
          margin: '0 20px',
          textDecoration: 'none',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {/* Subrayado animado */}
        <span
          style={{
            position: 'absolute',
            bottom: -4,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: '#4a90e2',
            transform: 'scaleX(0)', // Oculto inicialmente
            transformOrigin: 'center',
            transition: 'transform 0.3s ease', // Suaviza la transición
          }}
          className="underline"
        />
        {/* Texto animado */}
        <span
          style={{
            display: 'inline-block',
            transition: 'transform 0.3s ease, color 0.3s ease',
          }}
          className="link-text"
        >
          {item}
        </span>
      </a>
    ))}
    <style>
      {`
        a:hover .underline {
          transform: scaleX(1); /* Subrayado aparece */
        }
        a:hover .link-text {
          color: #4a90e2; /* Cambia el color */
          transform: translateY(-2px); /* Mueve el texto hacia arriba */
        }
      `}
    </style>
  </nav>
);

export default Navbar;
