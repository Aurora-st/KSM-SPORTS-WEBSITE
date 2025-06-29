import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission with backend
    console.log('Contact form submitted:', formData);
    // Show success message
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '9711445549',
      subtitle: 'Mon-Sat 9AM-7PM',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ksmsports.com',
      subtitle: 'We reply within 24 hours',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Sports Complex, New Delhi',
      subtitle: 'Visit our world-class facility',
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sat: 6AM-9PM',
      subtitle: 'Sunday: 7AM-6PM',
      color: 'text-purple-600'
    },
  ];

  const sports = [
    'Cricket', 'Football', 'Badminton', 'Karate', 'Tennis', 
    'Swimming', 'Boxing', 'Gymnastics', 'General Inquiry'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-200 max-w-3xl mx-auto"
          >
            Ready to start your sports journey? We're here to help you every step of the way. 
            Contact us for program details, enrollment, or any questions.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 ${info.color}`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-gray-600">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Sport of Interest
                    </label>
                    <select
                      value={formData.sport}
                      onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a sport</option>
                      {sports.map((sport) => (
                        <option key={sport} value={sport}>{sport}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your goals, experience level, or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Facility</h3>
                <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 mb-4">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Sports Complex, New Delhi</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Our state-of-the-art facility is easily accessible by public transport 
                  and has ample parking space for visitors.
                </p>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">Quick WhatsApp</h3>
                    <p className="text-green-100">Get instant responses</p>
                  </div>
                </div>
                <p className="mb-4">
                  For quick queries and instant support, message us on WhatsApp. 
                  We're available during business hours.
                </p>
                <motion.a
                  href="https://wa.me/919711445549"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </motion.a>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
                <p className="text-yellow-700 text-sm">
                  For all inquiries and enrollment assistance, please contact us at 
                  <strong> 9711445549</strong>. Our team is available to help you 
                  choose the right program and answer any questions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What age groups do you cater to?',
                answer: 'We offer programs for all age groups, from 5 years old to adults. Our coaches tailor training methods according to age and skill level.'
              },
              {
                question: 'Do you provide equipment?',
                answer: 'Yes, we provide all necessary equipment for training sessions. However, students are encouraged to get their own gear as they progress.'
              },
              {
                question: 'What are your payment options?',
                answer: 'We accept various payment methods including cash, card, UPI, and online transfers. Installment options are also available for longer programs.'
              },
              {
                question: 'Can I get a trial session?',
                answer: 'Absolutely! We offer free trial sessions for all our programs. This helps you experience our coaching style before enrollment.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};