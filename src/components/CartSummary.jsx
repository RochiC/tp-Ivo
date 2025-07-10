// src/components/CartSummary.jsx
import React from 'react'
import './CartSummary.css'

const CartSummary = ({ total, onComprar }) => {
  return (
    <div className="summary">
      <h1 className="logo">REFR5<br />SKO</h1>
      <button className="boton" onClick={onComprar}>COMPRAR 🛒</button>
    </div>
  )
}

export default CartSummary
