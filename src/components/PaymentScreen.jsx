import React from 'react';
import './PaymentScreen.css';

const PaymentScreen = ({ total, onPagar, onVolver }) => {
  return (
    <div className="payment-screen">
      <div className="summary">
        <p>Tu pedido: xxxxxxxx</p>
        <p>Total a pagar: ${total}</p>
      </div>
      <button className="payment-method">Tarjeta de crédito/débito</button>
      <button className="payment-method">Mercado Pago</button>
      <div className="actions">
        <button className="pay-btn" onClick={onPagar}>Pagar ahora</button>
        <button className="back-btn" onClick={onVolver}>Volver</button>
      </div>
    </div>
  );
};

export default PaymentScreen;
