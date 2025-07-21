import React, { useState, useEffect } from 'react';
import { ShoppingCart, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const products = [
    { name: 'KSM Pro Shoes', type: 'footwear' },
    { name: 'Elite Jersey', type: 'apparel' },
    { name: 'Performance Shorts', type: 'apparel' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-violet-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-bounce"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Your Game
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-violet-400 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
                Elevate your performance with KSM's premium sports accessories and apparel. 
                Built for champions, designed for excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <ShoppingCart size={20} />
                <span>Shop Now</span>
              </button>
              <button className="px-8 py-4 border-2 border-violet-400 text-violet-400 font-bold rounded-full hover:bg-violet-400 hover:text-white transition-all duration-300 flex items-center space-x-2">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* 3D Product Showcase */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Rotating Product Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 perspective-1000">
                  <div className={`absolute inset-0 transition-transform duration-1000 transform-gpu ${
                    currentProduct === 0 ? 'rotateY-0' : 'rotateY-180'
                  }`}>
                    <div className="w-full h-full bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">👟</div>
                        <h3 className="font-bold text-xl">KSM Pro</h3>
                        <p className="text-violet-200">Shoes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 transition-transform duration-1000 transform-gpu ${
                    currentProduct === 1 ? 'rotateY-0' : 'rotateY-180'
                  }`}>
                    <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">👕</div>
                        <h3 className="font-bold text-xl">Elite</h3>
                        <p className="text-yellow-200">Jersey</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Indicators */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProduct(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentProduct === index ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;