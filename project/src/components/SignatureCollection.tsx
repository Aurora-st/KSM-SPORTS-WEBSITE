import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Palette, ShoppingCart } from 'lucide-react';

const SignatureCollection = () => {
  const [currentJersey, setCurrentJersey] = useState(0);
  const [viewMode, setViewMode] = useState('front'); // 'front' or 'back'

  const jerseys = [
    {
      id: 1,
      name: 'KSM Elite Pro',
      price: '$89',
      colors: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B'],
      features: ['Moisture-wicking', 'Lightweight', 'Breathable mesh'],
      front: '👕',
      back: '🔢'
    },
    {
      id: 2,
      name: 'Champions Edition',
      price: '$119',
      colors: ['#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'],
      features: ['Premium fabric', 'Custom fit', 'Anti-odor tech'],
      front: '👕',
      back: '⭐'
    },
    {
      id: 3,
      name: 'Victory Series',
      price: '$95',
      colors: ['#1F2937', '#DC2626', '#059669', '#D97706'],
      features: ['Durable design', 'Comfort stretch', 'Quick-dry'],
      front: '👕',
      back: '🏆'
    }
  ];

  const nextJersey = () => {
    setCurrentJersey((prev) => (prev + 1) % jerseys.length);
  };

  const prevJersey = () => {
    setCurrentJersey((prev) => (prev - 1 + jerseys.length) % jerseys.length);
  };

  const currentItem = jerseys[currentJersey];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent">
              KSM Originals
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our signature collection designed for peak performance and unmatched style
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Jersey Display */}
          <div className="relative">
            {/* Main Jersey Display */}
            <div className="relative w-80 h-96 mx-auto perspective-1000">
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                viewMode === 'back' ? 'rotateY-180' : 'rotateY-0'
              }`}>
                {/* Front View */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl shadow-2xl flex items-center justify-center text-8xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-3xl"></div>
                    <span className="relative z-10">{currentItem.front}</span>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <div className="text-white font-bold text-lg">{currentItem.name}</div>
                    </div>
                  </div>
                </div>

                {/* Back View */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotateY-180">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl shadow-2xl flex items-center justify-center text-8xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-3xl"></div>
                    <span className="relative z-10">{currentItem.back}</span>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <div className="text-white font-bold text-lg">Back Design</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevJersey}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-violet-600/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-violet-600/40 transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextJersey}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-violet-600/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-violet-600/40 transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* View Toggle */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setViewMode('front')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  viewMode === 'front'
                    ? 'bg-violet-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                Front View
              </button>
              <button
                onClick={() => setViewMode('back')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  viewMode === 'back'
                    ? 'bg-violet-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                Back View
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{currentItem.name}</h3>
              <p className="text-4xl font-bold text-yellow-400 mb-6">{currentItem.price}</p>
            </div>

            {/* Color Options */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Palette size={20} className="mr-2" />
                Available Colors
              </h4>
              <div className="flex space-x-3">
                {currentItem.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors duration-300 hover:scale-110 transform"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
              <ul className="space-y-2">
                {currentItem.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 font-bold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              <button className="w-full px-6 py-4 border-2 border-violet-400 text-violet-400 font-bold rounded-full hover:bg-violet-400 hover:text-white transition-all duration-300">
                Customize Jersey
              </button>
            </div>

            {/* Jersey Indicators */}
            <div className="flex justify-center space-x-2">
              {jerseys.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentJersey(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentJersey === index ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;