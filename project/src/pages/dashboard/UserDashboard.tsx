import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, CreditCard, Star, Trophy, Clock, Target } from 'lucide-react';
import axios from 'axios';

export const UserDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err: any) {
        setError('Failed to fetch user data');
      }
    };
    fetchUser();
  }, []);

  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;
  if (!user) return <div className="text-center mt-8">Loading...</div>;

  const enrolledPrograms = [
    {
      id: 1,
      name: 'Cricket Training',
      emoji: '🏏',
      progress: 75,
      nextClass: 'Tomorrow 6:00 AM',
      instructor: 'Rajesh Kumar'
    },
    {
      id: 2,
      name: 'Football Coaching',
      emoji: '⚽',
      progress: 45,
      nextClass: 'Today 5:30 PM',
      instructor: 'Carlos Martinez'
    }
  ];

  const upcomingSchedule = [
    { time: '6:00 AM', sport: 'Cricket', type: 'Practice Session', date: 'Today' },
    { time: '5:30 PM', sport: 'Football', type: 'Match Practice', date: 'Today' },
    { time: '6:00 AM', sport: 'Cricket', type: 'Technique Training', date: 'Tomorrow' },
    { time: '7:00 AM', sport: 'Football', type: 'Fitness Training', date: 'Wednesday' },
  ];

  const achievements = [
    { title: 'First Goal', icon: '⚽', date: 'Jan 15, 2024' },
    { title: 'Perfect Catch', icon: '🏏', date: 'Jan 20, 2024' },
    { title: '30 Days Streak', icon: '🔥', date: 'Feb 1, 2024' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white mb-8"
        >
          <div className="flex items-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold"
            >
              {user?.avatar}
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
              <p className="text-primary-100">Member since {user?.joinDate}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-primary-500" />
                My Programs
              </h2>
              
              <div className="space-y-6">
                {enrolledPrograms.map((program) => (
                  <div key={program.id} className="border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{program.emoji}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{program.name}</h3>
                          <p className="text-sm text-gray-600">Instructor: {program.instructor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Progress</div>
                        <div className="text-lg font-bold text-primary-600">{program.progress}%</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{program.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${program.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Next: {program.nextClass}</span>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 px-6 py-3 border-2 border-primary-500 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors">
                Explore More Programs
              </button>
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-primary-500" />
                Upcoming Schedule
              </h2>
              
              <div className="space-y-4">
                {upcomingSchedule.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">{session.time}</div>
                        <div className="text-xs text-gray-600">{session.date}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{session.sport}</div>
                        <div className="text-sm text-gray-600">{session.type}</div>
                      </div>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-primary-500" />
                Profile
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Name</label>
                  <div className="font-medium text-gray-900">{user?.name}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <div className="font-medium text-gray-900">{user?.email}</div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  Edit Profile
                </button>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Recent Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <div className="font-medium text-gray-900">{achievement.title}</div>
                      <div className="text-sm text-gray-600">{achievement.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Payment History */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-primary-500" />
                Payment History
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Cricket Training</div>
                    <div className="text-sm text-gray-600">Jan 1, 2024</div>
                  </div>
                  <div className="text-green-600 font-semibold">₹8,000</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Football Coaching</div>
                    <div className="text-sm text-gray-600">Jan 15, 2024</div>
                  </div>
                  <div className="text-green-600 font-semibold">₹7,500</div>
                </div>
              </div>
              <button className="w-full mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All Transactions
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};