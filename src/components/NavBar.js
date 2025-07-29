import React from 'react';
// Importa el componente CartWidget como exportación nombrada
import { CartWidget } from './CartWidget.js'; // Asegúrate de que la ruta sea correcta y con .js

export function NavBar() {
  return (
    // Se han reemplazado las clases de Tailwind con nombres de clases CSS estándar
    <nav className="navbar-container">
      {/* Logo de la tienda */}
      <div className="navbar-logo-section">
        <img
          // Para usar tu propia imagen:
          // 1. Coloca tu archivo de imagen (ej. 'mi-logo.png') dentro de la carpeta 'public' de tu proyecto.
          // 2. Cambia el valor de 'src' a la ruta de tu imagen, por ejemplo: '/mi-logo.png'
          src="mi-logo.jpg" // <--- CAMBIA ESTA LÍNEA CON LA RUTA DE TU IMAGEN
          alt="Logo de la tienda"
          className="navbar-logo"
        />
        <span className="navbar-title">Mi Tienda Online</span>
      </div>

      {/* Enlaces de navegación */}
      <div className="navbar-links-wrapper">
        <div className="navbar-links">
          <a href="#inicio" className="navbar-link">
            Inicio
          </a>
          <a href="#productos" className="navbar-link">
            Productos
          </a>
          <a href="#categorias" className="navbar-link">
            Categorías
          </a>
          <a href="#contacto" className="navbar-link">
            Contacto
          </a>
        </div>
      </div>

      {/* Widget del carrito de compras */}
      <div className="navbar-cart-widget">
        <CartWidget />
      </div>

      {/* Estilos CSS estándar para el componente */}
      <style jsx>{`
        .navbar-container {
          background-color: white; /* Equivalente a bg-white */
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); /* Equivalente a shadow-md */
          padding: 16px; /* Equivalente a p-4 */
          display: flex;
          align-items: center;
          justify-content: space-between; /* Equivalente a justify-between */
          flex-wrap: wrap; /* Equivalente a flex-wrap */
          border-radius: 8px; /* Añadido para consistencia con otros componentes */
        }

        .navbar-logo-section {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          color: #1f2937; /* Equivalente a text-gray-800 */
          margin-right: 24px; /* Equivalente a mr-6 */
        }

        .navbar-logo {
          border-radius: 9999px; /* Equivalente a rounded-full */
          margin-right: 8px; /* Equivalente a mr-2 */
          width: 40px; /* Tamaño del logo */
          height: 40px; /* Tamaño del logo */
        }

        .navbar-title {
          font-weight: bold; /* Equivalente a font-bold */
          font-size: 20px; /* Equivalente a text-xl */
          letter-spacing: -0.025em; /* Equivalente a tracking-tight */
        }

        .navbar-links-wrapper {
          display: block;
          width: auto; /* Equivalente a lg:w-auto */
        }

        @media (min-width: 1024px) { /* Equivalente a lg:flex */
          .navbar-links-wrapper {
            display: flex;
            align-items: center;
          }
        }

        .navbar-links {
          font-size: 14px; /* Equivalente a text-sm */
          flex-grow: 1; /* Equivalente a lg:flex-grow */
        }

        @media (min-width: 1024px) { /* Equivalente a lg:flex-grow */
          .navbar-links {
            display: flex;
          }
        }

        .navbar-link {
          display: block;
          margin-top: 16px; /* Equivalente a mt-4 */
          color: #4b5563; /* Equivalente a text-gray-600 */
          margin-right: 16px; /* Equivalente a mr-4 */
          padding: 8px; /* Equivalente a p-2 */
          border-radius: 6px; /* Equivalente a rounded-md */
          transition: background-color 300ms ease-in-out, color 300ms ease-in-out; /* Equivalente a transition duration-300 ease-in-out */
        }

        .navbar-link:hover {
          color: #111827; /* Equivalente a hover:text-gray-900 */
          background-color: #f3f4f6; /* Equivalente a hover:bg-gray-100 */
        }

        @media (min-width: 1024px) { /* Equivalente a lg:inline-block lg:mt-0 */
          .navbar-link {
            display: inline-block;
            margin-top: 0;
          }
        }

        .navbar-cart-widget {
          display: flex;
          align-items: center;
        }
      `}</style>
    </nav>
  );
}
