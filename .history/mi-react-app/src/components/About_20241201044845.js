import React, { useState } from 'react';
import './About.css'; // Archivo CSS externo para estilos

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">Sobre Nosotros</h2>
        <p className="about-text">
          En Estudia EDU, estamos comprometidos con el aprendizaje accesible y el crecimiento personal.
          Descubre nuestras herramientas educativas para avanzar hacia tus metas.
        </p>
        
        {/* Descripción extendida */}
        {isExpanded && (
          <p className="expanded-description">
            A través de nuestra plataforma, ofrecemos recursos educativos de alta calidad para estudiantes de todas las edades.
            Además, brindamos asesoría personalizada y consejos de estudio adaptados a tus necesidades. Nuestro objetivo es proporcionar un entorno
            de aprendizaje inclusivo y accesible para todos.
          </p>
        )}
        
        {/* Botón para expandir o contraer la descripción */}
        <button onClick={toggleDescription} className="toggle-button">
          {isExpanded ? 'Leer menos' : 'Leer más'}
        </button>
      </div>
    </section>
  );
};

export default About;
