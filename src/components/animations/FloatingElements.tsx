import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Decorative elements - enhanced with varied animations */}
      <div className="absolute top-1/4 right-1/5 w-64 h-64 rounded-full bg-primary-200/20 filter blur-3xl animate-float animation-duration-[8000ms]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-secondary-300/15 filter blur-3xl animate-float animation-duration-[10000ms] animation-delay-[-1500ms]"></div>
      <div className="absolute top-1/2 left-2/3 w-40 h-40 rounded-full bg-accent-200/25 filter blur-3xl animate-float animation-duration-[7000ms] animation-delay-[-500ms]"></div>
      
      {/* Small leaf-like patterns */}
      <div className="hidden md:block absolute top-1/4 left-16 w-8 h-16 border-2 border-primary-300/40 rounded-full transform rotate-45"></div>
      <div className="hidden md:block absolute bottom-1/3 right-24 w-6 h-12 border-2 border-primary-400/30 rounded-full transform -rotate-30"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-4 h-8 border-2 border-accent-400/30 rounded-full transform rotate-15"></div>
    </div>
  );
};

export default FloatingElements;