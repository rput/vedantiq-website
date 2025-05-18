import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoGreen from '../images/logo_green_240.png';
import logoWhite from '../images/logo_white_240.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={isScrolled ? logoGreen : logoWhite} 
            alt="Verdantiq" 
            className="h-8 w-auto"
          />
          <span className={`text-xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
            Verdantiq
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`button ${isScrolled ? 'button-primary' : 'bg-white/10 text-white hover:bg-white/20'} text-sm backdrop-blur-sm`}
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-neutral-800' : 'text-white'} focus:outline-none`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-slide-up">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-800 font-medium py-2 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="button button-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;