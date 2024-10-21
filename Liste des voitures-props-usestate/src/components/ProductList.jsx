import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <div className="product-list">
    <h3>Liste des produits</h3>
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
