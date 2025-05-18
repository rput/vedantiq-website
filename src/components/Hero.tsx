import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Bot } from 'lucide-react';
import GradientButton from './ui/GradientButton';
import FloatingElements from './animations/FloatingElements';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import InteractiveParticlesSection from './animations/InteractiveParticlesSection'; // Re-added import

// Import images (adjust paths if your actual image names are different)
import heroImg1 from '../images/satellite-aerial-photos-of-earth-2.jpg';
import heroImg2 from '../images/satellite-aerial-photos-of-earth-5.jpg';
import heroImg3 from '../images/satellite-aerial-photos-of-earth-9.jpg';
import heroImg4 from '../images/satellite-aerial-photos-of-earth-11.jpg';
import heroImg5 from '../images/satellite-aerial-photos-of-earth-13.jpg';
import heroImg6 from '../images/satellite-aerial-photos-of-earth-21.jpg';
import heroImg7 from '../images/satellite-aerial-photos-of-earth-23.jpg';
import heroImg8 from '../images/satellite-aerial-photos-of-earth-26.jpg';
import heroImg9 from '../images/satellite-aerial-photos-of-earth-28.jpg';
import heroImg10 from '../images/satellite-aerial-photos-of-earth-35.jpg';

const allImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6, heroImg7, heroImg8, heroImg9, heroImg10];
const MOSAIC_TILE_COUNT = 4; // For a 2x2 grid
const TILE_CHANGE_INTERVAL_MS = 4000; // Changed from 8000ms for more frequent switching
const INITIAL_APPEARANCE_DURATION_S = 0; // Set to 0 for instant initial appearance
const SUBSEQUENT_FADE_DURATION_S = 7.0; // Slow cross-fade for subsequent changes

interface MosaicTileState {
  id: number;
  currentImage: string;
  // We also need a unique key for AnimatePresence if images can repeat immediately
  // For now, currentImage string itself will serve as the key for the motion.div
}

// Helper to get a random image, excluding a list of specified images.
const getRandomImage = (excludeList: string[] = []): string => {
  if (allImages.length === 0) return '';
  const availableImages = allImages.filter(img => !excludeList.includes(img));
  if (availableImages.length === 0) {
    // Fallback if all images are somehow excluded (e.g., too few images for too many tiles)
    // For a 4-tile mosaic and 10 images, this should be very rare.
    return allImages[Math.floor(Math.random() * allImages.length)];
  }
  return availableImages[Math.floor(Math.random() * availableImages.length)];
};

const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Hero: React.FC = () => {
  const [mosaicTiles, setMosaicTiles] = useState<MosaicTileState[]>(() => {
    const initialTiles: MosaicTileState[] = [];
    const usedImages: string[] = [];
    for (let i = 0; i < MOSAIC_TILE_COUNT; i++) {
      const image = getRandomImage(usedImages);
      usedImages.push(image);
      initialTiles.push({ id: i, currentImage: image });
    }
    return initialTiles;
  });

  const [isInitialRenderComplete, setIsInitialRenderComplete] = useState(false);

  useEffect(() => {
    // Preload all images once on component mount
    allImages.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, []); // Empty dependency array ensures this runs only once for preloading

  useEffect(() => {
    // This effect runs once after the initial render to mark it as complete.
    setIsInitialRenderComplete(true);
  }, []); 

  const updateTileImage = useCallback((tileId: number) => {
    setMosaicTiles((prevTiles) =>
      prevTiles.map((tile) => {
        if (tile.id === tileId) {
          const otherImagesInGrid = prevTiles
            .filter(t => t.id !== tileId)
            .map(t => t.currentImage);
          const imageToExclude = [tile.currentImage, ...otherImagesInGrid];
          return { ...tile, currentImage: getRandomImage(imageToExclude) };
        }
        return tile;
      })
    );
  }, []);

  useEffect(() => {
    // This effect is now solely for setting up and cleaning up intervals for tile changes.
    const cleanupFunctions: (() => void)[] = [];
    for (let i = 0; i < MOSAIC_TILE_COUNT; i++) {
      const tileId = i;
      // Stagger the initial start of each tile's interval slightly
      const initialDelay = Math.random() * (TILE_CHANGE_INTERVAL_MS / 2);
      const timeoutId = setTimeout(() => {
        updateTileImage(tileId); // Initial update call
        const intervalId = setInterval(() => {
          updateTileImage(tileId);
        }, TILE_CHANGE_INTERVAL_MS + Math.random() * 3000); // Slightly increased max random stagger
        cleanupFunctions.push(() => clearInterval(intervalId));
      }, initialDelay);
      cleanupFunctions.push(() => clearTimeout(timeoutId));
    }
    return () => cleanupFunctions.forEach(cleanup => cleanup());
  }, [updateTileImage]);

  return (
    <section
      id="home"
      className="min-h-screen pt-16 relative overflow-hidden flex items-center"
    >
      {/* New Opaque Dark Panel - Rendered first in DOM for this group of background elements */}
      <div className="absolute inset-0 bg-neutral-900 z-1"></div>

      {/* Particles - Rendered after dark panel in DOM, but visually behind it due to z-0 */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticlesSection />
      </div>

      {/* Mosaic Background Grid - Sits on top of the dark panel */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 w-full h-full z-2">
        {mosaicTiles.map((tile) => (
          <div
            key={tile.id}
            className="relative w-full h-full bg-cover bg-center overflow-hidden"
          >
            <AnimatePresence>
              <motion.div
                key={tile.currentImage}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${tile.currentImage})` }}
                variants={imageVariants}
                initial={isInitialRenderComplete ? "initial" : "animate"}
                animate="animate"
                exit="exit"
                transition={isInitialRenderComplete ? {
                  duration: SUBSEQUENT_FADE_DURATION_S,
                  ease: "easeInOut"
                } : { duration: 0 }}
              />
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Overlay and Foreground Content - Overlay sits on top of images */}
      <div className="absolute inset-0 bg-black/40 z-3"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center animate-slide-up text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">
            Harnessing the Power of AI for a Better World
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-12 animate-slide-up delay-100 [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">
            Verdantiq helps organizations utilize artificial intelligence to create 
            positive change, sustainable growth, and meaningful impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-200">
            <GradientButton
              href="#contact"
              className="min-w-40 flex items-center justify-center"
              primary
            >
              Start a Conversation
            </GradientButton>
            <GradientButton
              href="#services"
              className="min-w-40 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30"
            >
              Explore Our Services
            </GradientButton>
          </div>
          
          <div className="mt-20 text-center animate-fade-in delay-500">
            <a 
              href="#services" 
              className="inline-flex flex-col items-center text-white/70 hover:text-white transition-colors"
            >
              <span className="text-sm font-medium mb-2">Discover More</span>
              <ChevronDown className="h-6 w-6 animate-float" />
            </a>
          </div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div> */}
    </section>
  );
};

export default Hero;