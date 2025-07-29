// App.js
import React from 'react';
// Importa los componentes como exportaciones nombradas
// Se ha añadido la extensión .js a las rutas de importación para resolver el error "Could not resolve".
import { NavBar } from './components/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer.js';

// Asegúrate de que Tailwind CSS esté configurado en tu proyecto.
// Si no lo tienes, puedes añadirlo a tu index.html o usar un CDN para empezar:
// <script src="https://cdn.tailwindcss.com"></script>
// O instala Tailwind CSS y configúralo en tu proyecto React.

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Componente de la barra de navegación */}
      <NavBar />

      {/* Componente Contenedor de la lista de ítems con un mensaje de bienvenida */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />

      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; 2025 Mi E-commerce. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
