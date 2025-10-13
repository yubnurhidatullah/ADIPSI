import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import KegiatanSection from './components/KegiatanSection';
import MitraSection from './components/MitraSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import { Toaster } from './components/ui/toaster';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <KegiatanSection />
      <MitraSection />
      <GallerySection />
      <ContactSection />
    </>
  );
};

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
