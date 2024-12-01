import React from 'react';

const resources = [
  { title: 'Guías de Estudio', description: 'Organiza tu tiempo y aprende de manera más eficiente con nuestras guías gratuitas.' },
  { title: 'Recursos Descargables', description: 'Encuentra PDFs y materiales prácticos para temas clave de aprendizaje.' },
  { title: 'Consejos de Estudio', description: 'Descubre las mejores técnicas para mejorar tus hábitos de estudio y alcanzar tus objetivos.' },
];

const Resources = () => (
  <section
    id="resources"
    style={{
      padding: '50px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      backgroundColor: 'var(--background-color)',
      color: 'var(--text-color)',
      transition: 'background-color 0.3s, color 0.3s',
    }}
  >
    {resources.map((item, idx) => (
      <div
        key={idx}
        style={{
          backgroundColor: 'var(--card-background)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '300px',
          textAlign: 'left',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
        }}
      >
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>{item.title}</h3>
        <p style={{ margin: '0' }}>{item.description}</p>
      </div>
    ))}
  </section>
);

export default Resources;

