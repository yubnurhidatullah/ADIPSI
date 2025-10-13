import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-2xl">ADIPSI</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Asosiasi Dosen Ilmu Pemerintahan Seluruh Indonesia adalah wadah bagi para dosen untuk berbagi pengetahuan dan meningkatkan kualitas pendidikan pemerintahan.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Hubungi Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-400">Jakarta, Indonesia</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 flex-shrink-0" size={20} />
                <p className="text-gray-400">info@adipsi.or.id</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600 flex-shrink-0" size={20} />
                <p className="text-gray-400">+62 21 1234 5678</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-blue-600 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#kegiatan" className="text-gray-400 hover:text-blue-600 transition-colors">Kegiatan</a>
              </li>
              <li>
                <a href="#mitra" className="text-gray-400 hover:text-blue-600 transition-colors">Mitra</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ADIPSI. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
