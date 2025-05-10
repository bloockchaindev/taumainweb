import React from 'react';
import { Hash, Fingerprint, Network, Shield } from 'lucide-react';

interface TechItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechItem: React.FC<TechItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Technology: React.FC = () => {
  const techItems = [
    {
      icon: <Hash className="h-6 w-6" />,
      title: "Consensus: Proof of Transaction (POT)",
      description: "Our innovative consensus mechanism rewards active network participation rather than computational power or stake holding."
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Network: Distributed Hash Table (DHT)",
      description: "TAU leverages BitTorrent technology for serverless communication and efficient block propagation through DHT and BEP 44."
    },
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "Security: Bloom Filter Validation",
      description: "Advanced bloom filters enable efficient identification and filtering of malicious chains or blocks, ensuring network integrity."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Code: Open-source on GitHub",
      description: "Our codebase is fully open-source, allowing for transparency, community contributions, and continuous improvement."
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white" id="technology">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block mb-4 bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              Advanced Infrastructure
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              TAU combines proven technologies in novel ways to create a truly decentralized, 
              lightweight blockchain infrastructure perfect for mobile devices.
            </p>
            
            <div className="space-y-8">
              {techItems.map((item, index) => (
                <TechItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors gap-2"
              >
                View on GitHub
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-800">
              <div className="p-1 bg-gray-800 flex space-x-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-gray-900 p-6 font-mono text-sm text-green-400 h-96 overflow-y-auto">
                <code className="block mb-3">$ tau-node init</code>
                <code className="block mb-3">Initializing TAU node v0.2.1...</code>
                <code className="block mb-3">Generating crypto keypair...</code>
                <code className="block mb-3">Creating DHT connection...</code>
                <code className="block mb-3">Connected to 18 peers</code>
                <code className="block mb-3">Syncing blockchain...</code>
                <code className="block mb-3">[#####################] 100%</code>
                <code className="block mb-3">Current block height: 1049258</code>
                <code className="block mb-3">DHT routing table initialized</code>
                <code className="block mb-3">Bloom filters configured</code>
                <code className="block mb-3">Mining through POT activated</code>
                <code className="block mb-3">Ready to process transactions</code>
                <code className="block mb-3">&nbsp;</code>
                <code className="block mb-3">$ tau-wallet balance</code>
                <code className="block mb-3">Address: T3x7ZqNVfJ9xKvMB...</code>
                <code className="block mb-3">Balance: 157.89 TAU</code>
                <code className="block mb-3">Transactions: 28 sent, 14 received</code>
                <code className="block mb-3">Mining power: 42.6 (based on POT)</code>
                <code className="block mb-3">&nbsp;</code>
                <code className="block mb-3">$ tau-wallet send</code>
                <code className="block mb-3">Amount: 10 TAU</code>
                <code className="block mb-3">To: T8jKpR2sBx4LmWn9...</code>
                <code className="block mb-3">Transaction submitted</code>
                <code className="block mb-3">Transaction ID: 0x7fde9...</code>
                <code className="block mb-3">Propagating through DHT...</code>
                <code className="block mb-3">Transaction confirmed!</code>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-blue-500 opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-yellow-400 opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;