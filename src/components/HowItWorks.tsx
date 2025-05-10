import React from 'react';
import { Send, Database, Shield, Layers } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, number }) => {
  return (
    <div className="flex items-start mb-12 md:mb-0 relative">
      <div className="hidden md:block absolute top-0 bottom-0 left-12 w-0.5 bg-gray-200 -z-10"></div>
      <div className="mr-8 relative">
        <div className="h-24 w-24 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
          {icon}
        </div>
        <div className="absolute top-0 right-0 h-8 w-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 max-w-md">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Send className="h-10 w-10" />,
      title: "Send Transactions",
      description: "Users send transactions through their mobile app. Unlike traditional blockchains, TAU rewards active participants rather than just token holders."
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Gain Mining Power",
      description: "Your transaction activity gives you mining power through our unique Proof of Transaction (POT) consensus mechanism."
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Maintain Integrity",
      description: "Community bloom filters ensure chain integrity and security. Our system efficiently identifies and filters out malicious chains or blocks."
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Scale Through Parallelism",
      description: "Multiple chains run in parallel for different communities and use cases, ensuring unlimited scalability without compromising performance."
    }
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            Simple Yet Powerful
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">How TAU Works</h2>
          <p className="text-xl text-gray-600">
            TAU's innovative approach makes blockchain technology accessible to everyone
          </p>
        </div>

        <div className="md:w-4/5 lg:w-3/4 mx-auto">
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1">
            {steps.map((step, index) => (
              <Step
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                number={index + 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#download" 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
          >
            Start Mining Today
            <svg 
              className="w-5 h-5" 
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

export default HowItWorks;