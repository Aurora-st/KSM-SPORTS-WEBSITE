import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Calendar, Award, Target, ArrowLeft, CreditCard } from 'lucide-react';
import { useAuth } from '../AuthContext';

export const SportDetail: React.FC = () => {
  const { sport } = useParams<{ sport: string }>();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Mock data for sports details
  const sportsData: { [key: string]: any } = {
    cricket: {
      name: 'Cricket',
      emoji: '🏏',
      color: 'from-green-500 to-green-600',
      description: 'Master the gentleman\'s game with comprehensive cricket training that covers all aspects of the sport.',
      fullDescription: 'Our cricket program is designed to transform beginners into skilled players and take advanced players to the next level. We focus on technical skills, mental toughness, and strategic gameplay.',
      duration: '3 months',
      price: '₹15,000',
      students: 450,
      rating: 4.9,
      schedule: 'Mon, Wed, Fri - 6:00 AM to 8:00 AM',
      coach: {
        name: 'Abhinav Singh',
        achievements: 'Co-Founder, Sports Management & Leadership'
      },
      curriculum: [
        'Basic batting stance and grip',
        'Bowling techniques and variations',
        'Fielding positions and catching',
        'Running between wickets',
        'Match strategy and tactics',
        'Mental preparation and focus'
      ],
      equipment: [
        'Cricket bat and pads',
        'Helmet and gloves',
        'Stumps and balls',
        'Practice nets',
        'Bowling machine access'
      ],
      benefits: [
        'Improve hand-eye coordination',
        'Build physical fitness',
        'Develop strategic thinking',
        'Enhance team collaboration'
      ]
    },
    football: {
      name: 'Football',
      emoji: '⚽',
      color: 'from-blue-500 to-blue-600',
      description: 'Develop your football skills with world-class coaching and modern training methods.',
      fullDescription: 'Our football program combines technical skill development with tactical awareness and physical conditioning to create well-rounded players.',
      duration: '4 months',
      price: '₹15,000',
      students: 380,
      rating: 4.8,
      schedule: 'Tue, Thu, Sat - 5:30 AM to 7:30 AM',
      coach: {
        name: 'Carlos Martinez',
        experience: '12 years',
        achievements: 'UEFA B License, Former Professional Player'
      },
      curriculum: [
        'Ball control and first touch',
        'Passing accuracy and vision',
        'Shooting techniques',
        'Defensive positioning',
        'Set piece execution',
        'Game tactics and formations'
      ],
      equipment: [
        'Training footballs',
        'Cones and markers',
        'Goal posts',
        'Agility ladders',
        'Fitness equipment'
      ],
      benefits: [
        'Cardiovascular fitness',
        'Teamwork skills',
        'Quick decision making',
        'Leadership development'
      ]
    },
    badminton: {
      name: 'Badminton',
      emoji: '🏸',
      color: 'from-purple-500 to-purple-600',
      description: 'Excel in badminton with expert coaching in techniques and strategies.',
      fullDescription: 'Our badminton program focuses on developing agility, precision, and advanced techniques for all levels. Personalized coaching and match play are core to our approach.',
      duration: '2 months',
      price: '₹15,000',
      students: 320,
      rating: 4.9,
      schedule: 'Mon, Wed, Fri - 7:00 AM to 8:30 AM',
      coach: {
        name: 'Sarah Lee',
        experience: '10 years',
        achievements: 'National Badminton Champion'
      },
      curriculum: [
        'Stroke techniques and footwork',
        'Smash, drop, and net play',
        'Singles and doubles tactics',
        'Agility and speed drills',
        'Mental game and focus'
      ],
      equipment: [
        'Racquets and shuttlecocks',
        'Indoor courts',
        'Agility ladders',
        'Training cones'
      ],
      benefits: [
        'Improve reflexes',
        'Boost cardiovascular health',
        'Enhance tactical thinking',
        'Build endurance'
      ]
    },
    karate: {
      name: 'Karate',
      emoji: '🥋',
      color: 'from-red-500 to-red-600',
      description: 'Learn traditional karate forms, self-defense, and mental discipline.',
      fullDescription: 'Our karate program instills discipline, confidence, and self-defense skills. Students progress through belts with a focus on technique and respect.',
      duration: '6 months',
      price: '₹20,000',
      students: 280,
      rating: 4.9,
      schedule: 'Tue, Thu, Sat - 6:00 AM to 7:30 AM',
      coach: {
        name: 'Sensei Kumar',
        experience: '15 years',
        achievements: 'Black Belt, National Karate Coach'
      },
      curriculum: [
        'Basic forms (Kata)',
        'Self-defense techniques',
        'Sparring and kumite',
        'Mental discipline',
        'Competition preparation'
      ],
      equipment: [
        'Karate gi',
        'Protective gear',
        'Training mats',
        'Punching pads'
      ],
      benefits: [
        'Increase confidence',
        'Improve flexibility',
        'Learn self-defense',
        'Build mental strength'
      ]
    },
    tennis: {
      name: 'Tennis',
      emoji: '🎾',
      color: 'from-orange-500 to-orange-600',
      description: 'Perfect your tennis game with professional coaching and court practice.',
      fullDescription: 'Our tennis program is designed for all levels, focusing on technique, strategy, and match play. Small group sessions ensure personalized attention.',
      duration: '3 months',
      price: '₹15,000',
      students: 210,
      rating: 4.8,
      schedule: 'Mon, Wed, Fri - 8:00 AM to 9:30 AM',
      coach: {
        name: 'Anjali Mehra',
        experience: '8 years',
        achievements: 'State Tennis Champion'
      },
      curriculum: [
        'Forehand and backhand',
        'Serve and volley',
        'Footwork and agility',
        'Singles and doubles strategy',
        'Match play and analysis'
      ],
      equipment: [
        'Tennis racquets',
        'Tennis balls',
        'Clay and hard courts',
        'Training cones'
      ],
      benefits: [
        'Improve coordination',
        'Boost stamina',
        'Enhance tactical skills',
        'Build sportsmanship'
      ]
    },
    swimming: {
      name: 'Swimming',
      emoji: '🏊',
      color: 'from-cyan-500 to-cyan-600',
      description: 'Learn swimming techniques and water safety with certified instructors.',
      fullDescription: 'Our swimming program covers all strokes, water safety, and endurance training. Certified instructors ensure a safe and supportive environment.',
      duration: '2 months',
      price: '₹20,000',
      students: 190,
      rating: 4.9,
      schedule: 'Mon, Wed, Fri - 6:30 AM to 8:00 AM',
      coach: {
        name: 'Ravi Sharma',
        experience: '12 years',
        achievements: 'National Swimming Coach'
      },
      curriculum: [
        'Freestyle, backstroke, breaststroke, butterfly',
        'Breathing techniques',
        'Endurance training',
        'Water safety and rescue',
        'Starts and turns'
      ],
      equipment: [
        'Swimming pool',
        'Kickboards',
        'Pull buoys',
        'Goggles and caps'
      ],
      benefits: [
        'Increase lung capacity',
        'Improve overall fitness',
        'Learn water safety',
        'Build confidence in water'
      ]
    },
    // Add more sports data as needed
  };

  const currentSport = sportsData[sport || ''] || sportsData.cricket;

  const handlePayNow = () => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: { pathname: '/payment', state: { sport: currentSport } } } });
    } else {
      navigate('/payment', { state: { sport: currentSport } });
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className={`bg-gradient-to-br ${currentSport.color} py-20 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              to="/programs"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Programs</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <div className="text-8xl mb-6">{currentSport.emoji}</div>
              <h1 className="text-5xl font-bold mb-4">{currentSport.name} Training</h1>
              <p className="text-xl text-white/90 mb-6">{currentSport.description}</p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{currentSport.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{currentSport.students}+ students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{currentSport.rating} rating</span>
                </div>
              </div>

              <div className="text-4xl font-bold mb-6">{currentSport.price}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Enroll Now</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-white">
                  <span>Program Fee:</span>
                  <span className="font-bold text-xl">{currentSport.price}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{currentSport.schedule}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handlePayNow}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-secondary-500 text-white font-semibold rounded-xl hover:bg-secondary-600 transition-colors"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay Now
                </button>
                <button className="w-full px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                  Free Trial Class
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About the Program */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Program</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {currentSport.fullDescription}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
                    <ul className="space-y-2">
                      {currentSport.curriculum.map((item: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Target className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Benefits</h3>
                    <ul className="space-y-2">
                      {currentSport.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Equipment & Facilities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipment & Facilities</h2>
                <p className="text-gray-600 mb-6">
                  We provide state-of-the-art equipment and world-class facilities to ensure the best training experience.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentSport.equipment.map((item: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Coach Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Coach</h3>
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-600">
                    Coach
                  </div>
                  <h4 className="font-semibold text-gray-900">{currentSport.coach.name}</h4>
                  <p className="text-sm text-gray-600">{currentSport.coach.experience} experience</p>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  {currentSport.coach.achievements}
                </p>
              </motion.div>

              {/* Schedule */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Training Schedule</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">{currentSport.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">2 hours per session</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-primary-100 mb-4">
                  Have questions about the program? Contact us for more information.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};