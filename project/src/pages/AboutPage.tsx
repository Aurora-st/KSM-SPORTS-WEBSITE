import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Award, Heart, Zap } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const milestones = [
    { year: '2018', title: 'KSM Sports Founded', description: 'Started with a vision to transform sports coaching in India' },
    { year: '2019', title: 'First 100 Students', description: 'Reached our first milestone with cricket and football programs' },
    { year: '2020', title: 'Expanded Programs', description: 'Added badminton, karate, and tennis to our offerings' },
    { year: '2021', title: 'State Recognition', description: 'Received state-level recognition for excellence in sports coaching' },
    { year: '2022', title: '1000+ Students', description: 'Crossed 1000 active students across all programs' },
    { year: '2023', title: 'Championship Success', description: 'Our students won 50+ championships at various levels' },
    { year: '2024', title: '2500+ Champions', description: 'Now training over 2500 students with world-class facilities' },
  ];

  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of training and development.',
      color: 'text-yellow-600'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our passion for sports drives us to inspire and motivate every athlete.',
      color: 'text-red-600'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong community of athletes, coaches, and supporters.',
      color: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Focused approach to help each athlete reach their full potential.',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Achievement',
      description: 'Celebrating every achievement, big or small, on the journey to success.',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Innovative training methods and modern facilities for optimal results.',
      color: 'text-orange-600'
    },
  ];

  const team = [
    {
      name: 'Sourav Tomar',
      role: 'CEO & Founder',
      experience: '15+ years',
      specialization: 'Sports Management & Leadership',
      image: 'ST'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head Cricket Coach',
      experience: '12+ years',
      specialization: 'Former Ranji Trophy Player',
      image: 'RK'
    },
    {
      name: 'Carlos Martinez',
      role: 'Football Director',
      experience: '10+ years',
      specialization: 'UEFA Licensed Coach',
      image: 'CM'
    },
    {
      name: 'Sarah Johnson',
      role: 'Badminton Coach',
      experience: '8+ years',
      specialization: 'International Player',
      image: 'SJ'
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <h1 className="text-5xl font-bold mb-6">About KSM Sports</h1>
              <p className="text-xl text-primary-200 mb-8 leading-relaxed">
                Founded with a vision to unleash champions and powered by passion, 
                KSM Sports has been transforming lives through professional sports coaching 
                since 2018. We believe every athlete has the potential to achieve greatness.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-secondary-400">2,500+</div>
                  <div className="text-primary-200">Active Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-400">12+</div>
                  <div className="text-primary-200">Sports Programs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-400">150+</div>
                  <div className="text-primary-200">Championships</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-400">25+</div>
                  <div className="text-primary-200">Expert Coaches</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="w-full h-80 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center text-gray-600 text-lg font-medium">
                  KSM Sports Facility
                  <br />
                  Modern Training Complex
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide world-class sports coaching that develops not just athletic skills, 
                but also character, discipline, and life values. We are committed to creating 
                champions who excel both on and off the field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-3xl p-8 border border-secondary-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be India's leading sports coaching academy, recognized for producing 
                world-class athletes and fostering a culture of excellence, integrity, 
                and sportsmanship in every individual we train.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do at KSM Sports
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 ${value.color}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped KSM Sports</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind KSM Sports</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                <p className="text-sm text-gray-500">{member.specialization}</p>
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
            <h2 className="text-4xl font-bold mb-6">Join the KSM Family</h2>
            <p className="text-xl text-primary-100 mb-8">
              Be part of our journey to create champions and transform lives through sports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};