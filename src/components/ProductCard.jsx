// src/components/ProductCard.jsx
import React from 'react'
import './ProductCard.css'

const ProductCard = ({ producto, agregar }) => {
  return (
   <div className='div-card'>

<div className="card">
      <span className="precio">${producto.precio}</span>
      <img src="/"alt={producto.nombre} className="img" />
      <button className="button" onClick={() => agregar(producto)}>+</button>
    </div>
   </div>
    
  )
}

export default ProductCard
