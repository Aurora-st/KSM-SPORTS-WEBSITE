import React, { useState } from 'react';
import AccessoriesMain from './AccessoriesMain';
import AccessoriesShop from './AccessoriesShop';
import ShoesCollection from './ShoesCollection';
import JerseyCollection from './JerseyCollection';
import ShortsCollection from './ShortsCollection';
import KitsCollection from './KitsCollection';

const AccessoriesSection = () => {
  const [currentPage, setCurrentPage] = useState('main');

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

  return (
    <div className="accessories-section">
      {renderPage()}
    </div>
  );
};

export default AccessoriesSection;