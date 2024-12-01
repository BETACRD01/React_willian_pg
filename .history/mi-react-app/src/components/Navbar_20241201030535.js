import React, { useState, useEffect, useCallback } from 'react';

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // useCallback garantiza que la función handleScroll se mantenga estable
  const handleScroll = useCallback(() => {
    // Detectar si el usuario está haciendo scroll hacia abajo
    if (window.scrollY > lastScrollY) {
      setScrollingDown(true);  // Se está desplazando hacia abajo
    } else {
      setScrollingDown(false);  // Se está desplazando hacia arriba
    }
    setLastScrollY(window.scrollY);  // Actualizar la última posición de scroll
  }, [lastScrollY]);  // Dependencia en lastScrollY

  useEffect(() => {
    // Agregar el evento de scroll cuando el componente se monte
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);  // useEffect ahora depende de handleScroll

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: scrollingDown ? 'rgba(51, 51, 51, 0.5)' : 'rgba(51, 51, 51, 1)', // Fondo negro con opacidad ajustable
        padding: '15px 0',
        position: 'sticky',
        top: '0',
        zIndex: 1000,
        width: '100%',
        flexWrap: 'wrap',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        opacity: scrollingDown ? 0.5 : 1,
        transform: scrollingDown ? 'translateY(-10px)' : 'translateY(0)',
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
