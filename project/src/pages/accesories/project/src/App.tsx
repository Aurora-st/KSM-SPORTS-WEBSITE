import React from 'react';
import AccessoriesSection from './components/AccessoriesSection';
import { CartProvider } from './contexts/CartContext';
import ShoppingCart from './components/ShoppingCart';
import CartButton from './components/CartButton';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-900">
        <AccessoriesSection />
        <CartButton />
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;