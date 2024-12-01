import React from 'react';

const Contact = () => (
  <section
    id="contact"
    style={{
      backgroundColor: '#003366', // Fondo azul oscuro profesional
      color: '#f2f2f2', // Texto claro para contraste
      padding: '60px 20px',
      textAlign: 'center',
    }}
  >
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#ffd700', // Título dorado para destacar
        }}
      >
        Contáctanos
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        ¿Tienes dudas, sugerencias o necesitas más información? ¡Estamos aquí para ayudarte!
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
        Puedes comunicarte con nosotros a través de los siguientes canales:
      </p>
      <div style={{ marginBottom: '30px', lineHeight: '1.8' }}>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:williancerda0@gmail.com"
            style={{
              color: '#ffcc00',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            williancerda0@gmail.com
          </a>
        </p>
        <p>
          <strong>Teléfono:</strong>{' '}
          <a
            href="tel:+1234567890"
            style={{
              color: '#ffcc00',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            +1 234 567 890
          </a>
        </p>
        <p>
          <strong>Ubicación:</strong> Quito, Ecuador
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* Redes Sociales */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#4267B2', // Azul de Facebook
            fontSize: '1.5rem',
            textDecoration: 'none',
          }}
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#C13584', // Rosa de Instagram
            fontSize: '1.5rem',
            textDecoration: 'none',
          }}
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0077B5', // Azul de LinkedIn
            fontSize: '1.5rem',
            textDecoration: 'none',
          }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;

