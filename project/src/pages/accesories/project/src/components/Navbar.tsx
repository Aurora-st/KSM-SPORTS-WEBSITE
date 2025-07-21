import React, { useState, useEffect } from 'react';
import { Menu, X, User, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '/programs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent">
              KSM SPORTS
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              <a
                href="/login"
                className="flex items-center space-x-2 px-4 py-2 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                <User size={18} />
                <span>Login</span>
              </a>
              <a
                href="/join"
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <UserPlus size={18} />
                <span>Join Now</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-slate-700 pt-4 space-y-3">
                <a
                  href="/login"
                  className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300 py-2"
                >
                  <User size={18} />
                  <span>Login</span>
                </a>
                <a
                  href="/join"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 w-full justify-center"
                >
                  <UserPlus size={18} />
                  <span>Join Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;