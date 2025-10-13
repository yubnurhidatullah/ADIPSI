import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { partners } from '../mock';

const MitraSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, partners.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visiblePartners = partners.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="mitra" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            MITRA <span className="text-blue-600">ADIPSI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Universitas yang telah bergabung dalam Asosiasi Dosen Ilmu Pemerintahan Seluruh Indonesia
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center space-x-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
              {visiblePartners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-center font-semibold text-gray-800 mb-2 text-sm group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      <MapPin size={14} />
                      <span>{partner.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MitraSection;
