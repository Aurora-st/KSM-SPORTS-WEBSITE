import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Star, Package, Users } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface KitsCollectionProps {
  onNavigate: (page: string) => void;
}

const KitsCollection: React.FC<KitsCollectionProps> = ({ onNavigate }) => {
  const [selectedSport, setSelectedSport] = useState('all');
  const { addItem, openCart } = useCart();

  const sports = [
    { id: 'all', name: 'All Kits', icon: '🏆' },
    { id: 'karate', name: 'Karate', icon: '🥋' },
    { id: 'badminton', name: 'Badminton', icon: '🏸' },
    { id: 'football', name: 'Football', icon: '⚽' },
    { id: 'basketball', name: 'Basketball', icon: '🏀' }
  ];

  const kits = [
    {
      id: 1,
      name: 'Complete Karate Kit',
      sport: 'karate',
      price: '$199',
      originalPrice: '$249',
      rating: 4.9,
      reviews: 89,
      image: '🥋',
      imageUrl: 'https://images.pexels.com/photos/7045717/pexels-photo-7045717.jpeg',
      includes: ['Gi (Uniform)', 'Belt', 'Protective Gear', 'Training Manual'],
      colors: ['#FFFFFF', '#1F2937'],
      level: 'Beginner to Advanced',
      isNew: true,
      popular: true
    },
    {
      id: 2,
      name: 'Pro Badminton Set',
      sport: 'badminton',
      price: '$159',
      originalPrice: '$199',
      rating: 4.8,
      reviews: 156,
      image: '🏸',
      imageUrl: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg',
      includes: ['Racket', 'Shuttlecocks', 'Grip Tape', 'Carrying Bag'],
      colors: ['#3B82F6', '#EF4444', '#10B981'],
      level: 'Intermediate to Pro',
      isNew: false,
      popular: true
    },
    {
      id: 3,
      name: 'Football Team Kit',
      sport: 'football',
      price: '$299',
      originalPrice: '$359',
      rating: 4.7,
      reviews: 234,
      image: '⚽',
      imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      includes: ['Jersey', 'Shorts', 'Socks', 'Shin Guards', 'Ball'],
      colors: ['#DC2626', '#3B82F6', '#10B981', '#F59E0B'],
      level: 'Team Package',
      isNew: true,
      popular: false
    },
    {
      id: 4,
      name: 'Basketball Starter Kit',
      sport: 'basketball',
      price: '$179',
      originalPrice: '$219',
      rating: 4.6,
      reviews: 67,
      image: '🏀',
      imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg',
      includes: ['Jersey', 'Shorts', 'Basketball', 'Wristbands'],
      colors: ['#8B5CF6', '#F59E0B', '#1F2937'],
      level: 'Beginner Friendly',
      isNew: false,
      popular: false
    },
    {
      id: 5,
      name: 'Elite Karate Championship',
      sport: 'karate',
      price: '$349',
      originalPrice: '$429',
      rating: 5.0,
      reviews: 45,
      image: '🏆',
      imageUrl: 'https://images.pexels.com/photos/7045717/pexels-photo-7045717.jpeg',
      includes: ['Premium Gi', 'Competition Belt', 'Protective Set', 'Medal Display'],
      colors: ['#FFFFFF', '#FFD700'],
      level: 'Championship Level',
      isNew: true,
      popular: true
    },
    {
      id: 6,
      name: 'Badminton Club Package',
      sport: 'badminton',
      price: '$249',
      originalPrice: '$299',
      rating: 4.8,
      reviews: 123,
      image: '🎯',
      imageUrl: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg',
      includes: ['2 Rackets', 'Shuttlecocks Set', 'Court Shoes', 'Sports Bag'],
      colors: ['#EC4899', '#06B6D4', '#1F2937'],
      level: 'Club Standard',
      isNew: false,
      popular: true
    }
  ];

  const filteredKits = selectedSport === 'all' 
    ? kits 
    : kits.filter(kit => kit.sport === selectedSport);

  const handleAddToCart = (kit: typeof kits[0]) => {
    addItem({
      id: kit.id.toString(),
      name: kit.name,
      price: kit.price,
      originalPrice: kit.originalPrice,
      image: kit.image,
      imageUrl: kit.imageUrl,
      category: 'kits',
      features: kit.includes
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-yellow-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-bounce"></div>

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
                Complete
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Kits
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Everything you need for Karate, Badminton, Football, and more
              </p>
            </div>
          </div>

          {/* Sport Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedSport === sport.id
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white transform scale-105'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <span className="text-lg">{sport.icon}</span>
                <span>{sport.name}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredKits.map((kit, index) => (
              <div
                key={kit.id}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-4 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
                  {kit.isNew && (
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 text-xs font-bold rounded-full">
                      NEW
                    </div>
                  )}
                  {kit.popular && (
                    <div className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      POPULAR
                    </div>
                  )}
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-600/20 text-yellow-300 text-xs font-bold rounded-full z-10">
                  {kit.level}
                </div>

                {/* Product Image */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <img 
                    src={kit.imageUrl} 
                    alt={kit.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-700/20 group-hover:from-yellow-600/30 group-hover:to-orange-700/30 transition-colors duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="text-center space-y-3">
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < Math.floor(kit.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-300 ml-2">
                      {kit.rating} ({kit.reviews})
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {kit.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-yellow-400">{kit.price}</span>
                    <span className="text-sm text-gray-500 line-through">{kit.originalPrice}</span>
                  </div>

                  {/* Colors */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {kit.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors duration-300 hover:scale-110 transform cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Includes */}
                  <div className="bg-slate-900/50 rounded-xl p-4 mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center justify-center">
                      <Package size={16} className="mr-2" />
                      Kit Includes:
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {kit.includes.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => handleAddToCart(kit)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <ShoppingCart size={16} />
                      <span>Add Kit</span>
                    </button>
                    <button className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
                      <Users size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Kit CTA */}
          <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Kit?
            </h3>
            <p className="text-gray-300 mb-6">
              We can create personalized kits for teams, schools, and organizations
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-full hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <Package size={20} />
              <span>Request Custom Kit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitsCollection;