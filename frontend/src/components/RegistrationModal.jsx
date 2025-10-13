import React, { useState } from 'react';
import { X, User, Mail, Phone, Building2, BookOpen, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const RegistrationModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    department: '',
    position: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission - nanti akan diganti dengan API call
    console.log('Registration submitted:', formData);
    
    toast({
      title: "Pendaftaran Berhasil!",
      description: "Terima kasih telah mendaftar. Tim kami akan menghubungi Anda segera.",
    });

    // Reset form and close modal
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      university: '',
      department: '',
      position: '',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Bergabung dengan ADIPSI</h2>
            <p className="text-blue-100 text-sm mt-1">Isi formulir di bawah untuk mendaftar</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <User size={16} className="mr-2 text-blue-600" />
                Nama Lengkap *
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Dr. John Doe, S.IP., M.Si"
                className="w-full"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Mail size={16} className="mr-2 text-blue-600" />
                Email *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@universitas.ac.id"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Phone size={16} className="mr-2 text-blue-600" />
                Nomor Telepon *
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="08xx-xxxx-xxxx"
                className="w-full"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Building2 size={16} className="mr-2 text-blue-600" />
                Universitas *
              </label>
              <Input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
                placeholder="Nama Universitas"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <BookOpen size={16} className="mr-2 text-blue-600" />
                Program Studi *
              </label>
              <Input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                placeholder="Ilmu Pemerintahan"
                className="w-full"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <User size={16} className="mr-2 text-blue-600" />
                Jabatan *
              </label>
              <Input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                placeholder="Dosen / Lektor / Profesor"
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pesan / Motivasi Bergabung
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ceritakan alasan Anda ingin bergabung dengan ADIPSI..."
              rows={4}
              className="w-full"
            />
          </div>

          <div className="flex space-x-4 pt-4">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-6 text-lg font-semibold"
            >
              Batal
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Send className="mr-2" size={20} />
              Kirim Pendaftaran
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;