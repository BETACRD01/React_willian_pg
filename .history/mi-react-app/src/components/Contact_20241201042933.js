import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado con éxito');
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor.
    setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
  };

  return (
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
        flexDirection: 'column',
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
            color: '#333',
          }}
        >
          Contáctanos
        </h2>
        <p style={{ fontSize: '1rem', marginBottom: '15px' }}>
          ¿Tienes dudas o sugerencias? ¡Nos encantaría escucharte!
        </p>

        {/* Formulario de Contacto */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginBottom: '10px',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginBottom: '10px',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu mensaje"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                height: '150px',
                resize: 'none',
              }}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '5px',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Enviar mensaje
          </button>
        </form>

        {/* Información de contacto */}
        <div style={{ lineHeight: '1.8', marginTop: '30px' }}>
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
              href="tel:+593986665374"
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

        {/* Redes Sociales con Logos */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            fontSize: '1.8rem',
            marginTop: '20px',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <a
            href="https://www.facebook.com/profile.php?id=100076599633499"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#4267B2',
              transition: 'color 0.3s',
            }}
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/willian_crd_01/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#C13584',
              transition: 'color 0.3s',
            }}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/willian-cerda-62a259300/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#0077B5',
              transition: 'color 0.3s',
            }}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Botón flotante para volver arriba */}
      <button
        onClick={() => window.scrollTo(0, 0)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          borderRadius: '50%',
          border: 'none',
          padding: '15px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 10,
        }}
        aria-label="Volver arriba"
      >
        ↑
      </button>
    </section>
  );
};

export default Contact;
