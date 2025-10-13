import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import KegiatanSection from './components/KegiatanSection';
import MitraSection from './components/MitraSection';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <KegiatanSection />
      <MitraSection />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
