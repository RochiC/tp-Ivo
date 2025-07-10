// src/App.jsx

import React, { useState } from 'react'
import ProductCard from './components/ProductCard'
import CartSummary from './components/CartSummary'
import PaymentScreen from './components/PaymentScreen'
import ConfirmationScreen from './components/ConfirmationScreen'

const styles = {
  app: '',
  grid: ''
}


const productos = [
  { id: 1, nombre: 'Coca-Cola', precio: 200, imagen: 'coca.png' },
  { id: 2, nombre: 'Sprite', precio: 200, imagen: 'sprite.png' },
  { id: 3, nombre: 'Fanta', precio: 200, imagen: 'fanta.png' },
  { id: 4, nombre: 'Agua', precio: 200, imagen: 'agua.png' },
  { id: 5, nombre: 'Pepsi', precio: 200, imagen: 'pepsi.png' },
  { id: 6, nombre: 'Citrus', precio: 200, imagen: 'citrus.png' }
]

function App() {
  const [carrito, setCarrito] = useState([])
  const [pantalla, setPantalla] = useState('productos') // productos | pago | confirmado

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0)

  return (
    <div className={styles.app}>
      {pantalla === 'productos' && (
        <>
          <div className={styles.grid}>
            {productos.map(prod => (
              <ProductCard key={prod.id} producto={prod} agregar={agregarAlCarrito} />
            ))}
          </div>
          <CartSummary total={total} onComprar={() => setPantalla('pago')} />
        </>
      )}
      {pantalla === 'pago' && (
        <PaymentScreen total={total} onPagar={() => setPantalla('confirmado')} onVolver={() => setPantalla('productos')} />
      )}
      {pantalla === 'confirmado' && (
        <ConfirmationScreen />
      )}
    </div>
  )
}

export default App

