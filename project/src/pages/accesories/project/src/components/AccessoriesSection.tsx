import React, { useState } from 'react';
import AccessoriesMain from './AccessoriesMain';
import AccessoriesShop from './AccessoriesShop';
import ShoesCollection from './ShoesCollection';
import JerseyCollection from './JerseyCollection';
import ShortsCollection from './ShortsCollection';
import KitsCollection from './KitsCollection';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import ShoppingCart from './ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const AccessoriesSection = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [cartCount, setCartCount] = useState(() => {
    if (typeof window !== 'undefined') {
      const cartStr = localStorage.getItem('ksm_cart_accessories');
      if (cartStr) return JSON.parse(cartStr).length;
    }
    return 0;
  });
  const [selectedProgram, setSelectedProgram] = useState(() => {
    if (typeof window !== 'undefined') {
      const progStr = localStorage.getItem('ksm_selected_program');
      if (progStr) return JSON.parse(progStr);
    }
    return null;
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { rehydrateCartFromStorage } = useCart();

  React.useEffect(() => {
    const updateCartCount = () => {
      const cartStr = localStorage.getItem('ksm_cart_accessories');
      setCartCount(cartStr ? JSON.parse(cartStr).length : 0);
    };
    window.addEventListener('storage', updateCartCount);
    const interval = setInterval(updateCartCount, 500);
    return () => {
      window.removeEventListener('storage', updateCartCount);
      clearInterval(interval);
    };
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <AccessoriesMain onNavigate={handleNavigate} />;
      case 'shop':
        return <AccessoriesShop onNavigate={handleNavigate} />;
      case 'shoes':
        return <ShoesCollection onNavigate={handleNavigate} />;
      case 'jerseys':
        return <JerseyCollection onNavigate={handleNavigate} />;
      case 'shorts':
        return <ShortsCollection onNavigate={handleNavigate} />;
      case 'kits':
        return <KitsCollection onNavigate={handleNavigate} />;
      default:
        return <AccessoriesMain onNavigate={handleNavigate} />;
    }
  };

  // Floating cart button
  const openCart = () => {
    rehydrateCartFromStorage();
    setIsCartOpen(true);
  };

  React.useEffect(() => {
    const handler = () => setCartCount((localStorage.getItem('ksm_cart_accessories') && JSON.parse(localStorage.getItem('ksm_cart_accessories')! ).length) || 0);
    window.addEventListener('cart-updated', handler);
    return () => window.removeEventListener('cart-updated', handler);
  }, []);

  return (
    <div className="accessories-section">
      {/* Back to Programs Button */}
      <div className="flex items-center justify-between mb-6 px-4 pt-6">
        <button
          onClick={() => navigate('/programs')}
          className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
        >
          &larr; Back to Programs
        </button>
        {selectedProgram && (
          <div className="flex items-center gap-4 bg-white rounded-xl px-4 py-2 shadow border border-gray-100">
            <span className="text-3xl">{selectedProgram.emoji}</span>
            <div>
              <div className="font-bold text-gray-900">{selectedProgram.name}</div>
              <div className="text-sm text-gray-600">{selectedProgram.duration} • {selectedProgram.price}</div>
            </div>
          </div>
        )}
      </div>
      {/* Floating Cart Icon */}
      <button
        onClick={openCart}
        className="fixed top-6 right-6 z-50 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center hover:scale-110 transition-transform"
        style={{ minWidth: 56, minHeight: 56 }}
        aria-label="Open Cart"
      >
        <ShoppingCartIcon className="w-7 h-7" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full px-2 py-0.5">
            {cartCount}
          </span>
        )}
      </button>
      {/* Cart modal is a sibling, not a child of the button */}
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {renderPage()}
    </div>
  );
};

export default AccessoriesSection;