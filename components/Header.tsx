import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 bg-transparent backdrop-blur-[2px]">
      {/* Left Links */}
      <div className="flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
          Overview
        </a>
        <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
          Contact
        </a>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Logo />
      </div>

      {/* Right Action */}
      <div>
        <button className="bg-[#F2F0ED] hover:bg-[#E8E6E3] text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300">
          Join waitlist
        </button>
      </div>
    </nav>
  );
};

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="2.5" fill="black"/>
    <circle cx="5" cy="12" r="2.5" fill="black"/>
    <circle cx="19" cy="12" r="2.5" fill="black"/>
    <circle cx="12" cy="19" r="2.5" fill="black"/>
    <path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default Header;