import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Programs', href: '/programs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const productCategories = [
    'Footwear',
    'Jerseys',
    'Shorts',
    'Equipment',
    'Accessories',
    'Custom Gear'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-violet-900/20"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent">
                  KSM SPORTS
                </h2>
                <p className="text-gray-400 mt-4">
                  Elevating athletic performance through premium sports accessories and apparel. 
                  Your journey to excellence starts here.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:transform hover:scale-110`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Products</h3>
              <ul className="space-y-3">
                {productCategories.map((category) => (
                  <li key={category}>
                    <a
                      href={`/products/${category.toLowerCase()}`}
                      className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Stay Connected</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-violet-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-400">info@ksmsports.com</p>
                    <p className="text-gray-400">support@ksmsports.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="text-violet-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Customer Support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="text-violet-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-400">123 Sports Avenue</p>
                    <p className="text-gray-400">Athletic District, AD 12345</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 p-4 bg-slate-800/50 rounded-xl">
                <h4 className="text-white font-semibold mb-3">Newsletter</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-violet-400"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 KSM Sports Accessories & Apparel. All rights reserved.
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;