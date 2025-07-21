import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';

interface AccessoriesMainProps {
  onNavigate: (page: string) => void;
}

const AccessoriesMain: React.FC<AccessoriesMainProps> = ({ onNavigate }) => {
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const heroProducts = [
    { name: 'Pro Shoes', icon: '👟', color: 'from-blue-600 to-indigo-700' },
    { name: 'Elite Jersey', icon: '👕', color: 'from-violet-600 to-purple-700' },
    { name: 'Athletic Shorts', icon: '🩳', color: 'from-emerald-600 to-teal-700' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % heroProducts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-bounce"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Title */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="text-yellow-400 mr-4" size={32} />
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                Gear Up
              </h1>
              <Sparkles className="text-violet-400 ml-4" size={32} />
            </div>
            
            <div className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent">
                with KSM
              </span>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-300 font-medium">
              <span className="text-yellow-400">Discover</span>
              <span className="text-violet-400">•</span>
              <span className="text-white">Elevate</span>
              <span className="text-violet-400">•</span>
              <span className="text-yellow-400">Your Game</span>
            </div>
          </div>

          {/* 3D Product Showcase */}
          <div className="mb-16">
            <div className="relative w-80 h-80 mx-auto perspective-1000">
              {heroProducts.map((product, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    currentProduct === index 
                      ? 'opacity-100 scale-100 rotateY-0' 
                      : 'opacity-0 scale-75 rotateY-180'
                  }`}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${product.color} rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500 animate-float`}>
                    <div className="text-center text-white">
                      <div className="text-8xl mb-4 animate-bounce">{product.icon}</div>
                      <h3 className="font-bold text-2xl">{product.name}</h3>
                      <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {heroProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentProduct === index ? 'bg-yellow-400 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Shop Now Button */}
          <button
            onClick={() => onNavigate('shop')}
            className="group px-12 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 font-bold text-xl rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 flex items-center space-x-3 mx-auto shadow-2xl"
          >
            <ShoppingBag size={24} />
            <span>Shop Now</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 text-6xl opacity-20 animate-spin">⚽</div>
          <div className="absolute top-1/3 right-10 text-5xl opacity-20 animate-bounce">🏸</div>
          <div className="absolute bottom-1/4 left-20 text-4xl opacity-20 animate-pulse">🏆</div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesMain;