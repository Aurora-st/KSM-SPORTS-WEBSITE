import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const AccessoriesShowcase = () => {
  const accessories = [
    {
      id: 1,
      name: 'Pro Performance Shoes',
      category: 'Footwear',
      price: '$149',
      rating: 4.9,
      image: '👟',
      description: 'Advanced grip technology',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 2,
      name: 'Elite Sports Jersey',
      category: 'Apparel',
      price: '$79',
      rating: 4.8,
      image: '👕',
      description: 'Moisture-wicking fabric',
      color: 'from-violet-600 to-purple-700'
    },
    {
      id: 3,
      name: 'Athletic Shorts',
      category: 'Apparel',
      price: '$45',
      rating: 4.7,
      image: '🩳',
      description: 'Flexible fit design',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      id: 4,
      name: 'Badminton Gear Set',
      category: 'Equipment',
      price: '$199',
      rating: 5.0,
      image: '🏸',
      description: 'Professional grade quality',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gear Up with
            <span className="block bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent">
              KSM
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our premium collection of sports accessories designed to enhance your performance and style
          </p>
        </div>

        {/* Accessories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Floating Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
              
              {/* Product Image */}
              <div className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-500`}>
                {item.image}
                <div className="absolute inset-0 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                    />
                  ))}
                  <span className="text-sm text-gray-300 ml-2">{item.rating}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {item.name}
                </h3>
                
                <p className="text-gray-400 text-sm">{item.description}</p>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-yellow-400">{item.price}</span>
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-300 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-transparent to-transparent border border-violet-400/30 text-violet-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:from-violet-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 font-bold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>View All Products</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesShowcase;