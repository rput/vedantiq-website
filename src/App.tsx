import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/animations/SmoothScroll';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main>
        <SmoothScroll>
          <Hero />
          <Services />
          <About />
          <CaseStudies />
          <Team />
          <Contact />
        </SmoothScroll>
      </main>
      <Footer />
    </div>
  );
}

export default App;