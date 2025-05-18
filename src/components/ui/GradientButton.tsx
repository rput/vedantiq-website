import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className = '',
  href,
  onClick,
  primary = false,
  secondary = false,
  small = false,
  type = 'button',
}) => {
  const baseStyles = `
    rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50
    transform hover:scale-105 focus:scale-105 active:scale-95
    ${small ? 'text-sm px-4 py-2' : 'px-6 py-3'}
    ${className}
  `;

  const gradientStyles = primary
    ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white focus:ring-primary-500'
    : secondary
    ? 'bg-gradient-to-r from-secondary-700 to-secondary-800 hover:from-secondary-800 hover:to-secondary-900 text-white focus:ring-secondary-600'
    : 'bg-white text-primary-600 border border-primary-200 hover:border-primary-300 focus:ring-primary-200';

  const buttonStyles = `${baseStyles} ${gradientStyles}`;

  if (href) {
    return (
      <a href={href} className={buttonStyles} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default GradientButton;