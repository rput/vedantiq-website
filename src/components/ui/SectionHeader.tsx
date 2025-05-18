import React, { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
  alignment?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  alignment = 'center',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

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

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const textAlign = alignment === 'center' ? 'text-center' : 'text-left';
  const maxWidth = alignment === 'center' ? 'max-w-3xl mx-auto' : '';

  return (
    <div
      ref={headerRef}
      className={`${maxWidth} ${textAlign}`}
    >
      <span 
        className={`inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-4 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        {subtitle}
      </span>
      
      <h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          isVisible ? 'animate-slide-up' : 'opacity-0'
        }`}
      >
        {title}
      </h2>
      
      <p 
        className={`text-lg text-neutral-600 ${
          isVisible ? 'animate-slide-up delay-100' : 'opacity-0'
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;