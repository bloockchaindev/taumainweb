import React from 'react';
import { Smartphone, Split, Database, RefreshCw } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="h-14 w-14 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Proof of Transaction (POT)",
      description: "Earn by actively participating in the network, not just holding. Our unique consensus mechanism rewards actual usage over hoarding tokens."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Phone Mining",
      description: "Start mining with just your smartphone — no expensive hardware or energy-intensive setups required. TAU is designed to be accessible to everyone."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Decentralized Social Networks",
      description: "Own your connections and data with immutable social graphs. TAU transforms relationships into a decentralized public good that no company controls."
    },
    {
      icon: <Split className="h-8 w-8" />,
      title: "Parallel Blockchains",
      description: "Unlimited scalability through parallel independent chains. Each community can create their own blockchain with separate coins and customized rules."
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            Revolutionary Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Key Innovations</h2>
          <p className="text-xl text-gray-600">
            TAU reimagines blockchain from the ground up with these groundbreaking features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#whitepaper" 
            className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-800 transition-colors gap-1 group"
          >
            Learn more about our technology
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h13" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;