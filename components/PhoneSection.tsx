import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Search, 
  Inbox, 
  CheckSquare, 
  Layout, 
  FileText, 
  Plus, 
  ChevronDown, 
  Star,
  CheckCircle2,
  Home,
  Command,
  Zap,
  LayoutDashboard,
  Bot,
  Code2,
  Terminal
} from 'lucide-react';

const PhoneSection: React.FC = () => {
  // We use a specific trigger ref to track the component's position
  const triggerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.025]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="w-full mt-4 flex justify-center items-start relative perspective-[1000px] px-4 pb-12">
      <div ref={triggerRef} className="relative z-30 w-full max-w-[1100px]">
        <motion.div 
          style={{ scale, y, opacity }}
          className="w-full"
        >
          {/* Dashboard Window Container */}
          <div className="w-full aspect-[16/10] md:aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/60 flex flex-col text-sans relative">
              
              {/* Top Bar */}
              <div className="h-14 border-b border-gray-100 flex items-center justify-between px-4 bg-white z-20 relative">
                  {/* Left: Org Switcher */}
                  <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
                      <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          <Bot className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">TechFlow Systems</span>
                      <ChevronDown size={14} className="text-gray-400" />
                  </div>

                  {/* Center: Search */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-full max-w-md">
                      <div className="relative group">
                          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-500 transition-colors" />
                          <input 
                              type="text" 
                              placeholder="Search projects, agents, or docs" 
                              className="w-full bg-gray-50 border border-transparent hover:border-gray-200 focus:bg-white focus:border-gray-300 focus:ring-0 rounded-lg pl-10 pr-10 py-1.5 text-sm transition-all outline-none placeholder-gray-400"
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-gray-400">
                              <Command size={12} />
                              <span className="text-xs">K</span>
                          </div>
                      </div>
                  </div>

                  {/* Right: Profile/Actions */}
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-[2px]">
                           <img src="https://picsum.photos/100/100?random=10" alt="Profile" className="w-full h-full rounded-full border-2 border-white object-cover" />
                      </div>
                  </div>
              </div>

              {/* Main Body Area */}
              <div className="flex-1 flex overflow-hidden relative">
                  
                  {/* 1. Dark Left Rail */}
                  <div className="w-14 bg-[#0F0F12] flex flex-col items-center py-4 gap-6 flex-shrink-0 z-10">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group cursor-pointer">
                           <Home size={20} className="text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                          <Bot size={20} />
                      </div>
                      <div className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                           <Code2 size={20} />
                      </div>
                       <div className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                           <Terminal size={20} />
                      </div>
                  </div>

                  {/* 2. Secondary Sidebar */}
                  <div className="w-64 bg-[#FBFBFB] border-r border-gray-200 flex flex-col flex-shrink-0">
                      {/* Header */}
                      <div className="h-12 flex items-center justify-between px-4 mt-2">
                          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
                          <button className="p-1 hover:bg-gray-200 rounded text-gray-500">
                               <Plus size={18} />
                          </button>
                      </div>

                      {/* Navigation List */}
                      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
                          
                          {/* Top Section */}
                          <div className="space-y-0.5">
                              <SidebarItem icon={<Inbox size={18} />} label="Deployments" badge="2" active />
                              <SidebarItem icon={<Zap size={18} />} label="Active Agents" />
                              <SidebarItem icon={<CheckSquare size={18} />} label="Tickets" />
                          </div>

                          {/* Engineering Team */}
                          <div>
                              <div className="px-2 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wide">Engineering</div>
                              <div className="space-y-0.5">
                                  <SidebarItem icon={<Code2 size={18} />} label="Frontend Repo" />
                                  <SidebarItem icon={<Terminal size={18} />} label="API Gateway" />
                                  
                                  {/* People */}
                                  <div className="pt-2 pb-1 space-y-1">
                                      <PersonItem name="Lead Dev" badge="On Call" imgIndex={11} />
                                      <PersonItem name="DevOps Bot" badge="Running" imgIndex={12} isAgent />
                                      <PersonItem name="QA Lead" imgIndex={13} />
                                  </div>

                                  <SidebarItem icon={<FileText size={18} className="text-blue-500" />} label="System Architecture" />
                              </div>
                          </div>

                           {/* Spaces */}
                          <div>
                               <div className="px-2 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wide">Environments</div>
                               <div className="space-y-0.5">
                                  <SidebarItem icon={<div className="w-4 h-4 bg-green-400 rounded-sm" />} label="Production" />
                                  <SidebarItem icon={<div className="w-4 h-4 bg-yellow-400 rounded-sm" />} label="Staging" />
                               </div>
                          </div>
                      </div>
                  </div>

                  {/* 3. Main Content */}
                  <div className="flex-1 bg-white flex flex-col min-w-0">
                      
                      {/* Main Header */}
                      <div className="px-8 py-6 border-b border-gray-100">
                          <div className="flex items-center gap-2 mb-6">
                              <div className="bg-indigo-500 w-5 h-5 rounded flex items-center justify-center">
                                  <Code2 size={12} color="white" />
                              </div>
                              <h1 className="text-xl font-bold text-gray-900">Client Integration</h1>
                              <ChevronDown size={16} className="text-gray-400" />
                              <Star size={16} className="text-gray-300 ml-1 cursor-pointer hover:text-yellow-400 transition-colors" />
                          </div>

                          {/* Tabs */}
                          <div className="flex items-center gap-6 text-sm font-medium text-gray-500 border-b border-gray-100/50 pb-0">
                               <TabItem icon={<Code2 size={14} className="text-indigo-500" />} label="Code" />
                               <TabItem icon={<Bot size={14} className="text-green-500" />} label="Models" />
                               <TabItem icon={<CheckSquare size={14} className="text-pink-500" />} label="Tasks" active />
                               <TabItem icon={<Layout size={14} className="text-orange-500" />} label="Kanban" />
                               <TabItem icon={<LayoutDashboard size={14} className="text-blue-500" />} label="Analytics" />
                               <div className="flex-1"></div>
                               <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600">
                                   <Plus size={14} /> <span className="text-xs">Add</span>
                               </button>
                          </div>
                      </div>

                      {/* Content List */}
                      <div className="flex-1 bg-gray-50/30 p-8 overflow-y-auto">
                           {/* Controls */}
                           <div className="flex items-center gap-4 mb-6 text-gray-400">
                              <Layout size={18} className="cursor-pointer hover:text-gray-600" />
                              <div className="h-4 w-px bg-gray-300"></div>
                              <span className="text-xs font-medium uppercase tracking-wider">Task Name</span>
                           </div>

                           {/* Group: Done */}
                           <div className="mb-6">
                              <div className="flex items-center gap-2 mb-3">
                                  <div className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                      <CheckCircle2 size={10} fill="currentColor" className="text-white" /> COMPLETED
                                  </div>
                                  <span className="text-xs text-gray-400">3</span>
                              </div>
                              <TaskItem title="Initial Model Training" />
                              <TaskItem title="Database Schema Design" />
                           </div>

                           {/* Group: Active */}
                           <div className="mb-6">
                               <div className="flex items-center gap-2 mb-3 cursor-pointer">
                                  <ChevronDown size={14} className="text-gray-400" />
                                  <div className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                      <CheckCircle2 size={10} fill="currentColor" className="text-white" /> In Progress
                                  </div>
                                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                      <span>2</span>
                                  </div>
                              </div>

                              <div className="pl-6 space-y-1">
                                  <SubTaskItem title="Integrate Chatbot API" assigneeIndex={15} />
                                  <SubTaskItem title="Frontend Dashboard Refactor" assigneeIndex={16} />
                              </div>
                           </div>

                           {/* Group: Backlog */}
                           <div className="mb-6 opacity-50">
                               <div className="flex items-center gap-2 mb-3">
                                  <div className="bg-gray-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                      <CheckCircle2 size={10} fill="currentColor" className="text-white" /> Backlog
                                  </div>
                              </div>
                           </div>
                      </div>
                  </div>
              </div>

              {/* Absolute Overlay: Set up your Workspace */}
              <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute right-8 bottom-16 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 z-50"
              >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Build your Super Agent.</h3>
                  <p className="text-gray-500 mb-6 text-[15px]">Configure your custom automation solution.</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                      <Chip label="LLM Config" active />
                      <Chip label="Vector DB" />
                      <Chip label="Web Scraper" />
                      <Chip label="Auto-Reply" />
                      <Chip label="CI/CD" />
                      <Chip label="React Native" />
                      <Chip label="Python" />
                      <Chip label="API Keys" />
                      <Chip label="Analytics" />
                      <Chip label="Cloud Functions" />
                  </div>

                  <div className="flex items-center justify-between">
                      <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors shadow-lg shadow-gray-900/20">
                          Start Building
                      </button>
                      <span className="text-xs text-gray-400">Enterprise grade security.</span>
                  </div>

                  {/* Decoration: Checkmark on active chip */}
                  <div className="absolute top-[138px] left-[95px] bg-blue-500 rounded-full p-0.5 border-2 border-white">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                  </div>
              </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Sub-components ---

const SidebarItem = ({ icon, label, badge, active }: { icon: React.ReactNode, label: string, badge?: string, active?: boolean }) => (
    <div className={`flex items-center justify-between px-3 py-1.5 rounded-lg cursor-pointer transition-all group ${active ? 'bg-gray-200/60 text-gray-900 font-medium' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}>
        <div className="flex items-center gap-3">
            <span className={`${active ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>{icon}</span>
            <span className="text-sm">{label}</span>
        </div>
        {badge && (
            <span className={`text-xs font-medium px-1.5 py-0.5 rounded-md ${active ? 'bg-white shadow-sm text-gray-900' : 'bg-gray-200 text-gray-600 group-hover:bg-white group-hover:shadow-sm'}`}>
                {badge}
            </span>
        )}
    </div>
);

const PersonItem = ({ name, badge, imgIndex, isAgent }: { name: string, badge?: string, imgIndex: number, isAgent?: boolean }) => (
    <div className="flex items-center justify-between px-3 py-1.5 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors group">
        <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-md overflow-hidden ${isAgent ? 'bg-gradient-to-br from-pink-400 to-orange-400 p-[1px]' : ''}`}>
                <img src={`https://picsum.photos/100/100?random=${imgIndex}`} className="w-full h-full object-cover rounded-md" alt={name} />
            </div>
            <span className="text-sm font-medium group-hover:text-black">{name}</span>
        </div>
        {badge && (
            <span className="bg-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {badge}
            </span>
        )}
    </div>
);

const TabItem = ({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) => (
    <div className={`flex items-center gap-2 pb-3 border-b-2 cursor-pointer transition-colors ${active ? 'border-indigo-500 text-gray-900' : 'border-transparent hover:text-gray-700'}`}>
        {icon}
        <span>{label}</span>
    </div>
);

const TaskItem = ({ title }: { title: string }) => (
    <div className="flex items-center justify-between py-2 px-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center gap-3">
             <div className="w-4 h-4 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
             </div>
             <span className="text-sm text-gray-800 font-medium line-through decoration-gray-300 text-gray-400">{title}</span>
        </div>
        <img src="https://picsum.photos/100/100?random=20" className="w-5 h-5 rounded-full object-cover" alt="Assignee" />
    </div>
);

const SubTaskItem = ({ title, assigneeIndex }: { title: string, assigneeIndex: number }) => (
    <div className="flex items-center justify-between py-2 px-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
        <div className="flex items-center gap-3">
             <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-gray-400 border-dashed"></div>
             <span className="text-sm text-gray-700">{title}</span>
        </div>
        <img src={`https://picsum.photos/100/100?random=${assigneeIndex}`} className="w-5 h-5 rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="Assignee" />
    </div>
);

const Chip = ({ label, active }: { label: string, active?: boolean }) => (
    <div className={`px-3 py-1.5 rounded-full border text-sm font-medium cursor-pointer transition-all ${
        active 
        ? 'border-blue-500 text-blue-600 bg-blue-50' 
        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 border-dashed'
    }`}>
        {label}
    </div>
);

export default PhoneSection;