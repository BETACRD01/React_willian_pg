import React from 'react';
import editar from './img/gallery/editar.jpg';
import inteligencia from './img/gallery/inteligencia.jpg';
import php from './img/gallery/PHP.jpg';
import programacion from './img/gallery/programacion.jpg';

const Gallery = () => {
  const images = [
    { src: editar, alt: 'Imagen 1' },
    { src: inteligencia, alt: 'Imagen 2' },
    { src: php, alt: 'Imagen 3' },
    { src: programacion, alt: 'Imagen 4' },
  ];

  return (
    <section id="gallery" style={{ padding: '50px 20px', backgroundColor: '#f4f4f9', textAlign: 'center' }}>
      <h2 style={{ color: '#4a90e2', marginBottom: '30px' }}>Cursos Disponibles</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        {images.map((image, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '300px',
          }}>
            <img src={image.src} alt={image.alt} style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
