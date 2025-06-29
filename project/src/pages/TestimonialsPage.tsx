import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Arjun Sharma',
      age: 16,
      sport: 'Cricket',
      rating: 5,
      image: 'AS',
      testimonial: 'KSM Sports transformed my cricket game completely. The coaching is world-class and the facilities are amazing. I went from a beginner to playing in district-level tournaments within 6 months!',
      achievement: 'District Level Player'
    },
    {
      id: 2,
      name: 'Priya Patel',
      age: 14,
      sport: 'Badminton',
      rating: 5,
      image: 'PP',
      testimonial: 'The badminton program at KSM is exceptional. Coach Sarah helped me improve my technique and mental game. I recently won the state championship in my age group!',
      achievement: 'State Champion'
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      age: 18,
      sport: 'Football',
      rating: 5,
      image: 'RK',
      testimonial: 'Best football coaching in the city! The tactical training and fitness programs are top-notch. I got selected for the state team after training here for just 8 months.',
      achievement: 'State Team Selection'
    },
    {
      id: 4,
      name: 'Ananya Singh',
      age: 12,
      sport: 'Karate',
      rating: 5,
      image: 'AS',
      testimonial: 'KSM Karate classes taught me discipline, confidence, and self-defense. Sensei Kumar is an amazing instructor who makes learning fun and engaging.',
      achievement: 'Black Belt Holder'
    },
    {
      id: 5,
      name: 'Vikram Joshi',
      age: 20,
      sport: 'Tennis',
      rating: 5,
      image: 'VJ',
      testimonial: 'The tennis program here is outstanding. Professional coaching, excellent courts, and a supportive environment helped me reach the national level.',
      achievement: 'National Level Player'
    },
    {
      id: 6,
      name: 'Sneha Reddy',
      age: 15,
      sport: 'Swimming',
      rating: 5,
      image: 'SR',
      testimonial: 'Learning swimming at KSM was the best decision. The instructors are patient and skilled. I overcame my fear of water and now compete at regional level.',
      achievement: 'Regional Swimmer'
    },
    {
      id: 7,
      name: 'Karan Mehta',
      age: 17,
      sport: 'Boxing',
      rating: 5,
      image: 'KM',
      testimonial: 'KSM Boxing program is intense and rewarding. Coach Mike pushed me to my limits and helped me develop both physical and mental strength.',
      achievement: 'Regional Champion'
    },
    {
      id: 8,
      name: 'Riya Gupta',
      age: 13,
      sport: 'Gymnastics',
      rating: 5,
      image: 'RG',
      testimonial: 'The gymnastics training at KSM is phenomenal. The coaches are supportive and the equipment is world-class. I love every moment of my training!',
      achievement: 'State Level Gymnast'
    },
  ];

  const parentTestimonials = [
    {
      id: 1,
      name: 'Mrs. Sharma',
      relation: 'Mother of Arjun',
      testimonial: 'KSM Sports has been a blessing for our family. The discipline and confidence my son has gained is remarkable. The coaches truly care about each child\'s development.',
    },
    {
      id: 2,
      name: 'Mr. Patel',
      relation: 'Father of Priya',
      testimonial: 'Excellent coaching staff and facilities. My daughter has not only improved her badminton skills but also her overall personality. Highly recommended!',
    },
    {
      id: 3,
      name: 'Mrs. Kumar',
      relation: 'Mother of Rohit',
      testimonial: 'The professionalism and dedication of KSM coaches is outstanding. They have helped my son achieve his dream of playing for the state team.',
    },
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
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-200 max-w-3xl mx-auto"
          >
            Hear from our champions and their families about their transformative 
            journey with KSM Sports Coaching.
          </motion.p>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
            <p className="text-xl text-gray-600">What our athletes say about their experience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, rotateY: 5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Quote Icon */}
                <div className="relative z-10">
                  <Quote className="w-8 h-8 text-primary-500 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">Age {testimonial.age} • {testimonial.sport}</p>
                      <p className="text-sm text-primary-600 font-medium">{testimonial.achievement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parent Reviews</h2>
            <p className="text-xl text-gray-600">What parents say about our programs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {parentTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100"
              >
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.relation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '2,500+', label: 'Happy Students' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '150+', label: 'Championships Won' },
              { number: '25+', label: 'Expert Coaches' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of athletes who have transformed their passion into excellence with KSM Sports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-500 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300"
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