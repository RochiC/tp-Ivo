// src/components/ProductCard.jsx
import React from 'react'
import './ProductCard.css'

const ProductCard = ({ producto, agregar }) => {
  return (
    <div className="card">
      <span className="precio">${producto.precio}</span>
      <img src="/"alt={producto.nombre} className="img" />
      <button className="button" onClick={() => agregar(producto)}>+</button>
    </div>
  )
}

export default ProductCard
