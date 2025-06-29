import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Trophy, Sparkles, Zap, Shield } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/google', {
        credential: credentialResponse.credential,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Google login failed');
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-dark-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-neon-pink/20 to-neon-green/20 rounded-full blur-3xl"
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
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-3xl blur opacity-20"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
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
                className="relative w-20 h-20 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-neon"
              >
                <Trophy className="w-10 h-10 text-white" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-3xl opacity-0 hover:opacity-100 blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              <motion.h1 
                className="text-4xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Welcome Back
              </motion.h1>
              
              <motion.p 
                className="text-gray-300 flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span>Sign in to your KSM account</span>
                <Sparkles className="w-4 h-4 text-neon-yellow" />
              </motion.p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
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

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <label className="block text-white font-medium mb-3 flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-neon-purple" />
                  <span>Password</span>
                </label>
                <div className="relative group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-6 py-4 pr-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all duration-300 group-hover:border-white/20"
                    placeholder="Enter your password"
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
                    className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div
                className="flex items-center justify-between text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <label className="flex items-center text-gray-300 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="mr-3 w-4 h-4 rounded border-white/20 bg-white/5 text-neon-blue focus:ring-neon-blue focus:ring-2" 
                  />
                  <span className="group-hover:text-white transition-colors duration-200">Remember me</span>
                </label>
                <motion.a 
                  href="#" 
                  className="text-neon-blue hover:text-neon-purple transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Forgot password?
                </motion.a>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-2xl shadow-neon hover:shadow-neon-purple transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Sign In</span>
                  <Zap className="w-5 h-5" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>

              {/* Google Sign In */}
              <div className="w-full flex flex-col items-center mt-4">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => setError('Google login failed')}
                  width="100%"
                  useOneTap
                />
              </div>

              {error && <div className="text-red-500 text-center mt-2">{error}</div>}
            </form>

            {/* Sign Up Link */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <p className="text-gray-300">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="text-neon-blue hover:text-neon-purple font-semibold transition-colors duration-200"
                >
                  Sign up
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-6 -right-6 w-12 h-12 bg-neon-yellow rounded-full flex items-center justify-center"
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
          <Sparkles className="w-6 h-6 text-dark-900" />
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
          <Zap className="w-6 h-6 text-dark-900" />
        </motion.div>
      </motion.div>
    </div>
  );
};