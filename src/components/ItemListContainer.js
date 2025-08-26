import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../data.js';;

export function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // cada vez que cambia la categoría, traemos lo correspondiente
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
      setItems(res);
      setLoading(false);
    };
    fetchData();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2 className="greeting-title">{greeting}</h2>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Cargando productos...</p>
      ) : (
        <div className="product-grid">
          {items.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.name} className="product-image" />
              <p className="product-title">{item.name}</p>
              <Link to={`/item/${item.id}`} className="product-link">Ver detalle</Link>
            </div>
          ))}
        </div>
      )}

      {/* Estilos inline existentes */}
      <style jsx>{`
        .item-list-container {
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
          padding: 24px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          margin-top: 32px;
        }
        .greeting-title {
          font-size: 30px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 16px;
          text-align: center;
        }
        .product-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 32px;
        }
        @media (min-width: 768px) {
          .product-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .product-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .product-card {
          background-color: #f9fafb;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 220px;
        }
        .product-image { margin-bottom: 8px; border-radius: 6px; }
        .product-title { font-weight: 600; color: #374151; margin-bottom: 8px; }
        .product-link { padding: 6px 12px; border-radius: 6px; background: #ef4444; color: white; }
        .product-link:hover { background: #dc2626; }
      `}</style>
    </div>
  );
}
