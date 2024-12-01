import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => (
  <section
    id="contact"
    style={{
      background: 'linear-gradient(135deg, #f0f4ff, #d9e8ff)', // Gradiente suave
      color: '#333', // Texto en tono oscuro
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
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '100%',
        padding: '30px',
      }}
    >
      <h2
        style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#333', // Título en color neutral
        }}
      >
        Contáctanos
      </h2>
      <p style={{ fontSize: '1rem', marginBottom: '15px' }}>
        ¿Tienes dudas o sugerencias? ¡Nos encantaría escucharte!
      </p>
      <div style={{ lineHeight: '1.8', marginBottom: '20px' }}>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:williancerda0@gmail.com"
            style={{
              color: '#007BFF',
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
            href="tel:+593 98 666 5374"
            style={{
              color: '#007BFF',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            +593 98 666 5374
          </a>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          fontSize: '1.8rem',
        }}
      >
        {/* Redes Sociales con Logos */}
        <a
          href="https://www.facebook.com/profile.php?id=100076599633499"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#4267B2' }} // Azul de Facebook
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#C13584' }} // Rosa de Instagram
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0077B5' }} // Azul de LinkedIn
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
