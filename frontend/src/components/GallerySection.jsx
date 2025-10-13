import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryPhotos } from '../mock';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', 'Rapat', 'Seminar', 'Workshop', 'Kegiatan', 'Kunjungan', 'Kerjasama', 'Diskusi', 'Konferensi'];

  const filteredPhotos = filter === 'Semua' 
    ? galleryPhotos 
    : galleryPhotos.filter(photo => photo.category === filter);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            GALERI <span className="text-blue-600">FOTO</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dokumentasi kegiatan dan acara ADIPSI
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-64"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{photo.title}</p>
                  <p className="text-blue-300 text-xs mt-1">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="text-center mt-6">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-blue-300 text-lg">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;