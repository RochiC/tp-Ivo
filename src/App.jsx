import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import CartSummary from './components/CartSummary';
import PaymentScreen from './components/PaymentScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import './App.css';

// Datos fijos productos (podés cambiar por imágenes reales en public/assets)
const products = [
  { id: 1, name: 'Coca Cola', price: 500, image: '/assets/coca.png' },
  { id: 2, name: 'Sprite', price: 300, image: '/assets/sprite.png' },
  { id: 3, name: 'Fanta', price: 400, image: '/assets/fanta.png' },
  { id: 4, name: 'Agua', price: 200, image: '/assets/agua.png' },
  { id: 5, name: 'Pepsi', price: 200, image: '/assets/pepsi.png' },
  { id: 6, name: 'Limonada', price: 600, image: '/assets/limonada.png' },
];

function App() {
  const [cart, setCart] = useState([]);
  const [screen, setScreen] = useState('products'); // 'products', 'payment', 'confirmation'

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleComprar = () => {
    setScreen('payment');
  };

  const handlePagar = () => {
    setScreen('confirmation');
    setCart([]); // vaciar carrito después de pagar
  };

  const handleVolver = () => {
    setScreen('products');
  };

  if (screen === 'products') {
    return (
      <div className="app">
        <img src="/refresko.png" alt="Refresko Logo" className="logo" />
        <div className="grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={handleAddToCart}
            />
          ))}
        </div>
        <CartSummary cart={cart} onComprar={handleComprar} />
      </div>
    );
  }

  if (screen === 'payment') {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return (
      <PaymentScreen
        total={total}
        onPagar={handlePagar}
        onVolver={handleVolver}
      />
    );
  }

  if (screen === 'confirmation') {
    return <ConfirmationScreen />;
  }

  return null;
}

export default App;
