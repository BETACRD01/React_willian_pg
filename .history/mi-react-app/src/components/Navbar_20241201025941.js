import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    // Detectar si el usuario está haciendo scroll hacia abajo
    if (window.scrollY > lastScrollY) {
      setScrollingDown(true);  // Se está desplazando hacia abajo
    } else {
      setScrollingDown(false);  // Se está desplazando hacia arriba
    }
    setLastScrollY(window.scrollY);  // Actualizar la última posición de scroll
  };

  useEffect(() => {
    // Agregar el evento de scroll cuando el componente se monte
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#333',
        padding: '15px 0',
        position: 'sticky',
        top: '0', // No hay espacio en la parte superior
        zIndex: 1000,
        width: '100%',
        flexWrap: 'wrap',
        transition: 'transform 0.3s ease-in-out', // Para el efecto suave al ocultar
        transform: scrollingDown ? 'translateY(-100%)' : 'translateY(0)', // Se desplaza fuera de la vista
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
};

export default Navbar;
