import React from 'react';

export function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h2 className="greeting-title">
        {greeting}
      </h2>
      <p className="description-text">
        Aquí es donde se mostrará el catálogo de productos. ¡Pronto verás nuestros increíbles artículos!
      </p>
      <div className="product-grid">
        <div className="product-card">
          <img src="https://placehold.co/100x100/E5E7EB/4B5563?text=Producto+1" alt="Producto 1" className="product-image" />
          <p className="product-title">Producto de Ejemplo 1</p>
        </div>
        <div className="product-card">
          <img src="https://placehold.co/100x100/E5E7EB/4B5563?text=Producto+2" alt="Producto 2" className="product-image" />
          <p className="product-title">Producto de Ejemplo 2</p>
        </div>
        <div className="product-card">
          <img src="https://placehold.co/100x100/E5E7EB/4B5563?text=Producto+3" alt="Producto 3" className="product-image" />
          <p className="product-title">Producto de Ejemplo 3</p>
        </div>
      </div>

      {/* Estilos CSS estándar para el componente */}
      <style jsx>{`
        .item-list-container {
          max-width: 960px; /* Equivalente a container mx-auto */
          margin-left: auto;
          margin-right: auto;
          padding: 24px; /* Equivalente a p-6 */
          background-color: white; /* Equivalente a bg-white */
          border-radius: 8px; /* Equivalente a rounded-lg */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Equivalente a shadow-lg */
          margin-top: 32px; /* Equivalente a mt-8 */
        }

        .greeting-title {
          font-size: 30px; /* Equivalente a text-3xl */
          font-weight: bold; /* Equivalente a font-bold */
          color: #1f2937; /* Equivalente a text-gray-800 */
          margin-bottom: 16px; /* Equivalente a mb-4 */
          text-align: center; /* Equivalente a text-center */
        }

        .description-text {
          color: #4b5563; /* Equivalente a text-gray-600 */
          font-size: 18px; /* Equivalente a text-lg */
          text-align: center; /* Equivalente a text-center */
        }

        .product-grid {
          display: grid;
          grid-template-columns: 1fr; /* Por defecto, una columna */
          gap: 24px; /* Equivalente a gap-6 */
          margin-top: 32px; /* Equivalente a mt-8 */
        }

        @media (min-width: 768px) { /* Equivalente a md:grid-cols-2 */
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) { /* Equivalente a lg:grid-cols-3 */
          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .product-card {
          background-color: #f9fafb; /* Equivalente a bg-gray-50 */
          padding: 16px; /* Equivalente a p-4 */
          border-radius: 8px; /* Equivalente a rounded-lg */
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* Equivalente a shadow-md */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 192px; /* Equivalente a h-48 */
        }

        .product-image {
          margin-bottom: 8px; /* Equivalente a mb-2 */
          border-radius: 6px; /* Equivalente a rounded-md */
        }

        .product-title {
          font-weight: 600; /* Equivalente a font-semibold */
          color: #374151; /* Equivalente a text-gray-700 */
        }
      `}</style>
    </div>
  );
}
