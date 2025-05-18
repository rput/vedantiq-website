import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  bio,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const memberRef = useRef<HTMLDivElement>(null);

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

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={memberRef}
      className={`group ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-3">
            <a
              href="#"
              className="bg-white/90 p-2 rounded-full text-neutral-800 hover:bg-primary-600 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="bg-white/90 p-2 rounded-full text-neutral-800 hover:bg-primary-600 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="bg-white/90 p-2 rounded-full text-neutral-800 hover:bg-primary-600 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-primary-600 font-medium text-sm mb-2">{role}</p>
      <p className="text-neutral-600 text-sm">{bio}</p>
    </div>
  );
};

export default TeamMember;