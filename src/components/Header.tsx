import React, { useState, useEffect } from 'react';
import { Menu, X, Github, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-bold text-xl">
                τ
              </div>
            </div>
            <h1 className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              TAU Blockchain
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Whitepaper', 'GitHub', 'Telegram', 'Start Mining', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            
            <a 
              href="#download"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Download App
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 md:hidden ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {['Whitepaper', 'GitHub', 'Telegram', 'Start Mining', 'FAQ'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-white text-2xl font-medium hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
        <a 
          href="#download"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-8 rounded-full text-xl transition-all duration-300 mt-4"
          onClick={() => setIsOpen(false)}
        >
          Download App
        </a>
        
        <div className="flex space-x-6 mt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;