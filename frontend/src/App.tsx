import React from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Cart from './components/Cart/Cart';
import styles from './App.module.css';

function App() {
  return (
    <CartProvider>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Hero />
          <ProductGrid />
        </main>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;