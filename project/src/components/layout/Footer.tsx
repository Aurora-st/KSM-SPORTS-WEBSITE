import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Zap, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-dark-950 text-white overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-neon-pink/20 to-neon-green/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{ duration: 1, type: "spring" }}
                className="relative w-16 h-16 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-3xl flex items-center justify-center shadow-neon group-hover:shadow-neon-purple"
              >
                <Trophy className="w-9 h-9 text-white" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-3xl opacity-0 group-hover:opacity-100 blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-4xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  KSM
                </motion.span>
                <span className="text-sm text-gray-400 -mt-1">SPORTS COACHING</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Unleashing Champions – Powered by Passion. Where dreams meet dedication and champions are born through cutting-edge training methodologies.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, color: 'hover:text-blue-400' },
                { Icon: Instagram, color: 'hover:text-pink-400' },
                { Icon: Twitter, color: 'hover:text-blue-300' },
                { Icon: Youtube, color: 'hover:text-red-400' }
              ].map(({ Icon, color }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Programs', path: '/programs' },
                { label: 'About Us', path: '/about' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'Contact', path: '/contact' },
              ].map((link, index) => (
                <motion.li 
                  key={link.path}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-neon-blue transition-all duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <motion.div
                      className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Sports Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Elite Programs
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Cricket Academy', emoji: '🏏' },
                { name: 'Football Elite', emoji: '⚽' },
                { name: 'Badminton Pro', emoji: '🏸' },
                { name: 'Karate Dojo', emoji: '🥋' },
                { name: 'Tennis Court', emoji: '🎾' },
                { name: 'Aqua Sports', emoji: '🏊' },
              ].map((sport, index) => (
                <motion.li 
                  key={sport.name}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="group"
                >
                  <span className="text-gray-300 hover:text-neon-purple transition-all duration-300 text-sm cursor-pointer flex items-center space-x-3">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {sport.emoji}
                    </span>
                    <span>{sport.name}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-neon-green to-neon-yellow bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {[
                { Icon: Phone, text: '9711445549', color: 'text-neon-green' },
                { Icon: Mail, text: 'info@ksmsports.com', color: 'text-neon-blue' },
                { Icon: MapPin, text: 'Sports Complex, New Delhi, India', color: 'text-neon-purple' },
              ].map(({ Icon, text, color }, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-300 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start space-x-2">
                <span>© 2024 KSM Sports Coaching. All rights reserved.</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start space-x-2">
                <span>Crafted with passion by</span>
                <span className="text-neon-blue font-semibold">CEO: Sourav Tomar</span>
                <Sparkles className="w-3 h-3 text-neon-yellow" />
              </p>
            </div>
            
            <motion.div 
              className="flex items-center space-x-2 text-xs text-gray-500"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 text-neon-yellow" />
              <span>For inquiries, contact</span>
              <span className="text-neon-blue font-semibold">9711445549</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};