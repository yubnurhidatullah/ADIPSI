import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Tag, ChevronRight } from 'lucide-react';
import { activities } from '../mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const KegiatanPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const categories = ['Semua', 'Seminar', 'Workshop', 'Rapat', 'Kunjungan'];
  
  // Extend activities with more details
  const detailedActivities = activities.map(activity => ({
    ...activity,
    location: 'Jakarta, Indonesia',
    participants: Math.floor(Math.random() * 100) + 50,
    category: activity.id % 4 === 0 ? 'Seminar' : activity.id % 3 === 0 ? 'Workshop' : activity.id % 2 === 0 ? 'Rapat' : 'Kunjungan',
    time: '09:00 - 16:00 WIB'
  }));

  const filteredActivities = selectedCategory === 'Semua' 
    ? detailedActivities 
    : detailedActivities.filter(activity => activity.category === selectedCategory);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Workshop Metodologi Penelitian',
      date: '25 Januari 2025',
      time: '09:00 - 16:00 WIB',
      location: 'Universitas Indonesia, Jakarta',
      type: 'Workshop',
      spots: 45
    },
    {
      id: 2,
      title: 'Seminar Nasional Good Governance',
      date: '10 Februari 2025',
      time: '08:00 - 17:00 WIB',
      location: 'Universitas Gadjah Mada, Yogyakarta',
      type: 'Seminar',
      spots: 120
    },
    {
      id: 3,
      title: 'Rapat Koordinasi Regional Jawa Timur',
      date: '15 Februari 2025',
      time: '10:00 - 15:00 WIB',
      location: 'Universitas Brawijaya, Malang',
      type: 'Rapat',
      spots: 30
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Kegiatan <span className="text-orange-400">ADIPSI</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Berbagai kegiatan dan program yang diselenggarakan ADIPSI untuk meningkatkan kualitas pendidikan dan penelitian Ilmu Pemerintahan di Indonesia
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-blue-100">Kegiatan per Tahun</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p className="text-blue-100">Total Peserta</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-blue-100">Kota di Indonesia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold mb-2">80+</h3>
              <p className="text-blue-100">Universitas Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Kegiatan <span className="text-blue-600">Mendatang</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Daftarkan diri Anda untuk mengikuti kegiatan-kegiatan ADIPSI yang akan datang
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-blue-600">
                <CardContent className="p-6">
                  <div className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    {event.type}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{event.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-3 text-blue-600" size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-3 text-blue-600" size={18} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="mr-3 text-blue-600" size={18} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="mr-3 text-blue-600" size={18} />
                      <span>{event.spots} Kuota Tersedia</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Daftar Sekarang
                    <ChevronRight className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Activities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Kegiatan <span className="text-blue-600">Terdahulu</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dokumentasi kegiatan-kegiatan ADIPSI yang telah terlaksana
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <Card key={activity.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{activity.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin size={16} className="mr-1" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users size={16} className="mr-1" />
                      <span>{activity.participants}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ingin Mengikuti Kegiatan ADIPSI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah bersama kami dan tingkatkan kompetensi Anda dalam bidang Ilmu Pemerintahan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Lihat Jadwal Lengkap
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KegiatanPage;