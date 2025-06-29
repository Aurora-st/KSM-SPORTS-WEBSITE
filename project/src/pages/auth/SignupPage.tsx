import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Trophy, Sparkles, Zap, Crown, Rocket } from 'lucide-react';
import axios from 'axios';

export const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Frontend validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Signup error:', err.response?.data || err);
      setError(
        err.response?.data?.message ||
        (typeof err.response?.data === 'string' ? err.response.data : JSON.stringify(err.response?.data)) ||
        'Signup failed'
      );
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-dark-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-neon-pink/20 to-neon-green/20 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full opacity-30"
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
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Main Card */}
        <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-glass overflow-hidden">
          {/* Animated Border */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-3xl blur opacity-20"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="relative w-20 h-20 bg-gradient-to-br from-neon-green via-neon-blue to-neon-purple rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-neon-green"
              >
                <Crown className="w-10 h-10 text-white" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-green via-neon-blue to-neon-purple rounded-3xl opacity-0 hover:opacity-100 blur-sm"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              <motion.h1 
                className="text-4xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Join KSM Elite
              </motion.h1>
              
              <motion.p 
                className="text-gray-300 flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span>Start your champion journey today</span>
                <Rocket className="w-4 h-4 text-neon-yellow" />
              </motion.p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <label className="block text-white font-medium mb-3 flex items-center space-x-2">
                  <User className="w-4 h-4 text-neon-green" />
                  <span>Full Name</span>
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300 group-hover:border-white/20"
                    placeholder="Enter your full name"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <label className="block text-white font-medium mb-3 flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-neon-blue" />
                  <span>Email</span>
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 group-hover:border-white/20"
                    placeholder="Enter your email"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <label className="block text-white font-medium mb-3 flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-neon-purple" />
                  <span>Phone Number</span>
                </label>
                <div className="relative group">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all duration-300 group-hover:border-white/20"
                    placeholder="Enter your phone number"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <label className="block text-white font-medium mb-3 flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-neon-pink" />
                  <span>Password</span>
                </label>
                <div className="relative group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-6 py-4 pr-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent transition-all duration-300 group-hover:border-white/20"
                    placeholder="Create a password"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </motion.button>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-neon-green/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* Confirm Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <label className="block text-white font-medium mb-3 flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-neon-yellow" />
                  <span>Confirm Password</span>
                </label>
                <div className="relative group">
                  <input
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-yellow focus:border-transparent transition-all duration-300 group-hover:border-white/20"
                    placeholder="Confirm your password"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-yellow/10 to-neon-green/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* Terms & Conditions */}
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <input 
                  type="checkbox" 
                  required 
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-neon-blue focus:ring-neon-blue focus:ring-2" 
                />
                <label className="text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors duration-200">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors duration-200">
                    Privacy Policy
                  </a>
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-neon-green to-neon-blue text-white font-bold rounded-2xl shadow-neon-green hover:shadow-neon transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Crown className="w-5 h-5" />
                  <span>Create Elite Account</span>
                  <Sparkles className="w-5 h-5" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>

              {/* Google Sign Up */}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <motion.span 
                  className="text-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  🔍
                </motion.span>
                <span>Continue with Google</span>
              </motion.button>

              {error && <div className="text-red-500 text-center mt-2">{error}</div>}
            </form>

            {/* Sign In Link */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <p className="text-gray-300">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="text-neon-blue hover:text-neon-purple font-semibold transition-colors duration-200"
                >
                  Sign in
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-6 -right-6 w-12 h-12 bg-neon-pink rounded-full flex items-center justify-center"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Crown className="w-6 h-6 text-dark-900" />
        </motion.div>

        <motion.div
          className="absolute -bottom-6 -left-6 w-12 h-12 bg-neon-green rounded-full flex items-center justify-center"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Rocket className="w-6 h-6 text-dark-900" />
        </motion.div>
      </motion.div>
    </div>
  );
};