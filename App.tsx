import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import PhoneSection from './components/PhoneSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LoaderScreen from './components/LoaderScreen';
import FallingStars from './components/FallingStars';

const App: React.FC = () => {
  const [showLoader, setShowLoader] = React.useState(true);

  // We use the main container scroll progress to drive the background color
  const { scrollYProgress } = useScroll();

  // Smoothly interpolate background color from Warm Cream (top) to a Soft Cool Gray/White (bottom)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["#FFFBF7", "#FDFCFD", "#F5F5F7", "#F0F2F5"]
  );

  // Always start at top on (re)load
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      style={{ backgroundColor }}
      className="min-h-screen w-full relative overflow-hidden flex flex-col"
    >
      {showLoader && <LoaderScreen onComplete={() => setShowLoader(false)} />}

      <Header />

      <main className="flex-grow flex flex-col items-center w-full pt-0 pb-0 relative z-10">
        {/* Hero + Phone on shared background image */}
        <section className="w-full relative overflow-hidden">
          <div
            className="absolute inset-0 -z-20 bg-top bg-no-repeat bg-fixed bg-[length:100%_auto]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1538947151057-dfe933d688d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
          />

          <FallingStars />

          <div className="relative z-10 flex flex-col items-center pt-32 pb-20">
            <Hero />
            <PhoneSection />
          </div>
        </section>

        {/* Rest of page scrolls after the image section */}
        <section className="w-full flex flex-col items-center">
          <FAQ />
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default App;