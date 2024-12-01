import React from 'react';

// Puedes usar una librería como react-icons para incluir logos (asegúrate de instalarla: npm install react-icons)
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => (
  <section
    id="contact"
    style={{
      backgroundColor: '#003366', // Fondo azul oscuro profesional
      color: '#f2f2f2',
      padding: '40px 20px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        backgroundColor: '#ffffff',
        color: '#333',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '100%',
        padding: '30px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#003366', // Título en azul oscuro
        }}
      >
        Contáctanos
      </h2>
      <p style={{ fontSize: '1rem', marginBottom: '15px' }}>
        ¿Tienes dudas o sugerencias? ¡Nos encantaría escucharte!
      </p>
      <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
        Puedes comunicarte con nosotros a través de los siguientes medios:
      </p>
      <div style={{ lineHeight: '1.8', marginBottom: '20px' }}>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:williancerda0@gmail.com"
            style={{
              color: '#003366',
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
              color: '#003366',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            +1 234 567 890
          </a>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          fontSize: '1.8rem',
        }}
      >
        {/* Redes Sociales con Logos */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#4267B2', // Azul de Facebook
            textDecoration: 'none',
          }}
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#C13584', // Rosa de Instagram
            textDecoration: 'none',
          }}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0077B5', // Azul de LinkedIn
            textDecoration: 'none',
          }}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
