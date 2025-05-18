import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Award, Heart } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary-600" />,
      title: 'AI for Human Flourishing',
      description: 'We believe AI should be developed and used responsibly, with human well-being as the primary focus.',
    },
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions that make a real difference.',
    },
    {
      icon: <Heart className="h-6 w-6 text-primary-600" />,
      title: 'Positive Impact',
      description: 'Our work aims to create meaningful, sustainable improvements in people\'s lives and communities.',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div ref={sectionRef} className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              subtitle="About Verdantiq"
              title="Our Mission and Values"
              description="At Verdantiq, we believe in the transformative power of AI to help solve some of humanity's greatest challenges. Our mission is to support organizations deploy this technology to create positive impact."
              alignment="left"
            />

            <div className="mt-12 space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 ${
                    isVisible 
                      ? 'animate-slide-in-right' 
                      : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">{value.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{value.title}</h3>
                    <p className="text-neutral-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg"
                alt="Tech team collaborating on AI solutions"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-primary-200 rounded-2xl transform translate-x-6 translate-y-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;