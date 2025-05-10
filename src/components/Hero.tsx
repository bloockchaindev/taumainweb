import React from 'react';
import { Download, FileText, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwVjBoLTJ2MzRoMnptLTYgMGgtMlYwaDJ2MzR6bS04IDBoLTJWMGgydjM0em0tOCAwaC0yVjBoMnYzNHptMzYtOGgtMnYtNGgydjR6bTAgMTJoLTJ2LThoMnY4eiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]"></div>
        
        {/* Animated dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: Math.random() * 8 + 2 + 'px',
              height: Math.random() * 8 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
            Introducing TAU Protocol
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionize Blockchain with
            <span className="text-yellow-400 block mt-2">Just a Phone</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            TAU empowers individuals to mine, build, and trade blockchain assets from their smartphones — with zero reliance on servers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a 
              href="#download" 
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download App
            </a>
            <a 
              href="#whitepaper" 
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Read Whitepaper
            </a>
            <a 
              href="#telegram" 
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Join Community
            </a>
          </div>
          
          {/* Phone mockup */}
          <div className="relative mx-auto max-w-xs md:max-w-sm">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-800">
              <img 
                src="https://images.pexels.com/photos/8370776/pexels-photo-8370776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="TAU Blockchain App"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl">
              τ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;