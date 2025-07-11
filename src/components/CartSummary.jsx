// src/components/CartSummary.jsx
import React from 'react';
import './CartSummary.css';

const CartSummary = ({ cart, onComprar }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <div className="total">Total: ${total}</div>
      <button className="buy-btn" onClick={onComprar}>COMPRAR</button>
    </div>
  );
};

export default CartSummary;

