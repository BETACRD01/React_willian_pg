import React from 'react';
import EducationImage from './img/Education.jpg'; // Importa la imagen

const Hero = () => (
  <div style={{
    textAlign: 'center',
    padding: '150px 20px',
    backgroundImage: `url(${EducationImage})`, // Usa la imagen importada correctamente
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    position: 'relative',
    marginBottom: '50px',
  }}>
    {/* Overlay oscuro */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 0,
    }} />

    {/* Contenido visible */}
    <div style={{
      position: 'relative',
      zIndex: 1,
    }}>
      <h2 style={{ fontSize: '3em' }}>¡Aprende y Crece con Nosotros!</h2>
      <p style={{ fontSize: '1.5em', marginTop: '20px' }}>
        Recursos educativos y consejos prácticos al alcance de todos.
      </p>
      <a href="https://www.facebook.com/profile.php?id=61562213396432" style={{
        background: '#4a90e2',
        color: '#fff',
        padding: '15px 30px',
        textDecoration: 'none',
        borderRadius: '30px',
        marginTop: '30px',
        display: 'inline-block',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
      }}>
        Visita nuestra página en Facebook
      </a>
    </div>
  </div>
);

export default Hero;
