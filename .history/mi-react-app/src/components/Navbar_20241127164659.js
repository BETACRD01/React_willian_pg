import React from 'react';

const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'center', background: '#333', padding: '15px 0' }}>
    {['Sobre Nosotros', 'Recursos', 'Contáctanos'].map((item, idx) => (
      <a key={idx} href={`#${item.replace(' ', '').toLowerCase()}`} style={{ color: '#fff', margin: '0 20px', textDecoration: 'none' }}>
        {item}
      </a>
    ))}
  </nav>
);

export default Navbar;
