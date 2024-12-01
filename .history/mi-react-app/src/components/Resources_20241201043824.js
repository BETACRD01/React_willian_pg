import React from 'react';

const resources = [
  { title: 'Guías de Estudio', description: 'Organiza tu tiempo y aprende de manera más eficiente con nuestras guías gratuitas.', link: '#' },
  { title: 'Recursos Descargables', description: 'Encuentra PDFs y materiales prácticos para temas clave de aprendizaje.', link: '#' },
  { title: 'Consejos de Estudio', description: 'Descubre las mejores técnicas para mejorar tus hábitos de estudio y alcanzar tus objetivos.', link: '#' },
];

const Resources = () => (
  <section
    id="resources"
    style={{
      padding: '60px 20px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      justifyContent: 'center',
      backgroundColor: '#f7f7f7', // Fondo claro
      color: '#333', // Color oscuro
    }}
  >
    {resources.map((item, idx) => (
      <div
        key={idx}
        style={{
          backgroundColor: '#fff',
          padding: '25px',
          borderRadius: '15px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          maxWidth: '350px',
          textAlign: 'left',
          width: '100%',
          transition: 'transform 0.3s, box-shadow 0.3s, opacity 0.3s ease-in-out',
          cursor: 'pointer',
          opacity: 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.2)';
          e.currentTarget.style.opacity = '0.95';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.15)';
          e.currentTarget.style.opacity = '1';
        }}
      >
        <h3 style={{
          color: '#007bff', // Azul brillante
          marginBottom: '15px',
          fontSize: '1.6rem',
          fontWeight: 'bold',
        }}>
          {item.title}
        </h3>
        <p style={{
          margin: '0',
          fontSize: '1rem',
          color: '#555', // Gris oscuro
          marginBottom: '20px',
        }}>
          {item.description}
        </p>
        <a
          href={item.link}
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textAlign: 'center',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3'; // Azul más oscuro en hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#007bff'; // Restaurar color original
          }}
        >
          Ver más
        </a>
      </div>
    ))}
  </section>
);

export default Resources;
