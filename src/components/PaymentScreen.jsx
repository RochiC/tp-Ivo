import React from 'react';
import './PaymentScreen.css';

function PaymentScreen({ total, onPagar, onVolver }) {
  return (
    <div className="payment-screen">
      <img src="/refresko.png" alt="Refresko Logo" className="logo-top-right" />

      <div className="payment-summary">
        <span>Tu pedido: xxxxxxxx</span>
        <span>Total a pagar: ${total}</span>
      </div>

      <button className="payment-method-btn">Tarjeta de crédito/débito</button>
      <button className="payment-method-btn">Mercado Pago</button>

      <div>
        <button className="payment-action-btn" onClick={onPagar}>Pagar ahora</button>
        <button className="payment-action-btn" onClick={onVolver}>Volver</button>
      </div>
    </div>
  );
}

export default PaymentScreen;

