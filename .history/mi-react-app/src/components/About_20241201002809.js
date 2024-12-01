import React from 'react';

const About = () => (
  <section
    id="about"
    style={{
      padding: '50px 20px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      color: '#333',
      lineHeight: '1.6',
    }}
  >
    <h2
      style={{
        color: '#4a90e2',
        marginBottom: '20px',
        fontSize: '2rem',
        fontWeight: 'bold',
      }}
    >
      Sobre Nosotros
    </h2>
    <p
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        fontSize: '1.1rem',
      }}
    >
      En <strong>Estudia EDU</strong>, estamos comprometidos con el aprendizaje accesible y el crecimiento personal.
      Nos dedicamos a proporcionar herramientas educativas innovadoras para ayudarte a alcanzar tus metas y
      construir el futuro que deseas. ¡Únete a nosotros y lleva tu aprendizaje al siguiente nivel!
    </p>
  </section>
);

export default About;
