import React from 'react';
import { ArrowLeft, Star, Zap } from 'lucide-react';

interface AccessoriesShopProps {
  onNavigate: (page: string) => void;
}

const AccessoriesShop: React.FC<AccessoriesShopProps> = ({ onNavigate }) => {
  const categories = [
    {
      id: 'shoes',
      name: 'Pro Performance Shoes',
      description: 'Advanced grip technology for every sport',
      icon: '👟',
      price: 'From $149',
      rating: 4.9,
      color: 'from-blue-600 to-indigo-700',
      hoverColor: 'hover:from-blue-700 hover:to-indigo-800',
      sports: ['Football', 'Badminton', 'Running']
    },
    {
      id: 'jerseys',
      name: 'Elite Sports Jerseys',
      description: 'Premium moisture-wicking fabric',
      icon: '👕',
      price: 'From $79',
      rating: 4.8,
      color: 'from-violet-600 to-purple-700',
      hoverColor: 'hover:from-violet-700 hover:to-purple-800',
      sports: ['Custom Design', 'Team Colors', 'Pro Fit']
    },
    {
      id: 'shorts',
      name: 'Athletic Shorts',
      description: 'Flexible fit for maximum performance',
      icon: '🩳',
      price: 'From $45',
      rating: 4.7,
      color: 'from-emerald-600 to-teal-700',
      hoverColor: 'hover:from-emerald-700 hover:to-teal-800',
      sports: ['Training', 'Competition', 'Casual']
    },
    {
      id: 'kits',
      name: 'Complete Kits',
      description: 'Everything you need for your sport',
      icon: '🥋',
      price: 'From $199',
      rating: 5.0,
      color: 'from-yellow-500 to-orange-600',
      hoverColor: 'hover:from-yellow-600 hover:to-orange-700',
      sports: ['Karate', 'Badminton', 'Football']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-bounce"></div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-16">
            <button
              onClick={() => onNavigate('main')}
              className="mr-6 p-3 bg-slate-800/50 backdrop-blur-sm text-white rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft size={24} />
            </button>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Accessories
                <span className="block bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent">
                  Collection
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Premium sports gear designed for champions
              </p>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                onClick={() => onNavigate(category.id)}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-6 hover:rotate-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Floating Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`}></div>

                {/* Premium Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 text-xs font-bold rounded-full">
                  PREMIUM
                </div>

                <div className="relative z-10">
                  {/* Product Icon */}
                  <div className={`relative w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                    {category.icon}
                    <div className="absolute inset-0 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors duration-300"></div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < Math.floor(category.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-300 ml-2">{category.rating}</span>
                  </div>

                  {/* Product Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm">{category.description}</p>
                    
                    <div className="text-2xl font-bold text-yellow-400 mb-4">{category.price}</div>

                    {/* Sports Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {category.sports.map((sport, i) => (
                        <span key={i} className="px-2 py-1 bg-violet-600/20 text-violet-300 rounded-full text-xs">
                          {sport}
                        </span>
                      ))}
                    </div>

                    {/* Hover Button */}
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-transparent to-transparent border border-violet-400/30 text-violet-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:from-violet-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 flex items-center justify-center space-x-2">
                      <Zap size={16} />
                      <span>Explore Collection</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30">
              <h3 className="text-3xl font-bold text-white mb-4">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-gray-300 mb-6">
                Contact our team for custom orders and personalized gear
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Custom Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesShop;