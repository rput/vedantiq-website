import React from 'react';
import SectionHeader from './ui/SectionHeader';
import CaseStudyCard from './ui/CaseStudyCard';
import carnegieImage from '../images/carnegie.jpg';
import vineviewImage from '../images/vineview.jpg';
import foodaidImage from '../images/foodaid.jpg';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      image: carnegieImage,
      category: 'Education Technology',
      title: 'Carnegie Learning: AI-Powered K-12 Education',
      description: "Carnegie Learning's MATHia platform uses AI to provide personalized math tutoring, helping students master concepts efficiently and supporting educators with actionable insights. This fosters equitable learning and empowers future generations.",
      url: 'https://www.carnegielearning.com/solutions/math/mathia/',
    },
    {
      image: vineviewImage,
      category: 'Sustainable Agriculture',
      title: 'VineView: AI for Precision Viticulture',
      description: 'VineView leverages AI and aerial imagery for precise vineyard management, enabling optimized resource use like water and fertilizer. This promotes sustainable farming, improves grape quality, and supports environmental well-being.',
      url: 'https://vineview.com/',
    },
    {
      image: foodaidImage,
      category: 'Humanitarian Aid',
      title: 'ML4AA: AI for Proactive Crisis Response',
      description: "The Machine Learning for Anticipatory Action (ML4AA) initiative, with partners like the UN World Food Programme, uses AI to predict crises like droughts. This enables proactive resource allocation, saving lives by delivering aid before disaster strikes.",
      url: 'https://innovation.wfp.org/project/ai-sandbox',
    },
  ];

  return (
    <section id="case-studies" className="section-padding bg-neutral-50">
      <div className="container mx-auto container-padding">
        <SectionHeader
          subtitle="Case Studies"
          title="Real-World Positive Impact"
          description="Explore how AI solutions are making a meaningful difference for people and communities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              image={study.image}
              category={study.category}
              title={study.title}
              description={study.description}
              url={study.url}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;