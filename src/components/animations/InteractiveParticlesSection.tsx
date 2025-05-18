import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim'; // or loadFull if you need more features

// Define colors from your Tailwind theme (adjust if your exact shades differ)
const primaryColor = '#22c55e'; // primary-500
const secondaryColor = '#3b82f6'; // secondary-500
const accentColor = '#f59e0b';   // accent-500
const neutralLight = '#a3a3a3'; // neutral-400 (for links, or lighter elements)
const neutralDark = '#525252';  // neutral-600

const InteractiveParticlesSection: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's big in XML so learn from official docs on how to define the XML schema
    await loadSlim(engine);
    // await loadFull(engine); // if you need the full bundle
  }, []);

  // const particlesLoaded = useCallback(async (container: Container | undefined) => {
  //   await console.log(container);
  // }, []);

  const particleOptions = {
    autoPlay: true,
    background: {
      color: {
        value: 'transparent', // Transparent background for the canvas itself
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0, // Changed from 5 to 0 to be behind most content but visible
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push', // Add a few particles on click
        },
        onHover: {
          enable: true,
          mode: 'grab', // Creates a connection line and makes particles interactive
          parallax: {
            enable: true,
            force: 60,
            smooth: 10,
          },
        },
        resize: { enable: true }, 
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 150,
          links: {
            opacity: 0.5,
            color: neutralLight,
          },
        },
        // repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: {
        value: [primaryColor],
        animation: {
            enable: false,
            speed: 20,
            sync: true
        }
      },
      links: {
        color: neutralLight,
        distance: 150,
        enable: true,
        opacity: 0.2, // Faint general links
        width: 1,
      },
      collisions: {
        enable: false, // Keep false for smoother flow, true can be chaotic
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: {
          default: 'out' as const, // Particles disappear when they go out of bounds
        },
        random: true,
        speed: 1, // Slow general movement
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800, // Adjust for desired particle density
        },
        value: 80, // Base number of particles
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.4
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      shape: {
        type: 'circle' as const,
      },
      size: {
        value: { min: 1, max: 4 },
        animation: {
            enable: true,
            speed: 5,
            minimumValue: 0.1,
            sync: false
        }
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // loaded={particlesLoaded}
      options={particleOptions as any} // Cast to any to bypass deep type checking issues with complex options
      className="absolute inset-0 w-full h-full" // Ensures it covers the parent (App.tsx main div)
    />
  );
};

export default InteractiveParticlesSection; 