import React from 'react';
import { Download, FileText, Zap } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900" id="download">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Start mining, building, and trading on TAU with just your smartphone. Be part of the future of decentralized technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="#download-app" 
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <Download className="h-8 w-8 mb-3" />
              <span className="text-lg">Download App</span>
              <span className="text-sm text-gray-400">Available for iOS & Android</span>
            </a>
            
            <a 
              href="#whitepaper" 
              className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <FileText className="h-8 w-8 mb-3" />
              <span className="text-lg">Read Whitepaper</span>
              <span className="text-sm text-gray-500">Technical details & vision</span>
            </a>
            
            <a 
              href="#start-mining" 
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <Zap className="h-8 w-8 mb-3" />
              <span className="text-lg">Start Mining</span>
              <span className="text-sm text-gray-400">Quick setup guide</span>
            </a>
          </div>
          
          <p className="mt-12 text-gray-900 max-w-2xl mx-auto text-sm">
            By downloading and using the TAU app, you agree to our Terms of Service and Privacy Policy.
            No expensive hardware required—start mining with just your phone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;