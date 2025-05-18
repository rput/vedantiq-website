import React from 'react';
import SectionHeader from './ui/SectionHeader';
import teamImage from '../images/team.png'; // Added import for the team image
// import TeamMember from './ui/TeamMember'; // No longer needed

const Team: React.FC = () => {
  // const teamMembers = [ ... ]; // Removed teamMembers array

  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto container-padding">
        <SectionHeader
          subtitle="Our Collective Expertise"
          title="A Global Team with a Shared Vision"
          description="Verdantiq is powered by a dedicated group of professionals committed to using AI for positive global impact."
        />

        <div className="mt-12 max-w-3xl mx-auto text-center">
          {/* Placeholder for a representative team image */}
          <div className="mb-8 flex justify-center">
            <img 
              src={teamImage} // Updated image source
              alt="The Verdantiq Team - Experts in AI, Web Development, and Data Science" // Updated alt text
              className="rounded-lg shadow-lg object-cover max-w-full h-auto md:max-w-xl lg:max-w-2xl"
            />
          </div>

          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
            We are a proudly Canadian company with a global team of developers, AI specialists, and data strategists all sharing a common goal: to create positive impact. Our strength lies in deep technical expertise in AI solutions, full-stack web development, and advanced data science, delivering cutting-edge, scalable AI applications that drive innovation and tangible results for our clients.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Team;