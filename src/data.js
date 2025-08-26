export const products = [
  { id: '1', name: 'Producto A', category: 'ropa',        description: 'Remera de algodón',        price: 1000, img: 'https://placehold.co/200x200' },
  { id: '2', name: 'Producto B', category: 'ropa',        description: 'Pantalón de jean',         price: 2000, img: 'https://placehold.co/200x200' },
  { id: '3', name: 'Producto C', category: 'electronica', description: 'Auriculares bluetooth',     price: 3000, img: 'https://placehold.co/200x200' },
  { id: '4', name: 'Producto D', category: 'hogar',       description: 'Cafetera de filtro',        price: 4000, img: 'https://placehold.co/200x200' }
];

export const getProducts = () =>
  new Promise((resolve) => setTimeout(() => resolve(products), 500));

export const getProductById = (id) =>
  new Promise((resolve) => setTimeout(() => resolve(products.find(p => p.id === id)), 500));

export const getProductsByCategory = (categoryId) =>
  new Promise((resolve) => setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 500));
