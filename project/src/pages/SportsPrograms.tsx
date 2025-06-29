import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

export const SportsPrograms: React.FC = () => {
  const sports = [
    {
      id: 'cricket',
      name: 'Cricket',
      emoji: '🏏',
      description: 'Master the art of cricket with professional coaching and modern techniques.',
      duration: '3 months',
      students: 450,
      rating: 4.9,
      price: '₹8,000',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      features: ['Batting Techniques', 'Bowling Mastery', 'Fielding Skills', 'Match Strategy']
    },
    {
      id: 'football',
      name: 'Football',
      emoji: '⚽',
      description: 'Develop your football skills with tactical training and fitness programs.',
      duration: '4 months',
      students: 380,
      rating: 4.8,
      price: '₹7,500',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      features: ['Ball Control', 'Passing & Shooting', 'Tactical Awareness', 'Physical Fitness']
    },
    {
      id: 'badminton',
      name: 'Badminton',
      emoji: '🏸',
      description: 'Excel in badminton with expert coaching in techniques and strategies.',
      duration: '2 months',
      students: 320,
      rating: 4.9,
      price: '₹6,000',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      features: ['Stroke Techniques', 'Court Movement', 'Smash & Drop', 'Mental Game']
    },
    {
      id: 'karate',
      name: 'Karate',
      emoji: '🥋',
      description: 'Learn traditional karate forms, self-defense, and mental discipline.',
      duration: '6 months',
      students: 280,
      rating: 4.9,
      price: '₹9,500',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      features: ['Basic Forms', 'Self Defense', 'Mental Discipline', 'Competition Prep']
    },
    {
      id: 'tennis',
      name: 'Tennis',
      emoji: '🎾',
      description: 'Perfect your tennis game with professional coaching and court practice.',
      duration: '3 months',
      students: 210,
      rating: 4.8,
      price: '₹12,000',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      features: ['Forehand & Backhand', 'Serve Techniques', 'Net Play', 'Match Play']
    },
    {
      id: 'swimming',
      name: 'Swimming',
      emoji: '🏊',
      description: 'Learn swimming techniques and water safety with certified instructors.',
      duration: '2 months',
      students: 190,
      rating: 4.9,
      price: '₹8,500',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      features: ['Stroke Techniques', 'Breathing Control', 'Water Safety', 'Endurance Training']
    },
    {
      id: 'boxing',
      name: 'Boxing',
      emoji: '🥊',
      description: 'Train in boxing fundamentals, fitness, and competitive techniques.',
      duration: '4 months',
      students: 160,
      rating: 4.7,
      price: '₹10,000',
      color: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50',
      features: ['Basic Punches', 'Footwork', 'Defense', 'Fitness Training']
    },
    {
      id: 'gymnastics',
      name: 'Gymnastics',
      emoji: '🤸',
      description: 'Develop flexibility, strength, and artistic expression through gymnastics.',
      duration: '5 months',
      students: 140,
      rating: 4.8,
      price: '₹11,000',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      features: ['Floor Exercises', 'Balance Beam', 'Flexibility', 'Strength Training']
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Sports Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-200 max-w-3xl mx-auto"
          >
            Choose from our comprehensive range of sports programs designed for all skill levels. 
            Each program is crafted by expert coaches to help you achieve your athletic goals.
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sports.map((sport, index) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header */}
                <div className={`h-32 bg-gradient-to-r ${sport.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <div className="text-6xl group-hover:scale-110 transition-transform">
                      {sport.emoji}
                    </div>
                    <div className="text-right">
                      <div className="text-white/90 text-sm font-medium">From</div>
                      <div className="text-white text-2xl font-bold">{sport.price}</div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{sport.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{sport.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{sport.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{sport.students}+</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{sport.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {sport.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/programs/${sport.id}`}
                    className={`w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r ${sport.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of athletes who have transformed their passion into excellence with KSM Sports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};