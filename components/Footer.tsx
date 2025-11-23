import React from 'react';
import { Twitter, Linkedin, Github, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://framerusercontent.com/images/mzMKLKsYnRpGNC2hdtBEBC5cVMs.png?scale-down-to=1024&width=1920&height=1172" 
          alt="Footer Background" 
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure text contrast if image is too bright in spots */}
        <div className="absolute inset-0 bg-black/10"></div> 
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-20 md:py-28 font-sans">
        
        {/* Top Call to Action (Optional visual separator/header for footer) */}
        <div className="mb-20 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to automate your workflow?</h2>
            <button className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Get Started Now
            </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="5" r="2.5" fill="white"/>
                <circle cx="5" cy="12" r="2.5" fill="white"/>
                <circle cx="19" cy="12" r="2.5" fill="white"/>
                <circle cx="12" cy="19" r="2.5" fill="white"/>
                <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xl font-serif font-medium tracking-tight">iotaAI</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 pr-4">
              Empowering modern businesses with intelligent automation and custom AI workforce solutions.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">AI Agents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Security</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>

           {/* Links Column 3 / Newsletter */}
           <div>
             <h4 className="font-semibold mb-6 text-white">Updates</h4>
             <p className="text-sm text-white/70 mb-4">Latest AI trends delivered to you.</p>
             <div className="flex flex-col gap-3">
               <input 
                 type="email" 
                 placeholder="Enter email address" 
                 className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all w-full"
               />
               <button className="bg-white/10 text-white border border-white/10 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-all">
                 Subscribe
               </button>
             </div>
           </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2025 iotaAI Technologies Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all duration-300">
    {icon}
  </a>
);

export default Footer;