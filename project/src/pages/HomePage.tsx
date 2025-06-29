import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Star, Users, Trophy, Target, Zap, Sparkles, ArrowRight, Rocket, Crown, CloudLightning as Lightning } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pt-20 bg-dark-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Aurora Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(0,212,255,0.1), rgba(139,92,246,0.1), rgba(244,114,182,0.1))',
                'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(244,114,182,0.1), rgba(0,255,136,0.1))',
                'linear-gradient(225deg, rgba(244,114,182,0.1), rgba(0,255,136,0.1), rgba(0,212,255,0.1))',
                'linear-gradient(315deg, rgba(0,255,136,0.1), rgba(0,212,255,0.1), rgba(139,92,246,0.1))',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Orbs */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-32 h-32 rounded-full blur-3xl ${
                i % 4 === 0 ? 'bg-neon-blue/20' :
                i % 4 === 1 ? 'bg-neon-purple/20' :
                i % 4 === 2 ? 'bg-neon-pink/20' : 'bg-neon-green/20'
              }`}
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -100, 50, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Mouse Follower */}
        <motion.div
          className="fixed w-6 h-6 bg-neon-blue/30 rounded-full blur-sm pointer-events-none z-50"
          style={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              style={{ y: y1, opacity }}
              className="text-left space-y-8"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm"
              >
                <Crown className="w-4 h-4 text-neon-yellow" />
                <span className="text-gray-300">India's Premier Sports Academy</span>
                <Sparkles className="w-4 h-4 text-neon-pink" />
              </motion.div>

              <motion.h1
                className="text-6xl md:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="block">Unleashing</span>
                <motion.span 
                  className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Champions
                </motion.span>
              </motion.h1>
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-neon-green to-neon-yellow bg-clip-text text-transparent">
                  Powered by Passion.
                </p>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  Experience the future of sports training with cutting-edge technology, 
                  world-class facilities, and elite coaching that transforms potential into excellence.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/signup"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-2xl overflow-hidden shadow-neon hover:shadow-neon-purple transition-all duration-500"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <Rocket className="w-5 h-5" />
                      <span>Start Journey</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/programs"
                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span>Explore Programs</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {[
                  { number: '2.5K+', label: 'Champions' },
                  { number: '150+', label: 'Trophies' },
                  { number: '25+', label: 'Elite Coaches' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - CEO Photo */}
            <motion.div
              style={{ y: y2 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.6, duration: 1, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="relative group perspective-1000"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-3xl blur-2xl opacity-30 group-hover:opacity-50"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main Card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-glass group-hover:border-white/20 transition-all duration-500">
                  {/* CEO Photo */}
                  <motion.div
                    className="w-80 h-80 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center text-gray-600 text-lg font-medium mb-6 overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 text-center">
                      <div className="text-2xl font-bold mb-2">CEO Photo</div>
                      <div className="text-lg">Sourav Tomar</div>
                    </div>
                  </motion.div>

                  {/* CEO Info */}
                  <div className="text-center space-y-4">
                    <motion.h3 
                      className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      Sourav Tomar
                    </motion.h3>
                    <p className="text-gray-300 font-medium">CEO & Founder</p>
                    
                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Star className="w-6 h-6 text-neon-yellow fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <motion.p 
                      className="text-sm text-gray-400 italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      "Champions aren't made in comfort zones"
                    </motion.p>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-neon-yellow rounded-full flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Lightning className="w-4 h-4 text-dark-900" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Sports Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {['🏏', '⚽', '🏸', '🥋', '🎾', '🏊'].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-6xl opacity-10"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -50, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Active Athletes', value: '2,500+', color: 'from-neon-blue to-neon-purple' },
              { icon: Trophy, label: 'Championships', value: '150+', color: 'from-neon-purple to-neon-pink' },
              { icon: Target, label: 'Elite Programs', value: '12+', color: 'from-neon-pink to-neon-green' },
              { icon: Star, label: 'Expert Coaches', value: '25+', color: 'from-neon-green to-neon-yellow' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl mb-6 shadow-neon group-hover:shadow-neon-purple transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Elite Programs
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge training programs designed to unlock your full potential 
              and transform you into a champion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Cricket', emoji: '🏏', color: 'from-green-400 to-green-600', glow: 'shadow-neon-green' },
              { name: 'Football', emoji: '⚽', color: 'from-blue-400 to-blue-600', glow: 'shadow-neon' },
              { name: 'Badminton', emoji: '🏸', color: 'from-purple-400 to-purple-600', glow: 'shadow-neon-purple' },
              { name: 'Karate', emoji: '🥋', color: 'from-red-400 to-red-600', glow: 'shadow-neon-pink' },
              { name: 'Tennis', emoji: '🎾', color: 'from-orange-400 to-orange-600', glow: 'shadow-neon-purple' },
              { name: 'Swimming', emoji: '🏊', color: 'from-cyan-400 to-cyan-600', glow: 'shadow-neon' },
            ].map((sport, index) => (
              <motion.div
                key={sport.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${sport.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Sport Icon */}
                <motion.div
                  className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {sport.emoji}
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple group-hover:bg-clip-text transition-all duration-300">
                  {sport.name}
                </h3>
                
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  Elite {sport.name.toLowerCase()} training with world-class coaches 
                  and cutting-edge facilities.
                </p>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-neon-blue font-semibold group-hover:text-neon-purple transition-colors duration-300"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/programs"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-2xl shadow-neon hover:shadow-neon-purple transition-all duration-300 group"
              >
                <span>View All Programs</span>
                <Target className="ml-3 w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};