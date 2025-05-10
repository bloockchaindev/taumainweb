import React from 'react';
import { Video, Car, Building } from 'lucide-react';

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const UseCaseCard: React.FC<UseCase> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className={`mb-4 rounded-full h-14 w-14 flex items-center justify-center ${color.replace('bg-', 'bg-').replace('500', '100')} ${color.replace('bg-', 'text-')}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Ecosystem: React.FC = () => {
  const useCases: UseCase[] = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Decentralized YouTube",
      description: "Host video content without centralized servers. Creators own their content and relationship with viewers directly, with no algorithmic gatekeeping.",
      color: "bg-purple-500"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "No Middleman Uber",
      description: "Connect drivers and riders directly through the TAU network. Lower fees, no corporate control, and a fairer economy for all participants.",
      color: "bg-blue-500"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "DAO Communities",
      description: "Create your own parallel blockchain for your community or business. Set rules, issue tokens, and build a democratic economy on TAU.",
      color: "bg-green-500"
    }
  ];

  const roadmapItems = [
    {
      year: "2020",
      title: "Project Research",
      description: "Research have been completed after several testing phase",
      status: "Completed"
    },
    {
      year: "2022",
      title: "Core Development",
      description: "Implemented core DHT functionality and POT consensus mechanism",
      status: "Completed"
    },
    {
      year: "2024",
      title: "Mobile App Beta",
      description: "First mobile application with wallet and mining capabilities",
      status: "Completed"
    },
    {
      year: "2025 Q2",
      title: "Testnet Launch",
      description: "Production-ready TAU network with full security features",
      status: "In Progress"
    },
    {
      year: "2025 Q3",
      title: "Multi-Chain Support",
      description: "Tools for launching parallel blockchains with custom parameters",
      status: "Planned"
    },
    {
      year: "2025 Q4",
      title: "Developer SDK",
      description: "Comprehensive toolkit for building applications on TAU",
      status: "Planned"
    },
    {
      year: "2026 Q1",
      title: "App Ecosystem",
      description: "First decentralized applications built on the TAU protocol",
      status: "Planned"
    },
    {
      year: "2026 Q4",
      title: "Mainnet Launch",
      description: "Switching to fully open-source",
      status: "Planned"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="ecosystem">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
            Beyond Currency
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ecosystem & Vision</h2>
          <p className="text-xl text-gray-600">
            TAU is more than a cryptocurrency—it's a foundation for a new generation of truly decentralized applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              color={useCase.color}
            />
          ))}
        </div>
        
        {/* Roadmap */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Project Roadmap</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-yellow-400 z-10"></div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                    <div className="inline-block mb-1 px-2 py-1 rounded text-sm font-medium bg-gray-100 text-gray-800">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-bold mb-1 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <span className={`text-sm font-medium inline-block px-2 py-1 rounded ${
                      item.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : item.status === 'In Progress' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;