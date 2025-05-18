import React, { useEffect, useRef, useState } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`service-card rounded-xl p-6 bg-white shadow-sm border border-neutral-100 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="rounded-full p-3 bg-primary-50 w-fit mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default ServiceCard;