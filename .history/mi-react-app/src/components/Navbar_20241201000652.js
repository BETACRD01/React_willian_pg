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
      <a key={idx} href={`#${item.replace(' ', '').toLowerCase()}`}>
        <span className="underline" />
        {item}
      </a>
    ))}
  </nav>
);

export default Navbar;
