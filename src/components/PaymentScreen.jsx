// src/components/PaymentScreen.jsx
import React from 'react'
import './PaymentScreen.css'

const PaymentScreen = ({ total, onPagar, onVolver }) => {
  return (
    <div className="pago">
      <div className="resumen">
        <span>Tu pedido: {Math.random().toString(36).slice(2,10).toUpperCase()}</span>
        <span>Total a pagar: ${total}</span>
      </div>
      <button className="medio">Tarjeta de crédito/débito</button>
      <button className="medio">Mercado Pago</button>
      <div className="botones">
        <button className="pagar" onClick={onPagar}>Pagar ahora</button>
        <button className="volver" onClick={onVolver}>Volver</button>
      </div>
    </div>
  )
}

export default PaymentScreen
