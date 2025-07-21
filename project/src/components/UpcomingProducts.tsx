import React from 'react';
import { Clock, Bell, ArrowRight } from 'lucide-react';

const UpcomingProducts = () => {
  const upcomingItems = [
    {
      id: 1,
      name: 'KSM Tech Runner 2025',
      category: 'Footwear',
      releaseDate: 'Q2 2025',
      description: 'Revolutionary smart running shoes with built-in performance tracking',
      teaser: '👟',
      bgColor: 'from-blue-600/20 to-cyan-600/20'
    },
    {
      id: 2,
      name: 'Pro Athlete Collection',
      category: 'Apparel',
      releaseDate: 'March 2025',
      description: 'Limited edition jerseys worn by professional athletes',
      teaser: '👕',
      bgColor: 'from-violet-600/20 to-purple-600/20'
    },
    {
      id: 3,
      name: 'Smart Gear Series',
      category: 'Equipment',
      releaseDate: 'Q3 2025',
      description: 'Next-generation sports equipment with AI-powered performance insights',
      teaser: '🏸',
      bgColor: 'from-emerald-600/20 to-teal-600/20'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl animate-spin"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Clock className="text-yellow-400 mr-3" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Next-Gen
              <span className="block bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent">
                Gear
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a sneak peek at our upcoming revolutionary products. Be the first to experience the future of sports.
          </p>
        </div>

        {/* Upcoming Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {upcomingItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 text-xs font-bold rounded-full">
                COMING SOON
              </div>

              <div className="relative z-10">
                {/* Product Teaser */}
                <div className="text-center mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 bg-slate-700 rounded-xl blur-md"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center text-4xl filter blur-sm group-hover:blur-none transition-all duration-500">
                      {item.teaser}
                    </div>
                  </div>
                  <div className="text-sm text-violet-400 font-semibold mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>

                {/* Release Info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-400 font-semibold">{item.releaseDate}</span>
                  <Bell className="text-violet-400" size={18} />
                </div>

                {/* Notify Button */}
                <button className="w-full px-4 py-3 bg-gradient-to-r from-transparent to-transparent border border-violet-400/30 text-violet-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:from-violet-600/20 group-hover:to-purple-600/20 group-hover:border-violet-400 transition-all duration-300 flex items-center justify-center space-x-2 text-sm">
                  <Bell size={16} />
                  <span>Notify Me</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our updates and be the first to know when new products launch
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProducts;