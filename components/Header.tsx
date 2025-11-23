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

  const NavContent = (
    <div className="flex items-center justify-between gap-8">
      {/* Left Links */}
      <div className="flex items-center gap-6">
        <a href="#" className="text-base font-semibold text-gray-900 hover:text-gray-600 transition-colors">
          Overview
        </a>
        <a href="#" className="text-base font-semibold text-gray-900 hover:text-gray-600 transition-colors">
          Contact
        </a>
      </div>

      {/* Center Logo */}
      <div className="flex-1 flex justify-center">
        <Logo />
      </div>

      {/* Right Action */}
      <div className="flex justify-end">
        <button className="bg-[#E8D9C5] hover:bg-[#E1CFB8] text-gray-900 px-6 py-3 rounded-full text-base font-semibold transition-colors duration-300 shadow-sm">
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
            className="pointer-events-auto w-full px-5 md:px-8 flex justify-center pt-3 pb-3"
            initial={{ opacity: 0, y: -4, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full max-w-[960px] rounded-full bg-[#FCF4E8] shadow-[0_18px_40px_rgba(15,23,42,0.15)] px-6 py-3">
              {NavContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="2.5" fill="black" />
    <circle cx="5" cy="12" r="2.5" fill="black" />
    <circle cx="19" cy="12" r="2.5" fill="black" />
    <circle cx="12" cy="19" r="2.5" fill="black" />
    <path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default Header;