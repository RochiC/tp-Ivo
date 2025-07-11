import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <span className="price">${product.price}</span>
      <img src={product.image} alt={product.name} />
      <button className="add-btn" onClick={() => onAdd(product)}>+</button>
    </div>
  );
};

export default ProductCard;
