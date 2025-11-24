import React from 'react';
import { useScroll, motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = scrollY.on('change', (v) => {
      // As soon as user scrolls a little, switch to condensed nav
      setCondensed(v > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (elementId === 'overview-section') {
        // For overview, scroll further into the section to hide hero completely
        const elementPosition = element.getBoundingClientRect().top;
        const additionalOffset = 200; // Extra space to ensure hero is completely hidden
        const offsetPosition = elementPosition + window.pageYOffset - 100 + additionalOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Normal scroll for other sections
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const NavContent = (
    <div className="flex items-center justify-between gap-8">
      {/* Left Links */}
      <div className="flex items-center gap-6">
        <button 
          onClick={() => handleScrollTo('overview-section')}
          className="text-base font-semibold text-white hover:text-white/80 transition-colors cursor-pointer"
        >
          Overview
        </button>
        <button 
          onClick={() => handleScrollTo('qa-section')}
          className="text-base font-semibold text-white hover:text-white/80 transition-colors cursor-pointer"
        >
          Q and A
        </button>
      </div>

      {/* Center Logo + Brand */}
      <div className="flex-1 flex justify-center">
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Logo />
          <span className="text-2xl font-serif font-semibold tracking-tight text-white drop-shadow-sm">
            iotaAI
          </span>
        </button>
      </div>

      {/* Right Action */}
      <div className="flex justify-end">
        <button className="bg-transparent text-white px-0 py-0 text-base font-semibold hover:text-white/80 transition-colors duration-200">
          Join waitlist
        </button>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <AnimatePresence initial={false} mode="wait">
        {!condensed ? (
          <motion.div
            key="expanded-nav"
            className="pointer-events-auto w-full px-5 md:px-8 pt-7 pb-5"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {NavContent}
          </motion.div>
        ) : (
          <motion.div
            key="condensed-nav"
            className="pointer-events-auto w-full px-5 md:px-8 flex justify-center pt-4 pb-4"
            initial={{ opacity: 0, y: -4, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full max-w-[960px] rounded-full bg-neutral-900/95 backdrop-blur-sm shadow-[0_18px_40px_rgba(15,23,42,0.35)] px-6 py-4">
              {NavContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Logo = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="2.5" fill="white" />
    <circle cx="5" cy="12" r="2.5" fill="white" />
    <circle cx="19" cy="12" r="2.5" fill="white" />
    <circle cx="12" cy="19" r="2.5" fill="white" />
    <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default Header;