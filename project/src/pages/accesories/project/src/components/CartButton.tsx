import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartButton = () => {
  const { state, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="fixed top-6 right-6 z-40 p-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full shadow-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
    >
      <div className="relative">
        <ShoppingCart size={24} />
        {state.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            {state.items.length}
          </span>
        )}
      </div>
    </button>
  );
};

export default CartButton;