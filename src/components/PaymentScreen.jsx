// src/components/PaymentScreen.jsx
import React from 'react'
import './PaymentScreen.css'

const PaymentScreen = ({ total, onPagar, onVolver }) => {
  return (
    <div className={styles.pago}>
      <div className={styles.resumen}>
        <span>Tu pedido: {Math.random().toString(36).slice(2,10).toUpperCase()}</span>
        <span>Total a pagar: ${total}</span>
      </div>
      <button className={styles.medio}>Tarjeta de crédito/débito</button>
      <button className={styles.medio}>Mercado Pago</button>
      <div className={styles.botones}>
        <button className={styles.pagar} onClick={onPagar}>Pagar ahora</button>
        <button className={styles.volver} onClick={onVolver}>Volver</button>
      </div>
    </div>
  )
}

export default PaymentScreen
