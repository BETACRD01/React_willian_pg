import React, { useEffect, useState } from 'react';
import EducationImage from './img/Education.jpg'; // Importa la imagen

const Hero = () => {
  const [textColor, setTextColor] = useState('#fff'); // Por defecto, texto claro

  useEffect(() => {
    // Función para calcular la luminosidad promedio de un color (usando una imagen)
    const calculateTextColor = (imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      img.crossOrigin = 'Anonymous'; // Evitar problemas de CORS
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let r = 0, g = 0, b = 0, total = 0;

        for (let i = 0; i < data.length; i += 4) {
          r += data[i];     // Rojo
          g += data[i + 1]; // Verde
          b += data[i + 2]; // Azul
          total++;
        }

        // Calcular promedio de colores
        r /= total;
        g /= total;
        b /= total;

        // Calcular luminosidad (percepción humana)
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        setTextColor(luminance > 127 ? '#000' : '#fff'); // Cambia el color según luminosidad
      };
    };

    calculateTextColor(EducationImage);
  }, []);

  return (
    <div style={{
      textAlign: 'center',
      padding: '150px 20px',
      backgroundImage: `url(${EducationImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: textColor,
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
};

export default Hero;
