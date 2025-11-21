import React from 'react';
import { Star, Trophy, Medal, ChevronRight } from 'lucide-react';

const reviews = [
  {
    text: "The custom agent builder and API integration platform is perfect for our dev team and growing our business scaling capabilities.",
    name: "Steven F",
    img: "https://picsum.photos/100/100?random=30"
  },
  {
    text: "With Super Agent I keep all data privacy controls and only pay minimal fees for the compute I use. It's transparent and scalable.",
    name: "Mohammad A",
    img: "https://picsum.photos/100/100?random=33"
  },
  {
    text: "Super Agent has almost everything you need to run your automation agency online. An awesome partner to have for scaling.",
    name: "Jake A",
    img: "https://picsum.photos/100/100?random=36"
  },
  {
    text: "Super Agent has been an absolute lifesaver when it comes to minimizing manual data entry fees and driving direct automation workflows.",
    name: "Tara B",
    img: "https://picsum.photos/100/100?random=31"
  },
  {
    text: "My support agents operate 24/7, yet Super Agent's technical support has ALWAYS been active and able to help me with any complex logic concerns!",
    name: "Daryl E",
    img: "https://picsum.photos/100/100?random=34"
  },
  {
    text: "They are helping us take back more control of our business and compete with larger companies because the technology is great!",
    name: "Michael B",
    img: "https://picsum.photos/100/100?random=37"
  },
  {
    text: "My automated dashboard looks awesome. I'm handling 10x the volume without hiring extra staff. It's incredible.",
    name: "Alex M",
    img: "https://picsum.photos/100/100?random=32"
  },
  {
    text: "Why isn't every startup using this system? My velocity is at an all time high, because I am retaining developer focus on core product.",
    name: "Sarah J",
    img: "https://picsum.photos/100/100?random=35"
  },
  {
    text: "Exceptional customer service from start to finish every step of the process has been an enjoyable experience.",
    name: "Emily R",
    img: "https://picsum.photos/100/100?random=38"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-24 relative z-20 font-sans text-[#111]">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-4xl md:text-[52px] leading-[1.1] font-medium tracking-tight mb-8">
          See why we're rated #1<br />
          in AI automation
        </h2>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="bg-[#E6E2DD] rounded-lg px-4 py-2 flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-md shadow-sm flex items-center justify-center">
              <Trophy size={16} className="text-blue-600" fill="currentColor" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">Rated #1</div>
              <div className="text-xs font-bold">AI Automation Platform</div>
            </div>
          </div>

          <div className="bg-[#E6E2DD] rounded-lg px-4 py-2 flex items-center gap-3">
             <div className="w-8 h-8 bg-white rounded-md shadow-sm flex items-center justify-center">
              <Medal size={16} className="text-red-500" fill="currentColor" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">Leader Position</div>
              <div className="text-xs font-bold">Winter 2025</div>
            </div>
          </div>
        </div>

        {/* Link */}
        <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
          Over 250 5-star reviews on G2 and Capterra
        </a>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 relative">
        {reviews.map((review, i) => (
          <div 
            key={i} 
            className="break-inside-avoid bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow"
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={14} fill="#111" className="text-[#111]" />
              ))}
            </div>

            {/* Text */}
            <p className="text-[15px] leading-relaxed text-gray-800 font-medium">
              {review.text}
            </p>

            {/* User */}
            <div className="flex items-center gap-3 mt-2">
              <img 
                src={review.img} 
                alt={review.name} 
                className="w-8 h-8 rounded-full object-cover grayscale"
              />
              <span className="text-sm font-semibold text-[#111]">{review.name}</span>
            </div>
          </div>
        ))}

        {/* Fade overlay for bottom cards */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#F5F5F7] to-transparent pointer-events-none"></div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 relative z-10">
        <button className="bg-[#111] text-white pl-6 pr-5 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
          See more reviews
          <ChevronRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default Testimonials;