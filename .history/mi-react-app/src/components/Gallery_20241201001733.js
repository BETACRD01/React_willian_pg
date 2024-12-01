import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'C:/Users/willi/Desktop/Proyectos/mi-react-app/src/components/img/gallery/editar.jpg', alt: 'Imagen 1' },
    { src: 'https://via.placeholder.com/300', alt: 'Imagen 2' },
    { src: 'https://via.placeholder.com/300', alt: 'Imagen 3' },
    { src: 'https://via.placeholder.com/300', alt: 'Imagen 4' },
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
            <img src={image.src} alt={image.alt} style={{ width: '100%', display: 'block' }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
