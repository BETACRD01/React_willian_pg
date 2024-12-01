import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'; // Navbar trabajado previamente
import Hero from './components/Hero';
import About from './components/About';
import Resources from './components/Resources';
import Gallery from './components/Gallery'; // Nuevo componente
import Contact from './components/Contact';
import Footer from './components/Footer';
import App from'./App.css';
import Navbar from './components/Navbar';'./styles.css'; // Asegúrate de importar el archivo CSS




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
