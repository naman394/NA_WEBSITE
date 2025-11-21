import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do your AI agents work?",
      answer: "Our agents are built on top of advanced LLMs (like GPT-4 and Claude) but customized with your business data. They can perform actions, query databases, and interact with your customers 24/7, acting as a tireless extension of your workforce."
    },
    {
      question: "Do you build custom web and mobile apps?",
      answer: "Yes! We are a full-service shop. We build high-performance React web apps and React Native mobile apps that seamlessly integrate with our AI backends. Whether you need a dashboard or a consumer-facing app, we handle the entire stack."
    },
    {
      question: "Is my business data secure?",
      answer: "Absolutely. We deploy models within secure, isolated environments. Your proprietary data is never used to train public models. We adhere to SOC2 compliance standards and use enterprise-grade encryption for all data in transit and at rest."
    },
    {
      question: "How much does a custom automation solution cost?",
      answer: "Costs vary based on complexity. Simple chatbot integrations start at a lower tier, while fully autonomous multi-agent systems with custom app interfaces are priced as custom development projects. Contact us for a tailored proposal."
    },
    {
      question: "Can you integrate with our existing software?",
      answer: "Yes, integration is our specialty. We connect with CRMs (Salesforce, HubSpot), Project Management tools (Jira, Asana), and communication platforms (Slack, Teams) to ensure our agents work where you work."
    }
  ];

  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 md:px-4 py-24 md:py-32 relative z-20">
       {/* Subtle top separator */}
       <div className="w-full h-px bg-gray-200/60 mb-20" />
       
       <div className="flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-24 items-start">
        {/* Left Column */}
        <div className="lg:w-[380px] flex-shrink-0">
          <h2 className="text-[38px] md:text-[40px] leading-[1.1] font-serif text-[#111] mb-6 font-medium tracking-tight">
            Questions about automation?
          </h2>
          <p className="text-[17px] text-gray-600 font-sans leading-[1.6] mb-8 max-w-[320px]">
            Ready to scale your operations? Shoot us a message and our engineering team will help you map out a solution.
          </p>
          <button className="bg-[#111] text-white px-7 py-3.5 rounded-full text-[15px] font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
            Book a Consultation
          </button>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full">
            {faqs.map((item, i) => (
                <div key={i} className="border-b border-gray-200">
                    <button 
                        onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                    >
                        <span className="text-[18px] md:text-[19px] text-[#111] font-sans tracking-tight group-hover:text-gray-600 transition-colors">
                            {item.question}
                        </span>
                        <motion.div 
                            animate={{ rotate: activeIndex === i ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="flex-shrink-0 ml-4"
                        >
                            <ChevronDown className="text-[#111] w-5 h-5" strokeWidth={1.5} />
                        </motion.div>
                    </button>
                    <AnimatePresence>
                        {activeIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden"
                            >
                                <div className="pb-6 text-[16px] text-gray-600 font-sans leading-relaxed pr-8 max-w-2xl">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
       </div>
    </div>
  );
};

export default FAQ;