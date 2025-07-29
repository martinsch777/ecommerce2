import React from 'react';

export function CartWidget() {
  return (
    // Se han reemplazado las clases de Tailwind con nombres de clases CSS estándar
    <div className="cart-widget-container">
      {/* Icono del carrito de compras (usando un SVG inline para mayor flexibilidad) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cart-icon" // Clase CSS para el icono
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {/* Contador de ítems en el carrito */}
      <span className="cart-count">
        3 {/* Este número podría ser dinámico en una aplicación real */}
      </span>

      {/* Estilos CSS estándar para el componente */}
      <style jsx>{`
        .cart-widget-container {
          position: relative;
          padding: 8px; /* Equivalente a p-2 */
          border-radius: 6px; /* Equivalente a rounded-md */
          transition: background-color 300ms ease-in-out; /* Equivalente a transition duration-300 ease-in-out */
          cursor: pointer;
        }

        .cart-widget-container:hover {
          background-color: #f3f4f6; /* Equivalente a hover:bg-gray-100 */
        }

        .cart-icon {
          height: 24px; /* Equivalente a h-6 */
          width: 24px; /* Equivalente a w-6 */
          color: #4b5563; /* Equivalente a text-gray-600 */
        }

        .cart-count {
          position: absolute;
          top: 0;
          right: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding-left: 8px; /* Equivalente a px-2 */
          padding-right: 8px; /* Equivalente a px-2 */
          padding-top: 4px; /* Equivalente a py-1 */
          padding-bottom: 4px; /* Equivalente a py-1 */
          font-size: 12px; /* Equivalente a text-xs */
          font-weight: bold; /* Equivalente a font-bold */
          line-height: 1; /* Equivalente a leading-none */
          color: #fee2e2; /* Equivalente a text-red-100 */
          background-color: #dc2626; /* Equivalente a bg-red-600 */
          border-radius: 9999px; /* Equivalente a rounded-full */
          transform: translate(50%, -50%); /* Equivalente a transform translate-x-1/2 -translate-y-1/2 */
        }
      `}</style>
    </div>
  );
}