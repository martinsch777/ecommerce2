import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer.js';
import { ItemDetailContainer } from './components/ItemDetailContainer.js';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <NavBar />

      <Routes>
        {/* Catálogo completo */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />} />

        {/* Catálogo filtrado por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo por categoría" />} />

        {/* Detalle de un producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* 404 */}
        <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '2rem' }}>404 - Página no encontrada</h2>} />
      </Routes>

      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; 2025 Mi E-commerce. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
