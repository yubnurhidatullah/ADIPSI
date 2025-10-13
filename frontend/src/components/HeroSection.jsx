import React from 'react';
import { ArrowRight } from 'lucide-react';
import { heroImages } from '../mock';
import { Button } from './ui/button';

const HeroSection = () => {
  const handleJoinClick = () => {
    alert('Fitur pendaftaran akan segera tersedia!');
  };

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-800">ASOSIASI DOSEN</span>
            <br />
            <span className="text-amber-500">ILMU PEMERINTAHAN</span>
            <br />
            <span className="text-gray-800">SELURUH INDONESIA</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Wadah bagi para dosen ilmu pemerintahan untuk berbagi pengetahuan, 
            membangun jaringan, dan meningkatkan kualitas pendidikan pemerintahan di Indonesia
          </p>
          <Button 
            onClick={handleJoinClick}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            GABUNG SEKARANG
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>

        {/* Hero Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {heroImages.map((image) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
