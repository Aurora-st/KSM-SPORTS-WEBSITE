import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cricket', name: 'Cricket' },
    { id: 'football', name: 'Football' },
    { id: 'badminton', name: 'Badminton' },
    { id: 'karate', name: 'Karate' },
    { id: 'events', name: 'Events' },
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'cricket',
      title: 'Cricket Training Session',
      description: 'Students practicing batting techniques',
      src: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      category: 'football',
      title: 'Football Match',
      description: 'Intense match between our teams',
      src: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      category: 'badminton',
      title: 'Badminton Championship',
      description: 'Annual tournament finals',
      src: 'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      category: 'karate',
      title: 'Karate Belt Ceremony',
      description: 'Students receiving their new belts',
      src: 'https://images.pexels.com/photos/7045560/pexels-photo-7045560.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      category: 'events',
      title: 'Sports Day Celebration',
      description: 'Annual sports day event',
      src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      category: 'cricket',
      title: 'Cricket Ground',
      description: 'Our world-class cricket facility',
      src: 'https://images.pexels.com/photos/1040358/pexels-photo-1040358.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      category: 'football',
      title: 'Football Training',
      description: 'Professional coaching session',
      src: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      category: 'events',
      title: 'Awards Ceremony',
      description: 'Celebrating our champions',
      src: 'https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      category: 'badminton',
      title: 'Badminton Court',
      description: 'State-of-the-art badminton facilities',
      src: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-200 max-w-3xl mx-auto"
          >
            Capturing moments of excellence, dedication, and triumph. 
            Explore our journey through sports and achievements.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                    {categories.find(cat => cat.id === image.category)?.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-gray-200">{filteredImages[selectedImage].description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};