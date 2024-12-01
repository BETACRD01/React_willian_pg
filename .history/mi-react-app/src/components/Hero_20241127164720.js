import React from 'react';

const Hero = () => (
  <div style={{
    textAlign: 'center',
    padding: '100px 20px',
    backgroundImage: 'url("descarga0.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    position: 'relative'
  }}>
    <h2>¡Aprende y Crece con Nosotros!</h2>
    <p>Recursos educativos y consejos prácticos al alcance de todos.</p>
    <a href="https://www.facebook.com/profile.php?id=61562213396432" style={{
      background: '#4a90e2',
      color: '#fff',
      padding: '15px 30px',
      textDecoration: 'none',
      borderRadius: '30px',
      marginTop: '30px',
      display: 'inline-block'
    }}>
      Visita nuestra página en Facebook
    </a>
  </div>
);

export default Hero;
