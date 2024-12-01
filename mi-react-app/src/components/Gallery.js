import React from 'react';
import editar from './img/gallery/editar.jpg';
import inteligencia from './img/gallery/inteligencia.jpg';
import php from './img/gallery/PHP.jpg';
import programacion from './img/gallery/programacion.jpg';

const Gallery = () => {
  const images = [
    { src: editar, alt: 'Edición de Imágenes' },
    { src: inteligencia, alt: 'Inteligencia Artificial' },
    { src: php, alt: 'PHP Avanzado' },
    { src: programacion, alt: 'Programación Básica' },
  ];

  return (
    <section
      id="gallery"
      style={{
        padding: '50px 20px',
        background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)', // Gradiente suave y atractivo
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: '#01579b', // Azul oscuro
          marginBottom: '30px',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        Cursos Disponibles
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            style={{
              background: '#ffffff',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
              maxWidth: '280px',
              width: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            // Efecto de hover
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.15)';
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <p
              style={{
                padding: '10px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#01579b', // Azul oscuro
              }}
            >
              {image.alt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
