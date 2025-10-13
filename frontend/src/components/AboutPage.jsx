import React from 'react';
import { Users, TrendingUp, Award, Globe, BookOpen, Target } from 'lucide-react';
import { aboutADIPSI, leaderships, membershipGrowth, visionMission } from '../mockAbout';
import { Card, CardContent } from './ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {aboutADIPSI.title}
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {aboutADIPSI.description}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full mr-4">
                    <Target className="text-blue-600" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Visi</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {visionMission.vision}
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full mr-4">
                    <BookOpen className="text-blue-600" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Misi</h2>
                </div>
                <ul className="space-y-4">
                  {visionMission.missions.map((mission, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Sejarah <span className="text-blue-600">ADIPSI</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Perjalanan panjang ADIPSI dalam membangun komunitas akademis Ilmu Pemerintahan di Indonesia
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {aboutADIPSI.history.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-600 text-white text-2xl font-bold px-4 py-2 rounded-lg mr-4">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership History */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Sejarah <span className="text-blue-600">Kepemimpinan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Para pemimpin yang telah membawa ADIPSI berkembang dan maju
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaderships.map((leader) => (
              <Card key={leader.id} className="shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-4">
                    <div className="flex items-center justify-center mb-4">
                      <Award size={40} />
                    </div>
                    <h3 className="text-center text-xl font-bold mb-2">{leader.period}</h3>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{leader.chairman}</h4>
                  <p className="text-blue-600 font-semibold mb-3 flex items-center">
                    <Globe size={16} className="mr-2" />
                    {leader.university}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Growth */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Pertumbuhan <span className="text-blue-600">Keanggotaan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Grafik pertumbuhan anggota dan universitas anggota ADIPSI sejak didirikan
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={40} />
                </div>
                <h3 className="text-5xl font-bold text-blue-600 mb-2">325+</h3>
                <p className="text-xl text-gray-600 font-semibold">Anggota Dosen</p>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-blue-600" size={40} />
                </div>
                <h3 className="text-5xl font-bold text-blue-600 mb-2">82+</h3>
                <p className="text-xl text-gray-600 font-semibold">Universitas Anggota</p>
              </CardContent>
            </Card>
          </div>

          {/* Growth Chart */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Grafik Pertumbuhan (2010-2024)</h3>
                <TrendingUp className="text-green-600" size={32} />
              </div>
              
              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  {/* Chart */}
                  <div className="relative h-80 flex items-end justify-around border-l-2 border-b-2 border-gray-300 pl-4 pb-4">
                    {membershipGrowth.map((data, index) => (
                      <div key={index} className="flex flex-col items-center flex-1 mx-2">
                        {/* Members Bar */}
                        <div className="relative group w-full">
                          <div 
                            className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-700 hover:to-blue-500 cursor-pointer"
                            style={{ height: `${(data.members / 325) * 250}px` }}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {data.members} Anggota
                            </div>
                          </div>
                        </div>
                        
                        {/* Year Label */}
                        <div className="mt-2 text-sm font-semibold text-gray-700">{data.year}</div>
                        
                        {/* Universities Count */}
                        <div className="text-xs text-gray-500 mt-1">{data.universities} PT</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center space-x-6 mt-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-t from-blue-600 to-blue-400 rounded mr-2"></div>
                  <span className="text-sm text-gray-600">Jumlah Anggota</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                  <span className="text-sm text-gray-600">PT = Perguruan Tinggi</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;