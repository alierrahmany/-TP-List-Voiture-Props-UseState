import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.img} alt={product.name} />
    <h4>{product.name}</h4>
    <p>{product.price}</p>
    <button>ajouter</button>
  </div>
);

export default ProductCard;
