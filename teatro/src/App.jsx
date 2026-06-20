import React, { useState, useMemo } from 'react';
import { obrasData } from './data/obrasData';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import ObraCard from './components/ObraCard';
import Carrito from './components/Carrito';
import './App.css';

function App() {
  // Estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar al carrito
  const agregarCarrito = (obra) => {
    setCarrito((prevCarrito) => [...prevCarrito, obra]);
  };

  // Función para eliminar del carrito por índice
  const eliminarCarrito = (indice) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((_, index) => index !== indice)
    );
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Calcular total del carrito
  const total = useMemo(() => {
    return carrito.reduce((acc, item) => acc + item.precio, 0);
  }, [carrito]);

  return (
    <div className="app">
      <Header
        nombreTeatro="Teatro Nacional"
        mensajeBienvenida="¡Bienvenidos al mundo del arte escénico!"
      />

      <main className="main-content container">
        <div className="main-grid">
          <section className="catalogo-section">
            <div className="catalogo-header">
              <h2 className="section-title">🎭 Obras en Cartelera</h2>
              <p className="catalogo-subtitle">
                Descubre nuestras próximas presentaciones y compra tus boletos
              </p>
            </div>

            <div className="obras-grid">
              {obrasData.map((obra) => (
                <ObraCard
                  key={obra.id}
                  obra={obra}
                  onComprar={agregarCarrito}
                />
              ))}
            </div>
          </section>

          <aside className="aside-section">
            <Aside />
            <Carrito
              carrito={carrito}
              onEliminar={eliminarCarrito}
              onVaciar={vaciarCarrito}
            />
          </aside>
        </div>
      </main>

      <Footer
        nombreTeatro="Teatro Nacional"
        direccion="Av. Principal #123, Ciudad"
        telefono="2222-2222"
        correo="info@teatronacional.com"
      />
    </div>
  );
}

export default App;