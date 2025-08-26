import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './data.js'; // o './data'
import { ItemDetail } from './ItemDetail';

export function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchOne = async () => {
      const res = await getProductById(itemId);
      setProduct(res || null);
    };
    fetchOne();
  }, [itemId]);

  if (!product) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando producto...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <ItemDetail product={product} />
    </div>
  );
}
