import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { Sparkles, Code2, Cpu, ArrowUpRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';


export const HeaderSection: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-slate-950 text-white py-28 px-6 border-b border-slate-800/80">
      {/* Background Gradient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Profile Image Frame with Animated Border */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500 group-hover:scale-105" />
          <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900">
            <img 
              src={profileImg} 
              alt={personalDetails.name} 
              className="w-full h-full object-cover object-top filter saturate-[1.1] transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* Info & Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-mono tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Full Stack & Software Engineer
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              {personalDetails.name}
            </span>
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
  {personalDetails.aboutShort}
</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            <span className="px-4 py-2 bg-slate-900/80 text-slate-300 text-xs font-medium rounded-xl border border-slate-800 flex items-center gap-2 shadow-sm backdrop-blur-md">
              <Code2 size={15} className="text-indigo-400" /> Frontend Architecture
            </span>
            <span className="px-4 py-2 bg-slate-900/80 text-slate-300 text-xs font-medium rounded-xl border border-slate-800 flex items-center gap-2 shadow-sm backdrop-blur-md">
              <Cpu size={15} className="text-purple-400" /> RESTful APIs & DBs
            </span>
            <span className="px-4 py-2 bg-slate-900/80 text-slate-300 text-xs font-medium rounded-xl border border-slate-800 flex items-center gap-2 shadow-sm backdrop-blur-md">
              <Sparkles size={15} className="text-cyan-400" /> Modern UI/UX
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};