import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import PhoneSection from './components/PhoneSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  // We use the main container scroll progress to drive the background color
  const { scrollYProgress } = useScroll();
  
  // Smoothly interpolate background color from Warm Cream (top) to a Soft Cool Gray/White (bottom)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["#FFFBF7", "#FDFCFD", "#F5F5F7", "#F0F2F5"]
  );

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="min-h-screen w-full relative overflow-hidden flex flex-col"
    >
      <Header />
      
      <main className="flex-grow flex flex-col items-center w-full pt-32 pb-0 relative z-10">
        <Hero />
        <PhoneSection />
        <FAQ />
      </main>

      <Footer />
    </motion.div>
  );
};

export default App;