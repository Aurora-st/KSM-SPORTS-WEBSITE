import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, DollarSign, Calendar, TrendingUp, Eye, Edit, Trash2 } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Students', value: '2,547', change: '+12%', icon: Users, color: 'text-blue-600' },
    { label: 'Active Programs', value: '12', change: '+2', icon: Trophy, color: 'text-green-600' },
    { label: 'Monthly Revenue', value: '₹4,85,000', change: '+18%', icon: DollarSign, color: 'text-purple-600' },
    { label: 'Classes Today', value: '24', change: '+3', icon: Calendar, color: 'text-orange-600' },
  ];

  const recentStudents = [
    { id: 1, name: 'Alex Johnson', email: 'alex@email.com', program: 'Cricket', joinDate: 'Feb 10, 2024' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@email.com', program: 'Football', joinDate: 'Feb 9, 2024' },
    { id: 3, name: 'Mike Chen', email: 'mike@email.com', program: 'Badminton', joinDate: 'Feb 8, 2024' },
    { id: 4, name: 'Emma Davis', email: 'emma@email.com', program: 'Tennis', joinDate: 'Feb 7, 2024' },
  ];

  const programsData = [
    { name: 'Cricket', students: 450, revenue: '₹36,00,000', growth: '+15%' },
    { name: 'Football', students: 380, revenue: '₹28,50,000', growth: '+12%' },
    { name: 'Badminton', students: 320, revenue: '₹19,20,000', growth: '+8%' },
    { name: 'Karate', students: 280, revenue: '₹26,60,000', growth: '+20%' },
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
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-primary-100">Welcome back, Sourav Tomar</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center space-x-1 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Students */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Enrollments</h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  View All
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Student</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Program</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Join Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentStudents.map((student) => (
                      <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-600">{student.email}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-lg text-sm">
                            {student.program}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{student.joinDate}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-700">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-700">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Programs Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Programs Performance</h2>
              
              <div className="space-y-4">
                {programsData.map((program, index) => (
                  <div key={program.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {program.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{program.name}</div>
                        <div className="text-sm text-gray-600">{program.students} students</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{program.revenue}</div>
                      <div className="text-sm text-green-600">{program.growth}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  Add New Student
                </button>
                <button className="w-full px-4 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors">
                  Create Program
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Generate Report
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Manage Coaches
                </button>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">New student enrolled in Cricket</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Payment received ₹8,000</p>
                    <p className="text-xs text-gray-500">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Coach updated schedule</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Server Status</span>
                  <span className="text-green-600 text-sm font-medium">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Payment Gateway</span>
                  <span className="text-green-600 text-sm font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="text-green-600 text-sm font-medium">Connected</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};