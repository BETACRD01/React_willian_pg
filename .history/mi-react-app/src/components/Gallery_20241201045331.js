import React, { useState } from 'react';
import editar from './img/gallery/editar.jpg';
import inteligencia from './img/gallery/inteligencia.jpg';
import php from './img/gallery/PHP.jpg';
import programacion from './img/gallery/programacion.jpg';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4;

  const images = [
    { src: editar, alt: 'Edición de Imágenes', category: 'Edición' },
    { src: inteligencia, alt: 'Inteligencia Artificial', category: 'Tecnología' },
    { src: php, alt: 'PHP Avanzado', category: 'Programación' },
    { src: programacion, alt: 'Programación Básica', category: 'Programación' },
  ];

  // Función para filtrar las imágenes según la categoría
  const filterImages = () => {
    if (activeCategory === 'todos') {
      return images;
    }
    return images.filter((image) => image.category === activeCategory);
  };

  // Función para cambiar de página
  const nextPage = () => {
    if (currentPage * imagesPerPage < filterImages().length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Paginación de imágenes
  const paginatedImages = filterImages().slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <section
      id="gallery"
      style={{
        padding: '50px 20px',
        background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)', // Gradiente suave
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: '#01579b',
          marginBottom: '30px',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        Cursos Disponibles
      </h2>

      {/* Filtro de categorías */}
      <div style={{ marginBottom: '30px' }}>
        <button
          onClick={() => setActiveCategory('todos')}
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            cursor: 'pointer',
            borderRadius: '5px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
        >
          Todos
        </button>
        <button
          onClick={() => setActiveCategory('Edición')}
          style={{
            backgroundColor: '#FF5722',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            cursor: 'pointer',
            borderRadius: '5px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
        >
          Edición
        </button>
        <button
          onClick={() => setActiveCategory('Tecnología')}
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            cursor: 'pointer',
            borderRadius: '5px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
        >
          Tecnología
        </button>
        <button
          onClick={() => setActiveCategory('Programación')}
          style={{
            backgroundColor: '#9C27B0',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            cursor: 'pointer',
            borderRadius: '5px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
        >
          Programación
        </button>
      </div>

      {/* Galería de imágenes con animaciones suaves */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {paginatedImages.map((image, idx) => (
          <div
            key={idx}
            style={{
              background: '#ffffff',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              maxWidth: '280px',
              width: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '10px',
              }}
            />
            <p
              style={{
                padding: '10px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#01579b',
              }}
            >
              {image.alt}
            </p>
          </div>
        ))}
      </div>

      {/* Indicadores de paginación mejorados */}
      <div style={{ marginTop: '30px' }}>
        <span
          style={{
            fontSize: '1.2rem',
            color: '#007BFF',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            marginRight: '20px',
          }}
          onClick={prevPage}
        >
          ‹ Anterior
        </span>
        <span
          style={{
            fontSize: '1.2rem',
            color: '#007BFF',
            cursor: 'pointer',
            marginLeft: '20px',
            transition: 'color 0.3s ease',
          }}
          onClick={nextPage}
        >
          Siguiente ›
        </span>
      </div>
    </section>
  );
};

export default Gallery;
