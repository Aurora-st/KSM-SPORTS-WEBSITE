import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Star, Zap, Ruler } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface ShortsCollectionProps {
  onNavigate: (page: string) => void;
}

const ShortsCollection: React.FC<ShortsCollectionProps> = ({ onNavigate }) => {
  const [selectedLength, setSelectedLength] = useState('regular');
  const [selectedFit, setSelectedFit] = useState('regular');
  const [selectedSize, setSelectedSize] = useState('M');
  const { addItem, openCart } = useCart();

  const lengths = [
    { id: 'short', name: 'Short', icon: '🩳' },
    { id: 'regular', name: 'Regular', icon: '👖' },
    { id: 'long', name: 'Long', icon: '🦵' }
  ];

  const fits = [
    { id: 'slim', name: 'Slim Fit' },
    { id: 'regular', name: 'Regular Fit' },
    { id: 'loose', name: 'Loose Fit' }
  ];

  const shorts = [
    {
      id: 1,
      name: 'KSM Training Shorts',
      price: '$45',
      originalPrice: '$59',
      rating: 4.8,
      reviews: 189,
      image: '🩳',
      imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      colors: ['#1F2937', '#3B82F6', '#10B981', '#EF4444'],
      features: ['Quick-dry', 'Elastic waist', 'Side pockets'],
      category: 'training',
      isNew: true
    },
    {
      id: 2,
      name: 'Competition Pro Shorts',
      price: '$65',
      originalPrice: '$85',
      rating: 4.9,
      reviews: 156,
      image: '🏃',
      imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      colors: ['#8B5CF6', '#F59E0B', '#FFFFFF', '#1F2937'],
      features: ['Compression fit', 'Moisture-wicking', 'Lightweight'],
      category: 'competition',
      isNew: false
    },
    {
      id: 3,
      name: 'Casual Sport Shorts',
      price: '$35',
      originalPrice: '$45',
      rating: 4.6,
      reviews: 234,
      image: '👕',
      imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      colors: ['#6B7280', '#10B981', '#F59E0B', '#EF4444'],
      features: ['Comfortable', 'Versatile', 'Everyday wear'],
      category: 'casual',
      isNew: true
    },
    {
      id: 4,
      name: 'Basketball Shorts',
      price: '$55',
      originalPrice: '$69',
      rating: 4.7,
      reviews: 98,
      image: '🏀',
      imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      colors: ['#DC2626', '#1F2937', '#FFFFFF', '#F59E0B'],
      features: ['Loose fit', 'Breathable mesh', 'Team style'],
      category: 'basketball',
      isNew: false
    },
    {
      id: 5,
      name: 'Running Performance',
      price: '$49',
      originalPrice: '$65',
      rating: 4.8,
      reviews: 167,
      image: '💨',
      imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      colors: ['#3B82F6', '#10B981', '#1F2937', '#8B5CF6'],
      features: ['Reflective strips', 'Inner brief', 'Chafe-free'],
      category: 'running',
      isNew: true
    },
    {
      id: 6,
      name: 'Gym Workout Shorts',
      price: '$39',
      originalPrice: '$49',
      rating: 4.5,
      reviews: 145,
      image: '💪',
      imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      colors: ['#1F2937', '#EF4444', '#F59E0B', '#10B981'],
      features: ['Stretch fabric', 'Sweat-resistant', 'Flexible'],
      category: 'gym',
      isNew: false
    }
  ];

  const handleAddToCart = (short: typeof shorts[0]) => {
    let cart = [];
    if (typeof window !== 'undefined') {
      const cartStr = localStorage.getItem('ksm_cart_accessories');
      if (cartStr) cart = JSON.parse(cartStr);
    }
    cart.push({
      id: short.id.toString(),
      name: short.name,
      price: short.price,
      imageUrl: short.imageUrl,
      category: 'shorts',
      features: short.features
    });
    localStorage.setItem('ksm_cart_accessories', JSON.stringify(cart));
    addItem({
      id: short.id.toString(),
      name: short.name,
      price: short.price,
      originalPrice: short.originalPrice,
      image: short.image,
      imageUrl: short.imageUrl,
      category: 'shorts',
      features: short.features
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-bounce"></div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-12">
            <button
              onClick={() => onNavigate('shop')}
              className="mr-6 p-3 bg-slate-800/50 backdrop-blur-sm text-white rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft size={24} />
            </button>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Athletic
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Shorts
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Flexible fit design for maximum performance
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Length Selector */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Ruler className="mr-2" size={20} />
                Length
              </h3>
              <div className="flex space-x-3">
                {lengths.map((length) => (
                  <button
                    key={length.id}
                    onClick={() => setSelectedLength(length.id)}
                    className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      selectedLength === length.id
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white transform scale-105'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{length.icon}</span>
                    <span>{length.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fit Selector */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Fit Style</h3>
              <div className="flex space-x-3">
                {fits.map((fit) => (
                  <button
                    key={fit.id}
                    onClick={() => setSelectedFit(fit.id)}
                    className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedFit === fit.id
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white transform scale-105'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {fit.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      selectedSize === size
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-emerald-600 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shorts.map((short, index) => (
              <div
                key={short.id}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-4 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* New Badge */}
                {short.isNew && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 text-xs font-bold rounded-full z-10">
                    NEW
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-600/20 text-emerald-300 text-xs font-bold rounded-full capitalize z-10">
                  {short.category}
                </div>

                {/* Product Image */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <img 
                    src={short.imageUrl} 
                    alt={short.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-700/20 group-hover:from-emerald-600/30 group-hover:to-teal-700/30 transition-colors duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="text-center space-y-3">
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < Math.floor(short.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-300 ml-2">
                      {short.rating} ({short.reviews})
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {short.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-yellow-400">{short.price}</span>
                    <span className="text-sm text-gray-500 line-through">{short.originalPrice}</span>
                  </div>

                  {/* Colors */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {short.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors duration-300 hover:scale-110 transform cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {short.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Size Info */}
                  <div className="text-sm text-gray-400 mb-4">
                    <p>Length: <span className="text-emerald-400 capitalize">{selectedLength}</span></p>
                    <p>Fit: <span className="text-emerald-400">{selectedFit.replace('_', ' ')}</span></p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => handleAddToCart(short)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <ShoppingCart size={16} />
                      <span>Add to Cart</span>
                    </button>
                    <button className="px-4 py-2 border border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300">
                      <Zap size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Size Guide CTA */}
          <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Help with Sizing?
            </h3>
            <p className="text-gray-300 mb-6">
              Check our comprehensive size guide to find your perfect fit
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <Ruler size={20} />
              <span>View Size Guide</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortsCollection;