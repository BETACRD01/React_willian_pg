import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Resources from './components/Resources';
import Gallery from './components/Gallery'; // Nuevo componente
import Contact from './components/Contact';
import Footer from './components/Footer';

import Navbar from './Navbar';  // Importa el Navbar
import Header from './Header';  // Importa el Header

function App() {
  return (
    <div>
      <Header />
      <Navbar /> {/* Aquí está el Navbar trabajado */}
      <Hero />
      <About />
      <Resources />
      <Gallery /> {/* Galería añadida */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
