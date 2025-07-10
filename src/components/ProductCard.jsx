// src/components/ProductCard.jsx
import React from 'react'
import './ProductCard.css'

const ProductCard = ({ producto, agregar }) => {
  return (
    <div className={styles.card}>
      <span className={styles.precio}>${producto.precio}</span>
      <img src={`/assets/${producto.imagen}`} alt={producto.nombre} className={styles.img} />
      <button className={styles.boton} onClick={() => agregar(producto)}>+</button>
    </div>
  )
}

export default ProductCard
