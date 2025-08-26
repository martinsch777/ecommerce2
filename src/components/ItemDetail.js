import React, { useState } from 'react';

export function ItemDetail({ product }) {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    // acá luego integrarás el carrito real
    alert(`Agregado al carrito: ${count} unidad(es) de ${product.name}`);
  };

  return (
    <div className="item-detail-card">
      <img src={product.img} alt={product.name} className="item-detail-img" />
      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <strong>${product.price}</strong>

        <div className="item-detail-actions">
          <button onClick={() => setCount(prev => Math.max(1, prev - 1))}>-</button>
          <span className="qty">{count}</span>
          <button onClick={() => setCount(prev => prev + 1)}>+</button>
          <button className="add" onClick={handleAdd}>Agregar al carrito</button>
        </div>
      </div>

      <style jsx>{`
        .item-detail-card {
          max-width: 960px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          padding: 24px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .item-detail-img { width: 220px; height: 220px; object-fit: cover; border-radius: 8px; }
        .item-detail-info h2 { margin: 0 0 8px; }
        .item-detail-info p { margin: 0 0 8px; color: #374151; }
        .item-detail-info strong { font-size: 1.25rem; }
        .item-detail-actions { display: flex; align-items: center; gap: 8px; margin-top: 16px; }
        .qty { min-width: 32px; text-align: center; font-weight: 600; }
        button { padding: 6px 12px; border-radius: 6px; border: none; cursor: pointer; }
        .add { background: #ef4444; color: white; margin-left: 8px; }
        .add:hover { background: #dc2626; }
      `}</style>
    </div>
  );
}
