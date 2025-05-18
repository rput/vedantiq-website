import React from 'react';
import { Brain, LineChart, Shield, Code, Award, Users } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import ServiceCard from './ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary-600" />,
      title: 'AI Implementation',
      description: 'Develop and deploy customized AI solutions that solve real problems effectively and for the betterment of humanity.',
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary-600" />,
      title: 'Predictive Analytics',
      description: 'Leverage AI to forecast trends, anticipate outcomes, and make data-driven decisions that drive positive change and future success.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: 'AI Training & Education',
      description: 'Empower your team with the knowledge and skills needed to work effectively with AI technology and drive innovation.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container mx-auto container-padding">
        <SectionHeader
          subtitle="Our Services"
          title="AI Solutions for a Brighter Future"
          description="We provide comprehensive AI consulting and software development services focused on creating positive impact and creating solutions that benefit people and communities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;