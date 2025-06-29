import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Trophy, Zap, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/programs', label: 'Programs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/10 shadow-cyber' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
              }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-12 h-12 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-2xl flex items-center justify-center shadow-neon group-hover:shadow-neon-purple"
            >
              <Trophy className="w-7 h-7 text-white" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-2xl opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                className="text-3xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                KSM
              </motion.span>
              <span className="text-xs text-gray-400 -mt-1">SPORTS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl group ${
                    location.pathname === item.path
                      ? 'text-neon-blue bg-white/5 shadow-inner-glow'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-xl border border-neon-blue/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            <div className="flex items-center space-x-3 ml-6">
              <Link
                to="/login"
                className="text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                Login
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/signup"
                  className="relative px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-xl overflow-hidden group shadow-neon hover:shadow-neon-purple transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Join Now</span>
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/10 rounded-b-2xl overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 space-y-3 border-t border-white/10">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="block mx-4 text-center bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-3 rounded-xl font-semibold shadow-neon"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};