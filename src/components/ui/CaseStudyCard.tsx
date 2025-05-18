import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  url: string;
  delay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  image,
  category,
  title,
  description,
  url,
  delay = 0,
}) => {
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
      className={`group overflow-hidden rounded-xl bg-white shadow-sm border border-neutral-100 transition-all duration-500 hover:shadow-md ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-600">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-neutral-800">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 font-medium transition-colors duration-300 hover:text-primary-700"
        >
          <span>Read More</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;