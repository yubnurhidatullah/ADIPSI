import React from 'react';
import { Users, UserCheck, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const handleJoinClick = () => {
    alert('Fitur pendaftaran akan segera tersedia!');
  };

  const infoCards = [
    {
      id: 1,
      title: 'TENTANG KAMI',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop',
      icon: Users
    },
    {
      id: 2,
      title: 'ANGGOTA KAMI',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=800&fit=crop',
      icon: UserCheck
    },
    {
      id: 3,
      title: 'KEGIATAN KAMI',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop',
      icon: Calendar
    }
  ];

  return (
    <>
      {/* Hero Banner with Background Image */}
      <section id="hero" className="relative h-[700px] pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop" 
            alt="ADIPSI Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 pb-32">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-center leading-tight">
            <span className="text-red-600">ASOSIASI DOSEN</span>
            <br />
            <span className="text-blue-600">ILMU PEMERINTAHAN</span>
            <br />
            <span className="text-orange-500">SELURUH INDONESIA</span>
          </h1>
          <Button 
            onClick={handleJoinClick}
            className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase font-semibold"
          >
            Bergabung Sekarang!
          </Button>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="relative -mt-48 z-20 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card) => (
              <div 
                key={card.id}
                className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer h-96"
              >
                {/* Card Background Image */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="text-white text-2xl font-bold tracking-wider">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
