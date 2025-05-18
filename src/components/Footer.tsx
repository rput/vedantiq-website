import React from 'react';
import { Leaf, Heart } from 'lucide-react';
import logoWhite from '../images/logo_white_240.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img src={logoWhite} alt="Verdantiq" className="h-8 w-auto" />
              <span className="text-xl font-bold text-white">Verdantiq</span>
            </a>
            <p className="text-neutral-400 mb-6">
              Developing AI solutions that empower humanity, create positive change, and foster sustainable growth.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.036 10.036 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.82 4.82 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#team" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  AI Implementation
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  AI Training & Education
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Data Protection
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container mx-auto container-padding py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Verdantiq. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm flex items-center">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-primary-500" />
            <span>for a better world</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;