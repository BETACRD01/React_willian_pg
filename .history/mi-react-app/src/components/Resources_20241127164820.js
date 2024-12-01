import React from 'react';

const resources = [
  { title: 'Guías de Estudio', description: 'Organiza tu tiempo y aprende de manera más eficiente con nuestras guías gratuitas.' },
  { title: 'Recursos Descargables', description: 'Encuentra PDFs y materiales prácticos para temas clave de aprendizaje.' },
  { title: 'Consejos de Estudio', description: 'Descubre las mejores técnicas para mejorar tus hábitos de estudio y alcanzar tus objetivos.' },
];

const Resources = () => (
  <section id="resources" style={{ background: '#f9f9f9', padding: '50px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
    {resources.map((item, idx) => (
      <div key={idx} style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '300px', textAlign: 'left' }}>
        <h3 style={{ color: '#4a90e2' }}>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </section>
);

export default Resources;
