import React from 'react';
import { Github, Instagram as Telegram, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-bold text-xl mr-3">
                τ
              </div>
              <h2 className="font-bold text-xl">TAU Blockchain</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing blockchain technology with phone-based mining and true decentralization.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 flex items-center justify-center transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 flex items-center justify-center transition-colors duration-300"
              >
                <Telegram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@tau.net" 
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 flex items-center justify-center transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#whitepaper" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Whitepaper</a>
              </li>
              <li>
                <a href="#documentation" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Documentation</a>
              </li>
              <li>
                <a href="#github" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">GitHub</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Blog</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#telegram" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Telegram</a>
              </li>
              <li>
                <a href="#discord" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Discord</a>
              </li>
              <li>
                <a href="#twitter" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Twitter</a>
              </li>
              <li>
                <a href="#forum" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Forum</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Events</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Terms of Use</a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#license" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">License</a>
              </li>
            </ul>
            
            <button 
              onClick={scrollToTop}
              className="mt-8 h-10 w-10 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2024 TAU Blockchain Project. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;