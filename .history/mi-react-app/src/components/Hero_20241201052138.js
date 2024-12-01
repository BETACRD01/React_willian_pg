import React from 'react';
import EducationImage from './img/Education.jpg'; // Importa la imagen

const Hero = () => (
  <div
    style={{
      textAlign: 'center',
      padding: '150px 20px',
      backgroundImage: `url(${EducationImage})`, // Usa la imagen importada correctamente
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      position: 'relative',
      marginBottom: '50px',
      overflow: 'hidden',
    }}
  >
    {/* Overlay oscuro con desenfoque */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 0,
        filter: 'blur(10px)', // Desenfoque en el fondo
      }}
    />

    {/* Contenido visible */}
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        animation: 'fadeIn 1.5s ease-in-out', // Animación de desvanecimiento al cargar
        padding: '0 20px',
      }}
    >
      <h2 style={{ fontSize: '3em', fontWeight: 'bold' }}>¡Aprende y Crece con Nosotros!</h2>
      <p style={{ fontSize: '1.5em', marginTop: '20px' }}>
        Recursos educativos y consejos prácticos al alcance de todos.
      </p>
      <a
        href="https://www.facebook.com/profile.php?id=61562213396432"
        style={{
          background: '#4a90e2',
          color: '#fff',
          padding: '15px 30px',
          textDecoration: 'none',
          borderRadius: '30px',
          marginTop: '30px',
          display: 'inline-block',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          transition: 'background 0.3s, transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#357ABD'; // Color más oscuro al pasar el cursor
          e.currentTarget.style.transform = 'scale(1.05)'; // Aumentar tamaño al pasar el cursor
          e.currentTarget.style.boxShadow = '0px 8px 12px rgba(0, 0, 0, 0.3)'; // Sombra más intensa
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#4a90e2'; // Regresar al color original
          e.currentTarget.style.transform = 'scale(1)'; // Regresar al tamaño normal
          e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)'; // Regresar a la sombra original
        }}
        aria-label="Visita nuestra página en Facebook"
      >
        Visita nuestra página en Facebook
      </a>
    </div>

    {/* Animación de desvanecimiento */}
    <style>
      {`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
    </style>
  </div>
);

export default Hero;
