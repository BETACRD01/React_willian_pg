import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resources from './components/Resources';
import Gallery from './components/Gallery'; // Nuevo componente
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Resources />
      <Gallery /> {/* Agregar la galería */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
