import React, { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only apply animations if it's NOT the hero section
            if (entry.target.id !== 'home') {
              entry.target.classList.add('animate-fade-in');
              (entry.target as HTMLElement).style.opacity = '1';
            }
            // observerRef.current?.unobserve(entry.target); // Keep observing for now
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of the element is visible
        rootMargin: '0px', // trigger exactly at viewport edge
      }
    );

    // Select all sections and headings to animate
    const sections = document.querySelectorAll('section');
    const headings = document.querySelectorAll('h2, h3');

    // Add initial invisible class to elements
    sections.forEach((section) => {
      if (section.id !== 'home') {
        section.classList.add('opacity-0');
        observerRef.current?.observe(section);
      } else {
        // For the hero section, just observe it without changing opacity
        observerRef.current?.observe(section);
      }
    });

    headings.forEach((heading) => {
      if (!heading.closest('.animate-fade-in')) {
        heading.classList.add('opacity-0');
        observerRef.current?.observe(heading);
      }
    });

    return () => {
      // Clean up observer on component unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;