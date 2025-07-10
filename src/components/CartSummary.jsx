// src/components/CartSummary.jsx
import React from 'react'
import './CartSummary.css'

const CartSummary = ({ total, onComprar }) => {
  return (
    <div className={styles.summary}>
      <h1 className={styles.logo}>REFR5<br />SKO</h1>
      <button className={styles.boton} onClick={onComprar}>COMPRAR 🛒</button>
    </div>
  )
}

export default CartSummary
