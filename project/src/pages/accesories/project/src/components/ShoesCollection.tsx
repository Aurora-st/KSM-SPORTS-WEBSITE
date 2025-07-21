import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Heart, Star, Zap } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface ShoesCollectionProps {
  onNavigate: (page: string) => void;
}

const ShoesCollection: React.FC<ShoesCollectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);
  const { addItem, openCart } = useCart();

  const categories = [
    { id: 'all', name: 'All Shoes', icon: '👟' },
    { id: 'football', name: 'Football', icon: '⚽' },
    { id: 'badminton', name: 'Badminton', icon: '🏸' },
    { id: 'running', name: 'Running', icon: '🏃' }
  ];

  const shoes = [
    {
      id: 1,
      name: 'KSM Pro Football Cleats',
      category: 'football',
      price: '$189',
      originalPrice: '$229',
      rating: 4.9,
      reviews: 156,
      image: '⚽',
      imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      colors: ['#1F2937', '#DC2626', '#FFFFFF'],
      features: ['Advanced Grip', 'Lightweight', 'Waterproof'],
      isNew: true
    },
    {
      id: 2,
      name: 'Elite Badminton Shoes',
      category: 'badminton',
      price: '$149',
      originalPrice: '$179',
      rating: 4.8,
      reviews: 89,
      image: '🏸',
      imageUrl: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
      colors: ['#3B82F6', '#FFFFFF', '#F59E0B'],
      features: ['Non-Slip Sole', 'Breathable', 'Shock Absorption'],
      isNew: false
    },
    {
      id: 3,
      name: 'Ultra Running Shoes',
      category: 'running',
      price: '$159',
      originalPrice: '$199',
      rating: 4.7,
      reviews: 234,
      image: '🏃',
      imageUrl: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg',
      colors: ['#10B981', '#6B7280', '#EF4444'],
      features: ['Energy Return', 'Cushioned', 'Durable'],
      isNew: true
    },
    {
      id: 4,
      name: 'All-Sport Training Shoes',
      category: 'all',
      price: '$129',
      originalPrice: '$159',
      rating: 4.6,
      reviews: 67,
      image: '👟',
      imageUrl: 'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg',
      colors: ['#8B5CF6', '#1F2937', '#F59E0B'],
      features: ['Versatile', 'Comfortable', 'Stylish'],
      isNew: false
    },
    {
      id: 5,
      name: 'Pro Football Boots',
      category: 'football',
      price: '$219',
      originalPrice: '$259',
      rating: 5.0,
      reviews: 45,
      image: '⚽',
      imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      colors: ['#000000', '#FFD700', '#FFFFFF'],
      features: ['Professional Grade', 'Custom Fit', 'Premium Leather'],
      isNew: true
    },
    {
      id: 6,
      name: 'Speed Badminton Pro',
      category: 'badminton',
      price: '$169',
      originalPrice: '$199',
      rating: 4.9,
      reviews: 78,
      image: '🏸',
      imageUrl: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg',
      colors: ['#EC4899', '#FFFFFF', '#1F2937'],
      features: ['Lightning Fast', 'Court Grip', 'Ankle Support'],
      isNew: false
    }
  ];

  const filteredShoes = selectedCategory === 'all' 
    ? shoes 
    : shoes.filter(shoe => shoe.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const handleAddToCart = (shoe: typeof shoes[0]) => {
    // Get current cart from localStorage
    let cart = [];
    if (typeof window !== 'undefined') {
      const cartStr = localStorage.getItem('ksm_cart_accessories');
      if (cartStr) cart = JSON.parse(cartStr);
    }
    // Add new item
    cart.push({
      id: shoe.id.toString(),
      name: shoe.name,
      price: shoe.price,
      imageUrl: shoe.imageUrl,
      category: 'shoes',
      features: shoe.features
    });
    localStorage.setItem('ksm_cart_accessories', JSON.stringify(cart));
    addItem({
      id: shoe.id.toString(),
      name: shoe.name,
      price: shoe.price,
      originalPrice: shoe.originalPrice,
      image: shoe.image,
      imageUrl: shoe.imageUrl,
      category: 'shoes',
      features: shoe.features
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl animate-bounce"></div>

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
                Pro Performance
                <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Shoes
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Advanced grip technology for every sport
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white transform scale-105'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShoes.map((shoe, index) => (
              <div
                key={shoe.id}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-4 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* New Badge */}
                {shoe.isNew && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 text-xs font-bold rounded-full z-10">
                    NEW
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(shoe.id);
                  }}
                  className="absolute top-4 right-4 p-2 bg-slate-900/50 backdrop-blur-sm rounded-full z-10 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <Heart 
                    size={18} 
                    className={`${
                      favorites.includes(shoe.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-400'
                    } transition-colors duration-300`}
                  />
                </button>

                {/* Product Image */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <img 
                    src={shoe.imageUrl} 
                    alt={shoe.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-700/20 group-hover:from-blue-600/30 group-hover:to-violet-700/30 transition-colors duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="text-center space-y-3">
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < Math.floor(shoe.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-300 ml-2">
                      {shoe.rating} ({shoe.reviews})
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {shoe.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-yellow-400">{shoe.price}</span>
                    <span className="text-sm text-gray-500 line-through">{shoe.originalPrice}</span>
                  </div>

                  {/* Colors */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {shoe.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors duration-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {shoe.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => handleAddToCart(shoe)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full hover:from-blue-700 hover:to-violet-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <ShoppingCart size={16} />
                      <span>Add to Cart</span>
                    </button>
                    <button className="px-4 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
                      <Zap size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
              Load More Shoes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesCollection;