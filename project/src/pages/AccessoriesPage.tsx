import React from 'react';
import AccessoriesSection from './accesories/project/src/components/AccessoriesSection';
import { CartProvider } from './accesories/project/src/contexts/CartContext';

const AccessoriesPage: React.FC = () => {
  return (
    <CartProvider>
      <AccessoriesSection />
    </CartProvider>
  );
};

export default AccessoriesPage; 