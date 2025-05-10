import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Technology from './components/Technology';
import Ecosystem from './components/Ecosystem';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './css/animations.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'TAU Blockchain - Phone-Based Mining Revolution';
    
    // Add favicon if missing
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'shortcut icon';
    link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23FFCC00'/%3E%3Ctext x='12' y='16' font-family='Arial' font-size='14' text-anchor='middle' fill='%23000'%3Eτ%3C/text%3E%3C/svg%3E";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Technology />
      <Ecosystem />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;