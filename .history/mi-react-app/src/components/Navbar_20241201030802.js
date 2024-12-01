import React, { useState, useEffect, useCallback } from 'react';

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setScrollingDown(true);
    } else {
      setScrollingDown(false);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav style={{ background: scrollingDown ? 'rgba(51, 51, 51, 0.7)' : 'rgba(51, 51, 51, 1)' }}>
      {[].map((item, idx) => (
        <a key={idx} href={`#${item.replace(' ', '').toLowerCase()}`} style={{ color: '#fff' }}>
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
