import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Palette, Star, Zap } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface JerseyCollectionProps {
  onNavigate: (page: string) => void;
}

const JerseyCollection: React.FC<JerseyCollectionProps> = ({ onNavigate }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedJersey, setSelectedJersey] = useState<number | null>(null);
  const { addItem, openCart } = useCart();

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const jerseys = [
    {
      id: 1,
      name: 'KSM Elite Pro Jersey',
      price: '$89',
      originalPrice: '$119',
      rating: 4.9,
      reviews: 234,
      image: '👕',
      imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg',
      colors: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B'],
      features: ['Moisture-wicking', 'Lightweight', 'Breathable mesh'],
      customizable: true,
      isNew: true
    },
    {
      id: 2,
      name: 'Champions Edition',
      price: '$119',
      originalPrice: '$149',
      rating: 4.8,
      reviews: 156,
      image: '⭐',
      imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg',
      colors: ['#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'],
      features: ['Premium fabric', 'Custom fit', 'Anti-odor tech'],
      customizable: true,
      isNew: false
    },
    {
      id: 3,
      name: 'Victory Series',
      price: '$95',
      originalPrice: '$125',
      rating: 4.7,
      reviews: 89,
      image: '🏆',
      imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg',
      colors: ['#1F2937', '#DC2626', '#059669', '#D97706'],
      features: ['Durable design', 'Comfort stretch', 'Quick-dry'],
      customizable: false,
      isNew: true
    },
    {
      id: 4,
      name: 'Team Spirit Jersey',
      price: '$79',
      originalPrice: '$99',
      rating: 4.6,
      reviews: 67,
      image: '🔥',
      imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg',
      colors: ['#7C3AED', '#F59E0B', '#EF4444', '#10B981'],
      features: ['Team colors', 'Comfortable fit', 'Easy care'],
      customizable: true,
      isNew: false
    },
    {
      id: 5,
      name: 'Limited Edition KSM',
      price: '$149',
      originalPrice: '$199',
      rating: 5.0,
      reviews: 45,
      image: '💎',
      imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg',
      colors: ['#000000', '#FFD700', '#FFFFFF', '#8B5CF6'],
      features: ['Limited edition', 'Premium quality', 'Collector item'],
      customizable: false,
      isNew: true
    },
    {
      id: 6,
      name: 'Classic Sports Jersey',
      price: '$69',
      originalPrice: '$89',
      rating: 4.5,
      reviews: 123,
      image: '🎯',
      imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg',
      colors: ['#3B82F6', '#1F2937', '#FFFFFF', '#EF4444'],
      features: ['Classic design', 'Affordable', 'Versatile'],
      customizable: true,
      isNew: false
    }
  ];

  const handleAddToCart = (jersey: typeof jerseys[0]) => {
    let cart = [];
    if (typeof window !== 'undefined') {
      const cartStr = localStorage.getItem('ksm_cart_accessories');
      if (cartStr) cart = JSON.parse(cartStr);
    }
    cart.push({
      id: jersey.id.toString(),
      name: jersey.name,
      price: jersey.price,
      imageUrl: jersey.imageUrl,
      category: 'jerseys',
      features: jersey.features
    });
    localStorage.setItem('ksm_cart_accessories', JSON.stringify(cart));
    addItem({
      id: jersey.id.toString(),
      name: jersey.name,
      price: jersey.price,
      originalPrice: jersey.originalPrice,
      image: jersey.image,
      imageUrl: jersey.imageUrl,
      category: 'jerseys',
      features: jersey.features
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-bounce"></div>

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
                Elite Sports
                <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Jerseys
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Premium moisture-wicking fabric with KSM design options
              </p>
            </div>
          </div>

          {/* Size Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4">
              <h3 className="text-white font-semibold mb-4 text-center">Select Size</h3>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full font-semibold transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white transform scale-110'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
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
            {jerseys.map((jersey, index) => (
              <div
                key={jersey.id}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-4 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedJersey(selectedJersey === jersey.id ? null : jersey.id)}
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
                  {jersey.isNew && (
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 text-xs font-bold rounded-full">
                      NEW
                    </div>
                  )}
                  {jersey.customizable && (
                    <div className="px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold rounded-full flex items-center space-x-1">
                      <Palette size={12} />
                      <span>CUSTOM</span>
                    </div>
                  )}
                </div>

                {/* Product Image */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <img 
                    src={jersey.imageUrl} 
                    alt={jersey.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-700/20 group-hover:from-violet-600/30 group-hover:to-purple-700/30 transition-colors duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="text-center space-y-3">
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < Math.floor(jersey.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-300 ml-2">
                      {jersey.rating} ({jersey.reviews})
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                    {jersey.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-yellow-400">{jersey.price}</span>
                    <span className="text-sm text-gray-500 line-through">{jersey.originalPrice}</span>
                  </div>

                  {/* Colors */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {jersey.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors duration-300 hover:scale-110 transform cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {jersey.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-violet-600/20 text-violet-300 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  {selectedJersey === jersey.id && (
                    <div className="mt-4 p-4 bg-slate-900/50 rounded-xl space-y-3 animate-fadeIn">
                      <div className="text-sm text-gray-300">
                        <p><strong>Size:</strong> {selectedSize}</p>
                        <p><strong>Material:</strong> Premium polyester blend</p>
                        <p><strong>Care:</strong> Machine washable</p>
                      </div>
                      
                      {jersey.customizable && (
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2">
                          <Palette size={16} />
                          <span>Customize Jersey</span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => handleAddToCart(jersey)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <ShoppingCart size={16} />
                      <span>Add to Cart</span>
                    </button>
                    <button className="px-4 py-2 border border-violet-400 text-violet-400 rounded-full hover:bg-violet-400 hover:text-white transition-all duration-300">
                      <Zap size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Jersey CTA */}
          <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Design Your Own Jersey
            </h3>
            <p className="text-gray-300 mb-6">
              Create a unique jersey with your team colors, logo, and player names
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <Palette size={20} />
              <span>Start Customizing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JerseyCollection;