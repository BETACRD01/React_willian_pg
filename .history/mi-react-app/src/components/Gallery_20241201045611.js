import React, { useState } from 'react';
import editar from './img/gallery/editar.jpg';
import inteligencia from './img/gallery/inteligencia.jpg';
import php from './img/gallery/PHP.jpg';
import programacion from './img/gallery/programacion.jpg';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const imagesPerPage = 4;

  const images = [
    { src: editar, alt: 'Edición de Imágenes', category: 'Edición' },
    { src: inteligencia, alt: 'Inteligencia Artificial', category: 'Tecnología' },
    { src: php, alt: 'PHP Avanzado', category: 'Programación' },
    { src: programacion, alt: 'Programación Básica', category: 'Programación' },
  ];

  // Filtrar imágenes por búsqueda y categoría
  const filterImages = () => {
    let filteredImages = images;

    if (activeCategory !== 'todos') {
      filteredImages = filteredImages.filter((image) => image.category === activeCategory);
    }

    if (searchTerm) {
      filteredImages = filteredImages.filter((image) =>
        image.alt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredImages;
  };

  // Función para ordenar las imágenes
  const sortImages = (images) => {
    return images.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.category.localeCompare(b.category);
      } else {
        return b.category.localeCompare(a.category);
      }
    });
  };

  // Paginación
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

  const paginatedImages = sortImages(filterImages()).slice(
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

      {/* Barra de búsqueda */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar curso..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '200px',
            fontSize: '1rem',
            transition: 'border 0.3s ease',
          }}
        />
      </div>

      {/* Filtro de categorías */}
      <div style={{ marginBottom: '30px' }}>
        <button
          onClick={() => setActiveCategory('todos')}
          style={categoryButtonStyle}
        >
          Todos
        </button>
        <button
          onClick={() => setActiveCategory('Edición')}
          style={categoryButtonStyle}
        >
          Edición
        </button>
        <button
          onClick={() => setActiveCategory('Tecnología')}
          style={categoryButtonStyle}
        >
          Tecnología
        </button>
        <button
          onClick={() => setActiveCategory('Programación')}
          style={categoryButtonStyle}
        >
          Programación
        </button>
      </div>

      {/* Ordenar por Categoría */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          style={{
            backgroundColor: '#FFC107',
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
          Ordenar por {sortOrder === 'asc' ? 'Ascendente' : 'Descendente'}
        </button>
      </div>

      {/* Galería de imágenes */}
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
            onClick={() => alert(`Detalles de: ${image.alt}`)} // Muestra detalles emergentes
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
            transition: 'color 0.3s ease',
          }}
        >
          Página {currentPage} de {Math.ceil(filterImages().length / imagesPerPage)}
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

const categoryButtonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  margin: '0 10px',
  cursor: 'pointer',
  borderRadius: '5px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
};

export default Gallery;
