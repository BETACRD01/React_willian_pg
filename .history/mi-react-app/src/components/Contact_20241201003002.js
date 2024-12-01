import React from 'react';

const Contact = () => (
  <section
    id="contact"
    style={{
      backgroundColor: '#4a90e2',
      color: '#fff',
      padding: '50px 20px',
      textAlign: 'center',
    }}
  >
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Contáctanos
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        ¿Tienes dudas o sugerencias? ¡Nos encantaría escucharte! Comunícate con nosotros y haremos todo lo posible por ayudarte.
      </p>
      <p style={{ fontSize: '1rem' }}>
        Email:{' '}
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
    </div>
  </section>
);

export default Contact;

